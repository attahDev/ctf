const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";
const TOKEN_KEY = "gtcc_admin_token";

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

/**
 * Fetch wrapper for /admin/* endpoints. Attaches the stored JWT, and on a
 * 401 clears it and bounces to the login page — covers both "never logged
 * in" and "token expired mid-session".
 */
export async function adminFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
  });

  if (res.status === 401) {
    clearToken();
    if (typeof window !== "undefined") {
      // This is a plain module, not a component, so useRouter() isn't
      // available; a hard redirect is the correct way to bounce out here.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.href = "/admin/login";
    }
    throw new Error("Session expired — please log in again.");
  }

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    const detail = body?.detail;
    throw new Error(typeof detail === "string" ? detail : `Request failed (${res.status})`);
  }

  if (res.status === 204) {
    return undefined as T;
  }

  return (await res.json()) as T;
}

/**
 * Uploads an image file to /admin/uploads (Supabase Storage under the hood)
 * and returns the public URL. Deliberately doesn't reuse adminFetch since
 * multipart requests must NOT set Content-Type manually — the browser sets
 * the boundary itself.
 */
export async function adminUpload(file: File): Promise<string> {
  const token = getToken();
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/admin/uploads`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: formData,
  });

  if (res.status === 401) {
    clearToken();
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.href = "/admin/login";
    }
    throw new Error("Session expired — please log in again.");
  }

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    const detail = body?.detail;
    throw new Error(typeof detail === "string" ? detail : `Upload failed (${res.status})`);
  }

  const data = (await res.json()) as { url: string };
  return data.url;
}

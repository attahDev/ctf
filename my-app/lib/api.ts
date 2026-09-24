const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

/**
 * GET wrapper for public content endpoints (events, testimonies, partners).
 * Falls back to the given value on any failure so a slow/unreachable backend
 * degrades to the old static content instead of breaking the page.
 */
export async function apiGet<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${path}`, { next: { revalidate: 60 } });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

/**
 * POST wrapper for the public form endpoints (contact, prayer requests,
 * newsletter, volunteer, bible class, tribe join).
 */
export async function apiPost<T>(path: string, body: unknown): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => null);
      const detail = err?.detail;
      return {
        ok: false,
        error: typeof detail === "string" ? detail : "Something went wrong. Please try again.",
      };
    }

    return { ok: true, data: (await res.json()) as T };
  } catch {
    return { ok: false, error: "Network error — please check your connection and try again." };
  }
}

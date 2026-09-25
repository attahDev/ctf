"use client";

import { useEffect, useState, type FormEvent } from "react";
import { apiPost } from "@/lib/api";
import { worshipContent } from "@/lib/data/worship";

const { prayerWall } = worshipContent;

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

type Status = "idle" | "submitting" | "success" | "error";

type WallEntry = {
  name: string;
  request_text: string;
  created_at: string;
};

export function GlobalPrayerWall() {
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [wallEntries, setWallEntries] = useState<WallEntry[] | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/prayer-wall`)
      .then((res) => res.json())
      .then((data: WallEntry[]) => setWallEntries(data))
      .catch(() => setWallEntries([]));
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const result = await apiPost("/prayer-requests", {
      name: name || "Anonymous",
      request_text: request,
    });

    if (result.ok) {
      setStatus("success");
      setName("");
      setRequest("");
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            {prayerWall.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {prayerWall.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {prayerWall.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-2xl border border-[#e8ecf2] bg-[#f7f9fc] p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-navy">
              Submit Prayer Request
            </h3>

            {status === "success" ? (
              <p className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                Your request has been received. Our team is praying with you.
              </p>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="prayer-name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="prayer-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-[#dde3ee] bg-white px-4 py-3 text-sm text-navy outline-none placeholder:text-muted/70 focus:border-blue"
                  />
                </div>
                <div>
                  <label htmlFor="prayer-request" className="sr-only">
                    Your Request
                  </label>
                  <textarea
                    id="prayer-request"
                    value={request}
                    onChange={(event) => setRequest(event.target.value)}
                    placeholder="Your Request"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-[#dde3ee] bg-white px-4 py-3 text-sm text-navy outline-none placeholder:text-muted/70 focus:border-blue"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-medium text-red-600">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-xl bg-blue px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting..." : "Post to Prayer Wall"}
                </button>
              </form>
            )}
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-navy">
              Recent community requests
            </h3>
            <ul className="mt-6 space-y-4">
              {(wallEntries && wallEntries.length > 0
                ? wallEntries.map((item) => ({
                    key: `${item.name}-${item.created_at}`,
                    text: item.request_text,
                    name: item.name || "Anonymous",
                    meta: new Date(item.created_at).toLocaleDateString(),
                  }))
                : prayerWall.requests.map((item) => ({
                    key: `${item.name}-${item.time}`,
                    text: item.text,
                    name: item.name,
                    meta: `${item.location} · ${item.time}`,
                  }))
              ).map((item) => (
                <li
                  key={item.key}
                  className="rounded-2xl border border-[#e8ecf2] bg-white p-5"
                >
                  <p className="text-sm leading-relaxed text-navy/90">
                    &ldquo;{item.text}&rdquo;
                  </p>
                  <p className="mt-4 text-xs text-muted">
                    {item.name} · {item.meta}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

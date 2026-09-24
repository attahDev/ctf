"use client";

import { useState, type FormEvent } from "react";
import { apiPost } from "@/lib/api";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-lg border border-border bg-[#f4f6fa] px-4 py-3 text-sm text-navy outline-none placeholder:text-muted/60 focus:border-blue";

const TRIBE_OPTIONS = [
  "Tribe Mentorship Men",
  "Grace & Peace Women",
  "Next-Gen Youth (Kids & Teens)",
  "Worship Without Walls Fellowship",
  "Tribe Young Professionals",
  "Family Discipleship Circles",
];

export const TribeJoinForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = new FormData(event.currentTarget);
    const result = await apiPost("/tribe-join", {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone") || "",
      tribe_preference: form.get("tribe_preference") || "",
      message: form.get("message") || "",
    });

    if (result.ok) {
      setStatus("success");
      event.currentTarget.reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  return (
    <section id="tribe-join" className="bg-[#f7f9fc] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            Community Life
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Join a Tribe
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Tell us which group fits you best and a tribe leader will connect with you.
          </p>
        </div>

        <article className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:p-8">
          {status === "success" ? (
            <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              Request received — a tribe leader will reach out soon.
            </p>
          ) : (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-sm font-semibold text-navy">Full Name</span>
                <input name="name" type="text" required placeholder="Your name" className={inputClass} />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-navy">Email</span>
                <input name="email" type="email" required placeholder="you@example.com" className={inputClass} />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-navy">Phone (optional)</span>
                <input name="phone" type="tel" placeholder="Phone number" className={inputClass} />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-navy">Tribe Preference</span>
                <select name="tribe_preference" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select a tribe
                  </option>
                  {TRIBE_OPTIONS.map((tribe) => (
                    <option key={tribe} value={tribe}>
                      {tribe}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-navy">Message (optional)</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Anything you'd like your tribe leader to know"
                  className={`${inputClass} resize-y`}
                />
              </label>

              {status === "error" && (
                <p className="text-sm font-medium text-red-600 sm:col-span-2">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-purple px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 sm:w-fit"
              >
                {status === "submitting" ? "Submitting..." : "Request to Join"}
              </button>
            </form>
          )}
        </article>
      </div>
    </section>
  );
};

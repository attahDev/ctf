"use client";

import { useState, type FormEvent } from "react";
import { apiPost } from "@/lib/api";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-lg border border-border bg-[#f4f6fa] px-4 py-3 text-sm text-navy outline-none placeholder:text-muted/60 focus:border-blue";

export const BibleClassForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = new FormData(event.currentTarget);
    const result = await apiPost("/bible-class", {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone") || "",
      preferred_schedule: form.get("preferred_schedule") || "",
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
    <section id="bible-class" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            Deep Rooted Discipleship
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Register for Foundation Bible Class
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Next cohort starts September 12 — reserve your seat below.
          </p>
        </div>

        <article className="rounded-2xl border border-[#e8ecf2] bg-[#f7f9fc] p-6 sm:p-8">
          {status === "success" ? (
            <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              You&apos;re registered — we&apos;ll email you the class details shortly.
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
                <span className="text-sm font-semibold text-navy">Preferred Schedule</span>
                <select name="preferred_schedule" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select a schedule
                  </option>
                  <option value="In-person, Sundays">In-person, Sundays</option>
                  <option value="In-person, Weeknights">In-person, Weeknights</option>
                  <option value="Online, Live">Online, Live</option>
                  <option value="Online, Self-paced">Online, Self-paced</option>
                </select>
              </label>

              {status === "error" && (
                <p className="text-sm font-medium text-red-600 sm:col-span-2">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-blue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 sm:w-fit"
              >
                {status === "submitting" ? "Registering..." : "Register for Class"}
              </button>
            </form>
          )}
        </article>
      </div>
    </section>
  );
};

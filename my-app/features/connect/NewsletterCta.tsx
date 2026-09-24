"use client";

import { useState, type FormEvent } from "react";
import { apiPost } from "@/lib/api";
import { connectContent } from "@/lib/data/connect";

const { newsletter } = connectContent;

type Status = "idle" | "submitting" | "success" | "error";

export const NewsletterCta = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = new FormData(event.currentTarget);
    const result = await apiPost("/newsletter", { email: form.get("email") });

    if (result.ok) {
      setStatus("success");
      event.currentTarget.reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  return (
    <section className="bg-blue py-16 sm:py-20" aria-label={newsletter.title}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {newsletter.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {newsletter.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
            {newsletter.description}
          </p>
        </div>

        {status === "success" ? (
          <p className="rounded-lg bg-white/10 px-4 py-3.5 text-sm font-medium text-white">
            You&apos;re subscribed — thanks for staying connected with us.
          </p>
        ) : (
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder={newsletter.form.placeholder}
                className="w-full rounded-lg border-0 bg-white px-4 py-3.5 text-sm text-navy outline-none placeholder:text-muted/60 focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="shrink-0 rounded-lg bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#e0951a] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting..." : newsletter.form.submitLabel}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-2 text-sm font-medium text-white">{errorMessage}</p>
            )}
            <p className="mt-3 text-center text-xs leading-relaxed text-white/75 sm:text-left">
              {newsletter.privacy}
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

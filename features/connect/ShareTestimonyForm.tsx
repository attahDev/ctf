"use client";

import { useState, type FormEvent } from "react";
import { apiPost } from "@/lib/api";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-lg border border-border bg-[#f4f6fa] px-4 py-3 text-sm text-navy outline-none placeholder:text-muted/60 focus:border-blue";

export const ShareTestimonyForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = new FormData(event.currentTarget);
    const result = await apiPost("/testimonies", {
      name: form.get("name"),
      role: form.get("role") || "",
      quote: form.get("quote"),
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
    <section id="share-testimony" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            Stories of Faith
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Share Your Testimony
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Has God done something in your life? We&apos;d love to hear it — submitted
            testimonies are reviewed before appearing on the site.
          </p>
        </div>

        <article className="rounded-2xl border border-[#e8ecf2] bg-[#f7f9fc] p-6 sm:p-8">
          {status === "success" ? (
            <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              Thank you for sharing — our team will review it soon.
            </p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-sm font-semibold text-navy">Your Name</span>
                <input name="name" type="text" required placeholder="Your name" className={inputClass} />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-navy">Role (optional)</span>
                <input
                  name="role"
                  type="text"
                  placeholder="e.g. Member since 2021"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-navy">Your Testimony</span>
                <textarea
                  name="quote"
                  required
                  rows={5}
                  placeholder="Share what God has done..."
                  className={`${inputClass} resize-y`}
                />
              </label>

              {status === "error" && (
                <p className="text-sm font-medium text-red-600">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-lg bg-blue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
              >
                {status === "submitting" ? "Submitting..." : "Share Testimony"}
              </button>
            </form>
          )}
        </article>
      </div>
    </section>
  );
};

"use client";

import { useState, type FormEvent } from "react";
import { apiPost } from "@/lib/api";
import { connectContent } from "@/lib/data/connect";

const { desktop, mobile } = connectContent.contact;

const fieldKeys = ["fullName", "email", "phone", "message"] as const;

const inputClass =
  "mt-2 w-full rounded-lg border border-border bg-[#f4f6fa] px-4 py-3 text-sm text-navy outline-none placeholder:text-muted/60 focus:border-blue";

type Status = "idle" | "submitting" | "success" | "error";

export const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = new FormData(event.currentTarget);
    const result = await apiPost("/contact", {
      full_name: form.get("fullName"),
      email: form.get("email"),
      phone: form.get("phone") || "",
      message: form.get("message"),
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
    <article
      id="message"
      className="flex h-full flex-col rounded-2xl bg-white p-4 shadow-[0_10px_40px_rgba(15,23,42,0.08)] sm:p-8"
    >
      <h2 className="font-display text-2xl font-bold text-navy sm:text-[1.75rem]">
        <span className="sm:hidden">{mobile.title}</span>
        <span className="hidden sm:inline">{desktop.title}</span>
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        <span className="sm:hidden">{mobile.description}</span>
        <span className="hidden sm:inline">{desktop.description}</span>
      </p>

      {status === "success" ? (
        <p className="mt-6 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          Thanks — your message has been sent. We&apos;ll get back to you soon.
        </p>
      ) : (
        <form className="mt-6 flex flex-1 flex-col gap-4" onSubmit={handleSubmit}>
          {fieldKeys.map((key) => {
            const desktopField = desktop.fields[key];
            const mobileField = mobile.fields[key];
            const isMessage = key === "message";
            const isRequired = key !== "phone";

            return (
              <label key={key} className={`block ${isMessage ? "flex-1" : ""}`}>
                <span className="text-xs font-semibold text-navy sm:hidden">
                  {mobileField.label}
                </span>
                <span className="hidden text-sm font-semibold text-navy sm:inline">
                  {desktopField.label}
                </span>
                {isMessage ? (
                  <textarea
                    name={key}
                    required={isRequired}
                    rows={5}
                    placeholder={desktopField.placeholder}
                    className={`${inputClass} min-h-32 resize-y sm:min-h-40`}
                  />
                ) : (
                  <input
                    name={key}
                    type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                    required={isRequired}
                    placeholder={desktopField.placeholder}
                    className={inputClass}
                  />
                )}
              </label>
            );
          })}

          {status === "error" && (
            <p className="text-sm font-medium text-red-600">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-blue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
          >
            {status === "submitting" ? "Sending..." : desktop.submitLabel}
          </button>
        </form>
      )}
    </article>
  );
};

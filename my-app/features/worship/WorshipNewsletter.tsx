"use client";

import { useState } from "react";
import { worshipContent } from "@/lib/data/worship";

const { newsletter } = worshipContent;

export function WorshipNewsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-blue py-14 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {newsletter.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/85">
            {newsletter.description}
          </p>
        </div>
        <form
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            setEmail("");
          }}
        >
          <label htmlFor="worship-email" className="sr-only">
            Email address
          </label>
          <input
            id="worship-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/60 focus:border-white"
          />
          <button
            type="submit"
            className="shrink-0 rounded-xl bg-gold px-5 py-3.5 text-sm font-semibold text-navy transition hover:bg-[#e0951a]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

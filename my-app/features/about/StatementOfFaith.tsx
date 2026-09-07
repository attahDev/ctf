"use client";

import { useState } from "react";
import { aboutContent } from "@/lib/data/about";

const { faith } = aboutContent;

export function StatementOfFaith() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sky">
            {faith.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {faith.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            {faith.description}
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-3">
          {faith.items.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-xl border border-white/15 bg-[#121a33]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="font-display text-base font-bold text-white sm:text-lg">
                    {item.title}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg text-white">
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open ? (
                  <div className="border-t border-white/10 px-5 pb-5 pt-3 sm:px-6">
                    <p className="text-sm leading-relaxed text-white/75">
                      {item.body}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

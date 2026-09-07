"use client";

import { useState } from "react";
import { aboutContent } from "@/lib/data/about";

const { faq } = aboutContent;

export function CommonQuestions() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f7f9fc] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            {faq.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {faq.description}
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-3">
          {faq.items.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-[#e4e9f1] bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="font-display text-base font-bold text-navy">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-blue transition ${open ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M7.4 9.5 12 14.1l4.6-4.6L18 11l-6 6-6-6z" />
                    </svg>
                  </span>
                </button>
                {open ? (
                  <div className="border-t border-[#eef1f6] px-5 pb-5 pt-3 sm:px-6">
                    <p className="text-sm leading-relaxed text-muted">
                      {item.answer}
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

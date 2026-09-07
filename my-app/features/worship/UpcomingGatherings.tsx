import Link from "next/link";
import { worshipContent } from "@/lib/data/worship";

const { gatherings } = worshipContent;

const badgeStyles = {
  live: "bg-blue text-white",
  upcoming: "bg-[#e8ecf2] text-muted",
};

export function UpcomingGatherings() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            {gatherings.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {gatherings.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {gatherings.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {gatherings.items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-[#e8ecf2] bg-white p-6 sm:p-7"
            >
              <span
                className={`inline-flex w-fit rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${badgeStyles[item.badgeTone]}`}
              >
                {item.badge}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <div className="mt-5 flex items-end justify-between gap-3">
                <p className="text-xs text-muted">{item.meta}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue hover:underline"
                >
                  Details
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

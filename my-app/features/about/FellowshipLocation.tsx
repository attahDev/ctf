import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/lib/data/about";

const { fellowship } = aboutContent;

const labelColors = {
  blue: "text-blue",
  purple: "text-purple",
};

export function FellowshipLocation() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#e8ecf2] bg-[#f8f9fa] p-7 sm:p-8">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f0ff] text-blue">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="8.25" />
                  <path strokeLinecap="round" d="M12 8v4.2l2.6 1.6" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-navy">
                  {fellowship.times.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {fellowship.times.description}
                </p>
              </div>
            </div>

            <div className="my-6 h-px bg-[#e4e8ef]" />

            <ul className="space-y-6">
              {fellowship.times.items.map((item) => (
                <li key={item.label}>
                  <p
                    className={`text-[11px] font-bold uppercase tracking-[0.14em] ${labelColors[item.labelColor]}`}
                  >
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-base font-bold text-navy">
                    {item.time}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[#e8ecf2] bg-[#f8f9fa] p-7 sm:p-8">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1ecff] text-purple">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"
                  />
                  <circle cx="12" cy="11" r="1.8" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-navy">
                  {fellowship.location.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {fellowship.location.description}
                </p>
              </div>
            </div>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={fellowship.location.mapImage}
                alt="Map of GTCC Grace House location"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/15">
                <Link
                  href={fellowship.location.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-navy px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-white"
                >
                  {fellowship.location.hubLabel}
                </Link>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy">
                {fellowship.location.placeName}
              </p>
              <p className="mt-1 text-sm text-muted">
                {fellowship.location.address}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

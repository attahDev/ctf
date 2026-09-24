import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { connectContent } from "@/lib/data/connect";

const { desktop } = connectContent.communityLife;

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0 text-muted"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M8 3v4M16 3v4M4 10h16" />
  </svg>
);

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0 text-muted"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s5-4.8 5-9a5 5 0 1 0-10 0c0 4.2 5 9 5 9z"
    />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

const PersonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0 text-muted"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <circle cx="12" cy="8" r="3" />
    <path strokeLinecap="round" d="M5 19c.6-3 3.2-5 7-5s6.4 2 7 5" />
  </svg>
);

export const TribeGroups = () => (
  <section className="bg-white py-20 sm:py-28" aria-label={desktop.title}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={desktop.eyebrow}
        title={desktop.title}
        description={desktop.description}
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {desktop.groups.map((group) => (
          <article
            key={group.title}
            className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] sm:p-6"
          >
            <span className="w-fit rounded-md bg-blue px-2.5 py-1 text-[10px] font-bold tracking-wider text-white">
              {desktop.badge}
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">
              {group.title}
            </h3>
            <ul className="mt-4 flex-1 space-y-2.5 text-sm text-muted">
              <li className="flex items-start gap-2">
                <CalendarIcon />
                {group.schedule}
              </li>
              <li className="flex items-start gap-2">
                <PinIcon />
                {group.location}
              </li>
              <li className="flex items-start gap-2">
                <PersonIcon />
                {group.lead}
              </li>
            </ul>
            <Link
              href={desktop.ctaHref}
              className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-blue"
            >
              {desktop.cta}
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

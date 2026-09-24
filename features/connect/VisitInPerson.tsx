import { SectionHeader } from "@/components/ui/SectionHeader";
import { VisitMap } from "@/features/connect/VisitMap";
import { connectContent } from "@/lib/data/connect";
import { RiInformationLine } from "react-icons/ri";

const { visit } = connectContent;
const { desktop, mobile } = visit;

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 text-blue"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <circle cx="12" cy="12" r="8.25" />
    <path strokeLinecap="round" d="M12 8v4.2l2.6 1.6" />
  </svg>
);

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 text-purple"
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
);

const HouseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-blue" aria-hidden>
    <path d="M12 4.5 4 11h2v8h5v-5h2v5h5v-8h2L12 4.5z" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-purple" aria-hidden>
    <path d="M6 5.5A2.5 2.5 0 0 1 8.5 3H18v16H8.5A2.5 2.5 0 0 0 6 21.5V5.5zm2.5-.5A.5.5 0 0 0 8 5.5v13a1 1 0 0 1 1-1h8V5H8.5z" />
  </svg>
);

const cardClass = "rounded-2xl border border-border bg-white p-4 sm:p-5";

export const VisitInPerson = () => (
  <section className="bg-[#f7f9fc] py-20 sm:py-28" aria-label="Service times and location">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="sm:hidden">
        <SectionHeader eyebrow={mobile.eyebrow} title={mobile.title} />
      </div>
      <div className="hidden sm:block">
        <SectionHeader
          eyebrow={desktop.eyebrow}
          title={desktop.title}
          description={desktop.description}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="space-y-4 sm:hidden">
            {mobile.services.map((service, index) => (
              <article key={service.title} className={cardClass}>
                <div className="flex items-center gap-2.5">
                  {index === 0 ? <HouseIcon /> : <BookIcon />}
                  <h3 className="font-display text-lg font-bold text-navy">
                    {service.title}
                  </h3>
                </div>
                <p
                  className={`mt-2 text-sm font-bold ${
                    index === 0 ? "text-blue" : "text-purple"
                  }`}
                >
                  {service.time}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            ))}
            <article className={`${cardClass} sm:hidden`}>
              <h3 className="font-display text-lg font-bold text-navy">
                {mobile.location.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {mobile.location.address}
              </p>
              <div className="mt-3 min-w-0">
                <VisitMap
                  href={mobile.location.mapsHref}
                  cta={mobile.location.mapCta}
                  embedSrc={mobile.location.mapsEmbedSrc}
                  embedTitle={mobile.location.title}
                  centeredCta
                />
              </div>
              <p className="mt-3 flex items-start gap-2 text-xs leading-snug text-muted">
                <RiInformationLine className="h-4 w-5 text-gold" />
                {mobile.location.parking}
              </p>
            </article>
          </div>

          <article className={`${cardClass} hidden sm:block`}>
            <div className="mb-5 flex items-center gap-2.5">
              <ClockIcon />
              <h3 className="font-display text-lg font-bold text-navy">
                {desktop.serviceTimes.title}
              </h3>
            </div>
            <ul className="divide-y divide-border">
              {desktop.serviceTimes.services.map((service) => (
                <li
                  key={service.name}
                  className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <span className="text-sm text-navy sm:text-base">
                    {service.name}
                  </span>
                  <span className="shrink-0 text-sm font-bold text-blue">
                    {service.time}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className={`${cardClass} hidden sm:block`}>
            <div className="mb-4 flex items-center gap-2.5">
              <PinIcon />
              <h3 className="font-display text-lg font-bold text-navy">
                {desktop.location.title}
              </h3>
            </div>
            <p className="font-display text-base font-bold text-navy">
              {desktop.location.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {desktop.location.address}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted italic">
              {desktop.location.parking}
            </p>
          </article>
        </div>

        <div className="hidden min-w-0 sm:block lg:h-full">
          <VisitMap
            href={desktop.location.mapsHref}
            cta={desktop.location.directionsCta}
            imageSrc={desktop.location.mapImageSrc}
            imageAlt={desktop.location.mapImageAlt}
          />
        </div>
      </div>
    </div>
  </section>
);

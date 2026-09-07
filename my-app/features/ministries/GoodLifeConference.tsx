import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ministriesContent } from "@/lib/data/ministries";
import { PiCaretRightBold } from "react-icons/pi";

const { conference } = ministriesContent;
const { featuredEvent } = conference;

const TicketIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M4 7h16a1 1 0 0 1 1 1v3a2 2 0 0 0 0 4v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a2 2 0 0 0 0-4V8a1 1 0 0 1 1-1zm3 2v8h2V9H7zm8 0v8h2V9h-2z" />
  </svg>
);

export const GoodLifeConference = () => (
  <section className="bg-white py-20 sm:py-28" aria-label={conference.title}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={conference.eyebrow}
        title={conference.title}
        description={conference.description}
      />
      <div className="grid items-center gap-8 rounded-3xl bg-navy p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
        <div>
          <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold uppercase tracking-[0.16em]">
            <span className="text-gold">{featuredEvent.date}</span>
            <span className="text-sky">{featuredEvent.location}</span>
          </p>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {featuredEvent.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
            {featuredEvent.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={featuredEvent.actions.primaryHref}
              variant="blue"
              className="uppercase"
            >
              <TicketIcon />
              {featuredEvent.actions.primary}
            </Button>
            <Button
              href={featuredEvent.actions.secondaryHref}
              variant="outline"
              className="uppercase"
            >
              <PiCaretRightBold />
              {featuredEvent.actions.secondary}
            </Button>
          </div>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl lg:order-last">
          <Image
            src={conference.imageSrc}
            alt={conference.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  </section>
);

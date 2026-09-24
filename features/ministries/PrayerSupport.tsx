import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { churchInfo } from "@/lib/data/home";
import { ministriesContent } from "@/lib/data/ministries";

const { prayer } = ministriesContent;

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z" />
  </svg>
);

export const PrayerSupport = () => (
  <section className="bg-white py-16 sm:py-24" aria-label={prayer.title}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-10 sm:py-20">
        <Image
          src={prayer.imageSrc}
          alt={prayer.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/75" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            {prayer.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {prayer.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            {prayer.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={prayer.actions.primaryHref} variant="gold" className="uppercase">
              <HeartIcon />
              {prayer.actions.primary}
            </Button>
            <Button
              href={`tel:${churchInfo.phone}`}
              variant="outline"
              className="uppercase"
            >
              <PhoneIcon />
              {prayer.actions.secondary}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

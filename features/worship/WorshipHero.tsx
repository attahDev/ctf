import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WorshipCountdown } from "@/features/worship/WorshipCountdown";
import { worshipContent } from "@/lib/data/worship";

const { hero } = worshipContent;

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 6.5v11l9-5.5z" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M9 18.5a2.5 2.5 0 1 0 .4-1.4l7.1-2.4V5.2l-7.5 2.5v8.4A2.5 2.5 0 0 0 9 18.5z" />
    </svg>
  );
}

export function WorshipHero() {
  return (
    <section
      className="relative flex min-h-[85vh] items-center overflow-hidden"
      aria-labelledby="worship-hero-heading"
    >
      <Image
        src={hero.imageSrc}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-navy/85 via-navy/70 to-navy/45"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-36 pt-20 sm:px-6 lg:px-8">
        <Eyebrow className="text-sky">{hero.eyebrow}</Eyebrow>
        <h1
          id="worship-hero-heading"
          className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {hero.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          {hero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={hero.primaryCta.href}
            variant="gold"
            className="uppercase tracking-wide"
          >
            <PlayIcon />
            {hero.primaryCta.label}
          </Button>
          <Button
            href={hero.secondaryCta.href}
            variant="white"
            className="border border-navy/10 uppercase tracking-wide"
          >
            <MusicIcon />
            {hero.secondaryCta.label}
          </Button>
        </div>
      </div>
      <WorshipCountdown label={hero.countdownLabel} />
    </section>
  );
}

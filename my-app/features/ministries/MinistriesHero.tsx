import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ministriesContent } from "@/lib/data/ministries";

const { hero } = ministriesContent;

export const MinistriesHero = () => (
  <section
    className="relative min-h-88 overflow-hidden sm:min-h-112 lg:min-h-128"
    aria-labelledby="ministries-hero-heading"
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
      className="absolute inset-0 bg-linear-to-r from-navy/80 via-navy/60 to-navy/45"
      aria-hidden
    />
    <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
      <Eyebrow className="text-sky">{hero.eyebrow}</Eyebrow>
      <h1
        id="ministries-hero-heading"
        className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        {hero.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
        {hero.description}
      </p>
    </div>
  </section>
);

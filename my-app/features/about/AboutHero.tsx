import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { aboutContent } from "@/lib/data/about";

const { hero } = aboutContent;

export function AboutHero() {
  return (
    <section
      className="relative flex min-h-[70vh] items-start overflow-hidden sm:min-h-[75vh]"
      aria-labelledby="about-hero-heading"
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
        className="absolute inset-0 bg-linear-to-r from-navy/80 via-navy/65 to-navy/40"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <Eyebrow className="text-sky">{hero.eyebrow}</Eyebrow>
        <h1
          id="about-hero-heading"
          className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {hero.title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          {hero.description}
        </p>
      </div>
    </section>
  );
}

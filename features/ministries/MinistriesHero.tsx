import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { ministriesContent } from "@/lib/data/ministries";

const { hero } = ministriesContent;

export const MinistriesHero = () => (
  <PageHero
    imageSrc={hero.imageSrc}
    imageAlt={hero.imageAlt}
    headingId="ministries-hero-heading"
  >
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
  </PageHero>
);

import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { connectContent } from "@/lib/data/connect";
import { ministriesContent } from "@/lib/data/ministries";

const { hero } = connectContent;
const { desktop, mobile } = hero;

export const ConnectHero = () => (
  <PageHero
    imageSrc={ministriesContent.hero.imageSrc}
    imageAlt={ministriesContent.hero.imageAlt}
    headingId="connect-hero-heading"
  >
    <div className="sm:hidden">
      <Eyebrow className="text-sky">{mobile.eyebrow}</Eyebrow>
    </div>
    <div className="hidden sm:block">
      <Eyebrow className="text-sky">{desktop.eyebrow}</Eyebrow>
    </div>
    <h1
      id="connect-hero-heading"
      className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
    >
      {desktop.title}
    </h1>
    <p className="mt-4 max-w-xl text-base leading-relaxed text-white sm:hidden sm:text-lg">
      {mobile.description}
    </p>
    <p className="mt-4 hidden max-w-xl text-base leading-relaxed text-white sm:block sm:text-lg">
      {desktop.description}
    </p>
  </PageHero>
);

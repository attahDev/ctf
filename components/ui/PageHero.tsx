import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  headingId: string;
  children: ReactNode;
};

export const PageHero = ({
  imageSrc,
  imageAlt,
  headingId,
  children,
}: PageHeroProps) => (
  <section
    className="relative min-h-88 overflow-hidden sm:min-h-112 lg:min-h-128"
    aria-labelledby={headingId}
  >
    <Image
      src={imageSrc}
      alt={imageAlt}
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
      {children}
    </div>
  </section>
);

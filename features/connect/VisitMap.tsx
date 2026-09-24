import Image from "next/image";
import { Button } from "@/components/ui/Button";

type VisitMapProps = {
  href: string;
  cta: string;
  imageSrc?: string;
  imageAlt?: string;
  embedSrc?: string;
  embedTitle?: string;
  centeredCta?: boolean;
};

const CarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M5 11 6.5 7.2A2 2 0 0 1 8.4 6h7.2a2 2 0 0 1 1.9 1.2L19 11h.5a1.5 1.5 0 0 1 1.5 1.5V16a1 1 0 0 1-1 1h-1.1a2.5 2.5 0 0 1-4.8 0H9.9a2.5 2.5 0 0 1-4.8 0H4a1 1 0 0 1-1-1v-3.5A1.5 1.5 0 0 1 4.5 11H5zm2.6 6.5A1.1 1.1 0 1 0 6.5 16.4a1.1 1.1 0 0 0 1.1 1.1zm8.8 0a1.1 1.1 0 1 0-1.1-1.1 1.1 1.1 0 0 0 1.1 1.1zM7.2 11h9.6l-1-2.6a.5.5 0 0 0-.5-.3H8.7a.5.5 0 0 0-.5.3L7.2 11z" />
  </svg>
);

export const VisitMap = ({
  href,
  cta,
  imageSrc,
  imageAlt = "",
  embedSrc,
  embedTitle = "Church location map",
  centeredCta = false,
}: VisitMapProps) => {
  const isEmbed = Boolean(embedSrc);

  return (
    <div className="relative aspect-video w-full min-w-0 overflow-hidden rounded-2xl bg-[#ece6dc] lg:aspect-auto lg:h-full lg:min-h-80">
      {isEmbed ? (
        <iframe
          title={embedTitle}
          src={embedSrc}
          className="absolute left-0 -top-10 h-[calc(100%+2.5rem)] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
      ) : null}
      <div
        className={`absolute inset-x-3 bottom-3 z-10 flex sm:inset-x-4 sm:bottom-4 ${
          centeredCta ? "justify-center" : "justify-start"
        }`}
      >
        <Button
          href={href}
          variant={centeredCta ? "blue" : "navy"}
          className={`uppercase ${centeredCta ? "rounded-full px-8" : ""}`}
          openInNewTab
        >
          {centeredCta ? null : <CarIcon />}
          {cta}
        </Button>
      </div>
    </div>
  );
};

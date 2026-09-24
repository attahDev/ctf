import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ministriesContent } from "@/lib/data/ministries";

const { kidsAndYouth } = ministriesContent;

type MinistryCard = (typeof kidsAndYouth.ministries)[number];
type TagTone = MinistryCard["tags"][number]["tone"];

const tagClass: Record<TagTone, Record<MinistryCard["theme"], string>> = {
  gold: {
    light: "bg-gold text-white",
    dark: "bg-gold/20 text-gold",
  },
  blue: {
    light: "bg-blue text-white",
    dark: "bg-blue/40 text-sky",
  },
  sky: {
    light: "bg-sky/20 text-blue",
    dark: "bg-blue/30 text-sky",
  },
  purple: {
    light: "bg-purple/15 text-purple",
    dark: "bg-purple/50 text-[#d5c6ff]",
  },
};

const themeClass = {
  light: {
    card: "bg-[#f4f6fa] text-navy",
    title: "text-navy",
    body: "text-muted",
    cta: "text-gold",
  },
  dark: {
    card: "bg-navy text-white",
    title: "text-white",
    body: "text-white/70",
    cta: "text-sky",
  },
} as const;

const KidsYouthCard = ({ ministry }: { ministry: MinistryCard }) => {
  const theme = themeClass[ministry.theme];

  return (
    <article className={`flex h-full flex-col rounded-3xl p-4 sm:p-5 ${theme.card}`}>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
        <Image
          src={ministry.imageSrc}
          alt={ministry.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {ministry.tags.map((tag) => (
          <span
            key={tag.label}
            className={`rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wider ${tagClass[tag.tone][ministry.theme]}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      <h3 className={`mt-4 font-display text-2xl font-bold ${theme.title}`}>
        {ministry.title}
      </h3>
      <p className={`mt-3 flex-1 text-sm leading-relaxed sm:text-base ${theme.body}`}>
        {ministry.description}
      </p>
      <Link
        href={ministry.ctaHref}
        className={`mt-5 text-sm font-bold uppercase tracking-[0.12em] ${theme.cta}`}
      >
        {ministry.cta}
      </Link>
    </article>
  );
};

export const KidsAndYouth = () => (
  <section className="bg-white py-20 sm:py-28" aria-label={kidsAndYouth.title}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={kidsAndYouth.eyebrow}
        title={kidsAndYouth.title}
        description={kidsAndYouth.description}
      />
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {kidsAndYouth.ministries.map((ministry) => (
          <KidsYouthCard key={ministry.title} ministry={ministry} />
        ))}
      </div>
    </div>
  </section>
);

import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SplitMediaSection } from "@/features/ministries/SplitMediaSection";
import { ministriesContent } from "@/lib/data/ministries";

const { foundationBibleClass } = ministriesContent;
const { content } = foundationBibleClass;

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const FoundationBibleClass = () => (
  <section className="bg-white py-20 sm:py-28" aria-label={foundationBibleClass.title}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={foundationBibleClass.eyebrow}
        title={foundationBibleClass.title}
        description={foundationBibleClass.description}
      />
      <SplitMediaSection
        imageSrc={foundationBibleClass.imageSrc}
        imageAlt={foundationBibleClass.imageAlt}
      >
        <h3 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
          {content.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {content.description}
        </p>
        <ol className="mt-8 space-y-6">
          {content.topics.map((topic) => (
            <li key={topic.number}>
              <p className="font-display text-lg font-bold text-navy">
                <span className="mr-2 text-blue">{topic.number}</span>
                {topic.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {topic.description}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <Button href={content.primaryCtaHref} className="uppercase">
            <PlayIcon />
            {content.primaryCta}
          </Button>
          <p className="text-sm font-medium text-navy">{content.cohortNotice}</p>
        </div>
      </SplitMediaSection>
    </div>
  </section>
);

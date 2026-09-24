import { SectionHeader } from "@/components/ui/SectionHeader";
import { SplitMediaSection } from "@/features/ministries/SplitMediaSection";
import { ministriesContent } from "@/lib/data/ministries";

const { missions } = ministriesContent;
const { content } = missions;

export const MissionsOutreach = () => (
  <section className="bg-white py-20 sm:py-28" aria-label={missions.title}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={missions.eyebrow}
        title={missions.title}
        description={missions.description}
      />
      <SplitMediaSection
        imageSrc={missions.imageSrc}
        imageAlt={missions.imageAlt}
        mediaFirst
      >
        <h3 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
          {content.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {content.description}
        </p>
        <hr className="my-6 border-border" />
        <p className="text-sm font-bold text-navy">{content.footprintTitle}</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted sm:text-base">
          {content.footprints.map((footprint) => (
            <li key={footprint}>{footprint}</li>
          ))}
        </ul>
      </SplitMediaSection>
    </div>
  </section>
);

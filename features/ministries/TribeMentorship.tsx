import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SplitMediaSection } from "@/features/ministries/SplitMediaSection";
import { ministriesContent } from "@/lib/data/ministries";
import { FaArrowRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";


const { tribeMentorship } = ministriesContent;
const { content } = tribeMentorship;

export const TribeMentorship = () => (
  <section className="bg-white py-20 sm:py-28" aria-label={tribeMentorship.title}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={tribeMentorship.eyebrow}
        title={tribeMentorship.title}
        description={tribeMentorship.description}
      />
      <SplitMediaSection
        imageSrc={tribeMentorship.imageSrc}
        imageAlt={tribeMentorship.imageAlt}
        mediaFirst
      >
        <h3 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
          {content.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {content.description}
        </p>
        <dl className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
          {content.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-2xl font-extrabold text-purple sm:text-3xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-[10px] font-semibold tracking-wider text-navy/70 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={content.actions.primaryHref} variant="purple" className="uppercase">
            <FaCircle />
            {content.actions.primary}
          </Button>
          <Button
            href={content.actions.secondaryHref}
            variant="outlinePurple"
            className="uppercase"
          >
           <FaArrowRight />
            {content.actions.secondary}
          </Button>
        </div>
      </SplitMediaSection>
    </div>
  </section>
);

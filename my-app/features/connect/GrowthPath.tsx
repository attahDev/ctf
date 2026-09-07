import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { connectContent } from "@/lib/data/connect";

const { desktop } = connectContent.growthPath;

const BookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M6 4.75h7.5A2.75 2.75 0 0 1 16.25 7.5v12.25H8.25A2.25 2.25 0 0 0 6 22V4.75zm12.5 0v14.5a2.25 2.25 0 0 0-2.25-2.25h-1.25V7.5A2.75 2.75 0 0 1 18.5 4.75z" />
  </svg>
);

export const GrowthPath = () => (
  <section className="bg-navy py-20 sm:py-28" aria-label={desktop.title}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={desktop.eyebrow}
        title={desktop.title}
        description={desktop.description}
        light
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {desktop.steps.map((step) => (
          <article
            key={step.number}
            className="flex h-full flex-col rounded-2xl bg-white/8 p-6"
          >
            <p className="font-display text-2xl font-extrabold text-gold">
              {step.number}
            </p>
            <h3 className="mt-4 font-display text-lg font-bold text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              {step.description}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
        <Button href={desktop.actions.primaryHref} className="uppercase">
          {desktop.actions.primary}
        </Button>
        <Button
          href={desktop.actions.secondaryHref}
          variant="white"
          className="uppercase"
        >
          {desktop.actions.secondary}
          <BookIcon />
        </Button>
      </div>
    </div>
  </section>
);

import { aboutContent } from "@/lib/data/about";

const { vision } = aboutContent;

const titleColors = {
  blue: "text-blue",
  purple: "text-purple",
  gold: "text-[#d4920a]",
};

export function VisionPillars() {
  return (
    <section className="bg-[#f7f9fc] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            {vision.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {vision.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {vision.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {vision.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-[#eceff4] bg-white p-7 sm:p-8"
            >
              <h3
                className={`font-display text-xl font-bold ${titleColors[pillar.titleColor]}`}
              >
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

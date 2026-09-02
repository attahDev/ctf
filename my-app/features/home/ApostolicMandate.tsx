import { mandates } from "@/lib/data/home";
import { SectionHeader } from "@/components/ui/SectionHeader";

const accents = {
  blue: {
    circle: "bg-blue/10 text-blue",
    watermark: "text-blue/10",
  },
  purple: {
    circle: "bg-purple/10 text-purple",
    watermark: "text-purple/10",
  },
  sky: {
    circle: "bg-sky/15 text-sky",
    watermark: "text-sky/15",
  },
};

const watermarkPaths = [
  "M6 4h12v2H6zm2 4h8l1 12H7z",
  "M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4zm14 0v16a3 3 0 0 0-3-3h-1V7a3 3 0 0 1 3-3h1z",
  "M12 2C7 2 3 5.5 3 10c0 5.5 7 12 9 12s9-6.5 9-12c0-4.5-4-8-9-8z",
];

export function ApostolicMandate() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Great Commission"
          title="Our Apostolic Mandate"
          description="Three pillars that shape everything we preach, teach, and practice as a church family."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {mandates.map((item, index) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-border/70 bg-white px-7 py-10 text-center"
            >
              <svg
                viewBox="0 0 24 24"
                className={`pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 fill-current ${accents[item.accent].watermark}`}
                aria-hidden
              >
                <path d={watermarkPaths[index]} />
              </svg>
              <div className="relative">
                <span
                  className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ${accents[item.accent].circle}`}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                    <path d={watermarkPaths[index]} />
                  </svg>
                </span>
                <h3 className="font-display text-xl font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { aboutContent } from "@/lib/data/about";

const { values } = aboutContent;

const iconWrap = {
  blue: "bg-blue/10 text-blue",
  purple: "bg-purple/10 text-purple",
  gold: "bg-gold/15 text-[#c47f0a]",
  sky: "bg-sky/15 text-sky",
};

export function CoreValues() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            {values.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {values.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {values.description}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-[#f3f7ff] p-6"
            >
              <span
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full ${iconWrap[item.color]}`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
                </svg>
              </span>
              <h3 className="font-display text-lg font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

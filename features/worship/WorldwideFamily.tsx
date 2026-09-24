import { worshipContent } from "@/lib/data/worship";

const { family } = worshipContent;

export function WorldwideFamily() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(245,166,35,0.35) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, rgba(94,176,255,0.25) 0 1px, transparent 1.5px), radial-gradient(circle at 40% 80%, rgba(245,166,35,0.2) 0 1px, transparent 1.5px)",
          backgroundSize: "48px 48px, 64px 64px, 40px 40px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sky">
            {family.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {family.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            {family.description}
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          {family.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-navy/70 px-6 py-8 text-center backdrop-blur-sm"
            >
              <p className="font-display text-4xl font-extrabold text-gold sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

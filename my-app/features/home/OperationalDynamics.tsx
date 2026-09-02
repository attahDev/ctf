import { dynamics } from "@/lib/data/home";
import { SectionHeader } from "@/components/ui/SectionHeader";

const bg = {
  blue: "bg-blue",
  purple: "bg-purple",
  gold: "bg-gold",
  sky: "bg-sky",
  navy: "bg-navy",
};

const icons = [
  "M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z",
  "M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4zm14 0v16a3 3 0 0 0-3-3h-1V7a3 3 0 0 1 3-3h1z",
  "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z",
  "M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM8 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm8 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z",
  "M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z",
];

export function OperationalDynamics() {
  return (
    <section className="bg-[#f6f8fc] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Ministry Frameworks"
          title="Operational Dynamics"
          description="The ministry rhythms that keep our church family growing, serving, and advancing together."
        />
        <div className="overflow-hidden rounded-2xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5">
            {dynamics.map((item, index) => (
              <article
                key={item.title}
                className={`flex min-h-[320px] flex-col justify-between p-6 text-white sm:p-7 ${bg[item.color]}`}
              >
                <div>
                  <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden
                    >
                      <path d={icons[index]} />
                    </svg>
                  </span>
                  <h3 className="font-display text-xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    {item.description}
                  </p>
                </div>
                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-white/95">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

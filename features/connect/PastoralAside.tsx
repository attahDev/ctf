import { Button } from "@/components/ui/Button";
import { connectContent } from "@/lib/data/connect";

const { desktop } = connectContent.pastoralCare;

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-gold" aria-hidden>
    <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
  </svg>
);

export const PastoralAside = () => (
  <div className="flex flex-col gap-5">
    <article className="flex flex-col rounded-2xl bg-blue p-6 text-white sm:p-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky">
        {desktop.eyebrow}
      </p>
      <h2 className="mt-3 font-display text-2xl font-bold leading-snug sm:text-[1.75rem]">
        {desktop.title}
      </h2>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-white/90 sm:text-[15px]">
        {desktop.description}
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <Button
          href={`tel:${desktop.supportPhone.phone}`}
          variant="white"
          className="uppercase text-navy"
        >
          {desktop.action.label}
        </Button>
        <p className="text-sm text-white">
          {desktop.supportPhone.label}{" "}
          <a
            href={`tel:${desktop.supportPhone.phone}`}
            className="font-semibold text-gold"
          >
            {desktop.supportPhone.phone}
          </a>
        </p>
      </div>
    </article>
    <article className="flex items-center gap-4 rounded-2xl bg-navy px-6 py-5 sm:px-7 sm:py-6">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
        <HeartIcon />
      </span>
      <div>
        <h3 className="font-display text-lg font-bold text-white">
          {desktop.urgentPrayer.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-white/65">
          {desktop.urgentPrayer.description}
        </p>
      </div>
    </article>
  </div>
);

import { Button } from "@/components/ui/Button";
import { worshipContent } from "@/lib/data/worship";

const { movement } = worshipContent;

export function JoinWowMovement() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            {movement.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {movement.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {movement.description}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {movement.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl bg-[#f7f9fc] p-7 sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {card.description}
              </p>
              <div className="mt-6">
                <Button href={card.href} variant={card.tone}>
                  {card.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

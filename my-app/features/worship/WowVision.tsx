import Image from "next/image";
import { worshipContent } from "@/lib/data/worship";

const { vision } = worshipContent;

export function WowVision() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            {vision.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {vision.title}
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="font-display text-xl font-semibold text-blue sm:text-2xl">
              {vision.highlight}
            </p>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
              {vision.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="mt-8 rounded-xl bg-[#f3f5f9] px-5 py-5">
              <p className="text-sm italic leading-relaxed text-navy/80">
                &ldquo;{vision.scripture}&rdquo;
              </p>
              <cite className="mt-3 block text-sm font-semibold not-italic text-blue">
                — {vision.scriptureRef}
              </cite>
            </blockquote>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={vision.imageSrc}
              alt={vision.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

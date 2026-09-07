import Image from "next/image";
import { aboutContent } from "@/lib/data/about";

const { story } = aboutContent;

export function OurStory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            {story.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {story.title}
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted">
            <p>{story.paragraphs[0]}</p>
            <p>{story.paragraphs[1]}</p>
          </div>
          <blockquote className="mt-8 rounded-r-xl border-l-[3px] border-blue bg-[#f0f7ff] px-5 py-4 text-sm italic leading-relaxed text-navy/80">
            &ldquo;{story.callout}&rdquo;
          </blockquote>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={story.imageSrc}
            alt={story.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

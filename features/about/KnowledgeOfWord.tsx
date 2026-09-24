import Image from "next/image";
import { aboutContent } from "@/lib/data/about";

const { knowledge } = aboutContent;

export function KnowledgeOfWord() {
  return (
    <section className="bg-[#0b1221] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src={knowledge.imageSrc}
            alt={knowledge.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.22),transparent_55%)]"
            aria-hidden
          />
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#3d8bff]">
            {knowledge.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {knowledge.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80">
            {knowledge.description}
          </p>
          <div className="my-7 h-px bg-[#1e293b]" />
          <ul className="space-y-5">
            {knowledge.scriptures.map((item) => (
              <li key={item.ref} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gold/20 text-gold">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4zm14 0v16a3 3 0 0 0-3-3h-1V7a3 3 0 0 1 3-3h1z" />
                  </svg>
                </span>
                <p className="text-sm italic leading-relaxed text-white/85">
                  &ldquo;{item.text}&rdquo; — {item.ref}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

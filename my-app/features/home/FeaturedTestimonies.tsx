import Image from "next/image";
import { testimonies } from "@/lib/data/home";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturedTestimonies() {
  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Stories of Faith"
          title="Featured Testimonies"
          description="Hear how lives are being renewed through faith, community, and the transforming power of the Gospel."
          light
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonies.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-2xl bg-[#151d36] p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={52}
                  height={52}
                  className="h-[52px] w-[52px] rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-blue">{item.role}</p>
                </div>
              </div>
              <p className="flex-1 text-sm italic leading-relaxed text-white/70">
                &ldquo;{item.quote}&rdquo;
              </p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue text-white">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Listen to Video Story
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

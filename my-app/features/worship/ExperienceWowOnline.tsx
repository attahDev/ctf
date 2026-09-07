import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { worshipContent } from "@/lib/data/worship";

const { stream } = worshipContent;

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function TvIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="3.5" y="5" width="17" height="12" rx="2" />
      <path strokeLinecap="round" d="M8 20h8M12 17v3" />
    </svg>
  );
}

export function ExperienceWowOnline() {
  return (
    <section className="bg-[#0a0e17] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#4098ff]">
            {stream.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {stream.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#a0aab8]">
            {stream.description}
          </p>
        </div>

        <div className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-2xl">
          <Image
            src={stream.videoImage}
            alt={stream.videoTitle}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-black/55 px-4 py-3.5 backdrop-blur-sm sm:px-5 sm:py-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                <PlayIcon />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white sm:text-base">
                  Now Streaming: {stream.videoTitle}
                </p>
                <p className="mt-0.5 truncate text-xs text-white/65">
                  {stream.streamMeta}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2.5">
              <span className="inline-flex items-center rounded-md bg-[#ff4d4d] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Live
              </span>
              <span className="hidden text-white/80 sm:inline-flex">
                <TvIcon />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            href={stream.primaryCta.href}
            variant="gold"
            className="uppercase tracking-wide"
          >
            <PlayIcon />
            {stream.primaryCta.label}
          </Button>
          <Button
            href={stream.secondaryCta.href}
            variant="white"
            className="uppercase tracking-wide"
          >
            <TvIcon />
            {stream.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

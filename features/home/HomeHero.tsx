import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EventCountdown } from "@/features/home/EventCountdown";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function TvIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M4 5h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5l2 3h-6l2-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v9h16V7H4z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z" />
    </svg>
  );
}

export function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-7.5rem)] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&h=1080&fit=crop"
        alt="Worship gathering with hands raised"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,12,28,0.88)_0%,rgba(10,16,40,0.72)_45%,rgba(12,20,48,0.55)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,94,255,0.28),transparent_45%),radial-gradient(ellipse_at_top,rgba(123,77,255,0.18),transparent_40%)]" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7.5rem)] max-w-7xl flex-col justify-center px-4 pb-36 pt-16 sm:px-6 lg:px-8">
        <div className="mb-5">
          <Eyebrow className="text-sky">Glory Time Christian Center</Eyebrow>
        </div>
        <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          Worship Without Walls
        </h1>
        <p className="mt-5 max-w-2xl text-base font-medium text-white/90 sm:text-xl">
          One Faith. Many Communities. One Voice in Praise.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/sermons" variant="blue">
            <PlayIcon />
            Join Live
          </Button>
          <Button href="/sermons" variant="outline">
            <TvIcon />
            Watch Sermons
          </Button>
          <Button href="/contact" variant="purple">
            <HeartIcon />
            Request Prayer
          </Button>
          <Button href="/about" variant="gold">
            <PersonIcon />
            I&apos;m New Here
          </Button>
        </div>
      </div>
      <EventCountdown />
    </section>
  );
}

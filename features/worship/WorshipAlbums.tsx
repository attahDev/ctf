import Image from "next/image";
import Link from "next/link";
import { worshipContent } from "@/lib/data/worship";

const { albums } = worshipContent;

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#1DB954]" aria-hidden>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.6 14.4a.7.7 0 0 1-1 .24c-2.6-1.6-5.9-2-9.7-1.1a.7.7 0 1 1-.3-1.4c4.2-1 7.8-.5 10.7 1.2a.7.7 0 0 1 .3 1.06zm1.3-2.8a.9.9 0 0 1-1.2.3c-3-1.8-7.5-2.3-11-1.3a.9.9 0 0 1-.5-1.7c4-.1 9 0 12.4 2a.9.9 0 0 1 .3 1.2zm.1-2.9c-3.5-2.1-9.3-2.3-12.6-1.3a1 1 0 1 1-.6-2c3.8-1.1 10.2-.9 14.3 1.5a1 1 0 1 1-1.1 1.8z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-blue" aria-hidden>
      <path d="M16.4 12.6c0-2.1 1.7-3.1 1.8-3.2a4.2 4.2 0 0 0-3.3-1.8c-1.4-.1-2.7.8-3.4.8s-1.8-.8-3-.8A4.5 4.5 0 0 0 4.5 11c0 2.6 1.4 6.2 3.3 8.2.9 1 1.9 2 3.2 2s1.8-.7 3.3-.7 2 .7 3.3.7 2.2-1 3.1-2a9.5 9.5 0 0 0 1.3-2.6 4 4 0 0 1-2.6-3.9zM14.4 5.8A4 4 0 0 0 15.3 3a4.2 4.2 0 0 0-2.7 1.4 3.9 3.9 0 0 0-1 2.7 3.5 3.5 0 0 0 2.8-1.3z" />
    </svg>
  );
}

export function WorshipAlbums() {
  return (
    <section id="albums" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            {albums.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {albums.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {albums.description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {albums.items.map((album) => (
            <article key={album.title} className="flex flex-col">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">
                {album.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{album.meta}</p>
              <div className="mt-4 flex gap-3">
                <Link
                  href={album.spotify}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#e4e9f1] bg-white px-3 py-2.5 text-[11px] font-bold uppercase tracking-wider text-navy transition hover:border-blue/30"
                >
                  <SpotifyIcon />
                  Spotify
                </Link>
                <Link
                  href={album.apple}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#e4e9f1] bg-white px-3 py-2.5 text-[11px] font-bold uppercase tracking-wider text-navy transition hover:border-blue/30"
                >
                  <AppleIcon />
                  Apple Music
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

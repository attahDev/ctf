"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { churchInfo, navLinks } from "@/lib/data/home";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zM17 7.8a.8.8 0 1 1-.8.8.8.8 0 0 1 .8-.8z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28.3 28.3 0 0 0 2 12a28.3 28.3 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28.3 28.3 0 0 0 22 12a28.3 28.3 0 0 0-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M18.2 3H21l-6.6 7.5L22 21h-6.2l-4.9-6.4L5.4 21H2.6l7.1-8.1L2 3h6.3l4.4 5.8L18.2 3zm-1.1 16.2h1.7L7 4.7H5.2l11.9 14.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-2 px-4 py-2.5 text-[11px] sm:px-6 md:grid-cols-3 lg:px-8">
          <p className="hidden font-semibold uppercase tracking-[0.18em] text-gold md:block">
            {churchInfo.motto}
          </p>
          <a
            href={`tel:${churchInfo.phone}`}
            className="flex items-center justify-center gap-2 text-center font-medium text-white/90 hover:text-white"
          >
            <PhoneIcon />
            <span>
              PRAYER LINE: {churchInfo.prayerLine}
            </span>
          </a>
          <div className="hidden items-center justify-end gap-3.5 text-white/80 md:flex">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <YoutubeIcon />
            </a>
            <a href="#" aria-label="X" className="hover:text-white">
              <XIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue text-lg font-bold text-white shadow-sm">
              G
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-extrabold tracking-wide text-navy uppercase">
                Glory Time
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.14em] text-purple uppercase">
                Christian Center
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "text-blue"
                      : "text-navy/75 hover:text-blue"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <span className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-blue" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/sermons"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1749d6] sm:px-5"
          >
            <PlayIcon />
            Join Live
          </Link>
        </div>
      </div>
    </header>
  );
}

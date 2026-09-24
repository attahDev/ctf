import Link from "next/link";
import { churchInfo, fellowships, footerNav } from "@/lib/data/home";

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

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue text-lg font-bold">
              G
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-extrabold uppercase tracking-wide">
                Glory Time
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Christian Center
              </span>
            </span>
          </div>
          <p className="mb-5 text-sm leading-relaxed text-white/65">
            {churchInfo.mission}
          </p>
          <div className="flex items-center gap-2.5">
            {[
              { label: "Facebook", icon: <FacebookIcon /> },
              { label: "Instagram", icon: <InstagramIcon /> },
              { label: "YouTube", icon: <YoutubeIcon /> },
              { label: "X", icon: <XIcon /> },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                aria-label={item.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-blue hover:bg-blue hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white">
            Quick Navigation
          </h3>
          <ul className="space-y-2.5 text-sm text-white/65">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-blue">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white">
            Weekly Fellowships
          </h3>
          <ul className="space-y-4">
            {fellowships.map((item) => (
              <li key={item.name}>
                <p
                  className={`text-sm font-semibold ${
                    item.accent === "gold" ? "text-gold" : "text-blue"
                  }`}
                >
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-white/60">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white">
            Weekly Devotional
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-white/65">
            Receive weekly encouragement, scripture, and ministry updates in your inbox.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-blue"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue px-4 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-[#1749d6]"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/45 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Glory Time Christian Center. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Sitemap
            </Link>
            <Link href="/contact" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

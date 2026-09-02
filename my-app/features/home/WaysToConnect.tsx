import Link from "next/link";
import { connectWays } from "@/lib/data/home";

const iconPaths: Record<(typeof connectWays)[number]["icon"], string> = {
  play: "M8 5.5v13l10.5-6.5L8 5.5z",
  book: "M6 4.75h7.5A2.75 2.75 0 0 1 16.25 7.5v12.25H8.25A2.25 2.25 0 0 0 6 22V4.75zm12.5 0v14.5a2.25 2.25 0 0 0-2.25-2.25h-1.25V7.5A2.75 2.75 0 0 1 18.5 4.75z",
  person:
    "M12 12.25a3.75 3.75 0 1 0-3.75-3.75A3.75 3.75 0 0 0 12 12.25zm0 1.5c-3.75 0-7.5 1.88-7.5 4.5V20h15v-1.75c0-2.62-3.75-4.5-7.5-4.5z",
  bowl: "M4.5 11h15l-1 6.25A2.75 2.75 0 0 1 15.8 20H8.2a2.75 2.75 0 0 1-2.7-2.75L4.5 11zm4-4.5a3.5 3.5 0 0 1 7 0V8h-7V6.5z",
  smile:
    "M12 3.5A8.5 8.5 0 1 0 20.5 12 8.5 8.5 0 0 0 12 3.5zm-2.75 7a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm5.5 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM8.8 14.4a4.4 4.4 0 0 0 6.4 0 .75.75 0 0 1 1.1 1 5.9 5.9 0 0 1-8.6 0 .75.75 0 1 1 1.1-1z",
  heart:
    "M12 20.25S5.5 16 5.5 10.75A3.75 3.75 0 0 1 12 8.4a3.75 3.75 0 0 1 6.5 2.35C18.5 16 12 20.25 12 20.25z",
};

export function WaysToConnect() {
  return (
    <section className="bg-[#f7f9fc] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-blue">
            Get Connected
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Ways to Connect Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            Explore our vibrant communities and robust online ministries tailored
            to meet you right where you are.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {connectWays.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-xl bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,23,42,0.1)] sm:p-6"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef3ff] text-blue">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-current"
                  aria-hidden
                >
                  <path d={iconPaths[item.icon]} />
                </svg>
              </span>
              <h3 className="font-display text-lg font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.14em] text-blue transition hover:gap-2"
              >
                Explore
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/Button";
import { partners } from "@/lib/data/home";

const accent = {
  blue: {
    iconWrap: "bg-[#eaf0ff] text-blue",
    button: "blue" as const,
  },
  purple: {
    iconWrap: "bg-[#f3edff] text-purple",
    button: "purple" as const,
  },
  gold: {
    iconWrap: "bg-[#fff6e5] text-[#d4920a]",
    button: "gold" as const,
  },
};

function PartnerIcon({ type }: { type: (typeof partners)[number]["icon"] }) {
  if (type === "heart") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20.5s-6.5-4.1-6.5-9.2A3.7 3.7 0 0 1 12 8.2a3.7 3.7 0 0 1 6.5 3.1c0 5.1-6.5 9.2-6.5 9.2z"
        />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM8 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm8 1.5c-2.2 0-6.5 1.1-6.5 3.3V19h13v-2.2c0-2.2-4.3-3.3-6.5-3.3zM8 13.5c-.4 0-.8 0-1.2.1C4.8 14.2 3 15.1 3 16.8V19h4.5"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m-9 0h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"
      />
    </svg>
  );
}

export function PartnerWithUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            Co-Laborers in Grace
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Partner With Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Become a vital part of the Glory Time mandate. Together, we can
            expand global outreach, secure clean communities, and amplify
            God&apos;s uncompromised truth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {partners.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-[#e8ecf2] bg-white p-7 sm:p-8"
            >
              <span
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${accent[item.color].iconWrap}`}
              >
                <PartnerIcon type={item.icon} />
              </span>
              <h3 className="font-display text-xl font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <div className="mt-6">
                <Button
                  href={item.href}
                  variant={accent[item.color].button}
                  className="uppercase tracking-wide"
                >
                  {item.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

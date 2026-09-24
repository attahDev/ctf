import { apiGet } from "@/lib/api";

type ApiPartner = {
  id: number;
  name: string;
  logo_url: string;
  website_url: string;
};

export async function PartnerChurches() {
  const partners = await apiGet<ApiPartner[]>("/partners", []);

  // Nothing to show until an admin adds partner churches — skip the section
  // entirely rather than render an empty shell.
  if (partners.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            One Voice, Many Places
          </p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Partner Churches
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Worship Without Walls is carried forward with churches and communities
            around the world.
          </p>
        </div>

        {/* Plain <img>, not next/image: logo URLs come from the admin panel and
            can be on any domain, unlike the fixed Unsplash allowlist elsewhere
            on this site. Revisit once image hosting (item 8) is settled. */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((partner) => {
            const logo = (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={partner.logo_url}
                alt={partner.name}
                className="h-12 w-auto object-contain grayscale transition hover:grayscale-0"
              />
            );

            return partner.website_url ? (
              <a
                key={partner.id}
                href={partner.website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {logo}
              </a>
            ) : (
              <span key={partner.id}>{logo}</span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

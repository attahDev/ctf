import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ministriesContent } from "@/lib/data/ministries";

const { communitySupport } = ministriesContent;

const ctaClass = {
  blue: "text-blue",
  purple: "text-purple",
} as const;

export const CommunitySupport = () => (
  <section className="bg-white py-20 sm:py-28" aria-label={communitySupport.title}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={communitySupport.eyebrow}
        title={communitySupport.title}
        description={communitySupport.description}
      />
      <div className="grid items-start gap-6 lg:grid-cols-2">
        {communitySupport.services.map((service) => (
          <article
            key={service.title}
            className={`flex flex-col rounded-2xl border border-border bg-[#f7f9fc] p-7 sm:p-8 ${
              "taller" in service && service.taller ? "lg:min-h-92 lg:pb-16" : ""
            }`}
          >
            <Image
              src={service.iconSrc}
              alt=""
              width={48}
              height={48}
              className="mb-5"
            />
            <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {service.description}
            </p>
            <Link
              href={service.ctaHref}
              className={`mt-6 text-sm font-bold uppercase tracking-[0.12em] ${ctaClass[service.accent]} ${
                "taller" in service && service.taller ? "lg:mt-auto" : ""
              }`}
            >
              {service.cta}
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

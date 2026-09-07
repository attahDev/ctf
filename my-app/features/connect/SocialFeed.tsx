import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { connectContent } from "@/lib/data/connect";

const { desktop } = connectContent.social;

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zM17 7.8a.8.8 0 1 1-.8.8.8.8 0 0 1 .8-.8z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28.3 28.3 0 0 0 2 12a28.3 28.3 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28.3 28.3 0 0 0 22 12a28.3 28.3 0 0 0-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z" />
  </svg>
);

const socialIcon = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
} as const;

export const SocialFeed = () => (
  <section className="bg-[#f7f9fc] py-20 sm:py-28" aria-label={desktop.title}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={desktop.eyebrow}
        title={desktop.title}
        description={desktop.description}
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {desktop.posts.map((post) => (
          <article
            key={post.platform}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={post.imageSrc}
                alt={post.imageAlt}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-bold tracking-wider text-blue">
                  {post.platform}
                </p>
                <p className="text-xs text-muted">{post.time}</p>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-navy">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
              <Link
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-purple"
              >
                {post.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
        {desktop.links.map((link) => {
          const Icon = socialIcon[link.platform];

          return (
            <Button
              key={link.platform}
              href={link.href}
              variant="outlineNavy"
              className="uppercase"
            >
              {link.label}
              <Icon />
            </Button>
          );
        })}
      </div>
    </div>
  </section>
);

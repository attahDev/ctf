import Image from "next/image";

export function CommunityImpact() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            Our Outreach Sectors
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Community Impact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Discover a tangible face to our highly organized, impactful social
            welfare programs designed to uplift individuals and reinforce families.
          </p>
        </div>
        <div className="relative aspect-[16/2.7] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&h=500&fit=crop"
            alt="Community celebrating on a hill at sunrise"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

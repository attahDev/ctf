import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ministriesContent } from "@/lib/data/ministries";

const { volunteer } = ministriesContent;

export const VolunteerCta = () => (
  <section className="bg-[#f7f9fc] py-20 sm:py-28" aria-label={volunteer.title}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={volunteer.eyebrow}
        title={volunteer.title}
        description={volunteer.description}
      />
      <div className="-mt-4 flex justify-center sm:-mt-6">
        <Button href={volunteer.ctaHref} className="uppercase">
          <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
          {volunteer.cta}
        </Button>
      </div>
    </div>
  </section>
);

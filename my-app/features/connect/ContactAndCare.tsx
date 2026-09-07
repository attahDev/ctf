import { ContactForm } from "@/features/connect/ContactForm";
import { PastoralAside } from "@/features/connect/PastoralAside";

export const ContactAndCare = () => (
  <section className="bg-[#f7f9fc] pb-20 sm:pb-28" aria-label="Contact and pastoral care">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
        <ContactForm />
        <PastoralAside />
      </div>
    </div>
  </section>
);

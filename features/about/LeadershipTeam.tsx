import Image from "next/image";
import { aboutContent } from "@/lib/data/about";

const { leadership } = aboutContent;

export function LeadershipTeam() {
  return (
    <section className="bg-[#f7f9fc] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            {leadership.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {leadership.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {leadership.description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.members.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-[#e8ecf2] bg-white px-6 py-8 text-center shadow-[0_8px_28px_rgba(10,15,28,0.04)]"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={112}
                height={112}
                className="mx-auto h-28 w-28 rounded-full object-cover"
              />
              <h3 className="mt-5 font-display text-lg font-bold text-navy">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-blue">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

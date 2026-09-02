import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function IconCircle({
  children,
  className = "bg-blue/10 text-blue",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${className}`}
    >
      {children}
    </span>
  );
}

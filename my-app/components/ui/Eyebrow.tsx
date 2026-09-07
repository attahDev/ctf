type EyebrowProps = {
  children: string;
  className?: string;
};

export const Eyebrow = ({
  children,
  className = "text-blue",
}: EyebrowProps) => (
  <div className="flex items-center gap-2.5">
    <span
      className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold shadow-[0_0_12px_rgba(245,166,35,0.8)]"
      aria-hidden
    />
    <p
      className={`text-xs font-bold uppercase tracking-[0.22em] sm:text-sm ${className}`}
    >
      {children}
    </p>
  </div>
);

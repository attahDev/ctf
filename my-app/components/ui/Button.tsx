import Link from "next/link";

type ButtonVariant = "blue" | "purple" | "gold" | "outline" | "outlinePurple" | "ghost";

const variants: Record<ButtonVariant, string> = {
  blue: "bg-blue text-white hover:bg-[#1749d6]",
  purple: "bg-purple text-white hover:bg-[#6840e0]",
  gold: "bg-gold text-navy hover:bg-[#e0951a]",
  outline: "border border-white/70 bg-transparent text-white hover:bg-white/10",
  outlinePurple: "border border-purple bg-white text-purple hover:bg-purple/5",
  ghost: "bg-transparent text-blue hover:underline",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "blue",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold tracking-wide transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

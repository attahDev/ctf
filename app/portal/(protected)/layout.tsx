"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { getToken, clearToken } from "@/lib/memberApi";

const NAV_ITEMS = [
  { href: "/portal/dashboard", label: "Dashboard" },
  { href: "/portal/events", label: "Events" },
  { href: "/portal/reading-plan", label: "Bible Reading Plan" },
  { href: "/portal/certificates", label: "Certificates" },
];

export default function PortalProtectedLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!getToken()) {
      router.replace("/portal/login");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true);
  }, [router]);

  const handleLogout = () => {
    clearToken();
    router.push("/portal/login");
  };

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <p className="font-display text-lg font-bold text-navy">Glory Time — Member Portal</p>
          <nav className="flex flex-wrap items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  pathname === item.href ? "text-blue" : "text-muted hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm font-semibold text-red-600 transition hover:text-red-700"
            >
              Log out
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}

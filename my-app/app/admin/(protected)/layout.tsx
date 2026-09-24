"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { getToken, clearToken } from "@/lib/adminApi";

const NAV_ITEMS = [
  { href: "/admin/events", label: "Events" },
  { href: "/admin/testimonies", label: "Testimonies" },
  { href: "/admin/partners", label: "Partners" },
  { href: "/admin/reading-plans", label: "Reading Plans" },
  { href: "/admin/live-sessions", label: "Live Sessions" },
  { href: "/admin/submissions", label: "Submissions" },
  { href: "/admin/users", label: "Users" },
];

export default function AdminProtectedLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!getToken()) {
      router.replace("/admin/login");
      return;
    }
    // Data fetching on mount is intentionally kept simple here; the guard
    // only runs once per mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true);
  }, [router]);

  const handleLogout = () => {
    clearToken();
    router.push("/admin/login");
  };

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <p className="font-display text-lg font-bold text-navy">Glory Time Admin</p>
          <nav className="flex items-center gap-6">
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

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}

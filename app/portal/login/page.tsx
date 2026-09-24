"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setToken } from "@/lib/memberApi";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

export default function PortalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE}/members/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Incorrect email or password.");
      }

      const data = (await res.json()) as { access_token: string };
      setToken(data.access_token);
      router.push("/portal/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f9fc] px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
        <h1 className="font-display text-2xl font-bold text-navy">Welcome Back</h1>
        <p className="mt-1 text-sm text-muted">Glory Time Christian Center member portal</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-sm font-semibold text-navy">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-lg border border-border bg-[#f4f6fa] px-4 py-3 text-sm text-navy outline-none focus:border-blue"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-navy">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-lg border border-border bg-[#f4f6fa] px-4 py-3 text-sm text-navy outline-none focus:border-blue"
            />
          </label>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Don&apos;t have an account?{" "}
          <Link href="/portal/register" className="font-semibold text-blue">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

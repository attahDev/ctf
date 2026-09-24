"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { memberFetch } from "@/lib/memberApi";

type Member = {
  full_name: string;
  email: string;
};

type ReadingPlan = {
  id: number;
  title: string;
  days: { id: number }[];
};

type ReadingProgress = { reading_day_id: number };
type Certificate = { id: number };

type LiveSession = {
  id: number;
  title: string;
  link: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

export default function PortalDashboardPage() {
  const [member, setMember] = useState<Member | null>(null);
  const [plans, setPlans] = useState<ReadingPlan[]>([]);
  const [progress, setProgress] = useState<ReadingProgress[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [liveSessions, setLiveSessions] = useState<LiveSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [me, planList, progressList, certList, liveList] = await Promise.all([
          memberFetch<Member>("/members/me"),
          memberFetch<ReadingPlan[]>("/members/reading-plans"),
          memberFetch<ReadingProgress[]>("/members/me/reading-progress"),
          memberFetch<Certificate[]>("/members/me/certificates"),
          fetch(`${API_BASE}/live-sessions`).then((res) => res.json()) as Promise<LiveSession[]>,
        ]);
        setMember(me);
        setPlans(planList);
        setProgress(progressList);
        setCertificates(certList);
        setLiveSessions(liveList);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const totalDays = plans.reduce((sum, plan) => sum + plan.days.length, 0);
  const completedDays = progress.length;

  if (loading) return <p className="text-muted">Loading...</p>;

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">
        Welcome{member?.full_name ? `, ${member.full_name}` : ""}
      </h1>
      <p className="mt-1 text-sm text-muted">{member?.email}</p>

      {liveSessions.length > 0 && (
        <div className="mt-6 space-y-3">
          {liveSessions.map((session) => (
            <div
              key={session.id}
              className="flex flex-col gap-3 rounded-2xl bg-navy p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="font-semibold text-white">{session.title} is live</p>
              <a
                href={session.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-lg bg-gold px-5 py-2 text-center text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#e0951a]"
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Link
          href="/portal/reading-plan"
          className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition hover:shadow-[0_10px_40px_rgba(15,23,42,0.12)]"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
            Bible Reading Plan
          </p>
          <p className="mt-3 font-display text-3xl font-bold text-navy">
            {completedDays} / {totalDays}
          </p>
          <p className="mt-1 text-sm text-muted">days completed</p>
        </Link>

        <Link
          href="/portal/certificates"
          className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition hover:shadow-[0_10px_40px_rgba(15,23,42,0.12)]"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Certificates
          </p>
          <p className="mt-3 font-display text-3xl font-bold text-navy">
            {certificates.length}
          </p>
          <p className="mt-1 text-sm text-muted">earned</p>
        </Link>
      </div>
    </div>
  );
}

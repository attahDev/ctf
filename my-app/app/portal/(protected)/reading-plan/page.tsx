"use client";

import { useEffect, useState } from "react";
import { memberFetch } from "@/lib/memberApi";

type ReadingDay = {
  id: number;
  day_number: number;
  reference: string;
};

type ReadingPlan = {
  id: number;
  title: string;
  description: string;
  days: ReadingDay[];
};

type ReadingProgress = { reading_day_id: number };

export default function PortalReadingPlanPage() {
  const [plans, setPlans] = useState<ReadingPlan[]>([]);
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [markingId, setMarkingId] = useState<number | null>(null);

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const [planList, progressList] = await Promise.all([
        memberFetch<ReadingPlan[]>("/members/reading-plans"),
        memberFetch<ReadingProgress[]>("/members/me/reading-progress"),
      ]);
      setPlans(planList);
      setCompletedIds(new Set(progressList.map((p) => p.reading_day_id)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load reading plan");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const markComplete = async (dayId: number) => {
    setMarkingId(dayId);
    setError("");
    try {
      await memberFetch("/members/me/reading-progress", {
        method: "POST",
        body: JSON.stringify({ reading_day_id: dayId }),
      });
      setCompletedIds((prev) => new Set(prev).add(dayId));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to mark day complete");
    } finally {
      setMarkingId(null);
    }
  };

  if (loading) return <p className="text-muted">Loading...</p>;

  if (plans.length === 0) {
    return (
      <div>
        <h1 className="font-display text-2xl font-bold text-navy">Bible Reading Plan</h1>
        <p className="mt-4 text-sm text-muted">
          No reading plans have been published yet — check back soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">Bible Reading Plan</h1>

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

      <div className="mt-6 space-y-8">
        {plans.map((plan) => {
          const completedInPlan = plan.days.filter((d) => completedIds.has(d.id)).length;
          const pct = plan.days.length ? Math.round((completedInPlan / plan.days.length) * 100) : 0;

          return (
            <section
              key={plan.id}
              className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
            >
              <h2 className="font-display text-xl font-bold text-navy">{plan.title}</h2>
              {plan.description && (
                <p className="mt-1 text-sm text-muted">{plan.description}</p>
              )}

              <div className="mt-4">
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#f0f2f7]">
                  <div
                    className="h-full rounded-full bg-blue transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-muted">
                  {completedInPlan} of {plan.days.length} days ({pct}%)
                </p>
              </div>

              <ul className="mt-5 divide-y divide-border">
                {plan.days.map((day) => {
                  const done = completedIds.has(day.id);
                  return (
                    <li key={day.id} className="flex items-center justify-between py-3">
                      <div>
                        <p className="text-sm font-semibold text-navy">Day {day.day_number}</p>
                        <p className="text-sm text-muted">{day.reference}</p>
                      </div>
                      {done ? (
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                          Completed
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => markComplete(day.id)}
                          disabled={markingId === day.id}
                          className="rounded-lg bg-blue px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {markingId === day.id ? "Saving..." : "Mark Read"}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

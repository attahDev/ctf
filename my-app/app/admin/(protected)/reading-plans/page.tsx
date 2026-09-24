"use client";

import { useEffect, useState, type FormEvent } from "react";
import { adminFetch } from "@/lib/adminApi";

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

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-[#f4f6fa] px-3 py-2 text-sm text-navy outline-none focus:border-blue";

export default function AdminReadingPlansPage() {
  const [plans, setPlans] = useState<ReadingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [planForm, setPlanForm] = useState({ title: "", description: "" });
  const [savingPlan, setSavingPlan] = useState(false);

  const [dayForms, setDayForms] = useState<Record<number, { day_number: string; reference: string }>>({});
  const [savingDayFor, setSavingDayFor] = useState<number | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await adminFetch<ReadingPlan[]>("/admin/reading-plans");
      setPlans(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load reading plans");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const handleCreatePlan = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSavingPlan(true);
    setError("");
    try {
      await adminFetch("/admin/reading-plans", {
        method: "POST",
        body: JSON.stringify(planForm),
      });
      setPlanForm({ title: "", description: "" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create plan");
    } finally {
      setSavingPlan(false);
    }
  };

  const handleDeletePlan = async (id: number) => {
    if (!window.confirm("Delete this plan and all its days? This can't be undone.")) return;
    try {
      await adminFetch(`/admin/reading-plans/${id}`, { method: "DELETE" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete plan");
    }
  };

  const getDayForm = (planId: number) =>
    dayForms[planId] ?? { day_number: "", reference: "" };

  const setDayForm = (planId: number, patch: Partial<{ day_number: string; reference: string }>) => {
    setDayForms((prev) => ({ ...prev, [planId]: { ...getDayForm(planId), ...patch } }));
  };

  const handleAddDay = async (planId: number) => {
    const form = getDayForm(planId);
    if (!form.day_number || !form.reference) return;

    setSavingDayFor(planId);
    setError("");
    try {
      await adminFetch(`/admin/reading-plans/${planId}/days`, {
        method: "POST",
        body: JSON.stringify({
          day_number: Number(form.day_number),
          reference: form.reference,
        }),
      });
      setDayForms((prev) => ({ ...prev, [planId]: { day_number: "", reference: "" } }));
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add day");
    } finally {
      setSavingDayFor(null);
    }
  };

  const handleDeleteDay = async (dayId: number) => {
    try {
      await adminFetch(`/admin/reading-days/${dayId}`, { method: "DELETE" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete day");
    }
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">Bible Reading Plans</h1>
      <p className="mt-1 text-sm text-muted">
        Members see these in the portal and earn a certificate automatically when they
        finish every day in a plan.
      </p>

      <form
        onSubmit={handleCreatePlan}
        className="mt-6 grid gap-4 rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:grid-cols-2"
      >
        <p className="font-semibold text-navy sm:col-span-2">Add a plan</p>
        <label className="block text-sm font-semibold text-navy">
          Title
          <input
            required
            className={inputClass}
            value={planForm.title}
            onChange={(event) => setPlanForm({ ...planForm, title: event.target.value })}
            placeholder="7-Day Foundations"
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Description
          <input
            className={inputClass}
            value={planForm.description}
            onChange={(event) => setPlanForm({ ...planForm, description: event.target.value })}
          />
        </label>
        {error && <p className="text-sm font-medium text-red-600 sm:col-span-2">{error}</p>}
        <button
          type="submit"
          disabled={savingPlan}
          className="rounded-lg bg-blue px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 sm:w-fit"
        >
          {savingPlan ? "Creating..." : "Create Plan"}
        </button>
      </form>

      <div className="mt-8 space-y-6">
        {loading ? (
          <p className="text-muted">Loading...</p>
        ) : plans.length === 0 ? (
          <p className="text-muted">No plans yet — add one above.</p>
        ) : (
          plans.map((plan) => {
            const dayForm = getDayForm(plan.id);
            return (
              <section
                key={plan.id}
                className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="font-display text-lg font-bold text-navy">{plan.title}</h2>
                    {plan.description && (
                      <p className="text-sm text-muted">{plan.description}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeletePlan(plan.id)}
                    className="text-sm font-semibold text-red-600"
                  >
                    Delete Plan
                  </button>
                </div>

                <ul className="mt-4 divide-y divide-border">
                  {plan.days
                    .slice()
                    .sort((a, b) => a.day_number - b.day_number)
                    .map((day) => (
                      <li key={day.id} className="flex items-center justify-between py-2 text-sm">
                        <span className="text-navy">
                          Day {day.day_number} — {day.reference}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleDeleteDay(day.id)}
                          className="font-semibold text-red-600"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  {plan.days.length === 0 && (
                    <li className="py-2 text-sm text-muted">No days added yet.</li>
                  )}
                </ul>

                <div className="mt-4 flex flex-wrap items-end gap-3 border-t border-border pt-4">
                  <label className="text-sm font-semibold text-navy">
                    Day #
                    <input
                      type="number"
                      min={1}
                      className={`${inputClass} w-24`}
                      value={dayForm.day_number}
                      onChange={(event) => setDayForm(plan.id, { day_number: event.target.value })}
                    />
                  </label>
                  <label className="flex-1 text-sm font-semibold text-navy">
                    Reference
                    <input
                      className={inputClass}
                      value={dayForm.reference}
                      onChange={(event) => setDayForm(plan.id, { reference: event.target.value })}
                      placeholder="Genesis 1-3"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => handleAddDay(plan.id)}
                    disabled={savingDayFor === plan.id}
                    className="rounded-lg border border-border px-4 py-2 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#f4f6fa] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {savingDayFor === plan.id ? "Adding..." : "Add Day"}
                  </button>
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
}

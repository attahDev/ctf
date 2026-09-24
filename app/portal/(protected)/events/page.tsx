"use client";

import { useEffect, useState } from "react";
import { memberFetch } from "@/lib/memberApi";

type PublicEvent = {
  id: number;
  title: string;
  slug: string;
  day: string;
  month: string;
  time_display: string;
  location: string;
  summary: string;
};

type Registration = {
  id: number;
  registered_at: string;
  event: PublicEvent;
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

export default function PortalEventsPage() {
  const [events, setEvents] = useState<PublicEvent[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyEventId, setBusyEventId] = useState<number | null>(null);

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const [eventList, regList] = await Promise.all([
        fetch(`${API_BASE}/events`).then((res) => res.json()) as Promise<PublicEvent[]>,
        memberFetch<Registration[]>("/members/me/event-registrations"),
      ]);
      setEvents(eventList);
      setRegistrations(regList);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const registeredEventIds = new Set(registrations.map((r) => r.event.id));

  const handleRegister = async (eventId: number) => {
    setBusyEventId(eventId);
    setError("");
    try {
      await memberFetch("/members/me/event-registrations", {
        method: "POST",
        body: JSON.stringify({ event_id: eventId }),
      });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to register");
    } finally {
      setBusyEventId(null);
    }
  };

  const handleCancel = async (eventId: number) => {
    setBusyEventId(eventId);
    setError("");
    try {
      await memberFetch(`/members/me/event-registrations/${eventId}`, {
        method: "DELETE",
      });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to cancel registration");
    } finally {
      setBusyEventId(null);
    }
  };

  if (loading) return <p className="text-muted">Loading...</p>;

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">Events</h1>
      <p className="mt-1 text-sm text-muted">Register to attend, or cancel anytime.</p>

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

      {events.length === 0 ? (
        <p className="mt-8 text-sm text-muted">No upcoming events right now.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {events.map((event) => {
            const isRegistered = registeredEventIds.has(event.id);
            const busy = busyEventId === event.id;
            return (
              <li
                key={event.id}
                className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-navy">{event.title}</p>
                  <p className="text-sm text-muted">
                    {event.day} {event.month} — {event.time_display}
                  </p>
                  <p className="text-sm text-muted">{event.location}</p>
                </div>
                {isRegistered ? (
                  <button
                    type="button"
                    onClick={() => handleCancel(event.id)}
                    disabled={busy}
                    className="shrink-0 rounded-lg border border-border px-4 py-2 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#f4f6fa] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {busy ? "..." : "Cancel Registration"}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleRegister(event.id)}
                    disabled={busy}
                    className="shrink-0 rounded-lg bg-blue px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {busy ? "..." : "Register to Attend"}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

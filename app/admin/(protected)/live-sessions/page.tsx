"use client";

import { useEffect, useState, type FormEvent } from "react";
import { adminFetch } from "@/lib/adminApi";

type LiveSession = {
  id: number;
  title: string;
  link: string;
  description: string;
  scheduled_at: string | null;
  is_active: boolean;
};

type SessionForm = Omit<LiveSession, "id">;

const emptyForm: SessionForm = {
  title: "",
  link: "",
  description: "",
  scheduled_at: null,
  is_active: true,
};

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-[#f4f6fa] px-3 py-2 text-sm text-navy outline-none focus:border-blue";

export default function AdminLiveSessionsPage() {
  const [sessions, setSessions] = useState<LiveSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState<SessionForm>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await adminFetch<LiveSession[]>("/admin/live-sessions");
      setSessions(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load live sessions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const startEdit = (session: LiveSession) => {
    setEditingId(session.id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _id, ...rest } = session;
    setForm(rest);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      if (editingId) {
        await adminFetch(`/admin/live-sessions/${editingId}`, {
          method: "PUT",
          body: JSON.stringify(form),
        });
      } else {
        await adminFetch("/admin/live-sessions", {
          method: "POST",
          body: JSON.stringify(form),
        });
      }
      cancelEdit();
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save live session");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this live session link?")) return;
    try {
      await adminFetch(`/admin/live-sessions/${id}`, { method: "DELETE" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete live session");
    }
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">Live Sessions</h1>
      <p className="mt-1 text-sm text-muted">
        Paste a Zoom, Google Meet, or YouTube Live link. Active sessions show up on the
        Worship page and member portal with a Join button.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4 rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:grid-cols-2"
      >
        <p className="font-semibold text-navy sm:col-span-2">
          {editingId ? `Editing: ${form.title || "session"}` : "Add a live session"}
        </p>

        <label className="block text-sm font-semibold text-navy">
          Title
          <input
            required
            className={inputClass}
            value={form.title}
            onChange={(event) => setForm({ ...form, title: event.target.value })}
            placeholder="Sunday Service"
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Scheduled time (optional)
          <input
            type="datetime-local"
            className={inputClass}
            value={form.scheduled_at ? form.scheduled_at.slice(0, 16) : ""}
            onChange={(event) =>
              setForm({
                ...form,
                scheduled_at: event.target.value ? new Date(event.target.value).toISOString() : null,
              })
            }
          />
        </label>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Link
          <input
            required
            type="url"
            className={inputClass}
            value={form.link}
            onChange={(event) => setForm({ ...form, link: event.target.value })}
            placeholder="https://zoom.us/j/..."
          />
        </label>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Description (optional)
          <input
            className={inputClass}
            value={form.description}
            onChange={(event) => setForm({ ...form, description: event.target.value })}
          />
        </label>
        <label className="flex items-center gap-2 text-sm font-semibold text-navy sm:col-span-2">
          <input
            type="checkbox"
            checked={form.is_active}
            onChange={(event) => setForm({ ...form, is_active: event.target.checked })}
          />
          Active (visible to visitors and members)
        </label>

        {error && <p className="text-sm font-medium text-red-600 sm:col-span-2">{error}</p>}

        <div className="flex gap-3 sm:col-span-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-blue px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? "Saving..." : editingId ? "Update Session" : "Create Session"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#f4f6fa]"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Link</th>
              <th className="px-4 py-3">Active</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-6 text-muted" colSpan={4}>
                  Loading...
                </td>
              </tr>
            ) : sessions.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-muted" colSpan={4}>
                  No live sessions yet — add one above.
                </td>
              </tr>
            ) : (
              sessions.map((session) => (
                <tr key={session.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-navy">{session.title}</td>
                  <td className="max-w-xs truncate px-4 py-3 text-muted">{session.link}</td>
                  <td className="px-4 py-3">{session.is_active ? "Yes" : "No"}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => startEdit(session)}
                      className="mr-4 font-semibold text-blue"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(session.id)}
                      className="font-semibold text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

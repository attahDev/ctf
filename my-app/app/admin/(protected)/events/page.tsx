"use client";

import { useEffect, useState, type FormEvent } from "react";
import { adminFetch, adminUpload } from "@/lib/adminApi";

type Event = {
  id: number;
  title: string;
  slug: string;
  day: string;
  month: string;
  time_display: string;
  location: string;
  summary: string;
  image_url: string;
  is_published: boolean;
};

type EventForm = Omit<Event, "id">;

const emptyForm: EventForm = {
  title: "",
  slug: "",
  day: "",
  month: "",
  time_display: "",
  location: "",
  summary: "",
  image_url: "",
  is_published: true,
};

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-[#f4f6fa] px-3 py-2 text-sm text-navy outline-none focus:border-blue";

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState<EventForm>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await adminFetch<Event[]>("/admin/events");
      setEvents(data);
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

  const startEdit = (event: Event) => {
    setEditingId(event.id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _id, ...rest } = event;
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
        await adminFetch(`/admin/events/${editingId}`, {
          method: "PUT",
          body: JSON.stringify(form),
        });
      } else {
        await adminFetch("/admin/events", {
          method: "POST",
          body: JSON.stringify(form),
        });
      }
      cancelEdit();
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save event");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this event? This can't be undone.")) return;
    try {
      await adminFetch(`/admin/events/${id}`, { method: "DELETE" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete event");
    }
  };

  const handleFileUpload = async (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const url = await adminUpload(file);
      setForm((prev) => ({ ...prev, image_url: url }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">Events</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4 rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:grid-cols-2"
      >
        <p className="font-semibold text-navy sm:col-span-2">
          {editingId ? `Editing: ${form.title || "event"}` : "Add a new event"}
        </p>

        <label className="block text-sm font-semibold text-navy">
          Title
          <input
            required
            className={inputClass}
            value={form.title}
            onChange={(event) => setForm({ ...form, title: event.target.value })}
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Slug
          <input
            required
            className={inputClass}
            value={form.slug}
            onChange={(event) => setForm({ ...form, slug: event.target.value })}
            placeholder="good-life-2026"
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Day
          <input
            required
            className={inputClass}
            value={form.day}
            onChange={(event) => setForm({ ...form, day: event.target.value })}
            placeholder="14"
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Month
          <input
            required
            className={inputClass}
            value={form.month}
            onChange={(event) => setForm({ ...form, month: event.target.value })}
            placeholder="Nov"
          />
        </label>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Time display
          <input
            required
            className={inputClass}
            value={form.time_display}
            onChange={(event) => setForm({ ...form, time_display: event.target.value })}
            placeholder="Thursday - Saturday, 6:00 PM Daily"
          />
        </label>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Location
          <input
            required
            className={inputClass}
            value={form.location}
            onChange={(event) => setForm({ ...form, location: event.target.value })}
          />
        </label>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Summary
          <textarea
            required
            rows={3}
            className={`${inputClass} resize-y`}
            value={form.summary}
            onChange={(event) => setForm({ ...form, summary: event.target.value })}
          />
        </label>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Image
          <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              className={`${inputClass} mt-0 flex-1`}
              value={form.image_url}
              onChange={(event) => setForm({ ...form, image_url: event.target.value })}
              placeholder="https://... (or upload a file)"
            />
            <label className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-border bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:bg-[#f4f6fa]">
              {uploading ? "Uploading..." : "Upload"}
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                className="hidden"
                disabled={uploading}
                onChange={(event) => handleFileUpload(event.target.files)}
              />
            </label>
          </div>
          {form.image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={form.image_url}
              alt="Preview"
              className="mt-2 h-24 w-auto rounded-lg border border-border object-cover"
            />
          )}
        </label>
        <label className="flex items-center gap-2 text-sm font-semibold text-navy sm:col-span-2">
          <input
            type="checkbox"
            checked={form.is_published}
            onChange={(event) => setForm({ ...form, is_published: event.target.checked })}
          />
          Published
        </label>

        {error && <p className="text-sm font-medium text-red-600 sm:col-span-2">{error}</p>}

        <div className="flex gap-3 sm:col-span-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-blue px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? "Saving..." : editingId ? "Update Event" : "Create Event"}
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
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Published</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-6 text-muted" colSpan={5}>
                  Loading...
                </td>
              </tr>
            ) : events.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-muted" colSpan={5}>
                  No events yet — add one above.
                </td>
              </tr>
            ) : (
              events.map((event) => (
                <tr key={event.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-navy">{event.title}</td>
                  <td className="px-4 py-3 text-muted">
                    {event.day} {event.month}
                  </td>
                  <td className="px-4 py-3 text-muted">{event.location}</td>
                  <td className="px-4 py-3">{event.is_published ? "Yes" : "No"}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => startEdit(event)}
                      className="mr-4 font-semibold text-blue"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(event.id)}
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

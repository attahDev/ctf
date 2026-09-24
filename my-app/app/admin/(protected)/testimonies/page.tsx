"use client";

import { useEffect, useState, type FormEvent } from "react";
import { adminFetch, adminUpload } from "@/lib/adminApi";

type Testimony = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image_url: string;
  is_featured: boolean;
  is_published: boolean;
};

type TestimonyForm = Omit<Testimony, "id">;

const emptyForm: TestimonyForm = {
  name: "",
  role: "",
  quote: "",
  image_url: "",
  is_featured: false,
  is_published: true,
};

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-[#f4f6fa] px-3 py-2 text-sm text-navy outline-none focus:border-blue";

export default function AdminTestimoniesPage() {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState<TestimonyForm>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await adminFetch<Testimony[]>("/admin/testimonies");
      setTestimonies(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load testimonies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const startEdit = (testimony: Testimony) => {
    setEditingId(testimony.id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _id, ...rest } = testimony;
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
        await adminFetch(`/admin/testimonies/${editingId}`, {
          method: "PUT",
          body: JSON.stringify(form),
        });
      } else {
        await adminFetch("/admin/testimonies", {
          method: "POST",
          body: JSON.stringify(form),
        });
      }
      cancelEdit();
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save testimony");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this testimony? This can't be undone.")) return;
    try {
      await adminFetch(`/admin/testimonies/${id}`, { method: "DELETE" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete testimony");
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
      <h1 className="font-display text-2xl font-bold text-navy">Testimonies</h1>
      <p className="mt-1 text-sm text-muted">
        Featured testimonies show on the home page. Unfeatured ones stay available via
        the API but aren&apos;t shown there.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4 rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:grid-cols-2"
      >
        <p className="font-semibold text-navy sm:col-span-2">
          {editingId ? `Editing: ${form.name || "testimony"}` : "Add a testimony"}
        </p>

        <label className="block text-sm font-semibold text-navy">
          Name
          <input
            required
            className={inputClass}
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Role / description
          <input
            className={inputClass}
            value={form.role}
            onChange={(event) => setForm({ ...form, role: event.target.value })}
            placeholder="e.g. Member since 2019"
          />
        </label>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Quote
          <textarea
            required
            rows={4}
            className={`${inputClass} resize-y`}
            value={form.quote}
            onChange={(event) => setForm({ ...form, quote: event.target.value })}
          />
        </label>

        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Photo
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
              className="mt-2 h-16 w-16 rounded-full border border-border object-cover"
            />
          )}
        </label>

        <label className="flex items-center gap-2 text-sm font-semibold text-navy">
          <input
            type="checkbox"
            checked={form.is_featured}
            onChange={(event) => setForm({ ...form, is_featured: event.target.checked })}
          />
          Featured on home page
        </label>
        <label className="flex items-center gap-2 text-sm font-semibold text-navy">
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
            {saving ? "Saving..." : editingId ? "Update Testimony" : "Create Testimony"}
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
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Featured</th>
              <th className="px-4 py-3">Published</th>
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
            ) : testimonies.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-muted" colSpan={4}>
                  No testimonies yet — add one above.
                </td>
              </tr>
            ) : (
              testimonies.map((testimony) => (
                <tr key={testimony.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-navy">{testimony.name}</td>
                  <td className="px-4 py-3">{testimony.is_featured ? "Yes" : "No"}</td>
                  <td className="px-4 py-3">{testimony.is_published ? "Yes" : "No"}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => startEdit(testimony)}
                      className="mr-4 font-semibold text-blue"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(testimony.id)}
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

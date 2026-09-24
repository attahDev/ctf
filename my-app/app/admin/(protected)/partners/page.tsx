"use client";

import { useEffect, useState, type FormEvent } from "react";
import { adminFetch, adminUpload } from "@/lib/adminApi";

type Partner = {
  id: number;
  name: string;
  logo_url: string;
  website_url: string;
  sort_order: number;
  is_published: boolean;
};

type PartnerForm = Omit<Partner, "id">;

const emptyForm: PartnerForm = {
  name: "",
  logo_url: "",
  website_url: "",
  sort_order: 0,
  is_published: true,
};

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-[#f4f6fa] px-3 py-2 text-sm text-navy outline-none focus:border-blue";

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState<PartnerForm>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await adminFetch<Partner[]>("/admin/partners");
      setPartners(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load partners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const startEdit = (partner: Partner) => {
    setEditingId(partner.id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _id, ...rest } = partner;
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
        await adminFetch(`/admin/partners/${editingId}`, {
          method: "PUT",
          body: JSON.stringify(form),
        });
      } else {
        await adminFetch("/admin/partners", {
          method: "POST",
          body: JSON.stringify(form),
        });
      }
      cancelEdit();
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save partner");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this partner? This can't be undone.")) return;
    try {
      await adminFetch(`/admin/partners/${id}`, { method: "DELETE" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete partner");
    }
  };

  const handleFileUpload = async (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const url = await adminUpload(file);
      setForm((prev) => ({ ...prev, logo_url: url }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">Partner Churches</h1>
      <p className="mt-1 text-sm text-muted">
        Shown on the Worship Without Walls page. Paste an already-hosted logo URL —
        there&apos;s no image upload yet.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4 rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:grid-cols-2"
      >
        <p className="font-semibold text-navy sm:col-span-2">
          {editingId ? `Editing: ${form.name || "partner"}` : "Add a partner church"}
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
          Sort order
          <input
            type="number"
            className={inputClass}
            value={form.sort_order}
            onChange={(event) => setForm({ ...form, sort_order: Number(event.target.value) })}
          />
        </label>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Logo
          <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              required
              className={`${inputClass} mt-0 flex-1`}
              value={form.logo_url}
              onChange={(event) => setForm({ ...form, logo_url: event.target.value })}
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
          {form.logo_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={form.logo_url}
              alt="Preview"
              className="mt-2 h-16 w-auto rounded-lg border border-border object-contain bg-white p-2"
            />
          )}
        </label>
        <label className="block text-sm font-semibold text-navy sm:col-span-2">
          Website URL (optional)
          <input
            className={inputClass}
            value={form.website_url}
            onChange={(event) => setForm({ ...form, website_url: event.target.value })}
            placeholder="https://..."
          />
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
            {saving ? "Saving..." : editingId ? "Update Partner" : "Create Partner"}
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
              <th className="px-4 py-3">Sort</th>
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
            ) : partners.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-muted" colSpan={4}>
                  No partner churches yet — add one above.
                </td>
              </tr>
            ) : (
              partners.map((partner) => (
                <tr key={partner.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-navy">{partner.name}</td>
                  <td className="px-4 py-3 text-muted">{partner.sort_order}</td>
                  <td className="px-4 py-3">{partner.is_published ? "Yes" : "No"}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => startEdit(partner)}
                      className="mr-4 font-semibold text-blue"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(partner.id)}
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

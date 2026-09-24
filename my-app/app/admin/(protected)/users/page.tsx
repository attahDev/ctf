"use client";

import { useEffect, useState, type FormEvent } from "react";
import { adminFetch } from "@/lib/adminApi";

type AdminUser = {
  id: number;
  email: string;
  full_name: string;
  is_superadmin: boolean;
  is_active: boolean;
};

const emptyForm = { email: "", password: "", full_name: "", is_superadmin: false };

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-[#f4f6fa] px-3 py-2 text-sm text-navy outline-none focus:border-blue";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [forbidden, setForbidden] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    setError("");
    setForbidden(false);
    try {
      const data = await adminFetch<AdminUser[]>("/admin/users");
      setUsers(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load admin users";
      if (message.toLowerCase().includes("superadmin")) {
        setForbidden(true);
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      await adminFetch("/admin/users", { method: "POST", body: JSON.stringify(form) });
      setForm(emptyForm);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create admin user");
    } finally {
      setSaving(false);
    }
  };

  const handleDeactivate = async (id: number) => {
    if (!window.confirm("Deactivate this admin? They won't be able to log in.")) return;
    try {
      await adminFetch(`/admin/users/${id}`, { method: "DELETE" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to deactivate admin");
    }
  };

  if (forbidden) {
    return (
      <div>
        <h1 className="font-display text-2xl font-bold text-navy">Admin Users</h1>
        <p className="mt-4 rounded-lg bg-white px-4 py-3 text-sm text-muted shadow-sm">
          Only a superadmin can manage other admin accounts. Ask a superadmin to add or
          deactivate users.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">Admin Users</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4 rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:grid-cols-2"
      >
        <p className="font-semibold text-navy sm:col-span-2">Add an admin</p>

        <label className="block text-sm font-semibold text-navy">
          Full name
          <input
            className={inputClass}
            value={form.full_name}
            onChange={(event) => setForm({ ...form, full_name: event.target.value })}
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Email
          <input
            type="email"
            required
            className={inputClass}
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Temporary password
          <input
            type="password"
            required
            minLength={8}
            className={inputClass}
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
          />
        </label>
        <label className="flex items-center gap-2 text-sm font-semibold text-navy">
          <input
            type="checkbox"
            checked={form.is_superadmin}
            onChange={(event) => setForm({ ...form, is_superadmin: event.target.checked })}
          />
          Grant superadmin (can manage other admins)
        </label>

        {error && <p className="text-sm font-medium text-red-600 sm:col-span-2">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-blue px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 sm:w-fit"
        >
          {saving ? "Creating..." : "Create Admin"}
        </button>
      </form>

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Superadmin</th>
              <th className="px-4 py-3">Active</th>
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
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-navy">{user.full_name || "—"}</td>
                  <td className="px-4 py-3 text-muted">{user.email}</td>
                  <td className="px-4 py-3">{user.is_superadmin ? "Yes" : "No"}</td>
                  <td className="px-4 py-3">{user.is_active ? "Yes" : "No"}</td>
                  <td className="px-4 py-3 text-right">
                    {user.is_active && (
                      <button
                        type="button"
                        onClick={() => handleDeactivate(user.id)}
                        className="font-semibold text-red-600"
                      >
                        Deactivate
                      </button>
                    )}
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

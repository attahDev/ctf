"use client";

import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";

type Kind = "contact" | "prayer-requests" | "newsletter" | "volunteer" | "bible-class" | "tribe-join";

type Column = { key: string; label: string };

type KindConfig = {
  label: string;
  columns: Column[];
  statusOptions: string[] | null; // null = no status field (newsletter)
};

const KIND_CONFIG: Record<Kind, KindConfig> = {
  contact: {
    label: "Contact",
    columns: [
      { key: "full_name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "message", label: "Message" },
    ],
    statusOptions: ["new", "read", "responded"],
  },
  "prayer-requests": {
    label: "Prayer Requests",
    columns: [
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "request_text", label: "Request" },
    ],
    statusOptions: ["new", "praying", "followed_up"],
  },
  newsletter: {
    label: "Newsletter",
    columns: [
      { key: "email", label: "Email" },
      { key: "is_active", label: "Active" },
    ],
    statusOptions: null,
  },
  volunteer: {
    label: "Volunteer",
    columns: [
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "area_of_interest", label: "Area" },
    ],
    statusOptions: ["new", "contacted", "onboarded"],
  },
  "bible-class": {
    label: "Bible Class",
    columns: [
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "preferred_schedule", label: "Schedule" },
    ],
    statusOptions: ["new", "enrolled", "declined"],
  },
  "tribe-join": {
    label: "Tribe Join",
    columns: [
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "tribe_preference", label: "Tribe" },
    ],
    statusOptions: ["new", "matched", "closed"],
  },
};

const KINDS = Object.keys(KIND_CONFIG) as Kind[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Item = Record<string, any> & { id: number };

export default function AdminSubmissionsPage() {
  const [activeKind, setActiveKind] = useState<Kind>("contact");
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const config = KIND_CONFIG[activeKind];

  const load = async (kind: Kind) => {
    setLoading(true);
    setError("");
    try {
      const data = await adminFetch<Item[]>(`/admin/submissions/${kind}`);
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load(activeKind);
  }, [activeKind]);

  const handleStatusChange = async (id: number, status: string) => {
    try {
      await adminFetch(`/admin/submissions/${activeKind}/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      await load(activeKind);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update status");
    }
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">Submissions</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {KINDS.map((kind) => (
          <button
            key={kind}
            type="button"
            onClick={() => setActiveKind(kind)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeKind === kind
                ? "bg-blue text-white"
                : "bg-white text-muted hover:text-navy"
            }`}
          >
            {KIND_CONFIG[kind].label}
          </button>
        ))}
      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

      <div className="mt-6 overflow-x-auto rounded-2xl bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-wide text-muted">
            <tr>
              {config.columns.map((col) => (
                <th key={col.key} className="px-4 py-3">
                  {col.label}
                </th>
              ))}
              <th className="px-4 py-3">Received</th>
              {config.statusOptions && <th className="px-4 py-3">Status</th>}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-6 text-muted" colSpan={config.columns.length + 2}>
                  Loading...
                </td>
              </tr>
            ) : items.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-muted" colSpan={config.columns.length + 2}>
                  No submissions yet.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id} className="border-b border-border align-top last:border-0">
                  {config.columns.map((col) => (
                    <td key={col.key} className="max-w-xs px-4 py-3 text-navy">
                      {typeof item[col.key] === "boolean"
                        ? item[col.key]
                          ? "Yes"
                          : "No"
                        : String(item[col.key] ?? "")}
                    </td>
                  ))}
                  <td className="px-4 py-3 text-muted">
                    {new Date(item.created_at ?? item.subscribed_at).toLocaleDateString()}
                  </td>
                  {config.statusOptions && (
                    <td className="px-4 py-3">
                      <select
                        value={item.status}
                        onChange={(event) => handleStatusChange(item.id, event.target.value)}
                        className="rounded-lg border border-border bg-[#f4f6fa] px-3 py-1.5 text-sm text-navy outline-none focus:border-blue"
                      >
                        {config.statusOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState, type FormEvent } from "react";
import { memberFetch } from "@/lib/memberApi";

type Member = {
  email: string;
  full_name: string;
  phone: string;
};

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-[#f4f6fa] px-3 py-2 text-sm text-navy outline-none focus:border-blue";

export default function PortalProfilePage() {
  const [member, setMember] = useState<Member | null>(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const data = await memberFetch<Member>("/members/me");
        setMember(data);
        setFullName(data.full_name);
        setPhone(data.phone);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load profile");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    setSaved(false);
    try {
      const updated = await memberFetch<Member>("/members/me", {
        method: "PUT",
        body: JSON.stringify({ full_name: fullName, phone }),
      });
      setMember(updated);
      setSaved(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-muted">Loading...</p>;

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">My Profile</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-md space-y-4 rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
      >
        <label className="block">
          <span className="text-sm font-semibold text-navy">Email</span>
          <input
            value={member?.email ?? ""}
            disabled
            className={`${inputClass} cursor-not-allowed opacity-60`}
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy">Full Name</span>
          <input
            className={inputClass}
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy">Phone</span>
          <input
            className={inputClass}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>

        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
        {saved && <p className="text-sm font-medium text-green-700">Profile updated.</p>}

        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-blue px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1749d6] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}

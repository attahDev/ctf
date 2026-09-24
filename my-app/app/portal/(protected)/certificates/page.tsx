"use client";

import { useEffect, useState } from "react";
import { memberFetch, downloadCertificatePdf } from "@/lib/memberApi";

type Certificate = {
  id: number;
  title: string;
  issued_at: string;
};

export default function PortalCertificatesPage() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [downloadingId, setDownloadingId] = useState<number | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await memberFetch<Certificate[]>("/members/me/certificates");
        setCertificates(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load certificates");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleDownload = async (id: number) => {
    setDownloadingId(id);
    setError("");
    try {
      await downloadCertificatePdf(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Download failed");
    } finally {
      setDownloadingId(null);
    }
  };

  if (loading) return <p className="text-muted">Loading...</p>;

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy">Certificates</h1>
      <p className="mt-1 text-sm text-muted">
        Earned automatically when you complete every day in a Bible reading plan.
      </p>

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

      {certificates.length === 0 ? (
        <p className="mt-8 text-sm text-muted">
          No certificates yet — finish a reading plan to earn one.
        </p>
      ) : (
        <ul className="mt-6 space-y-4">
          {certificates.map((cert) => (
            <li
              key={cert.id}
              className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
            >
              <div>
                <p className="font-semibold text-navy">{cert.title}</p>
                <p className="text-sm text-muted">
                  Issued {new Date(cert.issued_at).toLocaleDateString()}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDownload(cert.id)}
                disabled={downloadingId === cert.id}
                className="rounded-lg bg-gold px-4 py-2 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#e0951a] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {downloadingId === cert.id ? "Preparing..." : "Download PDF"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { apiGet } from "@/lib/api";

type LiveSession = {
  id: number;
  title: string;
  link: string;
  description: string;
  scheduled_at: string | null;
};

export async function JoinLive() {
  const sessions = await apiGet<LiveSession[]>("/live-sessions", []);

  // No admin-added links yet — skip the section rather than show an empty shell.
  if (sessions.length === 0) return null;

  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
            Join Us Live
          </p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Live Sessions
          </h2>
        </div>

        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="flex flex-col gap-4 rounded-2xl bg-[#151d36] p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-semibold text-white">{session.title}</p>
                {session.description && (
                  <p className="mt-1 text-sm text-white/70">{session.description}</p>
                )}
                {session.scheduled_at && (
                  <p className="mt-1 text-sm text-white/50">
                    {new Date(session.scheduled_at).toLocaleString(undefined, {
                      weekday: "long",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </p>
                )}
              </div>
              <a
                href={session.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-lg bg-gold px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#e0951a]"
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

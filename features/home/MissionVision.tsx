import { IconCircle, SectionHeader } from "@/components/ui/SectionHeader";

export function MissionVision() {
  return (
    <section className="bg-[#f6f8fc] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Core Foundation"
          title="Rooted in Truth, Bound in Love"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-border/70 bg-white p-8 shadow-[0_10px_40px_rgba(10,15,28,0.05)]">
            <div className="mb-5 flex items-center gap-3">
              <IconCircle className="bg-purple/10 text-purple">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M12 2a9 9 0 0 1 9 9c0 5-4 9-9 11-5-2-9-6-9-11a9 9 0 0 1 9-9zm0 4a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2.5a1 1 0 0 1 1 1v1.1l.8.8a1 1 0 1 1-1.4 1.4l-1.1-1.1A1 1 0 0 1 11 12V9.5a1 1 0 0 1 1-1z" />
                </svg>
              </IconCircle>
              <h3 className="font-display text-lg font-bold text-navy">Our Mission</h3>
            </div>
            <p className="font-display text-2xl font-bold leading-snug text-blue">
              Grace. Peace. Confidence.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We preach the love of God and raise believers who walk in grace,
              live in peace, and stand with confidence in Christ in every sphere
              of life.
            </p>
          </article>

          <article className="rounded-2xl border border-border/70 bg-white p-8 shadow-[0_10px_40px_rgba(10,15,28,0.05)]">
            <div className="mb-5 flex items-center gap-3">
              <IconCircle className="bg-purple/10 text-purple">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M12 5c5 0 9 3.5 9 7s-4 7-9 7-9-3.5-9-7 4-7 9-7zm0 2.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
                </svg>
              </IconCircle>
              <h3 className="font-display text-lg font-bold text-navy">Our Vision</h3>
            </div>
            <p className="font-display text-2xl font-bold leading-snug text-blue">
              Knowledge of God&apos;s Word
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We empower believers through Scripture for personal transformation
              and societal reformation, expressing the love of Jesus to the world.
            </p>
          </article>

          <article className="rounded-2xl bg-navy p-8 text-white shadow-[0_14px_40px_rgba(10,15,28,0.18)]">
            <div className="mb-5 flex items-center gap-3">
              <IconCircle className="bg-gold/20 text-gold">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4zm14 0v16a3 3 0 0 0-3-3h-1V7a3 3 0 0 1 3-3h1z" />
                </svg>
              </IconCircle>
              <h3 className="font-display text-lg font-bold">Holy Scripture</h3>
            </div>
            <blockquote className="text-sm leading-relaxed text-white/90">
              <span className="font-semibold text-purple">2 Peter 1:2-3</span>
              <br />
              Grace and peace be multiplied unto you through the knowledge of God,
              and of Jesus our Lord.
            </blockquote>
            <blockquote className="mt-5 text-sm leading-relaxed text-white/90">
              <span className="font-semibold text-gold">Habakkuk 2:14</span>
              <br />
              For the earth shall be filled with the knowledge of the glory of the
              Lord, as the waters cover the sea.
            </blockquote>
          </article>
        </div>
      </div>
    </section>
  );
}

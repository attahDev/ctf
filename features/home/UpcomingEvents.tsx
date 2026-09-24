import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { apiGet } from "@/lib/api";
import { events as fallbackEvents } from "@/lib/data/home";

type ApiEvent = {
  title: string;
  slug: string;
  day: string;
  month: string;
  time_display: string;
  location: string;
  summary: string;
  image_url: string;
};

type DisplayEvent = {
  title: string;
  day: string;
  month: string;
  time: string;
  location: string;
  summary: string;
  image: string;
};

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 11H7v-2h4V6h2z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 8H6v10h14V10z" />
    </svg>
  );
}

export async function UpcomingEvents() {
  const apiEvents = await apiGet<ApiEvent[]>("/events", []);

  const events: DisplayEvent[] =
    apiEvents.length > 0
      ? apiEvents.map((e) => ({
          title: e.title,
          day: e.day,
          month: e.month,
          time: e.time_display,
          location: e.location,
          summary: e.summary,
          image: e.image_url || fallbackEvents[0]?.image,
        }))
      : fallbackEvents;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            Mark Your Calendars
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Join us as we gather corporately to seek the Lord, empower our
            spirits, and build deep fraternal bonds across our multiple hubs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#e6eaf0] bg-white"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-[58px] w-[52px] shrink-0 flex-col items-center justify-center rounded-lg bg-blue text-white">
                    <span className="font-display text-[22px] font-extrabold leading-none">
                      {event.day}
                    </span>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-wider">
                      {event.month}
                    </span>
                  </div>
                  <h3 className="line-clamp-2 pt-0.5 font-display text-lg font-bold leading-snug text-navy">
                    {event.title}
                  </h3>
                </div>

                <div className="mt-4 space-y-2 text-[13px] text-muted">
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue">
                      <ClockIcon />
                    </span>
                    <span>{event.time}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue">
                      <PinIcon />
                    </span>
                    <span>{event.location}</span>
                  </p>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
                  {event.summary}
                </p>

                <div className="mt-auto pt-5">
                  <Button href="/events" className="uppercase tracking-wide">
                    <CalendarIcon />
                    Register to Attend
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

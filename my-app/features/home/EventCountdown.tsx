"use client";

import { useEffect, useState } from "react";
import { churchInfo } from "@/lib/data/home";

type TimeLeft = {
  days: number;
  hours: number;
  mins: number;
  secs: number;
};

function getTimeLeft(target: string): TimeLeft {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  return { days, hours, mins, secs };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function EventCountdown() {
  const [time, setTime] = useState<TimeLeft>(() =>
    getTimeLeft(churchInfo.nextServiceAt),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft(churchInfo.nextServiceAt));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hrs", value: time.hours },
    { label: "Mins", value: time.mins },
    { label: "Secs", value: time.secs },
  ];

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/15 bg-navy/55 px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-md sm:flex-row sm:px-7">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-live rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white sm:text-sm">
            Next Live Service — {churchInfo.nextServiceLabel}
          </p>
        </div>
        <div className="flex items-center gap-5 sm:gap-7">
          {units.map((unit) => (
            <div key={unit.label} className="flex items-end gap-1.5">
              <span className="font-display text-2xl font-extrabold leading-none text-gold sm:text-3xl">
                {pad(unit.value)}
              </span>
              <span className="pb-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

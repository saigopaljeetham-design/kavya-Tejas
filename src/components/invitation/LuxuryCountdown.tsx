"use client";

import { useEffect, useState } from "react";
import { weddingConfig } from "@/config/wedding";

function getRemaining() {
  const target = new Date(weddingConfig.wedding.dateISO).getTime();
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    complete: diff <= 0,
  };
}

export function LuxuryCountdown() {
  const [time, setTime] = useState(getRemaining);
  useEffect(() => {
    const id = window.setInterval(() => setTime(getRemaining()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (time.complete) {
    return <div className="lux-countdown lux-countdown-complete"><span>ముహూర్తం · THE MUHURTHAM HAS BEGUN</span><strong>11:41 PM</strong></div>;
  }

  const units = [
    ["days", time.days],
    ["hours", time.hours],
    ["minutes", time.minutes],
    ["seconds", time.seconds],
  ] as const;

  return (
    <section className="lux-countdown-wrap" aria-label="Countdown to the wedding">
      <p className="lux-micro gold">ముహూర్తం సమీపిస్తోంది · COUNTING DOWN TO THE AUSPICIOUS MOMENT</p>
      <div className="lux-countdown">
        {units.map(([label, value], index) => (
          <div className="lux-countdown-unit" key={label}>
            <strong key={`${label}-${value}`}>{String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
            {index < units.length - 1 && <i>·</i>}
          </div>
        ))}
      </div>
      <p className="lux-countdown-date">THURSDAY · 27 AUGUST 2026 · 11:41 PM · MUHURTHAM</p>
    </section>
  );
}

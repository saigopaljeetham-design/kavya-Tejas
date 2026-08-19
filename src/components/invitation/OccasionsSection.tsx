import React from "react";
import { weddingConfig } from "@/config/wedding";

const ritualSymbols: Record<string, string> = {
  haldi: "✦",
  reception: "❋",
  muhurtham: "॥",
};

const ritualLabels: Record<string, string> = {
  haldi: "The day begins",
  reception: "The celebration gathers",
  muhurtham: "The sacred hour",
};

export default function OccasionsSection() {
  return (
    <section id="occasions" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-amber-200/70">
            27 August 2026 · Ishaar Staycation
          </p>
          <h2 className="font-serif text-4xl leading-tight text-amber-50 sm:text-5xl">
            From pasupu to Muhurtham
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-300/75">
            One wedding day, three chapters. The morning begins in celebration,
            the evening brings everyone together, and the night arrives at the auspicious hour.
          </p>
        </div>

        <div className="relative md:grid md:grid-cols-3 md:gap-0">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-amber-200/10 md:block" />

          {weddingConfig.wedding.events.map((event, index) => (
            <article key={event.key} className="group relative px-0 pb-10 md:px-5 md:pb-0">
              <div className="mb-5 flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-amber-200/50 md:justify-center">
                <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-amber-200/20 bg-[#090909] text-amber-100/70">
                  {ritualSymbols[event.key]}
                </span>
                <span>{ritualLabels[event.key]}</span>
              </div>

              <div className="overflow-hidden border border-amber-100/10 bg-white/[0.025] p-3 transition duration-500 group-hover:border-amber-200/25">
                <div className="aspect-[4/5] overflow-hidden bg-black/30">
                  <img
                    src={event.plates[0]}
                    alt={`${event.name} ceremony`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="px-3 pb-4 pt-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-serif text-2xl text-amber-50">{event.name}</p>
                      <p className="mt-1 text-sm text-amber-100/60">{event.teluguName}</p>
                    </div>
                    <span className="text-[9px] tracking-[0.25em] text-stone-500">0{index + 1}</span>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-stone-300/70">{event.story}</p>
                  <div className="mt-5 border-t border-amber-100/10 pt-4 text-[10px] uppercase tracking-[0.18em] text-stone-400">
                    {event.dateLabel} · {event.time}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl border-y border-amber-100/10 py-8 text-center">
          <p className="font-serif text-lg italic leading-8 text-amber-100/80">
            “Three moments. One wedding. A beginning to remember.”
          </p>
          <p className="mt-3 text-[9px] uppercase tracking-[0.32em] text-stone-500">
            Kavya & Tejas · ముహూర్తం · 11:41 PM
          </p>
        </div>
      </div>
    </section>
  );
}

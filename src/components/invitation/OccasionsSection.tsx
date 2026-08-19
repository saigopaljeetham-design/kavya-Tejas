import React from "react";
import { weddingConfig } from "@/config/wedding";

const ritualSymbols: Record<string, string> = {
  haldi: "✦",
  reception: "❋",
  muhurtham: "॥",
};

export default function OccasionsSection() {
  return (
    <section id="occasions" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-amber-200/70">
            Their celebration unfolds in three moments
          </p>
          <h2 className="font-serif text-4xl leading-tight text-amber-50 sm:text-5xl">
            From pasupu to Muhurtham
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-300/75">
            A Telugu wedding is a journey. Each ritual carries its own blessing,
            and together they lead Kavya and Tejas to their sacred beginning.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {weddingConfig.wedding.events.map((event, index) => (
            <article
              key={event.key}
              className="group relative overflow-hidden rounded-sm border border-amber-100/10 bg-white/[0.025] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-1 hover:border-amber-200/25"
            >
              <div className="aspect-[4/5] overflow-hidden bg-black/30">
                <img
                  src={event.plates[0]}
                  alt={`${event.name} ceremony`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="px-3 pb-4 pt-6">
                <div className="mb-5 flex items-center justify-between text-[9px] uppercase tracking-[0.28em] text-amber-200/55">
                  <span>0{index + 1}</span>
                  <span>{ritualSymbols[event.key]}</span>
                </div>
                <p className="font-serif text-xl text-amber-50">{event.name}</p>
                <p className="mt-1 text-sm text-amber-100/60">{event.teluguName}</p>
                <p className="mt-4 text-sm leading-6 text-stone-300/70">{event.story}</p>
                <div className="mt-5 border-t border-amber-100/10 pt-4 text-[10px] uppercase tracking-[0.2em] text-stone-400">
                  {event.dateLabel} · {event.time}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-y border-amber-100/10 py-8 text-center">
          <p className="font-serif text-lg italic leading-8 text-amber-100/80">
            “The rituals may be ancient. The memory they create will be theirs forever.”
          </p>
          <p className="mt-3 text-[9px] uppercase tracking-[0.32em] text-stone-500">
            Kavya & Tejas · 27 August 2026
          </p>
        </div>
      </div>
    </section>
  );
}

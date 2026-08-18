"use client";

import { motion, useReducedMotion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";

const ICONS: Record<string, string> = {
  haldi: "✿",
  reception: "✦",
  muhurtham: "ॐ",
};

export function AuspiciousTimeline() {
  const reduce = useReducedMotion();
  const events = weddingConfig.wedding.events;

  return (
    <section className="relative overflow-hidden bg-[#120a05] px-5 py-24 text-[#fff6e6] sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(218,169,78,0.18),transparent_38%),radial-gradient(circle_at_50%_90%,rgba(122,35,25,0.22),transparent_40%)]" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.9 }} className="text-center">
          <p className="label-caps text-[0.68rem] tracking-[0.35em] text-[#d9ad5c]">27 AUGUST 2026 · THURSDAY</p>
          <h2 className="display-name mt-5 text-4xl leading-tight sm:text-6xl">One Auspicious Day</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#eadbc2]/75 sm:text-base">One day. Three celebrations. One forever.</p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-2xl sm:mt-20">
          <div aria-hidden="true" className="absolute bottom-7 left-[27px] top-7 w-px bg-[#8b6b36]/35 sm:left-1/2" />
          <motion.div aria-hidden="true" className="absolute left-[26px] top-7 w-[3px] origin-top rounded-full bg-gradient-to-b from-[#f6d58d] via-[#d59d42] to-[#7c341d] shadow-[0_0_18px_rgba(230,180,82,0.5)] sm:left-[calc(50%-1px)]" style={{ height: "calc(100% - 3.5rem)" }} initial={reduce ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }} />

          <div className="space-y-10 sm:space-y-14">
            {events.map((event, index) => (
              <motion.article key={event.key} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.55 }} transition={{ duration: 0.75, delay: reduce ? 0 : index * 0.08 }} className={`relative grid grid-cols-[55px_1fr] items-center gap-4 sm:grid-cols-[1fr_72px_1fr] sm:gap-7`}>
                <div className={`hidden sm:block ${index % 2 === 0 ? "text-right" : "order-3 text-left"}`}>
                  <p className="display-name text-3xl text-[#f8e7c2]">{event.time}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#cfa45a]/70">{event.dayName}</p>
                </div>

                <div className="relative z-10 flex h-[55px] w-[55px] items-center justify-center rounded-full border border-[#d9ad5c]/60 bg-[#1a0e07] text-xl text-[#f1cc7a] shadow-[0_0_0_7px_rgba(217,173,92,0.06),0_0_28px_rgba(217,173,92,0.18)] sm:col-start-2 sm:h-[64px] sm:w-[64px]">
                  <motion.span animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.85, 1, 0.85] }} transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.5 }}>{ICONS[event.key] ?? "✦"}</motion.span>
                </div>

                <div className={`${index % 2 === 0 ? "sm:col-start-3" : "sm:col-start-1 sm:row-start-1 sm:text-right"}`}>
                  <p className="sm:hidden display-name text-2xl text-[#f8e7c2]">{event.time}</p>
                  <h3 className="display-name mt-1 text-2xl text-[#fff6e6] sm:mt-0 sm:text-3xl">{event.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#eadbc2]/65">{event.venue}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.p initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="display-name mt-16 text-center text-xl italic text-[#d9ad5c] sm:text-2xl">From turmeric and laughter to vows beneath the midnight sky.</motion.p>
      </div>
    </section>
  );
}

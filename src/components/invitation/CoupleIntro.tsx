import React from "react";
import { weddingConfig } from "@/config/wedding";

export default function CoupleIntro() {
  const { bride, groom, wedding } = weddingConfig;

  return (
    <section id="story" className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-200/[0.025] blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 border border-amber-200/10" />
          <div className="absolute -inset-2 border border-amber-200/15" />
          <div className="absolute -left-3 top-1/2 h-16 w-px -translate-y-1/2 bg-amber-200/35" />
          <div className="absolute -right-3 top-1/2 h-16 w-px -translate-y-1/2 bg-amber-200/35" />

          <div className="relative aspect-[4/5] overflow-hidden bg-black/30">
            <img
              src={weddingConfig.couplePhoto}
              alt={`${bride.name} and ${groom.name}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.35em] text-amber-200/55">
            <span>కలిసి</span>
            <span className="h-px w-8 bg-amber-200/20" />
            <span>{bride.name} & {groom.name}</span>
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.38em] text-amber-200/65">
            {wedding.story.eyebrow}
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.08] text-amber-50 sm:text-6xl">
            {wedding.story.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-200/75">
            {wedding.story.intro}
          </p>

          <div className="mt-10 max-w-2xl border-y border-amber-100/10 py-7">
            <div className="mb-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-amber-200/50">
              <span className="text-base">✦</span>
              <span>మన పెళ్లి కథ</span>
            </div>
            <p className="font-serif text-lg italic leading-8 text-amber-100/80">
              {wedding.story.culturalNote}
            </p>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-2 gap-6 text-[10px] uppercase tracking-[0.22em] text-stone-400">
            <div>
              <span className="block text-amber-100/65">Bride · వధువు</span>
              <span className="mt-2 block font-serif text-xl normal-case tracking-normal text-stone-200">{bride.name}</span>
            </div>
            <div>
              <span className="block text-amber-100/65">Groom · వరుడు</span>
              <span className="mt-2 block font-serif text-xl normal-case tracking-normal text-stone-200">{groom.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

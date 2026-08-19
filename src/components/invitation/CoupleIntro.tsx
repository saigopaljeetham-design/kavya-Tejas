import React from "react";
import { weddingConfig } from "@/config/wedding";

export default function CoupleIntro() {
  const { bride, groom, wedding } = weddingConfig;

  return (
    <section id="story" className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 border border-amber-200/10" />
          <div className="absolute -inset-2 border border-amber-200/10" />
          <div className="relative aspect-[4/5] overflow-hidden bg-black/30">
            <img
              src={weddingConfig.couplePhoto}
              alt={`${bride.name} and ${groom.name}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-5 text-center text-[9px] uppercase tracking-[0.35em] text-amber-200/50">
            {bride.name} & {groom.name} · together
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-amber-200/65">
            {wedding.story.eyebrow}
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-amber-50 sm:text-6xl">
            {wedding.story.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-200/75">
            {wedding.story.intro}
          </p>

          <div className="mt-10 border-l border-amber-200/25 pl-6">
            <p className="font-serif text-lg italic leading-8 text-amber-100/80">
              {wedding.story.culturalNote}
            </p>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-6 border-t border-amber-100/10 pt-7 text-[10px] uppercase tracking-[0.22em] text-stone-400">
            <div>
              <span className="block text-amber-100/70">Bride</span>
              <span className="mt-2 block text-stone-300">{bride.name}</span>
            </div>
            <div>
              <span className="block text-amber-100/70">Groom</span>
              <span className="mt-2 block text-stone-300">{groom.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

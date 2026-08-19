import React from "react";
import { weddingConfig } from "@/config/wedding";

const memoryChapters = [
  "Before the rituals",
  "In the little moments",
  "On the way to forever",
  "Held close",
  "A memory for the family album",
  "The days that brought them here",
  "A candid chapter",
  "A shared journey",
  "Hands held, hearts ready",
];

export default function CinematicGallery() {
  return (
    <section id="gallery" className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto flex max-w-6xl justify-between px-6 text-xs tracking-[0.5em] text-amber-200/25">
        <span>❧ ✦ ❧</span>
        <span>❧ ✦ ❧</span>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.4em] text-amber-200/45">
            <span>❧</span>
            <span>జ్ఞాపకాలు · memories</span>
            <span>❧</span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-amber-50 sm:text-5xl">
            Moments, held forever.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-stone-300/70">
            A wedding story is made of more than the ceremony. These are the glances,
            laughter, hands and ordinary moments that make the celebration belong to Kavya and Tejas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-12">
          {weddingConfig.gallery.map((photo, index) => {
            const layouts = [
              "col-span-2 md:col-span-7 md:row-span-2 aspect-[16/11]",
              "col-span-1 md:col-span-5 aspect-[4/3]",
              "col-span-1 md:col-span-5 aspect-[4/3]",
              "col-span-2 md:col-span-5 aspect-[4/3]",
              "col-span-2 md:col-span-7 aspect-[16/9]",
              "col-span-1 md:col-span-4 aspect-[4/5]",
              "col-span-1 md:col-span-4 aspect-[4/5]",
              "col-span-1 md:col-span-4 aspect-[4/5]",
              "col-span-2 md:col-span-8 aspect-[16/9]",
            ];

            return (
              <figure
                key={`${photo.src}-${index}`}
                className={`group relative overflow-hidden border border-amber-100/10 bg-white/[0.025] ${layouts[index % layouts.length]}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.035]"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-10">
                  <span className="block text-[8px] uppercase tracking-[0.28em] text-amber-200/60">
                    {memoryChapters[index]}
                  </span>
                  <span className="mt-1 block text-[10px] tracking-[0.06em] text-stone-100/85">
                    {photo.alt}
                  </span>
                </figcaption>
                <span className="absolute right-3 top-3 text-[8px] tracking-[0.2em] text-amber-100/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figure>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-4 text-xs tracking-[0.45em] text-amber-200/35">
            <span>❧</span>
            <span>॥</span>
            <span>❧</span>
          </div>
          <p className="font-serif text-lg italic text-amber-100/70">
            Some moments become stories. Some stories become family.
          </p>
          <p className="mt-3 text-[9px] uppercase tracking-[0.28em] text-stone-500">
            Kavya & Tejas · before the Muhurtham
          </p>
        </div>
      </div>
    </section>
  );
}

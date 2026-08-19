import React from "react";
import { weddingConfig } from "@/config/wedding";

export default function CinematicGallery() {
  return (
    <section id="gallery" className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.38em] text-amber-200/65">A glimpse of us</p>
          <h2 className="mt-4 font-serif text-4xl text-amber-50 sm:text-5xl">Moments, held forever.</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-stone-300/70">
            Before the rituals, there were these little moments — laughter, hands held,
            quiet glances and the ordinary days that led them here.
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
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-12 text-[10px] tracking-[0.08em] text-stone-200/85 opacity-0 transition duration-500 group-hover:opacity-100">
                  {photo.alt}
                </figcaption>
                <span className="absolute right-3 top-3 text-[8px] tracking-[0.2em] text-amber-100/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figure>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center text-center">
          <span className="text-[10px] tracking-[0.5em] text-amber-200/45">॥</span>
          <p className="mt-3 font-serif text-lg italic text-amber-100/70">
            Some memories become family stories.
          </p>
        </div>
      </div>
    </section>
  );
}

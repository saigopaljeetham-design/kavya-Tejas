"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";

const memoryChapters = [
  "A beginning",
  "A quiet moment",
  "Held close",
  "On the way to forever",
  "A shared journey",
];

export function CinematicGallery() {
  const photos = weddingConfig.gallery;
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((i) => (i === null ? 0 : (i + 1) % photos.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((i) =>
          i === null ? 0 : (i - 1 + photos.length) % photos.length
        );
      }
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, photos.length]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#070605] px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 text-[9px] uppercase tracking-[0.42em] text-amber-200/50">
            జ్ఞాపకాలు · memories
          </div>
          <h2 className="font-serif text-4xl leading-tight text-amber-50 sm:text-5xl">
            Moments, held forever.
          </h2>
          <p className="mt-5 text-sm leading-7 text-stone-300/70">
            Every frame stays whole — no forced crop, no missing edges, no
            forgotten moment.
          </p>
        </header>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <button
              key={`${photo.src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className="group mb-5 block w-full break-inside-avoid text-left"
              aria-label={`Open photo ${index + 1}: ${photo.alt}`}
            >
              <figure className="relative overflow-hidden rounded-[3px] border border-amber-100/10 bg-[#0d0b09] shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={100}
                  priority={index < 2}
                  className="block h-auto w-full object-contain transition duration-700 ease-out group-hover:scale-[1.015]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5 opacity-80" />
                <span className="absolute right-3 top-3 text-[8px] tracking-[0.24em] text-amber-100/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <span className="block text-[8px] uppercase tracking-[0.3em] text-amber-200/70">
                    {memoryChapters[index]}
                  </span>
                  <span className="mt-1 block text-xs tracking-wide text-white/90">
                    {photo.alt}
                  </span>
                </figcaption>
              </figure>
            </button>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="font-serif text-lg italic text-amber-100/70">
            Some moments become stories. Some stories become family.
          </p>
          <p className="mt-3 text-[9px] uppercase tracking-[0.28em] text-stone-500">
            Kavya & Tejas · before the Muhurtham
          </p>
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Wedding photograph viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-8"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close photo viewer"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs text-white/80 backdrop-blur"
          >
            Close
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              setActive((active - 1 + photos.length) % photos.length);
            }}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/45 px-4 py-3 text-white/90 backdrop-blur"
          >
            ←
          </button>

          <div
            className="relative flex h-[90vh] w-full max-w-7xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              fill
              sizes="100vw"
              quality={100}
              priority
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              setActive((active + 1) % photos.length);
            }}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/45 px-4 py-3 text-white/90 backdrop-blur"
          >
            →
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
            <div className="text-[9px] uppercase tracking-[0.3em] text-amber-200/70">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </div>
            <div className="mt-1 text-xs text-white/75">
              {photos[active].alt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CinematicGallery;

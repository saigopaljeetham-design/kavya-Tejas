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

  const previousPhoto = () => {
    setActive((current) =>
      current === null
        ? 0
        : (current - 1 + photos.length) % photos.length
    );
  };

  const nextPhoto = () => {
    setActive((current) =>
      current === null ? 0 : (current + 1) % photos.length
    );
  };

  useEffect(() => {
    if (active === null) return;

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }

      if (event.key === "ArrowLeft") {
        previousPhoto();
      }

      if (event.key === "ArrowRight") {
        nextPhoto();
      }
    };

    document.addEventListener("keydown", handleKeyboard);

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = oldOverflow;
    };
  }, [active]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#070605] px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 text-[9px] uppercase tracking-[0.42em] text-amber-200/50">
            జ్ఞాపకాలు · memories
          </div>

          <h2 className="font-serif text-4xl leading-tight text-amber-50 sm:text-5xl">
            Moments, held forever.
          </h2>

          <p className="mt-5 text-sm leading-7 text-stone-300/70">
            Every memory, exactly as it was meant to be seen.
          </p>
        </header>

        {/* GALLERY */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <button
              key={`${photo.src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Open photo ${index + 1}`}
              className="group mb-5 block w-full break-inside-avoid text-left"
            >
              <figure className="relative overflow-hidden rounded-[4px] border border-amber-100/10 bg-[#0d0b09] shadow-[0_20px_70px_rgba(0,0,0,0.28)]">

                {/* IMAGE */}
                <div className="relative w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={2400}
                    height={1800}
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    quality={100}
                    priority={index < 3}
                    className="
                      block
                      h-auto
                      max-h-[85vh]
                      w-full
                      object-contain
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.012]
                    "
                  />
                </div>

                {/* SUBTLE OVERLAY */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-black/5
                    opacity-80
                  "
                />

                {/* NUMBER */}
                <span
                  className="
                    absolute
                    right-3
                    top-3
                    text-[8px]
                    tracking-[0.24em]
                    text-amber-100/75
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* CAPTION */}
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <span
                    className="
                      block
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-amber-200/70
                    "
                  >
                    {memoryChapters[index % memoryChapters.length]}
                  </span>

                  <span className="mt-1 block text-xs tracking-wide text-white/90">
                    {photo.alt}
                  </span>
                </figcaption>

              </figure>
            </button>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-14 text-center">
          <p className="font-serif text-lg italic text-amber-100/70">
            Some moments become stories. Some stories become family.
          </p>

          <p className="mt-3 text-[9px] uppercase tracking-[0.28em] text-stone-500">
            Kavya & Tejas · before the Muhurtham
          </p>
        </div>
      </div>

      {/* FULLSCREEN VIEWER */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Wedding photograph viewer"
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/96
            p-3
            sm:p-6
          "
          onClick={() => setActive(null)}
        >

          {/* CLOSE */}
          <button
            type="button"
            aria-label="Close photo viewer"
            onClick={() => setActive(null)}
            className="
              absolute
              right-4
              top-4
              z-20
              rounded-full
              border
              border-white/15
              bg-black/60
              px-4
              py-2
              text-xs
              text-white/85
              backdrop-blur
            "
          >
            Close
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              previousPhoto();
            }}
            className="
              absolute
              left-2
              top-1/2
              z-20
              -translate-y-1/2
              rounded-full
              border
              border-white/15
              bg-black/55
              px-4
              py-3
              text-white
              backdrop-blur
              transition
              hover:bg-black/80
            "
          >
            ←
          </button>

          {/* ORIGINAL PROPORTION VIEWER */}
          <div
            className="
              relative
              flex
              h-[88vh]
              w-[calc(100vw-90px)]
              max-w-[1500px]
              items-center
              justify-center
            "
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

          {/* NEXT */}
          <button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              nextPhoto();
            }}
            className="
              absolute
              right-2
              top-1/2
              z-20
              -translate-y-1/2
              rounded-full
              border
              border-white/15
              bg-black/55
              px-4
              py-3
              text-white
              backdrop-blur
              transition
              hover:bg-black/80
            "
          >
            →
          </button>

          {/* COUNTER */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              z-20
              -translate-x-1/2
              text-center
            "
          >
            <div className="text-[9px] uppercase tracking-[0.3em] text-amber-200/75">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </div>

            <div className="mt-1 max-w-[80vw] text-xs text-white/75">
              {photos[active].alt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CinematicGallery;

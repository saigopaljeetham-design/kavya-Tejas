"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { weddingConfig } from "@/config/wedding";

export function CinematicGallery() {
  const [active, setActive] = useState<number | null>(null);
  const gallery = weddingConfig.gallery;

  const next = () => setActive((current) => current === null ? null : (current + 1) % gallery.length);
  const previous = () => setActive((current) => current === null ? null : (current - 1 + gallery.length) % gallery.length);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active]);

  return (
    <section className="cinema-gallery" id="gallery">
      <div className="lux-section-number light">04</div>
      <div className="lux-section-heading cinema-gallery-heading">
        <p className="lux-micro gold">A GLIMPSE OF US</p>
        <h2>Moments.<br /><em>Held forever.</em></h2>
      </div>
      <div className="cinema-gallery-grid">
        {gallery.map((photo, index) => (
          <button key={photo.src} className={`cinema-tile cinema-tile-${index + 1}`} onClick={() => setActive(index)} aria-label={`Open photo ${index + 1}`}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 92vw, 45vw" className="object-cover" />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="cinema-lightbox" role="dialog" aria-modal="true" aria-label="Wedding gallery" onClick={() => setActive(null)}>
          <button className="cinema-close" onClick={() => setActive(null)} aria-label="Close gallery"><X size={22} /></button>
          <button className="cinema-arrow cinema-left" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous photo"><ArrowLeft size={22} /></button>
          <div className="cinema-lightbox-image" onClick={(event) => event.stopPropagation()}>
            <Image src={gallery[active].src} alt={gallery[active].alt} fill sizes="92vw" className="object-contain" priority />
          </div>
          <button className="cinema-arrow cinema-right" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next photo"><ArrowRight size={22} /></button>
          <p className="cinema-counter">{String(active + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</p>
        </div>
      )}
    </section>
  );
}

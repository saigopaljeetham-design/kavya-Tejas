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
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); if (event.key === "ArrowRight") next(); if (event.key === "ArrowLeft") previous(); };
    document.addEventListener("keydown", onKey); document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active]);
  return <>
    <section className="cinema-gallery" id="gallery">
      <div className="lux-section-number light">04</div>
      <div className="lux-section-heading cinema-gallery-heading"><p className="lux-micro gold">A GLIMPSE OF US</p><h2>Moments.<br /><em>Held forever.</em></h2></div>
      <div className="cinema-gallery-grid">{gallery.map((photo, index) => <button key={photo.src} className={`cinema-tile cinema-tile-${index + 1}`} onClick={() => setActive(index)} aria-label={`Open photo ${index + 1}`}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 92vw, 45vw" className="object-cover" /><span>{String(index + 1).padStart(2, "0")}</span></button>)}</div>
      {active !== null && <div className="cinema-lightbox" role="dialog" aria-modal="true" aria-label="Wedding gallery" onClick={() => setActive(null)}><button className="cinema-close" onClick={() => setActive(null)} aria-label="Close gallery"><X size={22} /></button><button className="cinema-arrow cinema-left" onClick={(e) => { e.stopPropagation(); previous(); }} aria-label="Previous photo"><ArrowLeft size={22} /></button><div className="cinema-lightbox-image" onClick={(e) => e.stopPropagation()}><Image src={gallery[active].src} alt={gallery[active].alt} fill sizes="92vw" className="object-contain" priority /></div><button className="cinema-arrow cinema-right" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo"><ArrowRight size={22} /></button><p className="cinema-counter">{String(active + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</p></div>}
    </section>
    <style jsx global>{`
      .cinema-gallery{position:relative;padding:140px clamp(20px,6vw,90px) 170px;background:#090908;overflow:hidden}.cinema-gallery-heading{margin-bottom:80px}.cinema-gallery-grid{max-width:1120px;margin:auto;display:grid;grid-template-columns:1.15fr .85fr;grid-auto-rows:minmax(240px,32vw);gap:18px}.cinema-tile{position:relative;display:block;overflow:hidden;border:1px solid rgba(201,164,91,.22);padding:0;background:#111;transition:transform .8s,box-shadow .8s}.cinema-tile:after{content:"";position:absolute;inset:13px;border:1px solid rgba(227,197,127,.18);pointer-events:none;z-index:2}.cinema-tile img{filter:saturate(.7) contrast(1.02);transition:transform 1.2s cubic-bezier(.2,.7,.2,1),filter .8s}.cinema-tile:hover{transform:translateY(-6px);box-shadow:0 35px 90px rgba(0,0,0,.42)}.cinema-tile:hover img{transform:scale(1.06);filter:saturate(.9) contrast(1.04)}.cinema-tile span{position:absolute;z-index:3;right:22px;top:20px;font-family:var(--font-label);font-size:.5rem;letter-spacing:.2em;color:#e3c57f}.cinema-tile-1{grid-row:span 2}.cinema-tile-4{grid-column:1/-1;aspect-ratio:2.3}.cinema-lightbox{position:fixed;inset:0;z-index:200;background:rgba(4,4,3,.96);backdrop-filter:blur(18px);display:grid;place-items:center;animation:galleryIn .35s ease}.cinema-lightbox-image{position:relative;width:min(88vw,1200px);height:min(80vh,800px)}.cinema-close,.cinema-arrow{position:fixed;z-index:3;display:grid;place-items:center;width:48px;height:48px;border:1px solid rgba(227,197,127,.35);border-radius:50%;background:rgba(8,8,7,.65);color:#e3c57f;transition:.3s}.cinema-close{right:25px;top:25px}.cinema-arrow:hover,.cinema-close:hover{background:var(--gold);color:#111;transform:scale(1.05)}.cinema-left{left:25px;top:50%;transform:translateY(-50%)}.cinema-right{right:25px;top:50%;transform:translateY(-50%)}.cinema-counter{position:fixed;bottom:25px;left:50%;transform:translateX(-50%);font-family:var(--font-label);font-size:.5rem;letter-spacing:.3em;color:#a49d90}@keyframes galleryIn{from{opacity:0}to{opacity:1}}
      @media(max-width:700px){.cinema-gallery{padding-top:110px}.cinema-gallery-grid{grid-template-columns:1fr;grid-auto-rows:75vw;gap:14px}.cinema-tile-1,.cinema-tile-4{grid-row:auto;grid-column:auto}.cinema-tile-4{aspect-ratio:auto}.cinema-lightbox-image{width:94vw;height:72vh}.cinema-arrow{width:42px;height:42px}.cinema-left{left:10px}.cinema-right{right:10px}.cinema-close{right:12px;top:12px}}
      @media(prefers-reduced-motion:reduce){.cinema-lightbox,.cinema-tile img{animation:none;transition:none}}
    `}</style>
  </>;
}

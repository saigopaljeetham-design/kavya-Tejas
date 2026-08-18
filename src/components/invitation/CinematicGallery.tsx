"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ImagePlus, X } from "lucide-react";
import { weddingConfig } from "@/config/wedding";

export function CinematicGallery() {
  const [active, setActive] = useState<number | null>(null);
  const [uploads, setUploads] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const gallery = weddingConfig.gallery;
  const all = useMemo(() => [
    ...gallery.map((photo) => ({ ...photo, uploaded: false })),
    ...uploads.map((src, i) => ({ src, alt: `Uploaded wedding memory ${i + 1}`, uploaded: true })),
  ], [gallery, uploads]);

  const next = () => setActive((current) => current === null ? null : (current + 1) % all.length);
  const previous = () => setActive((current) => current === null ? null : (current - 1 + all.length) % all.length);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, all.length]);

  useEffect(() => () => uploads.forEach((src) => URL.revokeObjectURL(src)), [uploads]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? [])
      .filter((file) => file.type.startsWith("image/"))
      .slice(0, 5);
    if (!files.length) return;
    setUploads((current) => [...current, ...files.map((file) => URL.createObjectURL(file))].slice(-5));
    event.target.value = "";
  };

  return <>
    <section className="cinema-gallery refined-gallery" id="gallery">
      <div className="lux-section-number light">04</div>
      <div className="lux-section-heading cinema-gallery-heading">
        <p className="lux-micro gold">A GLIMPSE OF US</p>
        <h2>Moments.<br /><em>Held forever.</em></h2>
        <p className="gallery-intro">A private collection of moments from the beginning of their forever.</p>
      </div>

      <div className="refined-gallery-grid">
        {all.map((photo, index) => (
          <button key={`${photo.src}-${index}`} className={`refined-tile refined-tile-${(index % 5) + 1}`} onClick={() => setActive(index)} aria-label={`Open photo ${index + 1}`}>
            {photo.uploaded ? (
              <span className="uploaded-photo" style={{ backgroundImage: `url(${photo.src})` }} />
            ) : (
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 94vw, 700px" className="refined-photo" />
            )}
            <span className="refined-shade" />
            <span className="refined-index">{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}

        <button className="refined-upload" onClick={() => inputRef.current?.click()} aria-label="Add wedding photos">
          <ImagePlus size={24} strokeWidth={1.1} />
          <span>ADD A MEMORY</span>
          <small>Choose photos from your phone</small>
        </button>
        <input ref={inputRef} className="gallery-upload-input" type="file" accept="image/*" multiple onChange={handleUpload} />
      </div>

      {active !== null && (
        <div className="cinema-lightbox" role="dialog" aria-modal="true" aria-label="Wedding gallery" onClick={() => setActive(null)}>
          <button className="cinema-close" onClick={() => setActive(null)} aria-label="Close gallery"><X size={22} /></button>
          <button className="cinema-arrow cinema-left" onClick={(e) => { e.stopPropagation(); previous(); }} aria-label="Previous photo"><ArrowLeft size={22} /></button>
          <div className="cinema-lightbox-image" onClick={(e) => e.stopPropagation()}>
            {all[active].uploaded ? (
              <img src={all[active].src} alt={all[active].alt} />
            ) : (
              <Image src={all[active].src} alt={all[active].alt} fill sizes="96vw" className="lightbox-photo" priority />
            )}
          </div>
          <button className="cinema-arrow cinema-right" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo"><ArrowRight size={22} /></button>
          <p className="cinema-counter">{String(active + 1).padStart(2, "0")} / {String(all.length).padStart(2, "0")}</p>
        </div>
      )}
    </section>

    <style jsx global>{`
      .refined-gallery{position:relative;padding:145px clamp(14px,5vw,80px) 165px;background:#090908;overflow:hidden}.gallery-intro{max-width:500px;margin:24px auto 0;color:#80796d;font-size:.98rem;line-height:1.8}.cinema-gallery-heading{margin-bottom:72px}
      .refined-gallery-grid{max-width:1180px;margin:auto;display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:clamp(185px,19vw,275px);gap:18px}.refined-tile{position:relative;overflow:hidden;padding:0;background:#0d0c09;border:1px solid rgba(201,164,91,.42);box-shadow:0 28px 70px rgba(0,0,0,.42);transition:transform .55s,box-shadow .55s}.refined-tile:before{content:"";position:absolute;z-index:4;inset:10px;border:1px solid rgba(227,197,127,.25);pointer-events:none}.refined-tile:after{content:"";position:absolute;z-index:4;inset:16px;border:1px solid rgba(227,197,127,.09);pointer-events:none}.refined-tile:hover{transform:translateY(-5px);box-shadow:0 42px 95px rgba(0,0,0,.58)}
      .refined-tile-1{grid-column:span 7;grid-row:span 2}.refined-tile-2{grid-column:span 5}.refined-tile-3{grid-column:span 5}.refined-tile-4{grid-column:span 5}.refined-tile-5{grid-column:span 7;grid-row:span 2}.refined-photo,.uploaded-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center;background:#0a0907;transition:transform .9s cubic-bezier(.2,.7,.2,1),filter .7s}.uploaded-photo{background-size:contain;background-repeat:no-repeat;background-position:center}.refined-tile:hover .refined-photo,.refined-tile:hover .uploaded-photo{transform:scale(1.018);filter:saturate(1.04)}.refined-shade{position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.03),transparent 65%,rgba(0,0,0,.45))}.refined-index{position:absolute;z-index:5;right:20px;top:18px;font-family:var(--font-label);font-size:.44rem;letter-spacing:.25em;color:#e3c57f;text-shadow:0 1px 10px #000}
      .refined-upload{grid-column:span 5;min-height:170px;border:1px dashed rgba(201,164,91,.45);background:radial-gradient(circle at 50% 40%,rgba(201,164,91,.1),transparent 60%),#0c0c0a;color:#c9a45b;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;transition:.45s}.refined-upload:hover{border-color:#e3c57f;background:#12110d;transform:translateY(-4px);box-shadow:0 25px 60px rgba(0,0,0,.4)}.refined-upload span{font-family:var(--font-label);font-size:.5rem;letter-spacing:.26em}.refined-upload small{font-family:var(--font-label);font-size:.42rem;letter-spacing:.08em;color:#70695c}.gallery-upload-input{display:none}
      .cinema-lightbox{position:fixed;z-index:10000;inset:0;background:rgba(3,3,2,.97);backdrop-filter:blur(14px);display:grid;place-items:center;padding:55px 70px 70px}.cinema-lightbox-image{position:relative;width:min(94vw,1500px);height:min(86svh,1100px);display:flex;align-items:center;justify-content:center}.cinema-lightbox-image img{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;display:block;box-shadow:0 25px 100px rgba(0,0,0,.65)}.cinema-lightbox-image .lightbox-photo{position:absolute!important;inset:0;width:100%!important;height:100%!important;object-fit:contain!important}.cinema-close,.cinema-arrow{position:fixed;z-index:10002;width:46px;height:46px;border:1px solid rgba(227,197,127,.38);background:rgba(9,8,6,.78);color:#e3c57f;display:grid;place-items:center}.cinema-close{top:20px;right:22px}.cinema-left{left:22px;top:50%;transform:translateY(-50%)}.cinema-right{right:22px;top:50%;transform:translateY(-50%)}.cinema-close:hover,.cinema-arrow:hover{background:#c9a45b;color:#080807}.cinema-counter{position:fixed;z-index:10002;bottom:22px;left:50%;transform:translateX(-50%);margin:0;font:400 .48rem var(--font-label);letter-spacing:.28em;color:#d9c38d}
      @media(max-width:760px){.refined-gallery{padding:105px 10px 120px}.cinema-gallery-heading{margin-bottom:50px}.gallery-intro{font-size:.9rem}.refined-gallery-grid{grid-template-columns:1fr;grid-auto-rows:auto;gap:14px}.refined-tile-1,.refined-tile-2,.refined-tile-3,.refined-tile-4,.refined-tile-5,.refined-upload{grid-column:1;grid-row:auto}.refined-tile{aspect-ratio:4/5;min-height:0}.refined-photo,.uploaded-photo{object-fit:contain}.refined-upload{min-height:145px}.cinema-lightbox{padding:58px 10px 60px}.cinema-lightbox-image{width:96vw;height:82svh}.cinema-close{top:12px;right:12px;width:42px;height:42px}.cinema-left{left:8px}.cinema-right{right:8px}.cinema-arrow{width:40px;height:40px}.cinema-counter{bottom:14px;font-size:.42rem}}
      @media(prefers-reduced-motion:reduce){.refined-tile,.refined-photo,.uploaded-photo,.refined-upload{transition:none}}
    `}</style>
  </>;
}

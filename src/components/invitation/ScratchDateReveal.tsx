"use client";

import { useEffect, useRef, useState } from "react";

const REVEAL_THRESHOLD = 0.56;

export function ScratchDateReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);

  const paintFoil = () => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const rect = wrap.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "source-over";

    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#5b4219");
    gradient.addColorStop(.18, "#c49a43");
    gradient.addColorStop(.38, "#e0c16d");
    gradient.addColorStop(.55, "#8b6425");
    gradient.addColorStop(.76, "#d9b65c");
    gradient.addColorStop(1, "#5b3e16");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    const glow = ctx.createRadialGradient(rect.width * .5, rect.height * .45, 5, rect.width * .5, rect.height * .45, rect.width * .7);
    glow.addColorStop(0, "rgba(255,242,190,.24)");
    glow.addColorStop(1, "rgba(255,242,190,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, rect.width, rect.height);

    for (let i = 0; i < 520; i++) {
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      const r = Math.random() * 1.15 + .2;
      ctx.fillStyle = `rgba(255,244,202,${Math.random() * .3})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = "rgba(62,42,13,.68)";
    ctx.lineWidth = 1;
    ctx.strokeRect(12, 12, rect.width - 24, rect.height - 24);

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(34,23,9,.82)";
    ctx.font = `600 ${Math.max(10, Math.min(14, rect.width / 36))}px Arial`;
    ctx.fillText("SCRATCH THE GOLD", rect.width / 2, rect.height * .43);
    ctx.font = `400 ${Math.max(8, Math.min(10, rect.width / 48))}px Arial`;
    ctx.fillStyle = "rgba(49,34,14,.65)";
    ctx.fillText("A LITTLE SURPRISE AWAITS", rect.width / 2, rect.height * .58);

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  };

  useEffect(() => {
    if (!revealed) paintFoil();
    const onResize = () => { if (!revealed) paintFoil(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [revealed]);

  const measureReveal = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const sampleW = 64;
    const sampleH = 64;
    const stepX = Math.max(1, Math.floor(canvas.width / sampleW));
    const stepY = Math.max(1, Math.floor(canvas.height / sampleH));
    let total = 0;
    let transparent = 0;
    for (let y = 0; y < canvas.height; y += stepY) {
      for (let x = 0; x < canvas.width; x += stepX) {
        total++;
        if (pixels[(y * canvas.width + x) * 4 + 3] < 45) transparent++;
      }
    }
    const value = total ? transparent / total : 0;
    setProgress(value);
    if (value >= REVEAL_THRESHOLD) reveal();
  };

  const reveal = () => {
    if (revealed) return;
    setRevealed(true);
    setProgress(1);
    if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate?.(18);
  };

  const pointFromEvent = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const eraseSegment = (ctx: CanvasRenderingContext2D, from: { x: number; y: number }, to: { x: number; y: number }, width: number) => {
    const distance = Math.hypot(to.x - from.x, to.y - from.y);
    const steps = Math.max(1, Math.ceil(distance / 9));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = from.x + (to.x - from.x) * t;
      const y = from.y + (to.y - from.y) * t;
      ctx.beginPath();
      ctx.arc(x, y, width / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const scratch = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (revealed || !drawingRef.current) return;
    const canvas = event.currentTarget;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const point = pointFromEvent(event);
    const previous = lastPointRef.current ?? point;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "destination-out";

    const width = Math.max(40, Math.min(58, canvas.getBoundingClientRect().width * .095));
    eraseSegment(ctx, previous, point, width);

    // Small irregular flecks make the foil feel scratched rather than painted away.
    if (Math.random() > .72) {
      for (let i = 0; i < 3; i++) {
        const jitterX = point.x + (Math.random() - .5) * width * 1.4;
        const jitterY = point.y + (Math.random() - .5) * width * 1.4;
        const r = 2 + Math.random() * 5;
        ctx.beginPath();
        ctx.arc(jitterX, jitterY, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    lastPointRef.current = point;
    if (Math.random() > .82) measureReveal();
  };

  const stopScratch = () => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    lastPointRef.current = null;
    measureReveal();
  };

  return (
    <section className="scratch-date-section" aria-label="Interactive wedding date reveal">
      <div className="scratch-date-inner">
        <p className="lux-micro gold">A LITTLE REVEAL</p>
        <h2>The day.<br /><em>Hidden in gold.</em></h2>
        <p className="scratch-lead">Scratch across the gold and discover the day our forever begins.</p>

        <div className={`scratch-card ${revealed ? "is-revealed" : ""}`} ref={wrapRef}>
          <div className="scratch-date-underlay">
            <span>THURSDAY</span>
            <strong>27</strong>
            <span>AUGUST · 2026</span>
            <i>THE BEGINNING OF FOREVER</i>
          </div>
          <canvas
            ref={canvasRef}
            className="scratch-canvas"
            aria-hidden="true"
            onPointerDown={(event) => {
              if (revealed) return;
              event.currentTarget.setPointerCapture(event.pointerId);
              drawingRef.current = true;
              lastPointRef.current = pointFromEvent(event);
              const ctx = event.currentTarget.getContext("2d");
              if (ctx) {
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                ctx.globalCompositeOperation = "destination-out";
              }
            }}
            onPointerMove={scratch}
            onPointerUp={stopScratch}
            onPointerCancel={stopScratch}
            onPointerLeave={() => { if (drawingRef.current) stopScratch(); }}
          />
          <div className="scratch-corner">K <i>&amp;</i> T</div>
          <div className={`scratch-card-hint ${revealed ? "hidden" : ""}`}>✦ SCRATCH TO DISCOVER ✦</div>
          <div className="scratch-progress" aria-hidden="true"><span style={{ width: `${Math.min(100, progress * 100)}%` }} /></div>
        </div>

        <button className="scratch-accessible" type="button" onClick={reveal} disabled={revealed}>
          {revealed ? "DATE REVEALED" : "REVEAL WITHOUT SCRATCHING"}
        </button>
      </div>

      <style jsx global>{`
        .scratch-date-section{position:relative;overflow:hidden;background:#0a0907;color:#f3ead9;padding:120px 18px 145px;text-align:center}.scratch-date-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(194,146,52,.1),transparent 42%),radial-gradient(circle,#d9b66a 0 1px,transparent 1.6px);background-size:auto,145px 175px;opacity:.14}.scratch-date-inner{position:relative;z-index:2;max-width:620px;margin:auto}.scratch-date-inner h2{font:300 clamp(3rem,8vw,5.5rem)/.88 var(--font-display);letter-spacing:-.04em;margin:18px 0;color:#f1e7d6}.scratch-date-inner h2 em{font-style:italic;color:#c9a45b}.scratch-lead{font:400 .92rem/1.7 var(--font-body);color:#a49a8b;margin:20px auto 32px;max-width:460px}
        .scratch-card{position:relative;width:min(88vw,520px);aspect-ratio:1.72;margin:0 auto;overflow:hidden;border:1px solid rgba(220,183,99,.65);background:#15100a;box-shadow:0 35px 90px rgba(0,0,0,.6);touch-action:none}.scratch-card:before{content:"";position:absolute;inset:12px;border:1px solid rgba(239,214,157,.25);z-index:8;pointer-events:none}.scratch-card:after{content:"";position:absolute;inset:17px;border:1px solid rgba(239,214,157,.08);z-index:8;pointer-events:none}.scratch-date-underlay{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;background:radial-gradient(circle at 50% 42%,#5a421a,#1b1308 58%,#0b0805);color:#e8d29b}.scratch-date-underlay span{font:500 .5rem var(--font-label);letter-spacing:.34em}.scratch-date-underlay strong{font:300 clamp(4.5rem,15vw,7.5rem)/.82 var(--font-display);color:#f4dfaa}.scratch-date-underlay i{font:400 .45rem var(--font-label);letter-spacing:.24em;color:#b09a72;margin-top:8px}.scratch-canvas{position:absolute;inset:0;width:100%;height:100%;cursor:crosshair;z-index:7}.scratch-card.is-revealed .scratch-canvas{opacity:0;transition:opacity .65s ease;pointer-events:none}.scratch-corner{position:absolute;z-index:9;top:25px;left:28px;font:400 .75rem var(--font-display);color:#f2d88f;pointer-events:none}.scratch-corner i{font-size:.55em;font-style:normal;color:#a7782b}.scratch-card-hint{position:absolute;z-index:9;left:50%;bottom:28px;transform:translateX(-50%);font:500 .43rem var(--font-label);letter-spacing:.2em;color:rgba(247,225,165,.7);white-space:nowrap;pointer-events:none;transition:opacity .3s}.scratch-card-hint.hidden{opacity:0}.scratch-progress{position:absolute;z-index:10;left:24px;right:24px;bottom:17px;height:2px;background:rgba(246,219,159,.12);pointer-events:none}.scratch-progress span{display:block;height:100%;background:#e3c16e;transition:width .18s ease}.scratch-accessible{margin:20px auto 0;padding:11px 24px;border:1px solid rgba(210,168,78,.55);background:transparent;color:#d0ad61;font:500 .48rem var(--font-label);letter-spacing:.2em;transition:.3s}.scratch-accessible:hover:not(:disabled){background:#c9a45b;color:#090806}.scratch-accessible:disabled{opacity:.55}
        @media(max-width:760px){.scratch-date-section{padding:95px 12px 110px}.scratch-date-inner h2{font-size:clamp(2.8rem,13vw,4.4rem)}.scratch-lead{font-size:.86rem}.scratch-card{width:94vw}.scratch-corner{top:19px;left:21px}.scratch-card-hint{bottom:25px;font-size:.38rem}.scratch-progress{left:18px;right:18px;bottom:16px}.scratch-date-underlay span{font-size:.42rem}.scratch-date-underlay i{font-size:.36rem}}
        @media(prefers-reduced-motion:reduce){.scratch-canvas{transition:none}}
      `}</style>
    </section>
  );
}

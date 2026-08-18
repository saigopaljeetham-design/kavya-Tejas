"use client";

import { useEffect, useRef, useState } from "react";

const REVEAL_THRESHOLD = 0.72;

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

    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#6f501d");
    gradient.addColorStop(.22, "#d7b45b");
    gradient.addColorStop(.46, "#8b6423");
    gradient.addColorStop(.68, "#e2c474");
    gradient.addColorStop(1, "#684718");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    const glow = ctx.createRadialGradient(rect.width * .5, rect.height * .45, 10, rect.width * .5, rect.height * .45, rect.width * .65);
    glow.addColorStop(0, "rgba(255,239,184,.25)");
    glow.addColorStop(1, "rgba(255,239,184,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, rect.width, rect.height);

    for (let i = 0; i < 420; i++) {
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      const r = Math.random() * 1.2 + .25;
      ctx.fillStyle = `rgba(255,242,194,${Math.random() * .28})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = "rgba(62,42,13,.7)";
    ctx.lineWidth = 1;
    ctx.strokeRect(12, 12, rect.width - 24, rect.height - 24);

    ctx.globalCompositeOperation = "source-over";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(33,23,10,.82)";
    ctx.font = `600 ${Math.max(10, Math.min(13, rect.width / 38))}px Arial`;
    ctx.fillText("SCRATCH TO REVEAL", rect.width / 2, rect.height * .42);
    ctx.font = `400 ${Math.max(8, Math.min(10, rect.width / 48))}px Arial`;
    ctx.fillStyle = "rgba(49,34,14,.65)";
    ctx.fillText("OUR DAY AWAITS", rect.width / 2, rect.height * .58);

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  };

  useEffect(() => {
    paintFoil();
    const onResize = () => { if (!revealed) paintFoil(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [revealed]);

  const measureReveal = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const sampleW = 72;
    const sampleH = 72;
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
    if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate?.(20);
  };

  const pointFromEvent = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const scratch = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (revealed || !drawingRef.current) return;
    const canvas = event.currentTarget;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const point = pointFromEvent(event);
    const previous = lastPointRef.current ?? point;
    const scaleX = canvas.width / canvas.getBoundingClientRect().width;
    const scaleY = canvas.height / canvas.getBoundingClientRect().height;
    ctx.save();
    ctx.scale(scaleX, scaleY);
    ctx.beginPath();
    ctx.moveTo(previous.x, previous.y);
    ctx.lineTo(point.x, point.y);
    ctx.lineWidth = Math.max(34, canvas.getBoundingClientRect().width * .075);
    ctx.stroke();
    ctx.restore();
    lastPointRef.current = point;
    if (Math.random() > .72) measureReveal();
  };

  const stopScratch = () => {
    drawingRef.current = false;
    lastPointRef.current = null;
    measureReveal();
  };

  return (
    <section className="scratch-date-section" aria-label="Interactive wedding date reveal">
      <div className="scratch-date-inner">
        <p className="lux-micro gold">A LITTLE REVEAL</p>
        <h2>The day.<br /><em>Hidden in gold.</em></h2>
        <p className="scratch-lead">Scratch the foil to reveal the date of our beginning.</p>

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
            }}
            onPointerMove={scratch}
            onPointerUp={stopScratch}
            onPointerCancel={stopScratch}
            onPointerLeave={() => { if (drawingRef.current) stopScratch(); }}
          />
          <div className="scratch-corner">K <i>&amp;</i> T</div>
          <div className="scratch-progress" aria-hidden="true"><span style={{ width: `${Math.min(100, progress * 100)}%` }} /></div>
        </div>

        <button className="scratch-accessible" type="button" onClick={reveal} disabled={revealed}>
          {revealed ? "DATE REVEALED" : "REVEAL DATE"}
        </button>

        <div className={`scratch-result ${revealed ? "visible" : ""}`} aria-live="polite">
          <span>THURSDAY</span>
          <strong>27</strong>
          <span>AUGUST · 2026</span>
          <i>The day our forever begins.</i>
        </div>
      </div>

      <style jsx global>{`
        .scratch-date-section{position:relative;overflow:hidden;background:#0a0907;color:#f3ead9;padding:120px 18px 145px;text-align:center}
        .scratch-date-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(194,146,52,.1),transparent 42%),radial-gradient(circle,#d9b66a 0 1px,transparent 1.6px);background-size:auto,145px 175px;opacity:.14}
        .scratch-date-inner{position:relative;z-index:2;max-width:620px;margin:auto}
        .scratch-date-inner h2{font:300 clamp(3rem,8vw,5.5rem)/.88 var(--font-display);letter-spacing:-.04em;margin:18px 0;color:#f1e7d6}.scratch-date-inner h2 em{font-style:italic;color:#c9a45b}.scratch-lead{font:400 .92rem/1.7 var(--font-body);color:#817a6c;margin:20px auto 32px;max-width:430px}
        .scratch-card{position:relative;width:min(88vw,520px);aspect-ratio:1.72;margin:0 auto;overflow:hidden;border:1px solid rgba(220,183,99,.6);background:#15100a;box-shadow:0 35px 90px rgba(0,0,0,.6);touch-action:none}
        .scratch-card:before{content:"";position:absolute;inset:12px;border:1px solid rgba(239,214,157,.25);z-index:8;pointer-events:none}.scratch-card:after{content:"";position:absolute;inset:17px;border:1px solid rgba(239,214,157,.08);z-index:8;pointer-events:none}
        .scratch-date-underlay{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;background:radial-gradient(circle at 50% 42%,#5a421a,#1b1308 58%,#0b0805);color:#e8d29b}.scratch-date-underlay span{font:500 .5rem var(--font-label);letter-spacing:.34em}.scratch-date-underlay strong{font:300 clamp(4.5rem,15vw,7.5rem)/.82 var(--font-display);color:#f4dfaa}.scratch-date-underlay i{font:400 .45rem var(--font-label);letter-spacing:.24em;color:#9d8a67;margin-top:8px}
        .scratch-canvas{position:absolute;inset:0;width:100%;height:100%;cursor:crosshair;z-index:7}.scratch-card.is-revealed .scratch-canvas{opacity:0;transition:opacity .7s ease;pointer-events:none}.scratch-corner{position:absolute;z-index:9;top:25px;left:28px;font:400 .75rem var(--font-display);color:#f2d88f;pointer-events:none}.scratch-corner i{font-size:.55em;font-style:normal;color:#a7782b}.scratch-progress{position:absolute;z-index:10;left:24px;right:24px;bottom:22px;height:2px;background:rgba(246,219,159,.16);pointer-events:none}.scratch-progress span{display:block;height:100%;background:#e3c16e;transition:width .25s ease}
        .scratch-accessible{margin:20px auto 0;padding:11px 24px;border:1px solid rgba(210,168,78,.55);background:transparent;color:#cba95d;font:500 .48rem var(--font-label);letter-spacing:.25em;transition:.3s}.scratch-accessible:hover:not(:disabled){background:#c9a45b;color:#090806}.scratch-accessible:disabled{opacity:.55}
        .scratch-result{margin:26px auto 0;display:flex;flex-direction:column;align-items:center;opacity:0;transform:translateY(14px);transition:opacity .8s ease,transform .8s ease;pointer-events:none}.scratch-result.visible{opacity:1;transform:none}.scratch-result span{font:500 .48rem var(--font-label);letter-spacing:.34em;color:#a99672}.scratch-result strong{font:300 clamp(4rem,12vw,6.5rem)/.84 var(--font-display);color:#efd38a}.scratch-result i{font:italic 1rem var(--font-display);color:#a88b57;margin-top:8px}
        @media(max-width:760px){.scratch-date-section{padding:95px 12px 110px}.scratch-date-inner h2{font-size:clamp(2.8rem,13vw,4.4rem)}.scratch-lead{font-size:.86rem}.scratch-card{width:94vw}.scratch-corner{top:19px;left:21px}.scratch-progress{left:18px;right:18px;bottom:18px}.scratch-date-underlay span{font-size:.42rem}.scratch-date-underlay i{font-size:.36rem}}
        @media(prefers-reduced-motion:reduce){.scratch-canvas,.scratch-result{transition:none}}
      `}</style>
    </section>
  );
}

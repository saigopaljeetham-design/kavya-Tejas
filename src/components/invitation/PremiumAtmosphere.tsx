"use client";

import { useEffect, useState } from "react";

const petals = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 17 + 5) % 100}%`, delay: `${(i % 7) * 1.1}s`, duration: `${8 + (i % 5) * 1.5}s`, size: `${5 + (i % 4) * 2}px`, drift: `${((i % 5) - 2) * 28}px`,
}));

export function PremiumAtmosphere() {
  const [bells, setBells] = useState(0);
  useEffect(() => { if (!bells) return; const timer = window.setTimeout(() => setBells(0), 900); return () => window.clearTimeout(timer); }, [bells]);

  return (
    <>
      <div className="premium-petals" aria-hidden="true">{petals.map((petal,i)=><span key={i} className="premium-petal" style={{left:petal.left,animationDelay:petal.delay,animationDuration:petal.duration,width:petal.size,height:`calc(${petal.size} * .62)`,["--petal-drift" as string]:petal.drift}} />)}</div>
      <button className={`premium-bell ${bells ? "is-ringing" : ""}`} aria-label="Ring the wedding bell" onClick={() => { setBells(v=>v+1); if(typeof navigator!=="undefined"&&"vibrate"in navigator) navigator.vibrate?.(12); }}><span>♢</span><i aria-hidden="true" /></button>
      {bells > 0 && <span className="bell-ripple" aria-hidden="true" />}
      <style jsx global>{`
        .lux-nav-actions button:last-child{position:relative;min-width:48px;display:inline-flex;align-items:center;justify-content:center;gap:5px;border:1px solid rgba(214,177,91,.18);border-radius:999px;background:rgba(12,10,7,.52);backdrop-filter:blur(12px);box-shadow:0 8px 25px rgba(0,0,0,.18);transition:.35s}.lux-nav-actions button:last-child:after{content:"";width:13px;height:10px;display:inline-block;background:linear-gradient(90deg,#cba65c 0 2px,transparent 2px 4px,#cba65c 4px 6px,transparent 6px 8px,#cba65c 8px 10px,transparent 10px 12px);animation:audioBars 1.15s ease-in-out infinite;opacity:.65}.lux-nav-actions button:last-child:hover{border-color:rgba(214,177,91,.55);box-shadow:0 0 28px rgba(214,177,91,.12)}@keyframes audioBars{0%,100%{transform:scaleY(.45)}50%{transform:scaleY(1.15)}}
        .premium-bell{touch-action:manipulation}.premium-bell.is-ringing{animation:premiumBellPulse .8s ease}.bell-ripple{animation:bellRipple .8s ease both}@keyframes premiumBellPulse{25%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}75%{transform:rotate(-4deg)}100%{transform:rotate(0)}}@keyframes bellRipple{from{opacity:.55;transform:scale(.75)}to{opacity:0;transform:scale(2.2)}}
        @media(max-width:760px){.lux-nav-actions button:last-child{min-width:44px;padding:7px 9px}}
      `}</style>
    </>
  );
}

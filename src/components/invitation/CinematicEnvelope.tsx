"use client";

import Image from "next/image";
import { useState } from "react";

export function CinematicEnvelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const open = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 900);
  };

  return (
    <section className={`cinema-v2 ${opening ? "is-opening" : ""}`} aria-label="Kavya and Tejas wedding invitation">
      <div className="v2-stars" />
      <div className="v2-bokeh" />
      <div className="v2-glow" />
      <div className="v2-frame" />

      <header className="v2-header">
        <span className="v2-mini-mark">K <i>&amp;</i> T</span>
        <span className="v2-private">A PRIVATE INVITATION</span>
        <span className="v2-controls">EN&nbsp;&nbsp; ♫</span>
      </header>

      <main className="v2-stage">
        <div className="v2-copy">
          <p className="v2-kicker">WITH THE BLESSINGS OF OUR FAMILIES</p>
          <div className="v2-monogram" aria-label="K and T monogram">
            <span className="v2-ornament top">❧</span>
            <div className="v2-monogram-ring"><strong>K</strong><b>&amp;</b><strong>T</strong></div>
            <span className="v2-ornament bottom">❧</span>
          </div>
          <h1>Kavya <em>and</em> Tejas</h1>
          <div className="v2-rule"><span>✦</span></div>
          <p className="v2-date">THURSDAY · 27 AUGUST 2026</p>
          <p className="v2-invite">TOGETHER WITH THEIR FAMILIES<br />INVITE YOU TO CELEBRATE<br />THE BEGINNING OF THEIR FOREVER</p>
        </div>

        <button className="v2-envelope-wrap" onClick={open} aria-label="Open invitation">
          <div className="v2-envelope">
            <div className="v2-envelope-back" />
            <div className="v2-inner-card">
              <small>WITH THE BLESSINGS OF OUR FAMILIES</small>
              <strong>Kavya <i>and</i> Tejas</strong>
              <span>THE BEGINNING OF THEIR FOREVER</span>
              <b>27 · 08 · 2026</b>
            </div>
            <div className="v2-gold-flap" />
            <div className="v2-front">
              <span>K <i>&amp;</i> T</span>
              <small>27 · 08 · 2026</small>
            </div>
            <div className="v2-seal"><span>K</span><i>&amp;</i><span>T</span><b>❧</b></div>
          </div>
        </button>

        <button className="v2-open" onClick={open} disabled={opening}>
          <span>{opening ? "OPENING" : "OPEN INVITATION"}</span><b>↓</b>
        </button>
        <p className="v2-hint">TAP THE INVITATION TO BEGIN</p>
      </main>

      <div className="v2-mandap-image" aria-hidden="true">
        <Image src="/images/decorations/reference-mandap.jpg" alt="" fill sizes="(max-width: 760px) 100vw, 520px" priority className="v2-mandap-photo" />
      </div>

      <div className="v2-bottom"><span>ONE DAY</span><i>✦</i><span>ONE PROMISE</span><i>✦</i><span>ONE BEGINNING</span></div>
      <div className="v2-flash" />

      <style jsx>{`
        .cinema-v2{position:fixed;inset:0;z-index:9999;overflow:hidden;isolation:isolate;background:radial-gradient(circle at 50% 30%,#241807 0%,#0a0805 44%,#020202 100%);color:#f8edcf;display:grid;place-items:center;font-family:var(--font-body)}
        .v2-stars{position:absolute;inset:-10%;opacity:.62;background-image:radial-gradient(circle,rgba(238,194,92,.95) 0 1px,transparent 1.8px),radial-gradient(circle,rgba(255,226,151,.55) 0 1.2px,transparent 1.8px);background-size:79px 97px,131px 137px;mask-image:linear-gradient(to bottom,black,transparent 88%);animation:v2Drift 22s linear infinite}
        .v2-bokeh{position:absolute;inset:0;background:radial-gradient(circle at 16% 7%,rgba(242,196,90,.28) 0 10px,transparent 32px),radial-gradient(circle at 88% 14%,rgba(242,196,90,.18) 0 15px,transparent 44px),radial-gradient(circle at 8% 78%,rgba(215,164,61,.18) 0 20px,transparent 60px);filter:blur(3px);opacity:.8}
        .v2-glow{position:absolute;width:78vmin;height:78vmin;border-radius:50%;background:radial-gradient(circle,rgba(220,169,65,.14),transparent 68%);filter:blur(35px);animation:v2Glow 7s ease-in-out infinite}
        .v2-frame{position:absolute;inset:15px;border:1px solid rgba(215,169,77,.28);pointer-events:none}.v2-frame:after{content:"";position:absolute;inset:7px;border:1px solid rgba(215,169,77,.07)}
        .v2-header{position:absolute;top:28px;left:31px;right:31px;display:flex;justify-content:space-between;align-items:center;z-index:10}.v2-mini-mark{font-family:var(--font-display);font-size:1.45rem;color:#e7c76f}.v2-mini-mark i{font-size:.5em;font-style:normal;color:#bd8d36}.v2-private,.v2-controls{font-family:var(--font-label);font-size:.43rem;letter-spacing:.28em;color:#b29a6b;text-transform:uppercase}.v2-controls{letter-spacing:.18em;color:#d4b665}
        .v2-stage{position:relative;z-index:6;width:min(92vw,620px);height:100svh;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:88px 0 165px;box-sizing:border-box}.v2-copy{text-align:center;position:relative;z-index:8;animation:v2Reveal 1.1s ease both}.v2-kicker{font-family:var(--font-label);font-size:.46rem;letter-spacing:.33em;color:#c1a66d;margin:3px 0 10px;text-transform:uppercase}.v2-monogram{position:relative;width:132px;height:132px;margin:0 auto 8px;display:grid;place-items:center}.v2-monogram-ring{width:108px;height:108px;border:1px solid #d3a94e;border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;box-shadow:0 0 0 1px rgba(208,163,73,.12),0 0 35px rgba(197,148,46,.1)}.v2-monogram-ring:before,.v2-monogram-ring:after{content:"";position:absolute;width:7px;height:7px;border:1px solid #d3a94e;border-radius:50%;background:#0b0805}.v2-monogram-ring:before{top:-4px}.v2-monogram-ring:after{bottom:-4px}.v2-monogram-ring strong{font-family:var(--font-display);font-size:3.25rem;font-weight:400;line-height:1;color:#f0d184}.v2-monogram-ring b{font-family:var(--font-display);font-size:1.7rem;font-weight:400;color:#b98b36;margin:24px -2px 0}.v2-ornament{position:absolute;color:#d8b45e;font-size:1.3rem;line-height:1}.v2-ornament.top{top:-1px;transform:rotate(180deg)}.v2-ornament.bottom{bottom:-2px}.v2-copy h1{font-family:var(--font-display);font-size:clamp(2.7rem,8vw,4.9rem);font-weight:300;line-height:.94;margin:0;color:#f4e4bc;letter-spacing:-.035em}.v2-copy h1 em{font-size:.38em;color:#d2a34d;font-style:italic;margin:0 .2em}.v2-rule{width:96px;height:1px;background:linear-gradient(90deg,transparent,#d9b45c,transparent);margin:13px auto 10px;position:relative}.v2-rule span{position:absolute;left:50%;top:50%;transform:translate(-50%,-53%);font-size:.58rem;color:#e2c273;background:#0c0805;padding:0 8px}.v2-date{font-family:var(--font-label);font-size:.43rem;letter-spacing:.31em;color:#c2a970;margin:0}.v2-invite{font-family:var(--font-body);font-size:.52rem;line-height:1.75;letter-spacing:.16em;color:#b5a487;margin:10px 0 0}
        .v2-envelope-wrap{position:relative;z-index:9;width:min(86vw,500px);height:min(34vw,230px);min-height:180px;margin:20px 0 14px;padding:0;border:0;background:transparent;filter:drop-shadow(0 32px 45px rgba(0,0,0,.72));perspective:1400px;animation:v2Float 5.5s ease-in-out infinite;touch-action:manipulation}.v2-envelope{position:absolute;inset:0;transform-style:preserve-3d}.v2-envelope-back{position:absolute;inset:0;background:linear-gradient(145deg,#34250f,#0d0905);border:1px solid rgba(213,169,78,.68);box-shadow:inset 0 0 55px rgba(0,0,0,.42);clip-path:polygon(0 0,50% 51%,100% 0,100% 100%,0 100%)}.v2-inner-card{position:absolute;z-index:2;left:8%;top:6%;width:84%;height:88%;background:linear-gradient(145deg,#f7efdf,#e9ddc5);color:#49351d;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px;opacity:0;transform:translateY(8%);transition:opacity .28s,transform .7s cubic-bezier(.2,.8,.2,1) .05s}.v2-inner-card small,.v2-inner-card span,.v2-inner-card b{font-family:var(--font-label);font-size:.33rem;letter-spacing:.19em}.v2-inner-card strong{font-family:var(--font-display);font-size:clamp(1.8rem,5vw,3rem);font-weight:400}.v2-inner-card strong i{font-size:.42em;color:#9c7131}.v2-gold-flap{position:absolute;z-index:5;inset:0 0 auto;height:67%;background:linear-gradient(155deg,#493513,#1a1007);clip-path:polygon(0 0,100% 0,50% 95%);border:1px solid rgba(218,177,91,.7);transform-origin:top center;transition:transform .72s cubic-bezier(.72,0,.18,1)}.v2-front{position:absolute;z-index:4;left:0;right:0;bottom:0;height:71%;clip-path:polygon(0 0,50% 59%,100% 0,100% 100%,0 100%);background:linear-gradient(155deg,#2d1f0e,#0d0804);border:1px solid rgba(207,163,76,.65);display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:17px;gap:6px}.v2-front span{font-family:var(--font-display);font-size:1rem;letter-spacing:.12em;color:#e5c574}.v2-front span i{font-style:normal;font-size:.5em;color:#b98a34}.v2-front small{font-family:var(--font-label);font-size:.36rem;letter-spacing:.3em;color:#c4a55d}.v2-seal{position:absolute;z-index:8;left:50%;top:61%;transform:translate(-50%,-50%);width:67px;height:67px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 35% 25%,#e6c976,#79531b 75%);border:2px solid #f1d99c;box-shadow:0 0 0 5px rgba(206,166,79,.13),0 10px 28px rgba(0,0,0,.6);font-family:var(--font-display);color:#fff2c9;font-size:1.15rem;transition:.4s}.v2-seal i{font-style:normal;font-size:.42em;margin:20px -1px 0}.v2-seal b{position:absolute;bottom:5px;font-size:.58rem;color:#f5d77d}
        .v2-open{z-index:10;display:flex;align-items:center;gap:14px;min-width:220px;justify-content:center;padding:13px 23px;border:1px solid rgba(218,177,92,.72);color:#e5c679;background:rgba(7,5,3,.58);font-family:var(--font-label);font-size:.5rem;letter-spacing:.25em;transition:.35s}.v2-open:disabled{opacity:.8}.v2-open:hover:not(:disabled){background:#d0a44e;color:#100b05;box-shadow:0 0 35px rgba(213,164,69,.18);transform:translateY(-2px)}.v2-open b{font-size:1rem;font-weight:300}.v2-hint{z-index:10;font-family:var(--font-label);font-size:.36rem;letter-spacing:.34em;color:#74664e;margin:9px 0 0;animation:v2Pulse 2.3s ease-in-out infinite}
        .v2-mandap-image{position:absolute;z-index:2;left:50%;bottom:-70px;width:min(72vw,430px);height:min(56vh,570px);transform:translateX(-50%);opacity:.52;pointer-events:none;mask-image:linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.1) 12%,#000 34%,#000 82%,transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.1) 12%,#000 34%,#000 82%,transparent 100%);filter:saturate(.7) brightness(.78) contrast(1.08);}.v2-mandap-photo{object-fit:cover;object-position:center 73%;mix-blend-mode:screen}.v2-bottom{position:absolute;z-index:7;bottom:24px;left:50%;transform:translateX(-50%);display:flex;align-items:center;justify-content:center;gap:10px;white-space:nowrap;font:400 .36rem var(--font-label);letter-spacing:.2em;color:#8d7952}.v2-bottom i{font-style:normal;color:#c9a45b}.v2-flash{position:absolute;inset:0;background:#fff4d5;opacity:0;pointer-events:none}.cinema-v2.is-opening .v2-gold-flap{transform:rotateX(-118deg)}.cinema-v2.is-opening .v2-inner-card{opacity:1;transform:translateY(-9%)}.cinema-v2.is-opening .v2-seal{opacity:0;transform:translate(-50%,-50%) scale(.7)}.cinema-v2.is-opening .v2-envelope-wrap{animation:none;transform:translateY(8px) scale(1.015)}.cinema-v2.is-opening .v2-flash{animation:v2Flash .8s .55s ease both}
        @media(max-width:760px){.v2-header{top:20px;left:22px;right:22px}.v2-private{font-size:.37rem}.v2-stage{width:94vw;padding-top:72px;padding-bottom:130px}.v2-kicker{font-size:.38rem;letter-spacing:.25em}.v2-monogram{width:112px;height:112px}.v2-monogram-ring{width:92px;height:92px}.v2-monogram-ring strong{font-size:2.8rem}.v2-copy h1{font-size:clamp(2.45rem,10.5vw,4rem)}.v2-date{font-size:.37rem;letter-spacing:.25em}.v2-invite{font-size:.44rem;line-height:1.65}.v2-envelope-wrap{width:92vw;height:220px;min-height:200px;margin:17px 0 12px}.v2-front span{font-size:1.05rem}.v2-seal{width:62px;height:62px}.v2-open{min-width:205px;padding:12px 18px}.v2-hint{font-size:.32rem}.v2-mandap-image{width:82vw;height:44vh;bottom:-42px;opacity:.42}.v2-bottom{bottom:14px;gap:6px;font-size:.29rem;letter-spacing:.14em}}
        @media(max-height:760px){.v2-stage{padding-top:70px}.v2-monogram{width:100px;height:100px}.v2-monogram-ring{width:82px;height:82px}.v2-envelope-wrap{height:185px;min-height:175px;margin:12px 0}.v2-invite{margin-top:7px}.v2-mandap-image{height:38vh}}
        @media(prefers-reduced-motion:reduce){.v2-stars,.v2-glow,.v2-envelope-wrap,.v2-hint{animation:none}.v2-flash,.v2-gold-flap,.v2-inner-card,.v2-seal{transition:none}}
      `}</style>
    </section>
  );
}

"use client";

import { useState } from "react";

export function CinematicEnvelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const open = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 1450);
  };

  return (
    <section className={`cinema-v2 ${opening ? "is-opening" : ""}`} aria-label="Kavya and Tejas wedding invitation">
      <div className="v2-stars" />
      <div className="v2-glow" />
      <div className="v2-frame" />

      <header className="v2-header">
        <span className="v2-mark">K <i>&amp;</i> T</span>
        <span className="v2-private">A PRIVATE INVITATION</span>
        <span className="v2-year">2026</span>
      </header>

      <main className="v2-stage">
        <div className="v2-copy">
          <div className="v2-crest">✦</div>
          <p className="v2-kicker">WITH THE BLESSINGS OF OUR FAMILIES</p>
          <h1>Kavya <em>and</em> Tejas</h1>
          <div className="v2-rule"><span>◇</span></div>
          <p className="v2-date">THURSDAY · 27 AUGUST 2026</p>
        </div>

        <button className="v2-envelope-wrap" onClick={open} aria-label="Open invitation">
          <div className="v2-envelope">
            <div className="v2-envelope-back" />
            <div className="v2-paper">
              <small>TOGETHER WITH THEIR FAMILIES</small>
              <strong>Kavya <i>and</i> Tejas</strong>
              <span>INVITE YOU TO CELEBRATE<br />THE BEGINNING OF THEIR FOREVER</span>
              <b>27 · 08 · 2026</b>
            </div>
            <div className="v2-flap" />
            <div className="v2-front"><span>K &amp; T</span><small>27 · 08 · 2026</small></div>
            <div className="v2-seal">K <i>&amp;</i> T</div>
          </div>
        </button>

        <button className="v2-open" onClick={open}>
          <span>{opening ? "OPENING" : "OPEN INVITATION"}</span>
          <b>↓</b>
        </button>
        <p className="v2-hint">TAP TO BEGIN</p>
      </main>

      <div className="v2-bottom"><span>ONE DAY</span><i>•</i><span>ONE PROMISE</span><i>•</i><span>ONE BEGINNING</span></div>
      <div className="v2-flash" />

      <style jsx>{`
        .cinema-v2{position:fixed;inset:0;z-index:9999;overflow:hidden;isolation:isolate;background:radial-gradient(circle at 50% 42%,#21180b 0%,#0b0906 42%,#030302 100%);color:#f5eddf;display:grid;place-items:center;cursor:default;font-family:var(--font-body)}
        .v2-stars{position:absolute;inset:-10%;opacity:.48;background-image:radial-gradient(circle,rgba(232,207,151,.8) 0 1px,transparent 1.5px);background-size:91px 103px;mask-image:radial-gradient(circle,black,transparent 72%);animation:v2Drift 20s linear infinite}
        .v2-glow{position:absolute;width:75vmin;height:75vmin;border-radius:50%;background:radial-gradient(circle,rgba(208,166,83,.18),transparent 67%);filter:blur(35px);animation:v2Glow 6s ease-in-out infinite}
        .v2-frame{position:absolute;inset:18px;border:1px solid rgba(208,166,83,.2);pointer-events:none}.v2-frame:after{content:"";position:absolute;inset:8px;border:1px solid rgba(208,166,83,.06)}
        .v2-header{position:absolute;top:34px;left:42px;right:42px;display:flex;justify-content:space-between;align-items:center;z-index:5}.v2-mark{font-family:var(--font-display);font-size:1.65rem;color:#e4cb95;letter-spacing:.02em}.v2-mark i{font-size:.48em;color:#bd9144;font-style:normal}.v2-private,.v2-year{font-family:var(--font-label);font-size:.46rem;letter-spacing:.32em;color:#897e6c;text-transform:uppercase}
        .v2-stage{position:relative;z-index:3;width:min(92vw,760px);height:100svh;min-height:650px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:90px 0 70px}
        .v2-copy{text-align:center;position:relative;z-index:4;animation:v2Reveal 1.5s ease both}.v2-crest{color:#d7b66f;font-size:1.25rem;text-shadow:0 0 20px rgba(224,188,106,.4);animation:v2Twinkle 2.8s infinite}.v2-kicker{font-family:var(--font-label);font-size:.49rem;letter-spacing:.34em;color:#a99b83;margin:15px 0 12px;text-transform:uppercase}.v2-copy h1{font-family:var(--font-display);font-size:clamp(3rem,8vw,5.6rem);font-weight:300;line-height:.9;margin:0;color:#f2e4c6;letter-spacing:-.035em}.v2-copy h1 em{font-size:.38em;color:#c9a45b;font-style:italic;margin:0 .22em}.v2-rule{width:86px;height:1px;background:linear-gradient(90deg,transparent,#d6b36a,transparent);margin:20px auto 15px;position:relative}.v2-rule span{position:absolute;left:50%;top:50%;transform:translate(-50%,-53%);font-size:.65rem;color:#d8b96e;background:#110d08;padding:0 7px}.v2-date{font-family:var(--font-label);font-size:.49rem;letter-spacing:.34em;color:#a99d88}
        .v2-envelope-wrap{position:relative;width:min(82vw,540px);height:min(42vw,285px);min-height:215px;margin:30px 0 28px;padding:0;border:0;background:transparent;filter:drop-shadow(0 35px 45px rgba(0,0,0,.65));perspective:1400px;animation:v2Float 5s ease-in-out infinite}.v2-envelope{position:absolute;inset:0;transform-style:preserve-3d}.v2-envelope-back{position:absolute;inset:0;background:linear-gradient(145deg,#4d371b,#1b1208);border:1px solid rgba(213,176,100,.52);clip-path:polygon(0 0,50% 52%,100% 0,100% 100%,0 100%);box-shadow:inset 0 0 50px rgba(0,0,0,.3)}
        .v2-paper{position:absolute;z-index:2;left:8%;top:7%;width:84%;height:86%;background:linear-gradient(145deg,#f7efdf,#e7dcc5);color:#4b3b27;border:1px solid rgba(154,116,51,.28);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:15px;transform:translateY(10%);transition:transform 1.1s cubic-bezier(.2,.8,.2,1) .15s;box-shadow:0 12px 30px rgba(0,0,0,.22)}.v2-paper small,.v2-paper span,.v2-paper b{font-family:var(--font-label);font-size:.38rem;letter-spacing:.2em}.v2-paper strong{font-family:var(--font-display);font-size:clamp(2rem,5vw,3.3rem);font-weight:400}.v2-paper strong i{font-size:.45em;color:#9d7535}.v2-paper b{color:#9b763c;margin-top:4px}.v2-flap{position:absolute;z-index:5;inset:0 0 auto;height:64%;background:linear-gradient(155deg,#5e4523,#291c0d);clip-path:polygon(0 0,100% 0,50% 94%);border:1px solid rgba(216,179,104,.55);transform-origin:top center;transition:transform 1.05s cubic-bezier(.72,0,.18,1)}
        .v2-front{position:absolute;z-index:4;left:0;right:0;bottom:0;height:70%;clip-path:polygon(0 0,50% 58%,100% 0,100% 100%,0 100%);background:linear-gradient(155deg,#3d2a14,#160e07);border:1px solid rgba(207,166,86,.5);display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:20px;gap:7px}.v2-front span{font-family:var(--font-display);font-size:1rem;letter-spacing:.18em;color:#e2c783}.v2-front small{font-family:var(--font-label);font-size:.4rem;letter-spacing:.3em;color:#c7a65e}.v2-seal{position:absolute;z-index:7;left:50%;top:60%;transform:translate(-50%,-50%);width:66px;height:66px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 35% 30%,#e4c47a,#77541e 72%);border:2px solid #f0dba2;box-shadow:0 0 0 5px rgba(206,168,91,.13),0 10px 24px rgba(0,0,0,.55);font-family:var(--font-display);font-size:1.1rem;color:#fff3ce;transition:transform .6s,opacity .4s}.v2-seal i{font-size:.45em;font-style:normal}
        .v2-open{z-index:6;display:flex;align-items:center;gap:14px;min-width:205px;justify-content:center;padding:13px 22px;border:1px solid rgba(210,172,95,.58);color:#e4c987;background:rgba(8,6,4,.3);font-family:var(--font-label);font-size:.52rem;letter-spacing:.24em;transition:.35s}.v2-open b{font-size:1rem;font-weight:300}.v2-open:hover{background:#c9a45b;color:#120e08;transform:translateY(-2px)}.v2-hint{z-index:5;font-family:var(--font-label);font-size:.4rem;letter-spacing:.4em;color:#665e51;margin:13px 0 0;animation:v2Pulse 2.2s ease-in-out infinite}.v2-bottom{position:absolute;bottom:28px;z-index:4;display:flex;gap:14px;align-items:center;font-family:var(--font-label);font-size:.39rem;letter-spacing:.28em;color:#625a4c}.v2-bottom i{color:#a47b37;font-style:normal}.v2-flash{position:absolute;inset:0;background:radial-gradient(circle,rgba(255,225,156,.7),transparent 45%);opacity:0;pointer-events:none;z-index:20}
        .is-opening .v2-flap{transform:rotateX(178deg)}.is-opening .v2-paper{transform:translateY(-62%)}.is-opening .v2-seal{opacity:0;transform:translate(-50%,-50%) scale(1.4)}.is-opening .v2-copy{opacity:0;transform:translateY(-25px);transition:.7s}.is-opening .v2-open,.is-opening .v2-hint{opacity:0}.is-opening .v2-envelope-wrap{transform:translateY(20px) scale(1.04);transition:transform 1.1s}.is-opening .v2-flash{animation:v2Flash 1.45s ease both}
        @keyframes v2Reveal{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes v2Glow{0%,100%{transform:scale(.88);opacity:.55}50%{transform:scale(1.1);opacity:1}}@keyframes v2Drift{to{background-position:91px 103px}}@keyframes v2Float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}@keyframes v2Twinkle{0%,100%{opacity:.55;transform:scale(.95)}50%{opacity:1;transform:scale(1.08)}}@keyframes v2Pulse{0%,100%{opacity:.35}50%{opacity:.9}}@keyframes v2Flash{0%,65%{opacity:0}82%{opacity:.95}100%{opacity:0}}
        @media(max-width:600px){.v2-header{top:24px;left:25px;right:25px}.v2-private{display:none}.v2-stage{padding-top:72px;min-height:100svh}.v2-copy{margin-top:0}.v2-kicker{font-size:.42rem;letter-spacing:.25em}.v2-copy h1{font-size:clamp(2.65rem,11vw,4.4rem)}.v2-date{font-size:.42rem;letter-spacing:.24em}.v2-envelope-wrap{width:88vw;height:49vw;min-height:190px;margin:28px 0 25px}.v2-seal{width:58px;height:58px}.v2-paper strong{font-size:clamp(1.8rem,8vw,2.6rem)}.v2-paper{gap:7px}.v2-paper small,.v2-paper span,.v2-paper b{font-size:.32rem}.v2-bottom{bottom:18px;font-size:.32rem;gap:8px}.v2-frame{inset:10px}}
        @media(prefers-reduced-motion:reduce){.v2-stars,.v2-glow,.v2-envelope-wrap,.v2-crest,.v2-hint{animation:none}.v2-flap,.v2-paper{transition:none}}
      `}</style>
    </section>
  );
}

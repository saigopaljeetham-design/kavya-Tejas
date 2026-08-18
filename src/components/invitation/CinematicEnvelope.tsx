"use client";

import { useState } from "react";

export function CinematicEnvelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const open = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 1500);
  };

  return (
    <section
      className={`cinema-v2 ${opening ? "is-opening" : ""}`}
      aria-label="Kavya and Tejas wedding invitation"
    >
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
            <div className="v2-monogram-ring">
              <strong>K</strong><b>&amp;</b><strong>T</strong>
            </div>
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

        <button className="v2-open" onClick={open}>
          <span>{opening ? "OPENING" : "OPEN INVITATION"}</span>
          <b>↓</b>
        </button>
        <p className="v2-hint">SWIPE UP TO BEGIN</p>
      </main>

      <div className="v2-mandap" aria-hidden="true">
        <div className="mandap-garland garland-left" />
        <div className="mandap-garland garland-right" />
        <div className="mandap-roof"><span /></div>
        <div className="mandap-pillar left"><i /><b /></div>
        <div className="mandap-pillar right"><i /><b /></div>
        <div className="mandap-stage"><span className="diya d1" /><span className="diya d2" /><span className="mandap-om">ॐ</span></div>
      </div>

      <div className="v2-bottom"><span>ONE DAY</span><i>✦</i><span>ONE PROMISE</span><i>✦</i><span>ONE BEGINNING</span></div>
      <div className="v2-flash" />

      <style jsx>{`
        .cinema-v2{position:fixed;inset:0;z-index:9999;overflow:hidden;isolation:isolate;background:radial-gradient(circle at 50% 35%,#211607 0%,#0a0805 43%,#020202 100%);color:#f8edcf;display:grid;place-items:center;font-family:var(--font-body)}
        .v2-stars{position:absolute;inset:-10%;opacity:.65;background-image:radial-gradient(circle,rgba(238,194,92,.95) 0 1px,transparent 1.8px),radial-gradient(circle,rgba(255,226,151,.55) 0 1.2px,transparent 1.8px);background-size:79px 97px,131px 137px;mask-image:linear-gradient(to bottom,black,transparent 88%);animation:v2Drift 22s linear infinite}
        .v2-bokeh{position:absolute;inset:0;background:radial-gradient(circle at 16% 7%,rgba(242,196,90,.28) 0 10px,transparent 32px),radial-gradient(circle at 88% 14%,rgba(242,196,90,.18) 0 15px,transparent 44px),radial-gradient(circle at 8% 78%,rgba(215,164,61,.18) 0 20px,transparent 60px);filter:blur(3px);opacity:.8}
        .v2-glow{position:absolute;width:78vmin;height:78vmin;border-radius:50%;background:radial-gradient(circle,rgba(220,169,65,.14),transparent 68%);filter:blur(35px);animation:v2Glow 7s ease-in-out infinite}
        .v2-frame{position:absolute;inset:15px;border:1px solid rgba(215,169,77,.28);pointer-events:none}.v2-frame:after{content:"";position:absolute;inset:7px;border:1px solid rgba(215,169,77,.07)}
        .v2-header{position:absolute;top:28px;left:31px;right:31px;display:flex;justify-content:space-between;align-items:center;z-index:10}.v2-mini-mark{font-family:var(--font-display);font-size:1.45rem;color:#e7c76f}.v2-mini-mark i{font-size:.5em;font-style:normal;color:#bd8d36}.v2-private,.v2-controls{font-family:var(--font-label);font-size:.43rem;letter-spacing:.28em;color:#b29a6b;text-transform:uppercase}.v2-controls{letter-spacing:.18em;color:#d4b665}
        .v2-stage{position:relative;z-index:6;width:min(92vw,620px);height:100svh;min-height:650px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:90px 0 170px;box-sizing:border-box}.v2-copy{text-align:center;position:relative;z-index:8;animation:v2Reveal 1.25s ease both}.v2-kicker{font-family:var(--font-label);font-size:.46rem;letter-spacing:.33em;color:#c1a66d;margin:3px 0 12px;text-transform:uppercase}.v2-monogram{position:relative;width:150px;height:150px;margin:0 auto 10px;display:grid;place-items:center}.v2-monogram-ring{width:119px;height:119px;border:1px solid #d3a94e;border-radius:50%;display:flex;align-items:center;justify-content:center;gap:0;position:relative;box-shadow:0 0 0 1px rgba(208,163,73,.12),0 0 35px rgba(197,148,46,.1)}.v2-monogram-ring:before,.v2-monogram-ring:after{content:"";position:absolute;width:7px;height:7px;border:1px solid #d3a94e;border-radius:50%;background:#0b0805}.v2-monogram-ring:before{top:-4px}.v2-monogram-ring:after{bottom:-4px}.v2-monogram-ring strong{font-family:var(--font-display);font-size:3.6rem;font-weight:400;line-height:1;color:#f0d184}.v2-monogram-ring b{font-family:var(--font-display);font-size:1.8rem;font-weight:400;color:#b98b36;margin:26px -2px 0}.v2-ornament{position:absolute;color:#d8b45e;font-size:1.45rem;line-height:1}.v2-ornament.top{top:-2px;transform:rotate(180deg)}.v2-ornament.bottom{bottom:-4px}.v2-copy h1{font-family:var(--font-display);font-size:clamp(2.8rem,8vw,4.9rem);font-weight:300;line-height:.94;margin:0;color:#f4e4bc;letter-spacing:-.035em}.v2-copy h1 em{font-size:.38em;color:#d2a34d;font-style:italic;margin:0 .2em}.v2-rule{width:96px;height:1px;background:linear-gradient(90deg,transparent,#d9b45c,transparent);margin:16px auto 12px;position:relative}.v2-rule span{position:absolute;left:50%;top:50%;transform:translate(-50%,-53%);font-size:.58rem;color:#e2c273;background:#0c0805;padding:0 8px}.v2-date{font-family:var(--font-label);font-size:.45rem;letter-spacing:.31em;color:#c2a970;margin:0}.v2-invite{font-family:var(--font-body);font-size:.55rem;line-height:1.9;letter-spacing:.18em;color:#b5a487;margin:14px 0 0}
        .v2-envelope-wrap{position:relative;z-index:9;width:min(82vw,500px);height:min(38vw,250px);min-height:190px;margin:24px 0 17px;padding:0;border:0;background:transparent;filter:drop-shadow(0 32px 45px rgba(0,0,0,.72));perspective:1400px;animation:v2Float 5.5s ease-in-out infinite}.v2-envelope{position:absolute;inset:0;transform-style:preserve-3d}.v2-envelope-back{position:absolute;inset:0;background:linear-gradient(145deg,#34250f,#0d0905);border:1px solid rgba(213,169,78,.68);box-shadow:inset 0 0 55px rgba(0,0,0,.42);clip-path:polygon(0 0,50% 51%,100% 0,100% 100%,0 100%)}
        .v2-inner-card{position:absolute;z-index:2;left:8%;top:6%;width:84%;height:88%;background:linear-gradient(145deg,#f7efdf,#e9ddc5);color:#49351d;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px;opacity:0;transform:translateY(8%);transition:opacity .35s,transform 1.05s cubic-bezier(.2,.8,.2,1) .15s}.v2-inner-card small,.v2-inner-card span,.v2-inner-card b{font-family:var(--font-label);font-size:.33rem;letter-spacing:.19em}.v2-inner-card strong{font-family:var(--font-display);font-size:clamp(1.8rem,5vw,3rem);font-weight:400}.v2-inner-card strong i{font-size:.42em;color:#9c7131}.v2-gold-flap{position:absolute;z-index:5;inset:0 0 auto;height:67%;background:linear-gradient(155deg,#493513,#1a1007);clip-path:polygon(0 0,100% 0,50% 95%);border:1px solid rgba(218,177,91,.7);transform-origin:top center;transition:transform 1.05s cubic-bezier(.72,0,.18,1)}.v2-front{position:absolute;z-index:4;left:0;right:0;bottom:0;height:71%;clip-path:polygon(0 0,50% 59%,100% 0,100% 100%,0 100%);background:linear-gradient(155deg,#2d1f0e,#0d0804);border:1px solid rgba(207,163,76,.65);display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:17px;gap:6px}.v2-front span{font-family:var(--font-display);font-size:1rem;letter-spacing:.12em;color:#e5c574}.v2-front span i{font-style:normal;font-size:.5em;color:#b98a34}.v2-front small{font-family:var(--font-label);font-size:.36rem;letter-spacing:.3em;color:#c4a55d}
        .v2-seal{position:absolute;z-index:8;left:50%;top:61%;transform:translate(-50%,-50%);width:67px;height:67px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 35% 25%,#e6c976,#79531b 75%);border:2px solid #f1d99c;box-shadow:0 0 0 5px rgba(206,166,79,.13),0 10px 28px rgba(0,0,0,.6);font-family:var(--font-display);color:#fff2c9;font-size:1.15rem;transition:.55s}.v2-seal i{font-style:normal;font-size:.42em;margin:20px -1px 0}.v2-seal b{position:absolute;bottom:5px;font-size:.58rem;color:#f5d77d}
        .v2-open{z-index:10;display:flex;align-items:center;gap:14px;min-width:220px;justify-content:center;padding:13px 23px;border:1px solid rgba(218,177,92,.72);color:#e5c679;background:rgba(7,5,3,.58);font-family:var(--font-label);font-size:.5rem;letter-spacing:.25em;transition:.35s}.v2-open b{font-size:1rem;font-weight:300}.v2-open:hover{background:#d0a44e;color:#100b05;box-shadow:0 0 35px rgba(213,164,69,.18);transform:translateY(-2px)}.v2-hint{z-index:10;font-family:var(--font-label);font-size:.37rem;letter-spacing:.38em;color:#74664e;margin:11px 0 0;animation:v2Pulse 2.3s ease-in-out infinite}
        .v2-mandap{position:absolute;z-index:3;bottom:-25px;left:50%;width:min(88vw,520px);height:220px;transform:translateX(-50%);opacity:.9;filter:drop-shadow(0 0 20px rgba(224,176,70,.15));pointer-events:none}.mandap-roof{position:absolute;left:12%;right:12%;top:25px;height:58px;background:linear-gradient(180deg,#9b7029,#2e1c0a);clip-path:polygon(50% 0,100% 80%,85% 100%,15% 100%,0 80%);border:1px solid rgba(230,193,106,.45)}.mandap-roof span{position:absolute;left:45%;top:23px;width:10%;height:30px;background:#c18d35;clip-path:polygon(50% 0,100% 100%,0 100%);opacity:.8}.mandap-pillar{position:absolute;top:68px;width:42px;height:118px;background:linear-gradient(90deg,#3c260d,#b7832e 45%,#40270e);border:1px solid rgba(221,178,80,.55);box-shadow:inset 0 0 13px rgba(242,198,101,.15)}.mandap-pillar.left{left:17%}.mandap-pillar.right{right:17%}.mandap-pillar i,.mandap-pillar b{position:absolute;left:5px;right:5px;height:12px;border-top:1px solid #d2a64d;border-bottom:1px solid #d2a64d}.mandap-pillar i{top:24px}.mandap-pillar b{bottom:25px}.mandap-stage{position:absolute;left:22%;right:22%;bottom:5px;height:80px;border-bottom:3px solid #b58331;border-radius:50%;box-shadow:0 18px 30px rgba(210,160,57,.18)}.mandap-om{position:absolute;left:50%;top:15px;transform:translateX(-50%);font-size:2rem;color:#d5ae5a;text-shadow:0 0 18px rgba(224,177,72,.5)}.diya{position:absolute;bottom:3px;width:23px;height:12px;border-radius:50%;background:#b8812b;box-shadow:0 -3px 13px #e7bd5b}.diya:after{content:"";position:absolute;left:9px;top:-14px;width:6px;height:17px;border-radius:50% 50% 45% 45%;background:#f7d982;box-shadow:0 0 14px #e6b74e}.d1{left:18%}.d2{right:18%}.mandap-garland{position:absolute;top:65px;width:54%;height:58px;border-bottom:4px dotted #e2c36e;border-radius:0 0 50% 50%;box-shadow:0 15px 0 -8px #8b6425}.garland-left{left:0;transform:rotate(7deg)}.garland-right{right:0;transform:scaleX(-1) rotate(7deg)}
        .v2-bottom{position:absolute;bottom:18px;z-index:7;display:flex;gap:13px;align-items:center;font-family:var(--font-label);font-size:.34rem;letter-spacing:.28em;color:#7d6c50}.v2-bottom i{color:#c49a42;font-style:normal}.v2-flash{position:absolute;inset:0;background:radial-gradient(circle,rgba(255,225,156,.7),transparent 45%);opacity:0;pointer-events:none;z-index:20}
        .is-opening .v2-gold-flap{transform:rotateX(178deg)}.is-opening .v2-inner-card{opacity:1;transform:translateY(-62%)}.is-opening .v2-seal{opacity:0;transform:translate(-50%,-50%) scale(1.45)}.is-opening .v2-copy{opacity:0;transform:translateY(-25px);transition:.65s}.is-opening .v2-open,.is-opening .v2-hint{opacity:0}.is-opening .v2-envelope-wrap{transform:translateY(20px) scale(1.04);transition:transform 1.1s}.is-opening .v2-flash{animation:v2Flash 1.5s ease both}
        @keyframes v2Reveal{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}@keyframes v2Glow{0%,100%{transform:scale(.88);opacity:.5}50%{transform:scale(1.12);opacity:1}}@keyframes v2Drift{to{background-position:79px 97px,131px 137px}}@keyframes v2Float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes v2Pulse{0%,100%{opacity:.35}50%{opacity:.95}}@keyframes v2Flash{0%,65%{opacity:0}82%{opacity:.95}100%{opacity:0}}
        @media(max-width:600px){.v2-header{top:22px;left:23px;right:23px}.v2-private{display:none}.v2-stage{padding-top:72px;min-height:100svh}.v2-kicker{font-size:.39rem;letter-spacing:.24em}.v2-monogram{width:126px;height:126px}.v2-monogram-ring{width:100px;height:100px}.v2-monogram-ring strong{font-size:3rem}.v2-copy h1{font-size:clamp(2.55rem,11vw,4rem)}.v2-date{font-size:.39rem;letter-spacing:.23em}.v2-invite{font-size:.43rem;line-height:1.75;letter-spacing:.13em}.v2-envelope-wrap{width:89vw;height:49vw;min-height:180px;margin:19px 0 15px}.v2-seal{width:58px;height:58px}.v2-inner-card strong{font-size:clamp(1.7rem,8vw,2.5rem)}.v2-inner-card small,.v2-inner-card span,.v2-inner-card b{font-size:.29rem}.v2-mandap{height:180px;bottom:-15px;width:94vw}.v2-pillar{}.v2-bottom{display:none}.v2-frame{inset:9px}}
        @media(prefers-reduced-motion:reduce){.v2-stars,.v2-glow,.v2-envelope-wrap,.v2-hint{animation:none}.v2-gold-flap,.v2-inner-card{transition:none}}
      `}</style>
    </section>
  );
}

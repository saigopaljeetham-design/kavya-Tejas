"use client";

import Image from "next/image";
import { useState } from "react";

export function MandapScene() {
  const [lit, setLit] = useState(false);

  return (
    <section className={`mandap-section mandap-premium ${lit ? "is-lit" : ""}`}>
      <div className="mandap-copy">
        <div className="mandap-star-mark" aria-hidden="true"><span>✦</span><i>✧</i><span>✦</span></div>
        <p className="lux-micro gold">THE SACRED MUHURTHAM</p>
        <h2>Written in the stars.<br /><em>Sealed by seven steps.</em></h2>
        <p className="mandap-intro">Under the sacred fire, two paths become one. A moment blessed by family, tradition and the stars above.</p>

        <div className="mandap-mantra">
          <span className="mandap-mantra-sanskrit">सखा सप्तपदा भव</span>
          <span className="mandap-mantra-translit">Sakhā Saptapadā Bhava</span>
          <p>“With these seven steps, be my companion for life.”</p>
        </div>

        <button onClick={() => setLit((value) => !value)}>{lit ? "DIM THE MANDAPAM" : "LIGHT THE SACRED FIRE"}</button>
      </div>

      <div className="mandap-reference-frame" aria-label="Wedding mandap">
        <div className="mandap-reference-image">
          <Image src="/images/decorations/reference-mandap.jpg" alt="Kavya and Tejas wedding mandap" fill sizes="(max-width: 760px) 92vw, 56vw" className="mandap-reference-photo" />
          <div className="mandap-reference-shine" />
          <div className="mandap-glow-orb" />
          <div className="mandap-constellation" aria-hidden="true"><span>✦</span><i>·</i><span>✦</span><i>·</i><span>✦</span></div>
        </div>
        <div className="mandap-corner tl" /><div className="mandap-corner tr" /><div className="mandap-corner bl" /><div className="mandap-corner br" />
        <div className="mandap-caption"><span>K <i>&amp;</i> T</span><b>THE SACRED MANDAPAM · 27 AUG 2026</b></div>
      </div>

      <style jsx global>{`
        .mandap-premium{position:relative;min-height:92svh;padding:clamp(105px,12vw,165px) clamp(20px,7vw,100px);display:grid;grid-template-columns:.82fr 1.18fr;align-items:center;gap:clamp(35px,7vw,110px);overflow:hidden;background:radial-gradient(circle at 72% 52%,rgba(201,164,91,.13),transparent 34%),#080807;color:#f3ead9}
        .mandap-premium:before{content:"";position:absolute;inset:0;background-image:radial-gradient(circle,rgba(227,197,127,.42) 0 1px,transparent 1.8px);background-size:117px 139px;opacity:.14;animation:mandapDust 18s linear infinite}
        .mandap-copy{position:relative;z-index:4;max-width:500px}.mandap-star-mark{display:flex;align-items:center;gap:10px;color:#d9b96d;font-size:.62rem;letter-spacing:.5em;margin-bottom:18px}.mandap-star-mark i{font-size:.45rem;color:#8f6d35;font-style:normal}.mandap-copy h2{font-family:var(--font-display);font-size:clamp(3.1rem,6.2vw,6.2rem);font-weight:300;line-height:.88;letter-spacing:-.045em;margin:24px 0;color:#f1e7d5}.mandap-copy h2 em{font-style:italic;color:#c9a45b}.mandap-intro{max-width:430px;font-size:1rem;line-height:1.9;color:#a49a89}.mandap-mantra{margin-top:30px;padding:20px 22px;border-top:1px solid rgba(227,197,127,.25);border-bottom:1px solid rgba(227,197,127,.18);background:linear-gradient(90deg,rgba(201,164,91,.07),transparent);text-align:left}.mandap-mantra-sanskrit{display:block;font-family:serif;font-size:1.28rem;color:#e8d39d;letter-spacing:.04em}.mandap-mantra-translit{display:block;margin-top:5px;font-family:var(--font-label);font-size:.48rem;letter-spacing:.2em;text-transform:uppercase;color:#a9864a}.mandap-mantra p{margin:9px 0 0;font:italic .9rem/1.5 var(--font-display);color:#bdb09a}.mandap-copy button{margin-top:27px;padding:14px 27px;border:1px solid rgba(227,197,127,.52);font-family:var(--font-label);font-size:.5rem;letter-spacing:.24em;color:#e3c57f;background:rgba(8,8,7,.6);transition:.45s}.mandap-copy button:hover{background:#c9a45b;color:#080807;box-shadow:0 0 50px rgba(201,164,91,.24);transform:translateY(-2px)}
        .mandap-reference-frame{position:relative;z-index:3;width:min(100%,680px);justify-self:end;padding:10px;background:linear-gradient(145deg,rgba(236,205,135,.72),rgba(91,61,20,.65),rgba(236,205,135,.42));box-shadow:0 45px 110px rgba(0,0,0,.72),0 0 70px rgba(201,164,91,.11);transition:transform .8s,box-shadow .8s}.mandap-reference-frame:hover{transform:translateY(-6px);box-shadow:0 58px 130px rgba(0,0,0,.76),0 0 95px rgba(201,164,91,.2)}
        .mandap-reference-image{position:relative;aspect-ratio:1.18/1.48;overflow:hidden;background:#100e0a;border:1px solid rgba(246,220,158,.28)}.mandap-reference-photo{object-fit:cover;object-position:center;filter:saturate(.84) contrast(1.05) brightness(.9);transition:transform 1.5s cubic-bezier(.2,.7,.2,1),filter 1s}.mandap-reference-frame:hover .mandap-reference-photo{transform:scale(1.035);filter:saturate(.98) contrast(1.07) brightness(.98)}
        .mandap-reference-image:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(4,4,3,.02),transparent 48%,rgba(4,4,3,.7)),linear-gradient(90deg,rgba(201,164,91,.12),transparent 28%,transparent 72%,rgba(201,164,91,.12));pointer-events:none}.mandap-reference-shine{position:absolute;z-index:3;inset:-35%;background:linear-gradient(105deg,transparent 38%,rgba(255,241,194,.16) 49%,transparent 60%);transform:translateX(-48%);transition:transform 1.4s}.mandap-reference-frame:hover .mandap-reference-shine{transform:translateX(48%)}.mandap-glow-orb{position:absolute;z-index:3;width:38%;aspect-ratio:1;border-radius:50%;left:31%;bottom:7%;background:radial-gradient(circle,rgba(255,211,105,.2),transparent 68%);filter:blur(10px);opacity:.65;pointer-events:none}.mandap-constellation{position:absolute;z-index:4;top:24px;right:25px;display:flex;align-items:center;gap:6px;color:#f2dda4;font:500 .62rem var(--font-label);text-shadow:0 0 12px rgba(255,220,140,.65)}.mandap-constellation i{font-style:normal;color:rgba(242,221,164,.4)}
        .mandap-corner{position:absolute;width:42px;height:42px;border-color:#e3c57f;border-style:solid;opacity:.78}.mandap-corner.tl{top:0;left:0;border-width:1px 0 0 1px}.mandap-corner.tr{top:0;right:0;border-width:1px 1px 0 0}.mandap-corner.bl{bottom:0;left:0;border-width:0 0 1px 1px}.mandap-corner.br{bottom:0;right:0;border-width:0 1px 1px 0}.mandap-caption{position:absolute;left:26px;bottom:25px;right:26px;z-index:5;display:flex;justify-content:space-between;align-items:end;text-shadow:0 2px 16px #000}.mandap-caption span{font-family:var(--font-display);font-size:1.2rem;color:#f1d58b}.mandap-caption span i{font-size:.55em;font-style:normal;color:#b98a34}.mandap-caption b{font-family:var(--font-label);font-size:.4rem;letter-spacing:.28em;font-weight:400;color:#e3c57f}
        .mandap-premium.is-lit .mandap-reference-image:after{background:linear-gradient(180deg,rgba(4,4,3,.02),transparent 45%,rgba(4,4,3,.56)),radial-gradient(circle at 50% 78%,rgba(255,203,95,.25),transparent 36%)}.mandap-premium.is-lit .mandap-reference-frame{box-shadow:0 45px 110px rgba(0,0,0,.72),0 0 110px rgba(255,193,70,.22)}.mandap-premium.is-lit .mandap-glow-orb{animation:mandapGlow 2.4s ease-in-out infinite}
        @keyframes mandapDust{to{transform:translateY(139px)}}@keyframes mandapGlow{50%{opacity:1;transform:scale(1.18)}}
        @media(max-width:760px){.mandap-premium{min-height:auto;padding:105px 18px 125px;grid-template-columns:1fr;gap:45px}.mandap-copy{text-align:center;max-width:560px;margin:auto}.mandap-star-mark{justify-content:center}.mandap-copy h2{font-size:clamp(3rem,14vw,5rem)}.mandap-intro{margin-left:auto;margin-right:auto}.mandap-mantra{text-align:center}.mandap-copy button{margin-top:20px}.mandap-reference-frame{justify-self:center;width:min(94vw,520px)}.mandap-reference-image{aspect-ratio:1/1.25}.mandap-caption{left:18px;right:18px;bottom:18px}.mandap-caption b{font-size:.34rem}.mandap-constellation{top:19px;right:19px}}
        @media(prefers-reduced-motion:reduce){.mandap-premium:before,.mandap-reference-shine,.mandap-reference-photo,.mandap-glow-orb{animation:none;transition:none}}
      `}</style>
    </section>
  );
}

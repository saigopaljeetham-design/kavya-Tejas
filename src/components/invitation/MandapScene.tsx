"use client";

import Image from "next/image";
import { useState } from "react";

export function MandapScene() {
  const [lit, setLit] = useState(false);
  const [imageSrc, setImageSrc] = useState("/images/mandap/reference-mandap.jpg");

  return (
    <section className={`mandap-section mandap-premium ${lit ? "is-lit" : ""}`}>
      <div className="mandap-copy">
        <p className="lux-micro gold">THE SACRED MOMENT</p>
        <h2>Under one roof.<br /><em>Under the blessings.</em></h2>
        <p>As the hour of the Muhurtham approaches, the mandapam comes alive with light, flowers and tradition.</p>
        <button onClick={() => setLit((value) => !value)}>{lit ? "DIM THE MANDAPAM" : "LIGHT THE MANDAPAM"}</button>
      </div>

      <div className="mandap-reference-frame" aria-label="Wedding mandap">
        <div className="mandap-reference-image">
          <Image
            src={imageSrc}
            alt="Kavya and Tejas wedding mandap"
            fill
            sizes="(max-width: 760px) 86vw, 52vw"
            className="mandap-reference-photo"
            onError={() => setImageSrc("/images/ceremonies/muhurtam.png")}
          />
          <div className="mandap-reference-shine" />
        </div>
        <div className="mandap-corner tl" /><div className="mandap-corner tr" /><div className="mandap-corner bl" /><div className="mandap-corner br" />
        <div className="mandap-caption"><span>K &amp; T</span><i>THE MANDAPAM COMES ALIVE</i></div>
      </div>

      <style jsx global>{`
        .mandap-premium{position:relative;min-height:88svh;padding:150px clamp(20px,7vw,100px);display:grid;grid-template-columns:.82fr 1.18fr;align-items:center;gap:clamp(35px,7vw,110px);overflow:hidden;background:radial-gradient(circle at 75% 50%,rgba(201,164,91,.12),transparent 36%),#080807;color:#f3ead9}
        .mandap-premium:before{content:"";position:absolute;inset:0;background-image:radial-gradient(circle,rgba(227,197,127,.38) 0 1px,transparent 1.8px);background-size:117px 139px;opacity:.2;animation:mandapDust 16s linear infinite}
        .mandap-copy{position:relative;z-index:4;max-width:500px}.mandap-copy h2{font-family:var(--font-display);font-size:clamp(3.2rem,6.5vw,6.4rem);font-weight:300;line-height:.86;letter-spacing:-.045em;margin:25px 0;color:#f1e7d5}.mandap-copy h2 em{font-style:italic;color:#c9a45b}.mandap-copy>p:not(.lux-micro){max-width:450px;font-size:1.05rem;line-height:1.9;color:#8e8678}.mandap-copy button{margin-top:28px;padding:13px 25px;border:1px solid rgba(227,197,127,.48);font-family:var(--font-label);font-size:.5rem;letter-spacing:.25em;color:#e3c57f;background:rgba(8,8,7,.55);transition:.4s}.mandap-copy button:hover{background:#c9a45b;color:#080807;box-shadow:0 0 45px rgba(201,164,91,.22);transform:translateY(-2px)}
        .mandap-reference-frame{position:relative;z-index:3;width:min(100%,650px);justify-self:end;padding:12px;background:linear-gradient(145deg,rgba(227,197,127,.55),rgba(92,63,20,.5),rgba(227,197,127,.3));box-shadow:0 45px 100px rgba(0,0,0,.65),0 0 70px rgba(201,164,91,.1);transform:rotate(.35deg);transition:transform .8s,box-shadow .8s}.mandap-reference-frame:hover{transform:rotate(0) translateY(-5px);box-shadow:0 55px 120px rgba(0,0,0,.72),0 0 80px rgba(201,164,91,.15)}
        .mandap-reference-image{position:relative;aspect-ratio:1.08/1.55;overflow:hidden;background:#100e0a;border:1px solid rgba(246,220,158,.25)}.mandap-reference-photo{object-fit:cover;filter:saturate(.85) contrast(1.04);transition:transform 1.4s,filter .8s}.mandap-reference-frame:hover .mandap-reference-photo{transform:scale(1.035);filter:saturate(1) contrast(1.07)}.mandap-reference-shine{position:absolute;inset:-30%;background:linear-gradient(105deg,transparent 35%,rgba(255,241,194,.13) 48%,transparent 60%);transform:translateX(-45%);transition:transform 1.4s}.mandap-reference-frame:hover .mandap-reference-shine{transform:translateX(45%)}
        .mandap-corner{position:absolute;width:44px;height:44px;border-color:#e3c57f;border-style:solid;opacity:.8}.mandap-corner.tl{top:0;left:0;border-width:1px 0 0 1px}.mandap-corner.tr{top:0;right:0;border-width:1px 1px 0 0}.mandap-corner.bl{bottom:0;left:0;border-width:0 0 1px 1px}.mandap-corner.br{bottom:0;right:0;border-width:0 1px 1px 0}.mandap-caption{position:absolute;left:28px;bottom:28px;right:28px;z-index:4;display:flex;justify-content:space-between;align-items:end;text-shadow:0 2px 14px #000}.mandap-caption span{font-family:var(--font-display);font-size:1.15rem;color:#f1d58b}.mandap-caption i{font-family:var(--font-label);font-size:.42rem;letter-spacing:.28em;color:#e3c57f;font-style:normal}
        .mandap-premium.is-lit .mandap-reference-image:after{content:"";position:absolute;inset:-10%;background:radial-gradient(circle at 50% 70%,rgba(255,203,95,.28),transparent 38%);mix-blend-mode:screen;animation:mandapGlow 2.2s ease-in-out infinite}.mandap-premium.is-lit .mandap-copy button{background:#c9a45b;color:#080807}.mandap-premium.is-lit .mandap-reference-frame{box-shadow:0 45px 100px rgba(0,0,0,.65),0 0 95px rgba(255,193,70,.2)}
        @keyframes mandapDust{to{transform:translateY(139px)}}@keyframes mandapGlow{50%{opacity:.45;transform:scale(1.05)}}
        @media(max-width:760px){.mandap-premium{min-height:auto;padding:110px 20px 130px;grid-template-columns:1fr;gap:55px}.mandap-copy{text-align:center;max-width:560px;margin:auto}.mandap-copy h2{font-size:clamp(3rem,14vw,5rem)}.mandap-copy>p:not(.lux-micro){margin-left:auto;margin-right:auto}.mandap-copy button{margin-top:20px}.mandap-reference-frame{justify-self:center;width:min(92vw,520px)}.mandap-caption{left:20px;right:20px;bottom:20px}}
        @media(prefers-reduced-motion:reduce){.mandap-premium:before,.mandap-reference-shine,.mandap-reference-photo{animation:none;transition:none}}
      `}</style>
    </section>
  );
}

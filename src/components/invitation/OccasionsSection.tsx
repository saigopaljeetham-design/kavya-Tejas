"use client";

import Image from "next/image";
import { useInvitation } from "@/components/providers/InvitationProvider";
import { weddingConfig } from "@/config/wedding";

const occasions = [
  { key: "haldi", title: "Haldi", label: "MORNING · 10:30 AM", note: "Colour, laughter and blessings." },
  { key: "reception", title: "Reception", label: "EVENING · 6:00 PM", note: "Light, music and togetherness." },
  { key: "muhurtham", title: "Muhurtham", label: "SACRED HOUR · 11:41 PM", note: "The moment two families become one." },
] as const;

export function OccasionsSection() {
  const { language } = useInvitation();
  const events = weddingConfig.wedding.events;
  return (
    <section id="celebrations" className="occasions-refined" aria-label="Wedding occasions">
      <div className="occasion-intro">
        <span className="occasion-section-no">02</span>
        <p className="lux-micro gold">{language === "te" ? "వేడుకలు" : "THE OCCASIONS"}</p>
        <h2>{language === "te" ? <>ఒకే రోజు.<br /><em>మూడు వేడుకలు.</em></> : <>One beautiful day.<br /><em>Three occasions.</em></>}</h2>
        <p>{language === "te" ? "ఆగస్టు 27 — ప్రతి వేడుకకు తనదైన వెలుగు, ఒకే అందమైన ఆరంభం." : "27 August — three celebrations, one beautiful beginning."}</p>
      </div>

      <div className="occasion-editorial">
        {occasions.map((item, index) => {
          const event = events.find((e) => e.key === item.key) ?? events[index];
          return (
            <article className={`occasion-feature feature-${index + 1}`} key={item.key}>
              <div className="occasion-image-wrap">
                <Image src={event.plates[0]} alt={event.name} fill sizes="(max-width: 760px) 90vw, 38vw" className="occasion-photo" />
                <div className="occasion-image-wash" />
                <span className="occasion-index">0{index + 1}</span>
                <span className="occasion-monogram">K <i>&amp;</i> T</span>
              </div>
              <div className="occasion-details">
                <span className="occasion-label">{item.label}</span>
                <h3>{item.title}</h3>
                <span className="occasion-ornament">— ✦ —</span>
                <p>{language === "te" ? item.note : item.note}</p>
                <small>{event.venue}</small>
              </div>
            </article>
          );
        })}
      </div>

      <div className="occasion-signature"><span>K</span><i>&amp;</i><span>T</span></div>

      <style jsx global>{`
        .occasions-refined{position:relative;overflow:hidden;padding:clamp(110px,13vw,170px) clamp(18px,6vw,90px) 150px;background:#080807;color:#f3ead9}
        .occasions-refined:before{content:"";position:absolute;inset:0;opacity:.13;background-image:radial-gradient(circle,#d8b86e 0 1px,transparent 1.6px);background-size:145px 165px;animation:occasionFloat 22s linear infinite}
        .occasion-intro{position:relative;z-index:2;max-width:850px;margin:0 auto clamp(60px,8vw,105px);text-align:center}.occasion-section-no{position:absolute;left:0;top:-25px;font:400 .45rem var(--font-label);letter-spacing:.3em;color:#746c5d}.occasion-intro h2{font:300 clamp(3.1rem,7vw,6.7rem)/.87 var(--font-display);letter-spacing:-.045em;margin:23px 0;color:#f3eadf}.occasion-intro h2 em{font-style:italic;color:#c9a45b}.occasion-intro>p:last-child{max-width:530px;margin:auto;color:#8f877a;line-height:1.8;font-size:1rem}
        .occasion-editorial{position:relative;z-index:2;max-width:1120px;margin:auto;display:grid;grid-template-columns:1fr 1fr;gap:clamp(70px,10vw,150px) clamp(24px,5vw,75px);align-items:start}.occasion-feature{position:relative}.feature-1{margin-top:0}.feature-2{margin-top:105px}.feature-3{grid-column:1 / -1;max-width:600px;justify-self:center;margin-top:-5px}
        .occasion-image-wrap{position:relative;aspect-ratio:4/5;overflow:hidden;background:#111;border:1px solid rgba(215,180,99,.48);box-shadow:0 35px 80px rgba(0,0,0,.55)}.occasion-image-wrap:before{content:"";position:absolute;z-index:4;inset:11px;border:1px solid rgba(237,210,150,.28);pointer-events:none}.occasion-image-wrap:after{content:"";position:absolute;z-index:4;inset:17px;border:1px solid rgba(237,210,150,.1);pointer-events:none}.occasion-photo{object-fit:cover;filter:saturate(.78) contrast(1.05);transition:transform 1.3s cubic-bezier(.2,.7,.2,1),filter .9s}.occasion-feature:hover .occasion-photo{transform:scale(1.045);filter:saturate(.98) contrast(1.08)}.occasion-image-wash{position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,rgba(0,0,0,.04) 25%,transparent 48%,rgba(0,0,0,.7))}
        .occasion-index{position:absolute;z-index:5;top:24px;right:25px;font:400 .45rem var(--font-label);letter-spacing:.28em;color:#e3c57f}.occasion-monogram{position:absolute;z-index:5;top:23px;left:24px;font:400 .95rem var(--font-display);color:#e3c57f}.occasion-monogram i{font-size:.55em;font-style:normal;color:#b98a34}
        .occasion-details{text-align:center;padding:24px 8px 0}.occasion-label{font:400 .47rem var(--font-label);letter-spacing:.27em;color:#9c907c}.occasion-details h3{font:300 clamp(2.6rem,5vw,4.5rem)/1 var(--font-display);color:#f1e7d6;margin:11px 0 8px}.occasion-ornament{font:400 .55rem var(--font-label);letter-spacing:.28em;color:#c9a45b}.occasion-details p{font:400 .92rem/1.7 var(--font-display);color:#8f877a;margin:13px auto 5px}.occasion-details small{font:400 .58rem var(--font-label);letter-spacing:.14em;color:#6e675c}.occasion-signature{position:relative;z-index:2;margin:95px auto 0;display:flex;justify-content:center;gap:5px;align-items:center;font:400 1.4rem var(--font-display);color:#c9a45b}.occasion-signature i{font-size:.6em;font-style:normal;color:#9a722d}
        @keyframes occasionFloat{to{transform:translateY(165px)}}
        @media(max-width:760px){.occasions-refined{padding-top:105px}.occasion-section-no{position:static;display:block;text-align:left;margin-bottom:25px}.occasion-intro{margin-bottom:58px}.occasion-intro h2{font-size:clamp(3rem,14vw,4.8rem)}.occasion-editorial{grid-template-columns:1fr;gap:62px;max-width:430px}.feature-2,.feature-3{margin-top:0}.feature-3{grid-column:auto;max-width:none}.occasion-details h3{font-size:3.2rem}.occasion-signature{margin-top:75px}}
        @media(prefers-reduced-motion:reduce){.occasions-refined:before,.occasion-photo{animation:none;transition:none}}
      `}</style>
    </section>
  );
}

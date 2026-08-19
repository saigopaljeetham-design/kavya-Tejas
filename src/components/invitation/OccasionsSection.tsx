"use client";

import Image from "next/image";
import { useInvitation } from "@/components/providers/InvitationProvider";
import { weddingConfig } from "@/config/wedding";

const occasions = [
  { key: "haldi", title: "Haldi", kicker: "పసుపు · MORNING · 10:30 AM", note: "Turmeric, colour, laughter and the blessings of family." },
  { key: "reception", title: "Reception", kicker: "EVENING · 6:00 PM", note: "An evening of music, togetherness and celebration." },
  { key: "muhurtham", title: "Muhurtham", kicker: "ముహూర్తం · SACRED HOUR · 11:41 PM", note: "Pelli pandiri, sacred fire and the moment two families become one." },
] as const;

export function OccasionsSection() {
  const { language } = useInvitation();
  const events = weddingConfig.wedding.events;

  return (
    <section id="celebrations" className="occasions-refined" aria-label="Wedding occasions">
      <div className="occasion-intro">
        <span className="occasion-section-no">02</span>
        <p className="lux-micro gold">{language === "te" ? "వేడుకలు" : "మా వేడుకలు · OUR CELEBRATIONS"}</p>
        <h2>{language === "te" ? <>ఒకే రోజు.<br /><em>మూడు వేడుకలు.</em></> : <>One beautiful day.<br /><em>Three Telugu celebrations.</em></>}</h2>
        <p>{language === "te" ? "పసుపు నుండి పెళ్లి పందిరి వరకు — ప్రతి వేడుక కుటుంబం, సంప్రదాయం మరియు ప్రేమను కలుపుతుంది." : "From nalugu and turmeric to the pelli pandiri — every celebration carries a part of our family tradition."}</p>
      </div>

      <div className="occasion-editorial">
        {occasions.map((item, index) => {
          const event = events.find((e) => e.key === item.key) ?? events[index];
          return (
            <article className={`occasion-feature feature-${index + 1}`} key={item.key}>
              <div className="occasion-image-wrap">
                <Image src={event.plates[0]} alt={`${event.name} — Kavya and Tejas`} fill sizes="(max-width: 760px) 96vw, 760px" className="occasion-photo" priority={index === 0} />
                <div className="occasion-image-wash" />
                <span className="occasion-index">0{index + 1}</span>
                <span className="occasion-monogram">K <i>&amp;</i> T</span>
                <span className="occasion-date">27 · 08 · 2026</span>
              </div>
              <div className="occasion-details">
                <span className="occasion-label">{item.kicker}</span>
                <h3>{item.title}</h3>
                <span className="occasion-ornament">— ✦ —</span>
                <p>{item.note}</p>
                <small>{event.venue}</small>
              </div>
            </article>
          );
        })}
      </div>

      <div className="occasion-signature"><span>K</span><i>&amp;</i><span>T</span></div>

      <style jsx global>{`
        .occasions-refined{position:relative;overflow:hidden;padding:clamp(105px,12vw,160px) clamp(12px,4vw,60px) 135px;background:#080807;color:#f3ead9}.occasions-refined:before{content:"";position:absolute;inset:0;opacity:.11;background-image:radial-gradient(circle,#d8b86e 0 1px,transparent 1.6px);background-size:145px 165px;animation:occasionFloat 22s linear infinite}.occasion-intro{position:relative;z-index:2;max-width:820px;margin:0 auto 75px;text-align:center}.occasion-section-no{position:absolute;left:0;top:-18px;font:400 .45rem var(--font-label);letter-spacing:.3em;color:#746c5d}.occasion-intro h2{font:300 clamp(3.1rem,6.5vw,6.2rem)/.88 var(--font-display);letter-spacing:-.045em;margin:22px 0;color:#f3eadf}.occasion-intro h2 em{font-style:italic;color:#c9a45b}.occasion-intro>p:last-child{max-width:560px;margin:auto;color:#8f877a;line-height:1.8;font-size:.98rem}.occasion-editorial{position:relative;z-index:2;max-width:980px;margin:auto;display:flex;flex-direction:column;gap:88px}.occasion-feature{width:100%;max-width:800px}.occasion-feature:nth-child(2){align-self:flex-end}.occasion-feature:nth-child(3){align-self:center}.occasion-image-wrap{position:relative;width:100%;aspect-ratio:4/5;overflow:hidden;background:#0f0e0b;border:1px solid rgba(215,180,99,.55);box-shadow:0 38px 100px rgba(0,0,0,.58)}.occasion-image-wrap:before{content:"";position:absolute;z-index:5;inset:18px;border:1px solid rgba(237,210,150,.3);pointer-events:none}.occasion-image-wrap:after{content:"";position:absolute;z-index:5;inset:24px;border:1px solid rgba(237,210,150,.1);pointer-events:none}.occasion-photo{object-fit:contain;object-position:center;background:#0b0a08;filter:saturate(.9) contrast(1.04);transition:transform 1.2s cubic-bezier(.2,.7,.2,1),filter .8s}.occasion-feature:hover .occasion-photo{transform:scale(1.018);filter:saturate(1) contrast(1.06)}.occasion-image-wash{position:absolute;inset:0;z-index:3;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.01) 42%,rgba(0,0,0,.08) 72%,rgba(0,0,0,.58))}.occasion-index{position:absolute;z-index:6;top:28px;right:29px;font:400 .45rem var(--font-label);letter-spacing:.28em;color:#e3c57f}.occasion-monogram{position:absolute;z-index:6;top:26px;left:29px;font:400 1rem var(--font-display);color:#e3c57f}.occasion-monogram i{font-size:.55em;font-style:normal;color:#b98a34}.occasion-date{position:absolute;z-index:6;right:29px;bottom:27px;font:400 .42rem var(--font-label);letter-spacing:.24em;color:#ead29a}.occasion-details{text-align:center;padding:22px 12px 0}.occasion-label{font:400 .47rem var(--font-label);letter-spacing:.27em;color:#a29683}.occasion-details h3{font:300 clamp(2.9rem,5.5vw,4.8rem)/.95 var(--font-display);color:#f1e7d6;margin:10px 0 8px}.occasion-ornament{font:400 .55rem var(--font-label);letter-spacing:.28em;color:#c9a45b}.occasion-details p{font:400 1rem/1.7 var(--font-display);color:#91887a;margin:13px auto 5px}.occasion-details small{font:400 .56rem var(--font-label);letter-spacing:.13em;color:#6e675c}.occasion-signature{position:relative;z-index:2;margin:90px auto 0;display:flex;justify-content:center;gap:5px;align-items:center;font:400 1.4rem var(--font-display);color:#c9a45b}.occasion-signature i{font-size:.6em;font-style:normal;color:#9a722d}@keyframes occasionFloat{to{transform:translateY(165px)}}
        @media(max-width:760px){.occasions-refined{padding:92px 8px 110px}.occasion-section-no{position:static;display:block;text-align:left;margin:0 8px 23px}.occasion-intro{margin-bottom:48px;padding:0 10px}.occasion-intro h2{font-size:clamp(2.8rem,13vw,4.5rem)}.occasion-intro>p:last-child{font-size:.9rem}.occasion-editorial{gap:62px;max-width:100%}.occasion-feature,.occasion-feature:nth-child(2),.occasion-feature:nth-child(3){align-self:center;max-width:100%}.occasion-image-wrap{aspect-ratio:4/5}.occasion-image-wrap:before{inset:12px}.occasion-image-wrap:after{inset:17px}.occasion-index{top:20px;right:21px}.occasion-monogram{top:18px;left:21px}.occasion-date{right:21px;bottom:20px;font-size:.37rem}.occasion-details{padding-top:18px}.occasion-details h3{font-size:3.15rem}.occasion-details p{font-size:.92rem}.occasion-signature{margin-top:60px}}@media(prefers-reduced-motion:reduce){.occasions-refined:before,.occasion-photo{animation:none;transition:none}}
      `}</style>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useInvitation } from "@/components/providers/InvitationProvider";
import { weddingConfig } from "@/config/wedding";

const accents = [
  { key: "haldi", label: "DAYLIGHT · CEREMONY", title: "Haldi", note: "A morning of colour, laughter and blessings." },
  { key: "reception", label: "EVENING · CELEBRATION", title: "Reception", note: "An evening of light, music and togetherness." },
  { key: "muhurtham", label: "NIGHT · SACRED HOUR", title: "Muhurtham", note: "The sacred hour when two families become one." },
] as const;

export function OccasionsSection() {
  const { language } = useInvitation();
  const events = weddingConfig.wedding.events;

  return (
    <section id="celebrations" className="occasions-section" aria-label="Wedding occasions">
      <div className="occasions-no">02</div>
      <div className="occasions-header">
        <p className="lux-micro gold">{language === "te" ? "వేడుకలు" : "THE OCCASIONS"}</p>
        <h2>{language === "te" ? <>ఒకే రోజు.<br /><em>మూడు మధుర క్షణాలు.</em></> : <>One day.<br /><em>Three occasions.</em></>}</h2>
        <p className="occasions-lead">{language === "te" ? "ఆగస్టు 27న, ప్రతి వేడుకకు తనదైన వెలుగు ఉంటుంది." : "On 27 August, three moments unfold through one beautiful day."}</p>
      </div>

      <div className="occasion-rail">
        {accents.map((item, index) => {
          const event = events.find((e) => e.key === item.key) ?? events[index];
          return (
            <article className={`occasion-card occasion-card-${index + 1}`} key={item.key}>
              <div className="occasion-art">
                <Image src={event.plates[0]} alt={event.name} fill sizes="(max-width: 700px) 88vw, 31vw" className="occasion-image" />
                <div className="occasion-vignette" />
                <span className="occasion-number">0{index + 1}</span>
                <span className="occasion-seal">K <i>&amp;</i> T</span>
              </div>
              <div className="occasion-copy">
                <p className="occasion-label">{item.label}</p>
                <h3>{item.title}</h3>
                <div className="occasion-rule"><span>✦</span></div>
                <p className="occasion-time">{event.time}</p>
                <p className="occasion-place">{event.venue}</p>
                <p className="occasion-note">{item.note}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="occasion-bottom-mark"><span>K</span><i>&amp;</i><span>T</span></div>

      <style jsx global>{`
        .occasions-section{position:relative;overflow:hidden;padding:150px clamp(20px,6vw,90px) 175px;background:radial-gradient(circle at 50% 24%,rgba(201,164,91,.11),transparent 30%),#080807;color:#f3ead9}
        .occasions-section:before{content:"";position:absolute;inset:0;background-image:radial-gradient(circle,rgba(227,197,127,.38) 0 1px,transparent 1.7px);background-size:121px 147px;opacity:.18;animation:occasionDust 18s linear infinite}
        .occasions-no{position:absolute;left:clamp(20px,5vw,70px);top:78px;font-family:var(--font-label);font-size:.48rem;letter-spacing:.28em;color:#756d5e}
        .occasions-header{position:relative;z-index:2;text-align:center;max-width:760px;margin:0 auto 80px}
        .occasions-header h2{font-family:var(--font-display);font-size:clamp(3.3rem,7vw,6.6rem);font-weight:300;line-height:.86;letter-spacing:-.045em;margin:25px 0;color:#f1e8d8}
        .occasions-header h2 em{color:#c9a45b;font-style:italic}
        .occasions-lead{max-width:520px;margin:30px auto 0;font-size:1.05rem;line-height:1.8;color:#928a7b}
        .occasion-rail{position:relative;z-index:2;max-width:1160px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(18px,3.2vw,46px);align-items:start}
        .occasion-card{position:relative}.occasion-card-2{margin-top:75px}.occasion-card-3{margin-top:150px}
        .occasion-art{position:relative;aspect-ratio:4/5;overflow:hidden;background:#111;border:1px solid rgba(201,164,91,.46);box-shadow:0 35px 80px rgba(0,0,0,.5)}
        .occasion-art:before{content:"";position:absolute;z-index:3;inset:10px;border:1px solid rgba(227,197,127,.3);pointer-events:none}.occasion-art:after{content:"";position:absolute;z-index:3;inset:17px;border:1px solid rgba(227,197,127,.1);pointer-events:none}
        .occasion-image{object-fit:cover;filter:saturate(.72) contrast(1.04);transition:transform 1.3s cubic-bezier(.2,.7,.2,1),filter .8s}.occasion-card:hover .occasion-image{transform:scale(1.045);filter:saturate(.92) contrast(1.06)}
        .occasion-vignette{position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,rgba(0,0,0,.04),transparent 45%,rgba(0,0,0,.62))}
        .occasion-number{position:absolute;z-index:4;right:25px;top:23px;font-family:var(--font-label);font-size:.46rem;letter-spacing:.28em;color:#e3c57f}.occasion-seal{position:absolute;z-index:4;left:24px;top:23px;font-family:var(--font-display);font-size:.9rem;color:#e3c57f}.occasion-seal i{font-size:.55em;font-style:normal;color:#b98a34}
        .occasion-copy{text-align:center;padding:25px 10px 0}.occasion-label{font-family:var(--font-label);font-size:.45rem;letter-spacing:.27em;color:#8e836f}.occasion-copy h3{font-family:var(--font-display);font-size:clamp(2.3rem,4vw,3.8rem);font-weight:300;line-height:1;margin:11px 0;color:#f2e6cf}
        .occasion-rule{width:74px;height:1px;background:linear-gradient(90deg,transparent,#c9a45b,transparent);margin:16px auto;position:relative}.occasion-rule span{position:absolute;left:50%;top:50%;transform:translate(-50%,-55%);background:#080807;padding:0 7px;color:#d7b55e;font-size:.45rem}
        .occasion-time{font-family:var(--font-label);font-size:.55rem;letter-spacing:.29em;color:#d9bb76;margin:0 0 9px}.occasion-place{font-size:.88rem;color:#71695c;margin:0}.occasion-note{font-size:.88rem;line-height:1.65;color:#8d8578;max-width:260px;margin:14px auto 0}
        .occasion-bottom-mark{position:relative;z-index:2;margin:95px auto 0;display:flex;justify-content:center;align-items:center;gap:5px;font-family:var(--font-display);font-size:1.35rem;color:#c9a45b}.occasion-bottom-mark i{font-size:.6em;font-style:normal;color:#98702d}
        @keyframes occasionDust{to{transform:translateY(147px)}}
        @media(max-width:760px){.occasions-section{padding-top:115px}.occasions-header{margin-bottom:55px}.occasions-header h2{font-size:clamp(3rem,15vw,4.8rem)}.occasion-rail{grid-template-columns:1fr;max-width:430px;gap:62px}.occasion-card-2,.occasion-card-3{margin-top:0}.occasion-copy{padding-top:20px}.occasion-copy h3{font-size:3rem}}
        @media(prefers-reduced-motion:reduce){.occasions-section:before,.occasion-image{animation:none;transition:none}}
      `}</style>
    </section>
  );
}

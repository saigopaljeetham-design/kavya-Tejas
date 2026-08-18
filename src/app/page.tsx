"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, CalendarDays, MapPin, Volume2, VolumeX } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { PremiumAtmosphere } from "@/components/invitation/PremiumAtmosphere";
import { LuxuryCountdown } from "@/components/invitation/LuxuryCountdown";
import { MandapScene } from "@/components/invitation/MandapScene";
import { CinematicGallery } from "@/components/invitation/CinematicGallery";
import { CinematicEnvelope } from "@/components/invitation/CinematicEnvelope";
import { ScratchDateReveal } from "@/components/invitation/ScratchDateReveal";
import { OccasionsSection } from "@/components/invitation/OccasionsSection";

function GoldLine() { return <span className="lux-line" aria-hidden="true" />; }
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) { return <div className={`lux-reveal ${className}`}>{children}</div>; }

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [music, setMusic] = useState(false);
  const [language, setLanguage] = useState<"EN" | "TE">("EN");
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => { document.body.style.overflow = opened ? "auto" : "hidden"; return () => { document.body.style.overflow = "auto"; }; }, [opened]);
  const toggleMusic = async () => { const audio = audioRef.current; if (!audio) return; if (music) { audio.pause(); setMusic(false); } else { try { await audio.play(); setMusic(true); } catch { setMusic(false); } } };

  return <div className="luxury-invitation">
    <PremiumAtmosphere />
    <audio ref={audioRef} loop preload="none" src={weddingConfig.music.source} />
    {!opened && <CinematicEnvelope onOpen={() => setOpened(true)} />}
    {opened && <main>
      <nav className="lux-nav"><a href="#top" className="lux-nav-mark">K<span>&</span>T</a><div className="lux-nav-links"><a href="#celebrations">Occasions</a><a href="#muhurtham">Muhurtham</a><a href="#gallery">Gallery</a><a href="#venue">Venue</a></div><div className="lux-nav-actions"><button aria-label="Switch language" onClick={() => setLanguage(language === "EN" ? "TE" : "EN")}>{language}</button><button aria-label="Toggle music" onClick={toggleMusic}>{music ? <Volume2 size={16} /> : <VolumeX size={16} />}</button></div></nav>
      <section id="top" className="lux-hero"><div className="lux-hero-image"><Image src={weddingConfig.couplePhoto} alt="Kavya and Tejas" fill priority sizes="100vw" className="object-cover" /></div><div className="lux-hero-overlay" /><div className="lux-hero-copy"><p className="lux-micro">WITH THE BLESSINGS OF OUR FAMILIES</p><h1>{language === "TE" ? "కావ్య & తేజస్" : <>Kavya <span>&</span> Tejas</>}</h1><GoldLine /><p className="lux-hero-date">27 · 08 · 2026</p><p className="lux-hero-sub">{language === "TE" ? "మా కొత్త ప్రయాణానికి మిమ్మల్ని ఆహ్వానిస్తున్నాము." : "invite you to witness the beginning of forever."}</p></div><a href="#story" className="lux-scroll"><span>SCROLL TO ENTER</span></a></section>
      <ScratchDateReveal />
      <section id="story" className="lux-story lux-paper"><div className="lux-section-number">01</div><Reveal className="lux-story-inner"><p className="lux-micro gold">THE BEGINNING</p><h2>Two lives.<br /><em>One beautiful promise.</em></h2><p className="lux-lead">With hearts full of gratitude and joy, we invite you to be part of the moments that bring our families together and begin our next chapter.</p><div className="lux-signature"><span>K</span><span>&</span><span>T</span></div><p className="lux-caption">Together with our families</p></Reveal></section>
      <LuxuryCountdown />
      <OccasionsSection />
      <section id="muhurtham"><MandapScene /></section>
      <section className="lux-statement"><div className="lux-statement-image"><Image src="/images/envelope/seq-05.jpg" alt="Wedding details" fill sizes="100vw" className="object-cover" /></div><div className="lux-statement-overlay" /><div className="lux-statement-copy"><p className="lux-micro">MARK YOUR CALENDAR</p><p className="lux-big-date">27<sup>TH</sup></p><p className="lux-month">AUGUST · 2026</p><GoldLine /><p className="lux-statement-line">Come for the celebration.<br /><em>Stay for the memories.</em></p></div></section>
      <CinematicGallery />
      <section id="venue" className="lux-venue lux-paper"><div className="lux-section-number">05</div><Reveal className="lux-venue-grid"><div><p className="lux-micro gold">THE DESTINATION</p><h2>Ishaar<br /><em>Staycation</em></h2><p className="lux-address">Chirravuru, Andhra Pradesh 522303<br />India</p><a className="lux-map" href={weddingConfig.wedding.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={15} /> OPEN IN MAPS <ArrowUpRight size={14} /></a></div><div className="lux-venue-card"><div className="lux-venue-card-top"><CalendarDays size={18} /><span>THURSDAY</span></div><strong>27</strong><span>AUGUST</span><span>2026</span><GoldLine /><small>ALL OCCASIONS · ONE PLACE</small></div></Reveal></section>
      <section id="rsvp" className="lux-final"><div className="lux-final-glow" /><Reveal className="lux-final-copy"><p className="lux-micro gold">WITH LOVE</p><h2>Kavya <span>&</span> Tejas</h2><p>We would be honoured to have you with us<br />as we begin this new journey.</p><GoldLine /><p className="lux-final-date">27 · 08 · 2026</p><button className="lux-rsvp">RSVP WITH US</button></Reveal><footer>MADE WITH LOVE · KAVYA & TEJAS · 2026</footer></section>
      <style jsx global>{`
        :root{--gold:#d8b56a;--gold-bright:#f0d58e;--muted:#a69d8e;--paper:#f6f0e5}
        .lux-micro{font-size:.68rem!important;letter-spacing:.22em!important;color:#c8c0b3}
        .gold{color:#d8b56a!important}
        .lux-nav{height:74px;background:linear-gradient(#070706,rgba(7,7,6,.88),transparent);padding-inline:clamp(16px,4vw,60px)}
        .lux-nav-links{gap:clamp(16px,2.5vw,30px);font-size:.64rem;color:#d0c9bd}
        .lux-nav-actions{font-size:.66rem;color:#e0bd70}
        .lux-hero-copy h1{color:#fff5df;text-shadow:0 4px 30px rgba(0,0,0,.55)}
        .lux-hero-date{font-size:.78rem;color:#f0d58e;letter-spacing:.34em}
        .lux-hero-sub{color:#eee5d6;font-size:1.1rem;text-shadow:0 2px 14px #000}
        .lux-scroll{font-size:.58rem;color:#ddd4c5}
        .lux-section-number{font-size:.64rem;color:#a49b8c}
        .lux-story h2,.lux-section-heading h2,.lux-venue h2{color:#201d18}
        .lux-story h2 em,.lux-section-heading h2 em,.lux-venue h2 em{color:#9a702c}
        .lux-lead{color:#5e584e;font-size:1.2rem}
        .lux-caption{font-size:.58rem;color:#756e63}
        .lux-event-index,.occasion-index,.occasion-date{color:#f0d58e!important}
        .lux-event-time{font-size:.72rem;color:#f0d58e}
        .lux-event-venue{color:#b7afa2;font-size:1.05rem}
        .occasion-label{font-size:.58rem!important;color:#bdb3a3!important}
        .occasion-details p{color:#aaa093!important;font-size:1.03rem!important}
        .occasion-details small{font-size:.62rem!important;color:#898073!important}
        .lux-statement .lux-micro,.lux-statement .lux-month{color:#f0d58e}
        .lux-statement-line{color:#eee5d7;font-size:1.45rem}
        .lux-address{color:#5f594f;font-size:1.12rem}
        .lux-map{font-size:.62rem;color:#8d672c;border-color:rgba(141,103,44,.55)}
        .lux-venue-card-top,.lux-venue-card>span{color:#8d672c;font-size:.64rem}
        .lux-venue-card small{font-size:.5rem;color:#81786c}
        .lux-final-copy>p:not(.lux-micro):not(.lux-final-date){color:#c5bdb0;font-size:1.18rem}
        .lux-final-date{font-size:.7rem;color:#f0d58e}
        .lux-rsvp{font-size:.62rem;color:#f0d58e}
        .lux-final footer{font-size:.5rem;color:#777064}
        .scratch-date-inner h2{color:#fff0d1!important}
        .scratch-lead{color:#aaa092!important;font-size:1rem!important}
        .scratch-date-underlay{color:#f5dfaa!important}
        .scratch-date-underlay span{font-size:.6rem!important;color:#f2dca5!important}
        .scratch-date-underlay i{font-size:.52rem!important;color:#c1a875!important}
        .scratch-accessible{font-size:.58rem!important;color:#f0d58e!important;border-color:rgba(240,213,142,.65)!important}
        .scratch-result span{font-size:.58rem!important;color:#c6b68f!important}
        .scratch-result i{color:#c3a66f!important}
        @media(max-width:760px){
          .lux-nav{height:64px}.lux-nav-links{display:none}.lux-nav-mark{font-size:1.8rem}.lux-nav-actions{gap:14px;font-size:.72rem}
          .lux-micro{font-size:.62rem!important;letter-spacing:.18em!important}
          .lux-hero-copy h1{font-size:clamp(3.7rem,14vw,6rem)}
          .lux-hero-date{font-size:.72rem;letter-spacing:.25em}.lux-hero-sub{font-size:1rem;padding-inline:22px}
          .lux-scroll{font-size:.54rem;bottom:24px}
          .lux-lead{font-size:1.05rem;line-height:1.8}
          .lux-story h2,.lux-section-heading h2,.lux-venue h2{font-size:clamp(3rem,12vw,4.7rem)}
          .lux-address{font-size:1rem}.lux-final-copy>p:not(.lux-micro):not(.lux-final-date){font-size:1.05rem}
          .scratch-date-underlay span{font-size:.52rem!important}.scratch-date-underlay i{font-size:.45rem!important}.scratch-lead{font-size:.95rem!important}
        }
      `}</style>
    </main>}
  </div>;
}

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
    </main>}
  </div>;
}

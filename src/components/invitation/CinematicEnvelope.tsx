"use client";

import { useState } from "react";

export function CinematicEnvelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const open = () => { if (opening) return; setOpening(true); window.setTimeout(onOpen, 1100); };

  return (
    <section className={`cinema-envelope luxury-cover ${opening ? "is-opening" : ""}`} aria-label="Kavya and Tejas wedding invitation">
      <div className="luxury-stars" />
      <div className="luxury-glow" />
      <header className="luxury-topbar"><span>K &amp; T</span><div><span>EN</span><span className="top-dot">•</span><span>♫</span><span>☰</span></div></header>

      <div className="luxury-cover-grid">
        <div className="luxury-hero-panel">
          <p className="lux-micro">A PRIVATE INVITATION</p>
          <div className="luxury-ornament">✦</div>
          <div className="luxury-monogram">K <i>&amp;</i> T</div>
          <p className="luxury-names">Kavya <em>and</em> Tejas</p>
          <div className="luxury-line" />
          <p className="luxury-family">TOGETHER WITH THEIR FAMILIES<br />INVITE YOU TO CELEBRATE<br />THE BEGINNING OF THEIR FOREVER</p>
          <div className="luxury-temple" aria-hidden="true"><div className="temple-halo" /><div className="temple-dome" /><div className="temple-body"><i /><i /><i /><i /><i /></div><div className="temple-steps" /><div className="temple-water" /></div>
          <button className="luxury-scroll" onClick={open}><span>OPEN INVITATION</span><b>↓</b></button>
        </div>

        <div className="luxury-envelope-panel">
          <div className="luxury-envelope-object">
            <div className="lux-envelope-back" />
            <div className="lux-envelope-paper"><span className="paper-crest">K &amp; T</span><p>YOU ARE CORDIALLY INVITED<br />TO CELEBRATE THE WEDDING OF</p><strong>Kavya <em>and</em> Tejas</strong><span className="paper-ornament">✦</span></div>
            <div className="lux-envelope-front"><span>K &amp; T</span><small>27 · 08 · 2026</small></div>
            <div className="lux-envelope-flap" />
            <div className="lux-envelope-seal">K<small>&amp;</small>T</div>
          </div>
          <button className="luxury-envelope-open" onClick={open}>{opening ? "OPENING…" : "OPEN THE INVITATION"}</button>
          <p className="luxury-hint">TAP TO BEGIN</p>
        </div>
      </div>
      <div className="luxury-vignette" />
    </section>
  );
}

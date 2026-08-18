"use client";

import { useState } from "react";

export function CinematicEnvelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const open = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 1350);
  };

  return (
    <section
      className={`cinema-envelope ${opening ? "is-opening" : ""}`}
      onClick={open}
      aria-label="Open Kavya and Tejas wedding invitation"
    >
      <div className="envelope-stars" />
      <div className="envelope-aura" />

      <div className="envelope-hero-copy">
        <p className="lux-micro">A PRIVATE INVITATION</p>
        <div className="envelope-hero-monogram">K<span>&</span>T</div>
        <p className="envelope-hero-names">Kavya <i>and</i> Tejas</p>
        <span className="envelope-rule" />
        <p className="envelope-date">THURSDAY · 27 AUGUST 2026</p>
      </div>

      <div className="envelope-object">
        <div className="envelope-back" />
        <div className="envelope-flap" />
        <div className="envelope-paper">
          <span className="paper-crest">K & T</span>
          <p>WITH THE BLESSINGS OF OUR FAMILIES</p>
          <strong>Kavya <i>and</i> Tejas</strong>
          <small>invite you to witness the beginning of forever</small>
          <span className="paper-date">27 · 08 · 2026</span>
        </div>
        <div className="envelope-front">
          <span className="envelope-front-mark">K & T</span>
          <span className="envelope-front-date">27 · 08 · 2026</span>
        </div>
        <div className="envelope-seal">K<span>&</span>T</div>
      </div>

      <button className="envelope-open" onClick={(event) => { event.stopPropagation(); open(); }}>
        <span>{opening ? "OPENING" : "OPEN INVITATION"}</span>
      </button>
      <p className="envelope-hint">TAP TO BEGIN</p>
      <div className="envelope-vignette" />
    </section>
  );
}

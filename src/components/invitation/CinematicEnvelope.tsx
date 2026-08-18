"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";

export function CinematicEnvelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const open = () => { if (opening) return; setOpening(true); window.setTimeout(onOpen, 1250); };

  return (
    <section className={`cinema-envelope ${opening ? "is-opening" : ""}`} onClick={open} aria-label="Open Kavya and Tejas wedding invitation">
      <div className="envelope-stars" />
      <div className="envelope-aura" />
      <div className="envelope-copy">
        <p className="lux-micro">A PRIVATE INVITATION</p>
        <div className="envelope-monogram">K<span>&</span>T</div>
        <p className="envelope-names">Kavya <i>and</i> Tejas</p>
        <span className="envelope-rule" />
        <p className="envelope-date">THURSDAY · 27 AUGUST 2026</p>
      </div>
      <div className="envelope-object">
        <div className="envelope-back" />
        <div className="envelope-flap"><span>K & T</span></div>
        <div className="envelope-paper"><p>With the blessings of our families</p><strong>Kavya & Tejas</strong><small>invite you to witness the beginning of forever</small></div>
        <div className="envelope-front"><span>27 · 08 · 2026</span></div>
        <div className="envelope-seal">K<span>&</span>T</div>
      </div>
      <button className="envelope-open" onClick={(event) => { event.stopPropagation(); open(); }}><span>{opening ? "WELCOME" : "OPEN INVITATION"}</span><ArrowDown size={14} /></button>
      <p className="envelope-hint">TAP TO BEGIN</p>
      <div className="envelope-vignette" />
    </section>
  );
}

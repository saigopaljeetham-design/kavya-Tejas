"use client";

import { useState } from "react";

export function MandapScene() {
  const [lit, setLit] = useState(false);

  return (
    <section className={`mandap-section ${lit ? "is-lit" : ""}`}>
      <div className="mandap-copy">
        <p className="lux-micro gold">THE SACRED MOMENT</p>
        <h2>Under one roof.<br /><em>Under the blessings.</em></h2>
        <p>As the hour of the Muhurtham approaches, the mandapam comes alive with light, flowers and tradition.</p>
        <button onClick={() => setLit((value) => !value)}>{lit ? "DIM THE MANDAPAM" : "LIGHT THE MANDAPAM"}</button>
      </div>
      <div className="mandap-art" aria-label="Interactive wedding mandap">
        <div className="mandap-roof"><span>OM</span></div>
        <div className="mandap-toran"><i /><i /><i /><i /><i /></div>
        <div className="mandap-pillar left" />
        <div className="mandap-pillar right" />
        <div className="mandap-bells"><span>+</span><span>+</span><span>+</span></div>
        <div className="mandap-flame left"><i /></div>
        <div className="mandap-flame right"><i /></div>
        <div className="mandap-floor" />
      </div>
    </section>
  );
}

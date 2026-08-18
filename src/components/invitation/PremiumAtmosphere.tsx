"use client";

import { useEffect, useState } from "react";

const petals = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 17 + 5) % 100}%`,
  delay: `${(i % 7) * 1.1}s`,
  duration: `${8 + (i % 5) * 1.5}s`,
  size: `${5 + (i % 4) * 2}px`,
  drift: `${((i % 5) - 2) * 28}px`,
}));

export function PremiumAtmosphere() {
  const [bells, setBells] = useState(0);

  useEffect(() => {
    if (!bells) return;
    const timer = window.setTimeout(() => setBells(0), 900);
    return () => window.clearTimeout(timer);
  }, [bells]);

  return (
    <>
      <div className="premium-petals" aria-hidden="true">
        {petals.map((petal, i) => (
          <span
            key={i}
            className="premium-petal"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              width: petal.size,
              height: `calc(${petal.size} * .62)`,
              ["--petal-drift" as string]: petal.drift,
            }}
          />
        ))}
      </div>

      <button
        className={`premium-bell ${bells ? "is-ringing" : ""}`}
        aria-label="Ring the wedding bell"
        onClick={() => setBells((value) => value + 1)}
      >
        <span>♢</span>
        <i aria-hidden="true" />
      </button>
      {bells > 0 && <span className="bell-ripple" aria-hidden="true" />}
    </>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";

const HALDI_ISO = "2026-08-27T10:30:00+05:30";

function getRemaining() {
  const target = new Date(HALDI_ISO).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const targetDate = new Date(HALDI_ISO);
  const today = new Date();
  const happeningToday = today.getFullYear() === targetDate.getFullYear() && today.getMonth() === targetDate.getMonth() && today.getDate() === targetDate.getDate();
  return { days: Math.floor(diff/86400000), hours: Math.floor((diff/3600000)%24), minutes: Math.floor((diff/60000)%60), seconds: Math.floor((diff/1000)%60), complete: diff<=0, happeningToday };
}

export function LuxuryCountdown() {
  const [time,setTime]=useState(getRemaining);
  useEffect(()=>{const id=window.setInterval(()=>setTime(getRemaining()),1000);return()=>window.clearInterval(id)},[]);
  const label=useMemo(()=>time.happeningToday?"HAPPENING TODAY!":"COUNTING DOWN TO THE FIRST CELEBRATION",[time.happeningToday]);
  if(time.complete){return <section className="lux-countdown-wrap lux-countdown-today" aria-label="Haldi status"><p className="lux-micro gold">పసుపు · THE FIRST CELEBRATION</p><div className="lux-today-title">{time.happeningToday?"HAPPENING TODAY!":"THE CELEBRATION HAS BEGUN"}</div><p className="lux-countdown-date">THURSDAY · 27 AUGUST 2026 · 10:30 AM · HALDI / NALUGU</p><style jsx global>{`.lux-countdown-today{min-height:42vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 18px;background:radial-gradient(circle at 50% 50%,rgba(205,168,90,.14),transparent 34%),#080807}.lux-today-title{margin:22px 0;font:300 clamp(3rem,8vw,7rem)/.9 var(--font-display);color:#f0dfb5;letter-spacing:-.045em}.lux-countdown-today .lux-countdown-date{font:500 .48rem var(--font-label);letter-spacing:.25em;color:#98886c}@media(max-width:760px){.lux-countdown-today{min-height:45vh}.lux-today-title{font-size:clamp(3rem,13vw,5rem)}}`}</style></section>}
  const units=[["days",time.days],["hours",time.hours],["minutes",time.minutes],["seconds",time.seconds]] as const;
  return <section className="lux-countdown-wrap" aria-label="Countdown to Haldi"><p className="lux-micro gold">పసుపు · {label}</p><div className="lux-countdown">{units.map(([unit,value],index)=><div className="lux-countdown-unit" key={unit}><strong key={`${unit}-${value}`}>{String(value).padStart(2,"0")}</strong><span>{unit}</span>{index<units.length-1&&<i>·</i>}</div>)}</div><p className="lux-countdown-date">THURSDAY · 27 AUGUST 2026 · 10:30 AM · HALDI / NALUGU</p></section>;
}

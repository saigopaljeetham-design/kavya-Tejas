"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInvitation } from "@/components/providers/InvitationProvider";
import { Particles } from "@/components/ui/Particles";

const SEALED = "/images/envelope/temple-sealed.png";
const OPENED = "/images/envelope/main.jpg";
const FRAME_W = 920;
const FRAME_H = 1240;
const SEAL = { left: "49.8%", top: "84%" };
const CARD_CLIP = "inset(7.5% 18.5% 36% 18.5% round 1.6%)";
const ENVELOPE_CLIP = "polygon(0% 39.5%, 11.5% 39.5%, 50% 63.5%, 88.5% 44%, 100% 44%, 100% 100%, 0% 100%)";
const CARD_TUCK = "translateY(37%)";
const FILL_FEATHER = "linear-gradient(90deg, transparent 0%, #000 1.5%, #000 98.5%, transparent 100%)";
const SEQUENCE = [
  ["glow", 1000], ["seal", 1500], ["wipe", 1900], ["swap", 2400],
  ["draw", 2800], ["settle", 3300], ["done", 6400],
] as const;
type Cue = (typeof SEQUENCE)[number][0];
const CARD_MS = 2100;
const FADE_MS = 1100;
const CALM = 0.35;

export function OpeningScene() {
  const { open, t } = useInvitation();
  const [cue, setCue] = useState(-1);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [gone, setGone] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const ids = timers.current;
    return () => ids.forEach((id) => window.clearTimeout(id));
  }, []);

  const handleOpen = useCallback(() => {
    if (started) return;
    open();
    const calm = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scale = calm ? CALM : 1;
    setStarted(true);
    SEQUENCE.forEach(([name, ms], i) => {
      timers.current.push(window.setTimeout(() => (name === "done" ? setFinished(true) : setCue(i)), ms * scale));
    });
  }, [started, open]);

  useEffect(() => {
    if (!finished) return;
    const id = window.setTimeout(() => setGone(true), FADE_MS);
    return () => window.clearTimeout(id);
  }, [finished]);

  if (gone) return null;
  const at = (name: Cue) => cue >= 0 && cue >= SEQUENCE.findIndex(([n]) => n === name);

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center overflow-hidden bg-[#1a1008]" style={{ opacity: finished ? 0 : 1, transition: `opacity ${FADE_MS}ms ease` }}>
      <Image src={SEALED} alt="" fill priority sizes="100vw" aria-hidden="true" className="scale-150 object-cover opacity-60 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,42,14,0.15)_0%,rgba(26,15,6,0.82)_55%,rgba(14,8,3,0.96)_100%)]" />
      <div className="relative overflow-hidden [container-type:inline-size]" style={{ width: `min(100%, calc(100dvh * ${FRAME_W} / ${FRAME_H}))`, aspectRatio: `${FRAME_W} / ${FRAME_H}` }}>
        <Image src={OPENED} alt={`${t.opening.invited} — ${t.opening.blessing}`} fill priority sizes="(max-width: 768px) 100vw, 74vh" className="object-contain" />
        <div aria-hidden="true" className="absolute z-10 rounded-[2cqw] bg-[linear-gradient(180deg,#f0e1bb_0%,#f5e9cd_46%,#faf1de_78%,#fdf6e8_100%)]" style={{ left: "18.5%", width: "63%", top: "7.5%", height: "56.5%", maskImage: FILL_FEATHER, WebkitMaskImage: FILL_FEATHER }} />
        <Image src={OPENED} alt="" fill priority sizes="(max-width: 768px) 100vw, 74vh" aria-hidden="true" className="z-20 object-contain" style={{ clipPath: CARD_CLIP, transform: at("draw") ? "translateY(0%)" : CARD_TUCK, transition: `transform ${CARD_MS}ms cubic-bezier(0.18, 0.72, 0.24, 1)` }} />
        <Image src={OPENED} alt="" fill priority sizes="(max-width: 768px) 100vw, 74vh" aria-hidden="true" className="z-30 object-contain" style={{ clipPath: ENVELOPE_CLIP }} />
        <Image src={SEALED} alt={t.opening.blessing} fill priority sizes="(max-width: 768px) 100vw, 74vh" className="z-40 object-contain" style={{ opacity: at("swap") ? 0 : 1, transform: `scale(${at("glow") ? 1.045 : 1})`, transition: "opacity 350ms ease, transform 2200ms ease-out" }} />
        <div aria-hidden="true" className="absolute z-[45] rounded-full bg-[radial-gradient(circle,rgba(255,228,158,0.95)_0%,rgba(255,201,104,0.45)_34%,rgba(255,184,74,0)_70%)] mix-blend-screen" style={{ left: SEAL.left, top: SEAL.top, width: "40cqw", height: "40cqw", marginLeft: "-20cqw", marginTop: "-20cqw", opacity: at("wipe") ? 0 : at("seal") ? 1 : at("glow") ? 0.55 : 0, transform: `scale(${at("seal") ? 1.2 : 0.8})`, transition: "opacity 450ms ease, transform 400ms ease-out" }} />
        <div aria-hidden="true" className="absolute z-50 rounded-full bg-[radial-gradient(circle,rgba(255,252,242,1)_0%,rgba(255,246,220,0.96)_22%,rgba(255,224,152,0.8)_42%,rgba(255,202,110,0.34)_60%,rgba(255,184,74,0)_78%)] mix-blend-screen" style={{ width: "300cqw", height: "300cqw", left: SEAL.left, top: SEAL.top, marginLeft: "-150cqw", marginTop: "-150cqw", opacity: at("settle") ? 0 : at("wipe") ? 1 : 0, transform: `scale(${at("wipe") ? 1 : 0.16})`, transition: "opacity 1400ms ease, transform 1500ms cubic-bezier(0.3,0.6,0.35,1)" }} />
      </div>
      <div className="pointer-events-none absolute inset-0 z-40"><Particles count={18} /></div>
      {!started && <button type="button" onClick={handleOpen} aria-label={t.opening.open} className="absolute inset-0 z-50 cursor-pointer bg-transparent" />}
    </div>
  );
}

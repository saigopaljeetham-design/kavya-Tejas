"use client";

import { useEffect, useRef, useState } from "react";

const petals = Array.from({ length: 18 }, (_, i) => ({ left: `${(i * 17 + 5) % 100}%`, delay: `${(i % 7) * 1.1}s`, duration: `${8 + (i % 5) * 1.5}s`, size: `${5 + (i % 4) * 2}px`, drift: `${((i % 5) - 2) * 28}px` }));
const vows = [["ధర్మం · DHARMA", "Purpose & righteousness together"],["ప్రేమ · PREMA", "Unconditional affection and warmth"],["మైత్రి · MAITRI", "Lifelong friendship as the foundation"],["సంతోషం · SANTOSHA", "Shared joy in everyday moments"],["సహచర్యం · SAHACHARYA", "Walking hand-in-hand through all phases"],["కుటుంబం · KUTUMBA", "Honouring families and traditions"],["అక్షయ · AKSHAYA", "An everlasting commitment"]];

export function PremiumAtmosphere() {
  const [bells,setBells]=useState(0);
  const ambientRef=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{if(!bells)return;const timer=window.setTimeout(()=>setBells(0),900);return()=>window.clearTimeout(timer)},[bells]);

  // Lightweight HiDPI ambient gold particles: petals + soft bokeh, capped for mobile.
  useEffect(()=>{
    const canvas=ambientRef.current;if(!canvas)return;
    const ctx=canvas.getContext("2d");if(!ctx)return;
    let raf=0,w=0,h=0,dpr=1;
    const count=window.innerWidth<700?16:28;
    const particles=Array.from({length:count},()=>({x:Math.random(),y:Math.random(),r:Math.random()*2+0.7,d:Math.random()*0.00055+0.00018,a:Math.random()*0.45+0.12,rot:Math.random()*Math.PI*2,spin:(Math.random()-.5)*0.012}));
    const resize=()=>{dpr=Math.min(window.devicePixelRatio||1,2);w=window.innerWidth;h=window.innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=`${w}px`;canvas.style.height=`${h}px`;ctx.setTransform(dpr,0,0,dpr,0,0)};
    const draw=()=>{ctx.clearRect(0,0,w,h);for(const p of particles){p.y-=p.d;p.rot+=p.spin;if(p.y<-.05){p.y=1.05;p.x=Math.random()}const x=p.x*w,y=p.y*h;ctx.save();ctx.translate(x,y);ctx.rotate(p.rot);ctx.globalAlpha=p.a;ctx.fillStyle="#D9B45C";ctx.beginPath();ctx.ellipse(0,0,p.r*1.7,p.r*.75,0,0,Math.PI*2);ctx.fill();ctx.restore()}raf=requestAnimationFrame(draw)};
    resize();draw();window.addEventListener("resize",resize,{passive:true});return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize)};
  },[]);

  // Smoothly ramps volume whenever the invitation audio starts playing.
  useEffect(()=>{
    const audio=document.querySelector<HTMLAudioElement>(".luxury-invitation > audio");if(!audio)return;
    let timer:number|undefined;
    const ramp=()=>{window.clearInterval(timer);if(audio.volume>=0.58)return;audio.volume=0;let v=0;timer=window.setInterval(()=>{v=Math.min(.6,v+.04);audio.volume=v;if(v>=.6)window.clearInterval(timer)},100)};
    audio.addEventListener("play",ramp);return()=>{window.clearInterval(timer);audio.removeEventListener("play",ramp)};
  },[]);

  useEffect(()=>{
    let cleanups:(()=>void)[]=[];
    const attach=()=>{
      cleanups.forEach(fn=>fn());cleanups=[];
      const story=document.querySelector<HTMLElement>(".celestial-story");const stars=Array.from(document.querySelectorAll<HTMLElement>(".celestial-star"));if(!story||!stars.length)return;
      const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){stars.forEach((star,i)=>{star.classList.add("is-sequencing");star.style.setProperty("--star-delay",`${i*130}ms`)});observer.disconnect()}},{threshold:.25});observer.observe(story);cleanups.push(()=>observer.disconnect());
      stars.forEach((star,i)=>{const handler=()=>{if(typeof navigator!=="undefined"&&"vibrate"in navigator)navigator.vibrate?.(15);let sheet=document.querySelector<HTMLElement>(".saptapadi-sheet");if(!sheet){sheet=document.createElement("div");sheet.className="saptapadi-sheet";sheet.innerHTML=`<div class="saptapadi-sheet-backdrop"></div><div class="saptapadi-sheet-card" role="dialog" aria-modal="true"><button class="saptapadi-sheet-close" aria-label="Close">×</button><span class="saptapadi-sheet-kicker">SAPTAPADI · SACRED STEP ${i+1}</span><strong class="saptapadi-sheet-title"></strong><p class="saptapadi-sheet-reflection"></p><span class="saptapadi-sheet-rule">— ✦ —</span></div>`;document.body.appendChild(sheet);sheet.querySelector(".saptapadi-sheet-backdrop")?.addEventListener("click",()=>sheet?.classList.remove("is-open"));sheet.querySelector(".saptapadi-sheet-close")?.addEventListener("click",()=>sheet?.classList.remove("is-open"));}const title=sheet.querySelector<HTMLElement>(".saptapadi-sheet-title"),reflection=sheet.querySelector<HTMLElement>(".saptapadi-sheet-reflection");if(title)title.textContent=vows[i][0];if(reflection)reflection.textContent=vows[i][1];sheet.classList.add("is-open")};star.addEventListener("click",handler);cleanups.push(()=>star.removeEventListener("click",handler))});
    };
    attach();
    const mutation=new MutationObserver(()=>{if(document.querySelector(".celestial-star")&&!cleanups.length)attach()});mutation.observe(document.body,{childList:true,subtree:true});
    return()=>{mutation.disconnect();cleanups.forEach(fn=>fn());document.querySelector(".saptapadi-sheet")?.remove()};
  },[]);

  // Guest utility launcher appears only after the envelope has opened.
  useEffect(()=>{
    const mount=()=>{
      if(document.querySelector(".guest-utility-dock"))return;
      if(!document.querySelector("main"))return;
      const dock=document.createElement("div");dock.className="guest-utility-dock";dock.innerHTML=`<a class="guest-wa" href="https://wa.me/?text=${encodeURIComponent("Namaste! Congratulations Kavya & Tejas. Delighted to RSVP for the wedding on August 27th! 🎉")}" target="_blank" rel="noreferrer">💬 RSVP on WhatsApp</a><a class="guest-ride guest-uber" href="https://m.uber.com/looking?drop%5B0%5D=%7B%22latitude%22%3A16.42877%2C%22longitude%22%3A80.65704%2C%22addressLine1%22%3A%22Ishaar%20Staycation%22%2C%22addressLine2%22%3A%22Chirravuru%2C%20Andhra%20Pradesh%22%7D" target="_blank" rel="noreferrer">🚗 Uber to Venue</a><a class="guest-ride guest-ola" href="https://book.olacabs.com/?drop_lat=16.42877&drop_lng=80.65704&drop_name=Ishaar%20Staycation%2C%20Chirravuru" target="_blank" rel="noreferrer">🚕 Ola to Venue</a>`;document.body.appendChild(dock);
    };
    const observer=new MutationObserver(mount);observer.observe(document.body,{childList:true,subtree:true});mount();return()=>{observer.disconnect();document.querySelector(".guest-utility-dock")?.remove()};
  },[]);

  return <><canvas ref={ambientRef} className="ambient-gold-canvas" aria-hidden="true"/><div className="premium-petals" aria-hidden="true">{petals.map((petal,i)=><span key={i} className="premium-petal" style={{left:petal.left,animationDelay:petal.delay,animationDuration:petal.duration,width:petal.size,height:`calc(${petal.size} * .62)`,["--petal-drift" as string]:petal.drift}} />)}</div><button className={`premium-bell ${bells?"is-ringing":""}`} aria-label="Ring the wedding bell" onClick={()=>{setBells(v=>v+1);if(typeof navigator!=="undefined"&&"vibrate"in navigator)navigator.vibrate?.(12)}}><span>♢</span><i aria-hidden="true" /></button>{bells>0&&<span className="bell-ripple" aria-hidden="true"/>}
  <style jsx global>{`
    .ambient-gold-canvas{position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:8;opacity:.58;mix-blend-mode:screen}
    .lux-nav-actions button:last-child{position:relative;min-width:48px;display:inline-flex;align-items:center;justify-content:center;gap:5px;border:1px solid rgba(214,177,91,.18);border-radius:999px;background:rgba(12,10,7,.52);backdrop-filter:blur(12px);box-shadow:0 8px 25px rgba(0,0,0,.18);transition:.35s}.lux-nav-actions button:last-child:after{content:"";width:13px;height:10px;display:inline-block;background:linear-gradient(90deg,#cba65c 0 2px,transparent 2px 4px,#cba65c 4px 6px,transparent 6px 8px,#cba65c 8px 10px,transparent 10px 12px);animation:audioBars 1.15s ease-in-out infinite;opacity:.65}.lux-nav-actions button:last-child:hover{border-color:rgba(214,177,91,.55);box-shadow:0 0 28px rgba(214,177,91,.12)}
    @keyframes audioBars{0%,100%{transform:scaleY(.45)}50%{transform:scaleY(1.15)}}
    .celestial-star.is-sequencing{animation:starArrival .75s cubic-bezier(.2,.8,.2,1) var(--star-delay) both}.celestial-star.is-sequencing.active{animation:none;transform:translate(-50%,-50%) rotate(var(--angle)) translateX(clamp(115px,13vw,175px)) rotate(calc(var(--angle) * -1)) scale(1.16)}
    @keyframes starArrival{from{opacity:.08;transform:translate(-50%,-50%) rotate(var(--angle)) translateX(45px) rotate(calc(var(--angle) * -1)) scale(.55);filter:blur(3px)}to{opacity:1;transform:translate(-50%,-50%) rotate(var(--angle)) translateX(clamp(115px,13vw,175px)) rotate(calc(var(--angle) * -1)) scale(1);filter:blur(0)}}
    .celestial-story .celestial-orbit{animation:orbitPulse 12s ease-in-out infinite}.celestial-story .celestial-knot:after{content:"🪔";position:absolute;left:50%;top:-22px;transform:translateX(-50%);font-size:1.35rem;filter:drop-shadow(0 0 12px rgba(255,196,76,.65));animation:agniFlicker 1.1s ease-in-out infinite alternate}.celestial-story .celestial-knot:before{content:"AGNI";position:absolute;left:50%;bottom:-27px;transform:translateX(-50%);font:500 .36rem var(--font-label);letter-spacing:.22em;color:#a9874e}
    .celestial-star{top:50%!important;left:50%!important;margin:0!important}.star-1{--angle:-90deg}.star-2{--angle:-38deg}.star-3{--angle:14deg}.star-4{--angle:66deg}.star-5{--angle:118deg}.star-6{--angle:170deg}.star-7{--angle:222deg}.celestial-star{transform:translate(-50%,-50%) rotate(var(--angle)) translateX(clamp(115px,13vw,175px)) rotate(calc(var(--angle) * -1))}
    @keyframes orbitPulse{0%,100%{transform:rotate(-18deg) scale(1)}50%{transform:rotate(2deg) scale(1.03)}}@keyframes agniFlicker{from{transform:translateX(-50%) scale(.92) rotate(-3deg)}to{transform:translateX(-50%) scale(1.08) rotate(3deg)}}
    .saptapadi-sheet{position:fixed;inset:0;z-index:10050;pointer-events:none;opacity:0;transition:opacity .35s ease}.saptapadi-sheet.is-open{opacity:1;pointer-events:auto}.saptapadi-sheet-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.62);backdrop-filter:blur(8px)}.saptapadi-sheet-card{position:absolute;left:50%;bottom:18px;transform:translate(-50%,110%);width:min(680px,calc(100% - 24px));padding:28px 24px 30px;border:1px solid rgba(223,190,115,.4);background:linear-gradient(145deg,rgba(31,25,16,.97),rgba(7,7,6,.98));box-shadow:0 25px 80px rgba(0,0,0,.6),inset 0 0 50px rgba(204,163,84,.05);transition:transform .45s cubic-bezier(.2,.8,.2,1)}.saptapadi-sheet.is-open .saptapadi-sheet-card{transform:translate(-50%,0)}.saptapadi-sheet-close{position:absolute;right:12px;top:8px;border:0;background:transparent;color:#c7a45e;font-size:1.5rem;line-height:1;cursor:pointer}.saptapadi-sheet-kicker{display:block;font:500 .42rem var(--font-label);letter-spacing:.28em;color:#9b7a45}.saptapadi-sheet-title{display:block;margin-top:9px;font:400 clamp(1.7rem,5vw,2.5rem) var(--font-display);color:#f0dfb8}.saptapadi-sheet-reflection{margin:8px 0 0;color:#b9ad99;font:italic 1rem/1.6 var(--font-display)}.saptapadi-sheet-rule{display:block;margin-top:17px;color:#bd9650;font:500 .6rem var(--font-label);letter-spacing:.25em}
    .guest-utility-dock{position:fixed;right:18px;bottom:18px;z-index:10020;display:flex;flex-direction:column;gap:7px;align-items:stretch}.guest-utility-dock a{display:block;text-decoration:none;text-align:center;padding:10px 13px;border:1px solid rgba(216,180,96,.35);background:rgba(8,7,5,.78);backdrop-filter:blur(14px);color:#e7c97f;border-radius:999px;font:500 .42rem var(--font-label);letter-spacing:.12em;box-shadow:0 10px 30px rgba(0,0,0,.28)}.guest-utility-dock .guest-wa{border-color:rgba(100,190,120,.35);color:#bce6c5}.guest-utility-dock a:hover{background:#caa45b;color:#080706}.guest-utility-dock .guest-wa:hover{background:#75b982;color:#061007}
    /* Upgrade the existing envelope into a true physical flap + red wax seal. */
    .v2-envelope{perspective:1400px}.v2-gold-flap{transform-origin:top center;backface-visibility:hidden;transform-style:preserve-3d;transition:transform .9s cubic-bezier(.72,0,.18,1)}.cinema-v2.is-opening .v2-gold-flap{transform:rotateX(-180deg)}.cinema-v2.is-opening .v2-inner-card{opacity:1;transform:translateY(-15%);transition-delay:.18s}.v2-seal{background:radial-gradient(circle at 32% 24%,#d34b3f 0,#8f1f24 48%,#4d0d14 100%);border-color:#e6ad7c;box-shadow:inset 0 3px 5px rgba(255,235,190,.2),0 0 0 5px rgba(113,30,29,.22),0 10px 28px rgba(0,0,0,.62)}.v2-seal:after{content:"K & T";position:absolute;inset:8px;border:1px dashed rgba(255,221,160,.42);border-radius:50%;display:grid;place-items:center;font:600 .52rem var(--font-label);letter-spacing:.14em;color:#ffe2a5}.v2-seal span,.v2-seal i{position:relative;z-index:2;text-shadow:0 1px 1px #4c1012}.v2-seal b{z-index:3}.cinema-v2.is-opening .v2-seal{animation:waxBreak .5s ease both}.cinema-v2.is-opening .v2-envelope-wrap{animation:none;transform:translateY(12px) scale(1.015)}@keyframes waxBreak{0%{opacity:1;transform:translate(-50%,-50%) scale(1) rotate(0)}45%{opacity:1;transform:translate(-50%,-50%) scale(1.08) rotate(-8deg)}100%{opacity:0;transform:translate(-50%,-50%) scale(.65) rotate(12deg)}}
    .premium-bell{touch-action:manipulation}.premium-bell.is-ringing{animation:premiumBellPulse .8s ease}.bell-ripple{animation:bellRipple .8s ease both}@keyframes premiumBellPulse{25%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}75%{transform:rotate(-4deg)}100%{transform:rotate(0)}}@keyframes bellRipple{from{opacity:.55;transform:scale(.75)}to{opacity:0;transform:scale(2.2)}}
    @media(max-width:760px){.lux-nav-actions button:last-child{min-width:44px;padding:7px 9px}.saptapadi-sheet-card{bottom:0;border-radius:22px 22px 0 0;padding-bottom:34px}.celestial-story .celestial-constellation{overflow:visible}.celestial-star{transform:translate(-50%,-50%) rotate(var(--angle)) translateX(min(39vw,155px)) rotate(calc(var(--angle) * -1))}.guest-utility-dock{left:12px;right:12px;bottom:12px;display:grid;grid-template-columns:1fr 1fr 1fr}.guest-utility-dock a{font-size:.34rem;padding:9px 5px}.cinema-v2.is-opening .v2-gold-flap{transform:rotateX(-180deg)}}
    @media(prefers-reduced-motion:reduce){.ambient-gold-canvas{display:none}.celestial-story .celestial-orbit,.celestial-story .celestial-knot:after{animation:none}.premium-petal{animation:none!important}}
  `}</style></>;
}

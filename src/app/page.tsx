"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { weddingConfig } from "@/config/wedding";
import { PremiumAtmosphere } from "@/components/invitation/PremiumAtmosphere";
import { LuxuryCountdown } from "@/components/invitation/LuxuryCountdown";
import { MandapScene } from "@/components/invitation/MandapScene";
import { CinematicGallery } from "@/components/invitation/CinematicGallery";
import { CinematicEnvelope } from "@/components/invitation/CinematicEnvelope";
import { ScratchDateReveal } from "@/components/invitation/ScratchDateReveal";
import { OccasionsSection } from "@/components/invitation/OccasionsSection";

function GoldLine() {
  return <span className="lux-line" aria-hidden="true" />;
}

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`lux-reveal ${className}`}>{children}</div>;
}

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [language, setLanguage] = useState<"EN" | "TE">("EN");
  const [activeStar, setActiveStar] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [opened]);

  const blessings = [
    "Dharma · a life of shared purpose",
    "Prema · love that grows with every season",
    "Maitri · friendship and companionship",
    "Santosha · joy in the little moments",
    "Sahacharya · walking together through life",
    "Kutumba · two families becoming one",
    "Akshaya · a bond that keeps blossoming",
  ];

  const selectedBlessing = blessings[(activeStar || 1) - 1];

  return (
    <div className="luxury-invitation">
      <PremiumAtmosphere />

      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={weddingConfig.music.source}
      />

      {!opened && (
        <CinematicEnvelope
          onOpen={() => {
            const audio = audioRef.current;

            if (audio) {
              audio.volume = 0;
              void audio.play().catch(() => {});
            }

            setOpened(true);
          }}
        />
      )}

      {opened && (
        <main>
          {/* NAVIGATION */}
          <nav className="lux-nav">
            <a href="#top" className="lux-nav-mark">
              K<span>&</span>T
            </a>

            <div className="lux-nav-links">
              <a href="#celebrations">Occasions</a>
              <a href="#muhurtham">Muhurtham</a>
              <a href="#gallery">Gallery</a>
              <a href="#venue">Venue</a>
            </div>

            <div className="lux-nav-actions">
              <button
                aria-label="Switch language"
                onClick={() =>
                  setLanguage(language === "EN" ? "TE" : "EN")
                }
              >
                {language}
              </button>
            </div>
          </nav>

          {/* HERO */}
          <section
            id="top"
            className="relative min-h-[100svh] overflow-hidden bg-black text-white"
          >
            <div className="absolute inset-0">
              <Image
                src={weddingConfig.couplePhoto}
                alt="Kavya and Tejas"
                fill
                priority
                sizes="100vw"
                quality={100}
                className="object-cover object-center"
              />
            </div>

            {/* Keeps the faces bright while creating a readable lower area */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent via-55% to-black/90" />

            {/* Small top blessing - safely above the faces */}
            <div className="absolute inset-x-0 top-[13%] z-10 px-5 text-center">
              <p className="text-[8px] uppercase tracking-[0.38em] text-amber-100/75 sm:text-[10px]">
                శుభమస్తు · WITH THE BLESSINGS OF OUR FAMILIES
              </p>
            </div>

            {/* Main typography moved BELOW the faces */}
            <div className="absolute inset-x-0 bottom-[9%] z-10 px-5 text-center sm:bottom-[10%]">
              <h1 className="font-serif text-[3.15rem] font-light leading-[0.92] tracking-[-0.045em] text-white drop-shadow-[0_4px_22px_rgba(0,0,0,0.9)] sm:text-7xl md:text-8xl">
                {language === "TE" ? (
                  "కావ్య & తేజస్"
                ) : (
                  <>
                    Kavya{" "}
                    <span className="mx-1 text-amber-300/90">&</span>{" "}
                    Tejas
                  </>
                )}
              </h1>

              <div className="mx-auto my-4 h-px w-20 bg-amber-300/70" />

              <p className="text-[10px] tracking-[0.4em] text-amber-100/90 sm:text-xs">
                27 · 08 · 2026
              </p>

              <p className="mx-auto mt-4 max-w-[340px] font-serif text-[13px] italic leading-5 text-white/85 sm:max-w-xl sm:text-base sm:leading-7">
                {language === "TE"
                  ? "మా వివాహ వేడుకకు మిమ్మల్ని ఆహ్వానిస్తున్నాము."
                  : "We invite you to witness the beginning of a Telugu wedding — rooted in family, tradition and love."}
              </p>
            </div>

            <a
              href="#story"
              className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap text-[7px] tracking-[0.32em] text-amber-100/55"
            >
              <span>SCROLL TO ENTER</span>
            </a>
          </section>

          {/* CULTURAL THREAD */}
          <section
            className="cultural-thread"
            aria-label="Telugu wedding heritage"
          >
            <span>🌿 MANGO LEAVES</span>
            <i>✦</i>
            <span>✿ JASMINE</span>
            <i>✦</i>
            <span>🪔 DEEPAM</span>
            <i>✦</i>
            <span>◈ KOLAM</span>
            <i>✦</i>
            <span>AGNI</span>
          </section>

          <ScratchDateReveal />

          {/* SAPTAPADI / STORY */}
          <section id="story" className="celestial-story">
            <div className="celestial-number">01</div>
            <div className="celestial-noise" />

            <div className="celestial-copy">
              <p className="lux-micro gold">
                సప్తపది · SEVEN SACRED STEPS
              </p>

              <h2>
                Written in the stars.
                <br />
                <em>Joined by seven steps.</em>
              </h2>

              <p className="celestial-intro">
                The seven stars are our seven sacred steps — a promise of
                shared purpose, friendship, family, joy and a lifetime
                walked together.
              </p>

              <div className="celestial-mantra">
                <span className="celestial-sanskrit">
                  सखा सप्तपदा भव
                </span>

                <span className="celestial-translit">
                  Sakhā Saptapadā Bhava
                </span>

                <span className="celestial-meaning">
                  “With these seven steps, be my companion for life.”
                </span>
              </div>
            </div>

            <div
              className="celestial-constellation"
              aria-label="Seven sacred wedding blessings"
            >
              <div className="celestial-orbit orbit-one" />
              <div className="celestial-orbit orbit-two" />

              <div className="celestial-knot">
                <span>K</span>
                <i>&amp;</i>
                <span>T</span>
              </div>

              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <button
                  key={i}
                  className={`celestial-star star-${i + 1} ${
                    activeStar === i + 1 ? "active" : ""
                  }`}
                  onClick={() => setActiveStar(i + 1)}
                  aria-label={`Blessing ${i + 1}`}
                >
                  <span>✦</span>
                  <b>{i + 1}</b>
                </button>
              ))}
            </div>

            <div
              className="celestial-blessing"
              aria-live="polite"
            >
              <div className="celestial-blessing-head">
                <span>THE {activeStar || 1}TH BLESSING</span>

                <span className="celestial-blessing-count">
                  {activeStar || 1} / 7
                </span>
              </div>

              <strong>{selectedBlessing}</strong>

              <small>
                SELECT A STAR ABOVE TO DISCOVER EACH VOW
              </small>
            </div>
          </section>

          <LuxuryCountdown />

          <OccasionsSection />

          <section id="muhurtham">
            <MandapScene />
          </section>

          {/* SAVE THE DATE */}
          <section className="lux-statement">
            <div className="lux-statement-image">
              <Image
                src="/images/envelope/seq-05.jpg"
                alt="Traditional wedding invitation details with brass diya and lotus"
                fill
                sizes="100vw"
                quality={95}
                className="object-cover"
              />
            </div>

            <div className="lux-statement-overlay" />

            <div className="lux-statement-copy">
              <p className="lux-micro">SAVE THE DATE</p>

              <p className="lux-big-date">
                27<sup>TH</sup>
              </p>

              <p className="lux-month">
                AUGUST · 2026
              </p>

              <GoldLine />

              <p className="lux-statement-line">
                Come for the celebration.
                <br />
                <em>Stay for the memories.</em>
              </p>
            </div>
          </section>

          {/* GALLERY */}
          <CinematicGallery />

          {/* VENUE */}
          <section
            id="venue"
            className="lux-venue lux-paper"
          >
            <div className="lux-section-number">05</div>

            <Reveal className="lux-venue-grid">
              <div>
                <p className="lux-micro gold">
                  వేదిక · THE DESTINATION
                </p>

                <h2>
                  Ishaar
                  <br />
                  <em>Staycation</em>
                </h2>

                <p className="lux-address">
                  Chirravuru, Andhra Pradesh 522303
                  <br />
                  India
                </p>

                <a
                  className="lux-map"
                  href={weddingConfig.wedding.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={15} />
                  OPEN IN MAPS
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="lux-venue-card">
                <div className="lux-venue-card-top">
                  <CalendarDays size={18} />
                  <span>THURSDAY · 27 AUGUST</span>
                </div>

                <strong>27</strong>
                <span>AUGUST</span>
                <span>2026</span>

                <GoldLine />

                <small>
                  HALDI · RECEPTION · MUHURTHAM
                </small>
              </div>
            </Reveal>
          </section>

          {/* FINAL */}
          <section id="rsvp" className="lux-final">
            <div className="lux-final-glow" />

            <Reveal className="lux-final-copy">
              <p className="lux-micro gold">
                శుభమస్తు · WITH LOVE
              </p>

              <h2>
                Kavya <span>&</span> Tejas
              </h2>

              <p>
                We would be honoured to have you with us
                <br />
                as we begin this new journey.
              </p>

              <GoldLine />

              <p className="lux-final-date">
                27 · 08 · 2026
              </p>

              <button className="lux-rsvp">
                RSVP WITH US
              </button>
            </Reveal>

            <footer>
              మంగళం · MADE WITH LOVE · KAVYA & TEJAS · 2026
            </footer>
          </section>

          {/* EXISTING STORY STYLES */}
          <style jsx global>{`
            .cultural-thread {
              position: relative;
              z-index: 4;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              gap: 11px 16px;
              padding: 17px 18px;
              background: #090806;
              border-top: 1px solid rgba(218, 182, 103, 0.14);
              border-bottom: 1px solid rgba(218, 182, 103, 0.14);
              color: #a88952;
              font: 500 0.42rem var(--font-label);
              letter-spacing: 0.2em;
            }

            .cultural-thread i {
              font-style: normal;
              color: #5d4828;
            }

            .cultural-thread span:first-child,
            .cultural-thread span:nth-last-child(2) {
              color: #c7a45b;
            }

            .celestial-story {
              position: relative;
              min-height: 96svh;
              overflow: hidden;
              background:
                radial-gradient(
                  circle at 50% 42%,
                  rgba(203, 164, 86, 0.12),
                  transparent 28%
                ),
                linear-gradient(180deg, #090908, #030303 80%);
              color: #eee5d6;
              display: grid;
              grid-template-columns:
                minmax(0, 1fr)
                minmax(300px, 1fr);
              align-items: center;
              gap: clamp(20px, 5vw, 80px);
              padding:
                clamp(90px, 10vw, 150px)
                clamp(22px, 7vw, 100px);
            }

            .celestial-number {
              position: absolute;
              top: 38px;
              left: 28px;
              font: 500 0.55rem var(--font-label);
              letter-spacing: 0.25em;
              color: #7d7467;
            }

            .celestial-noise {
              position: absolute;
              inset: 0;
              opacity: 0.18;
              background-image: radial-gradient(
                circle,
                #e6c77f 0 1px,
                transparent 1.5px
              );
              background-size: 107px 121px;
              animation: celestialDrift 24s linear infinite;
            }

            .celestial-copy {
              position: relative;
              z-index: 4;
              max-width: 600px;
            }

            .celestial-copy h2 {
              font-family: var(--font-display);
              font-weight: 300;
              font-size: clamp(3rem, 6vw, 6rem);
              line-height: 0.9;
              letter-spacing: -0.045em;
              margin: 22px 0;
              color: #f5ead8;
            }

            .celestial-copy h2 em {
              color: #d1aa5d;
              font-style: italic;
            }

            .celestial-intro {
              max-width: 520px;
              color: #aaa092;
              font-size: 1rem;
              line-height: 1.9;
            }

            .celestial-mantra {
              margin-top: 30px;
              padding: 21px 24px;
              border: 1px solid rgba(225, 194, 123, 0.34);
              background: linear-gradient(
                135deg,
                rgba(209, 170, 93, 0.11),
                rgba(8, 8, 7, 0.5)
              );
              box-shadow: inset 0 0 35px rgba(214, 174, 91, 0.04);
            }

            .celestial-sanskrit {
              display: block;
              font-family: serif;
              font-size: clamp(1.5rem, 3vw, 2rem);
              color: #f1d793;
              text-shadow: 0 0 25px rgba(240, 204, 112, 0.2);
            }

            .celestial-translit {
              display: block;
              margin-top: 6px;
              font: 500 0.5rem var(--font-label);
              letter-spacing: 0.22em;
              text-transform: uppercase;
              color: #a9854d;
            }

            .celestial-meaning {
              display: block;
              margin-top: 10px;
              color: #cfc1aa;
              font: italic 0.92rem/1.5 var(--font-display);
            }

            .celestial-constellation {
              position: relative;
              z-index: 3;
              width: min(42vw, 520px);
              aspect-ratio: 1;
              justify-self: center;
              display: grid;
              place-items: center;
            }

            .celestial-orbit {
              position: absolute;
              border: 1px solid rgba(218, 182, 103, 0.17);
              border-radius: 50%;
              transform: rotate(-18deg);
            }

            .orbit-one {
              width: 74%;
              height: 42%;
            }

            .orbit-two {
              width: 58%;
              height: 82%;
              transform: rotate(32deg);
            }

            .celestial-knot {
              position: absolute;
              z-index: 5;
              width: 116px;
              height: 116px;
              border: 1px solid rgba(235, 201, 122, 0.7);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              background: radial-gradient(
                circle,
                rgba(211, 169, 80, 0.18),
                rgba(5, 5, 4, 0.65) 65%
              );
              box-shadow: 0 0 70px rgba(211, 169, 80, 0.12);
            }

            .celestial-knot span {
              font: 300 2.1rem var(--font-display);
              color: #f1d38b;
            }

            .celestial-knot i {
              font: italic 1rem var(--font-display);
              color: #a98342;
            }

            .celestial-star {
              position: absolute;
              z-index: 6;
              width: 52px;
              height: 52px;
              border: 1px solid rgba(220, 185, 108, 0.3);
              border-radius: 50%;
              background: rgba(8, 8, 7, 0.82);
              color: #caa65f;
              cursor: pointer;
              transition: 0.35s;
            }

            .celestial-star span {
              font-size: 1rem;
            }

            .celestial-star b {
              display: block;
              font: 500 0.38rem var(--font-label);
              letter-spacing: 0.1em;
              color: #806d51;
            }

            .celestial-star:hover,
            .celestial-star.active {
              transform: scale(1.16);
              border-color: #e4c577;
              box-shadow: 0 0 30px rgba(227, 192, 105, 0.2);
              color: #f2d68e;
            }

            .star-1 {
              top: 5%;
              left: 44%;
            }

            .star-2 {
              top: 20%;
              right: 7%;
            }

            .star-3 {
              top: 54%;
              right: 1%;
            }

            .star-4 {
              bottom: 8%;
              right: 24%;
            }

            .star-5 {
              bottom: 3%;
              left: 30%;
            }

            .star-6 {
              top: 55%;
              left: 0;
            }

            .star-7 {
              top: 18%;
              left: 7%;
            }

            .celestial-blessing {
              position: relative;
              z-index: 8;
              grid-column: 1/-1;
              width: min(900px, 100%);
              justify-self: center;
              margin-top: -8px;
              padding: 20px 26px 22px;
              text-align: left;
              border: 1px solid rgba(224, 191, 116, 0.28);
              background: linear-gradient(
                135deg,
                rgba(20, 18, 14, 0.94),
                rgba(5, 5, 4, 0.96)
              );
              box-shadow:
                0 18px 55px rgba(0, 0, 0, 0.32),
                inset 0 0 35px rgba(214, 174, 91, 0.035);
              border-radius: 2px;
            }

            .celestial-blessing-head {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 15px;
            }

            .celestial-blessing-head > span:first-child {
              font: 500 0.45rem var(--font-label);
              letter-spacing: 0.3em;
              color: #a88952;
            }

            .celestial-blessing-count {
              font: 500 0.45rem var(--font-label);
              letter-spacing: 0.16em;
              color: #6e614e;
            }

            .celestial-blessing strong {
              display: block;
              margin-top: 8px;
              font: italic 1.25rem var(--font-display);
              color: #ead8b1;
            }

            .celestial-blessing small {
              display: block;
              margin-top: 8px;
              color: #716959;
              font: 400 0.42rem var(--font-label);
              letter-spacing: 0.16em;
            }

            @keyframes celestialDrift {
              to {
                transform: translateY(121px);
              }
            }

            @media (max-width: 760px) {
              .cultural-thread {
                font-size: 0.36rem;
                gap: 8px 10px;
                padding: 14px 8px;
              }

              .celestial-story {
                min-height: auto;
                display: flex;
                flex-direction: column;
                padding: 90px 18px 55px;
                gap: 25px;
                text-align: center;
              }

              .celestial-copy {
                max-width: 600px;
              }

              .celestial-copy h2 {
                font-size: clamp(3rem, 13vw, 4.7rem);
              }

              .celestial-intro {
                font-size: 0.92rem;
                margin: auto;
              }

              .celestial-mantra {
                margin-top: 24px;
                padding: 19px 15px;
              }

              .celestial-constellation {
                width: min(92vw, 500px);
                margin-top: 4px;
              }

              .celestial-knot {
                width: 92px;
                height: 92px;
              }

              .celestial-knot span {
                font-size: 1.65rem;
              }

              .celestial-star {
                width: 48px;
                height: 48px;
              }

              .celestial-blessing {
                width: 100%;
                margin-top: 2px;
                padding: 18px 16px 20px;
                text-align: left;
              }

              .celestial-blessing strong {
                font-size: 1.08rem;
                line-height: 1.45;
              }

              .celestial-blessing small {
                font-size: 0.38rem;
                letter-spacing: 0.12em;
              }
            }
          `}</style>
        </main>
      )}
    </div>
  );
}

import { OpeningScene } from "@/components/invitation/OpeningScene";
import { HeroScene } from "@/components/invitation/HeroScene";
import { StorySection } from "@/components/invitation/StorySection";
import { CelebrationsIntro } from "@/components/invitation/CelebrationsIntro";
import { AuspiciousTimeline } from "@/components/invitation/AuspiciousTimeline";
import { CeremonyScene } from "@/components/invitation/CeremonyScene";
import { Countdown } from "@/components/invitation/Countdown";
import { VenueSection } from "@/components/invitation/VenueSection";
import { CoupleIntro } from "@/components/invitation/CoupleIntro";
import { FloatingControls } from "@/components/ui/FloatingControls";
import { ScrollThread } from "@/components/ui/ScrollThread";

/**
 * Project-2 is the cinematic edition of the invitation. The story now pauses
 * after the celebrations introduction for a single-day timeline: Haldi,
 * Reception and Muhurtham are three chapters of the same auspicious Thursday.
 */
export default function Page() {
  return (
    <>
      <OpeningScene />

      <main className="relative">
        <HeroScene />
        <StorySection />

        <CelebrationsIntro />
        <AuspiciousTimeline />
        <CeremonyScene ceremony="haldi" />
        <CeremonyScene ceremony="reception" />
        <CeremonyScene ceremony="muhurtham">
          <Countdown tone="light" />
        </CeremonyScene>

        <VenueSection />
        <CoupleIntro />
      </main>

      <ScrollThread />
      <FloatingControls />
    </>
  );
}

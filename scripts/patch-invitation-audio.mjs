import { readFileSync, writeFileSync } from "node:fs";

const pagePath = "src/app/page.tsx";
const envelopePath = "src/components/invitation/CinematicEnvelope.tsx";

let page = readFileSync(pagePath, "utf8");

page = page.replace(
  'import { ArrowUpRight, CalendarDays, MapPin, Volume2, VolumeX } from "lucide-react";',
  'import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";',
);
page = page.replace(
  'const [opened,setOpened]=useState(false),[music,setMusic]=useState(false),[language,setLanguage]=useState<"EN"|"TE">("EN");',
  'const [opened,setOpened]=useState(false),[language,setLanguage]=useState<"EN"|"TE">("EN");',
);
page = page.replace(/ const toggleMusic=async\(\)=>\{.*?\};\n/, "");
page = page.replace(
  '<audio ref={audioRef} loop preload="none" src={weddingConfig.music.source}/>',
  '<audio ref={audioRef} loop preload="auto" src={weddingConfig.music.source}/>',
);
page = page.replace(
  '{!opened&&<CinematicEnvelope onOpen={()=>setOpened(true)}/>} ',
  '{!opened&&<CinematicEnvelope onOpen={()=>{const a=audioRef.current;if(a){a.volume=0;void a.play().catch(()=>{});}setOpened(true)}}/>} ',
);
page = page.replace(
  '<button aria-label="Toggle music" onClick={toggleMusic}>{music?<Volume2 size={16}/>:<VolumeX size={16}/>}</button>',
  "",
);
writeFileSync(pagePath, page);

let envelope = readFileSync(envelopePath, "utf8");
const marker = "window.setTimeout(onOpen, 900);";
if (!envelope.includes(marker)) {
  // The component has been refactored but the parent still opens it after the animation.
  // In that case there is nothing to patch here; the page-level handler remains available.
  console.log("Envelope timing marker not found; leaving envelope component unchanged.");
} else if (!envelope.includes(".luxury-invitation > audio")) {
  envelope = envelope.replace(
    marker,
    `const audio = document.querySelector<HTMLAudioElement>(".luxury-invitation > audio");\n    if (audio) {\n      audio.volume = 0;\n      void audio.play().catch(() => {});\n    }\n    ${marker}`,
  );
  writeFileSync(envelopePath, envelope);
}

console.log("Invitation audio patch applied before build.");

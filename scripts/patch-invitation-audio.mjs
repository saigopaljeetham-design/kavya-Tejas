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
const oldOpen = `  const open = () => {\n    if (opening) return;\n    setOpening(true);\n    window.setTimeout(onOpen, 900);\n  };`;
const newOpen = `  const open = () => {\n    if (opening) return;\n    // Play directly from the seal tap so mobile autoplay policy sees the user gesture.\n    const audio = document.querySelector<HTMLAudioElement>(".luxury-invitation > audio");\n    if (audio) {\n      audio.volume = 0;\n      void audio.play().catch(() => {});\n    }\n    setOpening(true);\n    window.setTimeout(onOpen, 900);\n  };`;
if (!envelope.includes(oldOpen)) throw new Error("CinematicEnvelope open handler not found");
envelope = envelope.replace(oldOpen, newOpen);
writeFileSync(envelopePath, envelope);

console.log("Invitation audio patch applied before build.");

/**
 * All user-facing copy, in English, Kannada and Telugu.
 */

export type Language = "en" | "kn" | "te";

export const languageNames: Record<Language, string> = {
  en: "English",
  kn: "ಕನ್ನಡ",
  te: "తెలుగు",
};

const en = {
  opening: {
    blessing: "With the blessings of Almighty",
    invited: "You're Invited",
    and: "&",
    open: "Open Invitation",
    hint: "Tap to open the envelope",
  },
  hero: {
    blessing: "With the blessings of Almighty",
    scroll: "Scroll",
  },
  invitation: {
    eyebrow: "With joy in our hearts",
    line: "we invite you to celebrate the wedding of",
    and: "and",
  },
  couple: { eyebrow: "The Beloved" },
  people: { groom: "The Groom", bride: "The Bride" },
  story: {
    eyebrow: "Our Story",
    title: "It all began with our families bringing us together.",
    paragraphs: [
      "We met as two strangers, with a few questions, a little curiosity, and no idea where this journey would lead.",
      "As we spent time getting to know each other, conversations turned into comfort, comfort into friendship, and friendship slowly into love.",
      "What began as an arranged meeting became a choice we made for ourselves.",
      "Today, with the love and blessings of our families, we’re happy to begin this beautiful journey together.",
      "An arranged beginning, a love we found, and a forever we choose.",
    ],
  },
  family: {
    eyebrow: "With Our Families",
    title: "Together With Our Families",
    groomFamily: "Groom's Family",
    brideFamily: "Bride's Family",
    and: "&",
  },
  photos: {
    eyebrow: "Pre-wedding Canvas",
    title: "A Few Moments We Cherish",
    placeholder: "Photograph",
  },
  details: {
    eyebrow: "The Celebrations",
    title: "Timeline",
    ceremony: "Wedding Ceremony",
  },
  ceremonies: {
    eyebrow: "One Auspicious Day",
    title: "One Day. Three Celebrations. One Forever.",
    lead: "From haldi to the evening welcome and the sacred muhurtham, every celebration unfolds on the same beautiful day.",
    notes: {
      haldi: "Turmeric on our hands, laughter in the courtyard, and the blessings of everyone we love.",
      reception: "An evening to greet you, to feed you, and to celebrate before the vows.",
      muhurtham: "The hour the knot is tied. Be with us as we begin.",
    },
  },
  countdown: {
    eyebrow: "Counting the days",
    title: "Counting Down to Our Forever",
    days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    passed: "We are married — thank you for celebrating with us.",
    today: "Today is the day.",
  },
  venue: { eyebrow: "The Venue", title: "Where To Find Us", directions: "Open in Maps" },
  rsvp: {
    eyebrow: "Kindly Respond", title: "Will You Join Us?", subtitle: "Your presence would mean the world to us.",
    yes: "Will Attend", no: "Unable to Attend", maybe: "Maybe", send: "Send RSVP on WhatsApp",
    namePlaceholder: "Your name", thanks: "Thank you — your response opens WhatsApp.",
    unconfigured: "RSVP by WhatsApp becomes active once a number is added in wedding.ts.",
    messages: { yes: "will joyfully attend", no: "is unable to attend", maybe: "will try to attend" },
  },
  final: {
    together: "Together with our families, we invite you to celebrate our special day.",
    awaiting: "Come and bless us. Your being there is what will make this day ours.",
    withLove: "With Love", share: "Share Invitation", shared: "Link copied",
  },
  ui: { musicOn: "Turn music off", musicOff: "Turn music on", language: "Switch language" },
};

const kn: typeof en = {
  opening: { blessing: "ದೇವರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ", invited: "ನಿಮಗೆ ಆಹ್ವಾನ", and: "&", open: "ಆಹ್ವಾನ ತೆರೆಯಿರಿ", hint: "ಲಕೋಟೆ ತೆರೆಯಲು ಸ್ಪರ್ಶಿಸಿ" },
  hero: { blessing: "ದೇವರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ", scroll: "ಕೆಳಗೆ ಸರಿಸಿ" },
  invitation: { eyebrow: "ಹೃದಯ ತುಂಬಿದ ಸಂತಸದೊಂದಿಗೆ", line: "ನಮ್ಮ ವಿವಾಹ ಸಮಾರಂಭಕ್ಕೆ ನಿಮ್ಮನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇವೆ", and: "ಮತ್ತು" },
  couple: { eyebrow: "ವಧು — ವರ" }, people: { groom: "ವರ", bride: "ವಧು" },
  story: {
    eyebrow: "ನಮ್ಮ ಕಥೆ", title: "ನಾವು ಒಬ್ಬರನ್ನೊಬ್ಬರು ಕಂಡುಕೊಂಡ ಬಗೆ",
    paragraphs: [
      "ಪ್ರತಿ ಕಥೆಗೂ ತನ್ನದೇ ಆರಂಭವಿದೆ; ನಮ್ಮದು ಕುಟುಂಬಗಳ ಪರಿಚಯದಿಂದ ಆರಂಭವಾಯಿತು. ತೆರೆದ ಮನಸ್ಸು, ಹಲವು ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಕುತೂಹಲದೊಂದಿಗೆ ನಾವು ಭೇಟಿಯಾದೆವು.",
      "ಹಂಚಿಕೊಂಡ ನಗು, ಮೌನ ಕ್ಷಣಗಳು ಮತ್ತು ಪ್ರತಿದಿನ ಒಬ್ಬರನ್ನೊಬ್ಬರು ಆಯ್ಕೆ ಮಾಡಿಕೊಳ್ಳುವ ನಡುವೆ, ಇಬ್ಬರು ಅಪರಿಚಿತರು ಪರಸ್ಪರರ ಸುರಕ್ಷಿತ ನೆಲೆಯಾದರು.",
      "ಹಿಂತಿರುಗಿ ನೋಡಿದಾಗ, ನಮ್ಮ ದಾರಿಗಳು ಸೇರಲೇಬೇಕಿತ್ತು ಎನಿಸುತ್ತದೆ. ಈಗ ಕೃತಜ್ಞ ಹೃದಯದಿಂದ ನಾವು ನಮ್ಮ ಶಾಶ್ವತ ಜೊತೆಗೆ ಹೆಜ್ಜೆ ಇಡುತ್ತಿದ್ದೇವೆ.",
    ],
  },
  family: { eyebrow: "ನಮ್ಮ ಕುಟುಂಬಗಳೊಂದಿಗೆ", title: "ಕುಟುಂಬಗಳ ಸಮ್ಮುಖದಲ್ಲಿ", groomFamily: "ವರನ ಕುಟುಂಬ", brideFamily: "ವಧುವಿನ ಕುಟುಂಬ", and: "ಮತ್ತು" },
  photos: { eyebrow: "ವಿವಾಹ ಪೂರ್ವ ಚಿತ್ರಗಳು", title: "ನಾವು ಪ್ರೀತಿಸುವ ಕೆಲವು ಕ್ಷಣಗಳು", placeholder: "ಛಾಯಾಚಿತ್ರ" },
  details: { eyebrow: "ಸಂಭ್ರಮ", title: "ಕಾರ್ಯಕ್ರಮ", ceremony: "ವಿವಾಹ ಸಮಾರಂಭ" },
  ceremonies: {
    eyebrow: "ಒಂದು ಶುಭ ದಿನ", title: "ಒಂದೇ ದಿನ. ಮೂರು ಸಂಭ್ರಮಗಳು. ಒಂದು ಶಾಶ್ವತ ಬಂಧ.",
    lead: "ಅರಿಶಿನದ ಸಂಭ್ರಮದಿಂದ ಸಂಜೆ ಸ್ವಾಗತದವರೆಗೆ, ಪವಿತ್ರ ಮುಹೂರ್ತದವರೆಗೆ — ನಮ್ಮ ಎಲ್ಲಾ ಸಂಭ್ರಮಗಳು ಒಂದೇ ಸುಂದರ ದಿನದಲ್ಲಿ.",
    notes: { haldi: "ಕೈಗಳಲ್ಲಿ ಅರಿಶಿನ, ಅಂಗಳದಲ್ಲಿ ನಗು, ಮತ್ತು ಪ್ರೀತಿಪಾತ್ರರೆಲ್ಲರ ಆಶೀರ್ವಾದ.", reception: "ನಿಮ್ಮನ್ನು ಬರಮಾಡಿಕೊಂಡು, ಜೊತೆಯಾಗಿ ಸಂಭ್ರಮಿಸುವ ಸಂಜೆ.", muhurtham: "ಗಂಟು ಬೀಳುವ ಶುಭ ಘಳಿಗೆ. ನಮ್ಮ ಆರಂಭಕ್ಕೆ ಸಾಕ್ಷಿಯಾಗಿ." },
  },
  countdown: { eyebrow: "ದಿನಗಣನೆ", title: "ನಮ್ಮ ಶಾಶ್ವತದತ್ತ ದಿನಗಣನೆ", days: "ದಿನಗಳು", hours: "ಗಂಟೆಗಳು", minutes: "ನಿಮಿಷಗಳು", seconds: "ಸೆಕೆಂಡುಗಳು", passed: "ನಾವು ವಿವಾಹಿತರಾಗಿದ್ದೇವೆ — ನಮ್ಮೊಂದಿಗೆ ಸಂಭ್ರಮಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.", today: "ಇಂದು ಆ ಶುಭ ದಿನ." },
  venue: { eyebrow: "ಸ್ಥಳ", title: "ನಮ್ಮನ್ನು ಇಲ್ಲಿ ಕಂಡುಕೊಳ್ಳಿ", directions: "ನಕ್ಷೆಯಲ್ಲಿ ತೆರೆಯಿರಿ" },
  rsvp: { eyebrow: "ದಯವಿಟ್ಟು ಪ್ರತಿಕ್ರಿಯಿಸಿ", title: "ನಮ್ಮೊಂದಿಗೆ ಸೇರುತ್ತೀರಾ?", subtitle: "ನಿಮ್ಮ ಉಪಸ್ಥಿತಿ ನಮಗೆ ಅತ್ಯಂತ ಅಮೂಲ್ಯ.", yes: "ಹಾಜರಾಗುತ್ತೇನೆ", no: "ಹಾಜರಾಗಲು ಸಾಧ್ಯವಿಲ್ಲ", maybe: "ಬಹುಶಃ", send: "WhatsApp ಮೂಲಕ RSVP ಕಳುಹಿಸಿ", namePlaceholder: "ನಿಮ್ಮ ಹೆಸರು", thanks: "ಧನ್ಯವಾದಗಳು — ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆ WhatsApp ತೆರೆಯುತ್ತದೆ.", unconfigured: "wedding.ts ನಲ್ಲಿ ಸಂಖ್ಯೆಯನ್ನು ಸೇರಿಸಿದ ನಂತರ WhatsApp RSVP ಸಕ್ರಿಯವಾಗುತ್ತದೆ.", messages: { yes: "ಸಂತೋಷದಿಂದ ಹಾಜರಾಗುತ್ತಾರೆ", no: "ಹಾಜರಾಗಲು ಸಾಧ್ಯವಾಗುವುದಿಲ್ಲ", maybe: "ಹಾಜರಾಗಲು ಪ್ರಯತ್ನಿಸುತ್ತಾರೆ" } },
  final: { together: "ನಮ್ಮ ಕುಟುಂಬಗಳೊಂದಿಗೆ, ನಮ್ಮ ವಿಶೇಷ ದಿನವನ್ನು ಸಂಭ್ರಮಿಸಲು ನಿಮ್ಮನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇವೆ.", awaiting: "ಬಂದು ನಮ್ಮನ್ನು ಆಶೀರ್ವದಿಸಿ. ನಿಮ್ಮ ಉಪಸ್ಥಿತಿಯೇ ಈ ದಿನವನ್ನು ನಮ್ಮದಾಗಿಸುತ್ತದೆ.", withLove: "ಪ್ರೀತಿಯಿಂದ", share: "ಆಹ್ವಾನ ಹಂಚಿಕೊಳ್ಳಿ", shared: "ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ" },
  ui: { musicOn: "ಸಂಗೀತ ನಿಲ್ಲಿಸಿ", musicOff: "ಸಂಗೀತ ಆನ್ ಮಾಡಿ", language: "ಭಾಷೆ ಬದಲಿಸಿ" },
};

const te: typeof en = {
  opening: {
    blessing: "సర్వశక్తిమంతుడి ఆశీస్సులతో",
    invited: "మీకు ఆహ్వానం",
    and: "&",
    open: "ఆహ్వానం తెరవండి",
    hint: "ఆహ్వానం తెరవడానికి తాకండి",
  },
  hero: { blessing: "సర్వశక్తిమంతుడి ఆశీస్సులతో", scroll: "క్రిందికి స్క్రోల్ చేయండి" },
  invitation: {
    eyebrow: "మా హృదయాల్లో ఆనందంతో",
    line: "మా వివాహ వేడుకకు మిమ్మల్ని ఆహ్వానిస్తున్నాము",
    and: "మరియు",
  },
  couple: { eyebrow: "వధూవరులు" },
  people: { groom: "వరుడు", bride: "వధువు" },
  story: {
    eyebrow: "మా కథ",
    title: "మా కుటుంబాలు మమ్మల్ని కలిపిన రోజుతో ఈ ప్రయాణం మొదలైంది.",
    paragraphs: [
      "మేము ఇద్దరం అపరిచితులుగా కలిశాము — కొన్ని ప్రశ్నలు, కొంత ఆసక్తి, ఈ ప్రయాణం ఎక్కడికి తీసుకెళ్తుందో తెలియని చిన్న ఆశ్చర్యంతో.",
      "ఒకరినొకరం తెలుసుకుంటూ గడిపిన సమయం, మాటలను సౌకర్యంగా, సౌకర్యాన్ని స్నేహంగా, స్నేహాన్ని నెమ్మదిగా ప్రేమగా మార్చింది.",
      "ఒక పరిచయంగా మొదలైనది, చివరికి మేమే ఒకరినొకరం ఎంచుకున్న అందమైన బంధంగా మారింది.",
      "ఈ రోజు మా కుటుంబాల ప్రేమ, ఆశీస్సులతో ఈ అందమైన ప్రయాణాన్ని కలిసి ప్రారంభిస్తున్నాము.",
      "కుటుంబాల పరిచయంతో మొదలైన బంధం, మనం ఎంచుకున్న శాశ్వత ప్రేమగా మారింది.",
    ],
  },
  family: { eyebrow: "మా కుటుంబాలతో", title: "మా కుటుంబాల సమక్షంలో", groomFamily: "వరుడి కుటుంబం", brideFamily: "వధువు కుటుంబం", and: "మరియు" },
  photos: { eyebrow: "వివాహానికి ముందు జ్ఞాపకాలు", title: "మేము ప్రేమగా దాచుకున్న కొన్ని క్షణాలు", placeholder: "చిత్రం" },
  details: { eyebrow: "వేడుకలు", title: "కార్యక్రమ వివరాలు", ceremony: "వివాహ వేడుక" },
  ceremonies: {
    eyebrow: "ఒక శుభదినం",
    title: "ఒకే రోజు. మూడు వేడుకలు. ఒక శాశ్వత బంధం.",
    lead: "పసుపు వేడుక నుంచి సాయంత్రపు స్వాగతం వరకు, పవిత్రమైన ముహూర్తం వరకు — మా అన్ని వేడుకలు ఒకే అందమైన రోజున జరుగుతాయి.",
    notes: {
      haldi: "చేతుల్లో పసుపు, ఆవరణలో నవ్వులు, మనం ప్రేమించే వారందరి ఆశీస్సులు.",
      reception: "మిమ్మల్ని ఆహ్వానించి, కలిసి ఆనందించి, వివాహానికి ముందు సంబరాలు చేసుకునే సాయంత్రం.",
      muhurtham: "మాంగల్య బంధం కట్టే పవిత్ర సమయం. మా కొత్త ఆరంభానికి మీరూ సాక్షిగా ఉండండి.",
    },
  },
  countdown: { eyebrow: "రోజుల లెక్కింపు", title: "మా శాశ్వత ప్రయాణానికి కౌంట్‌డౌన్", days: "రోజులు", hours: "గంటలు", minutes: "నిమిషాలు", seconds: "సెకన్లు", passed: "మా వివాహం పూర్తైంది — మాతో కలిసి ఆనందించినందుకు ధన్యవాదాలు.", today: "ఈ రోజు ఆ శుభదినం." },
  venue: { eyebrow: "వేదిక", title: "మమ్మల్ని ఇక్కడ కలుసుకోండి", directions: "మ్యాప్స్‌లో తెరవండి" },
  rsvp: { eyebrow: "దయచేసి స్పందించండి", title: "మాతో కలిసి వస్తారా?", subtitle: "మీ రాక మాకు ఎంతో ఆనందాన్ని ఇస్తుంది.", yes: "హాజరవుతాను", no: "హాజరు కాలేను", maybe: "బహుశా", send: "WhatsApp ద్వారా RSVP పంపండి", namePlaceholder: "మీ పేరు", thanks: "ధన్యవాదాలు — మీ స్పందన WhatsApp‌ను తెరుస్తుంది.", unconfigured: "wedding.tsలో నంబర్‌ను జోడించిన తర్వాత WhatsApp RSVP అందుబాటులో ఉంటుంది.", messages: { yes: "ఆనందంగా హాజరవుతారు", no: "హాజరు కాలేరు", maybe: "హాజరయ్యేందుకు ప్రయత్నిస్తారు" } },
  final: { together: "మా కుటుంబాలతో కలిసి, మా ప్రత్యేక వివాహదినాన్ని జరుపుకోవడానికి మిమ్మల్ని ఆహ్వానిస్తున్నాము.", awaiting: "వచ్చి మమ్మల్ని ఆశీర్వదించండి. మీ సమక్షమే ఈ శుభదినాన్ని మరింత ప్రత్యేకం చేస్తుంది.", withLove: "ప్రేమతో", share: "ఆహ్వానాన్ని పంచుకోండి", shared: "లింక్ కాపీ అయింది" },
  ui: { musicOn: "సంగీతాన్ని ఆపండి", musicOff: "సంగీతాన్ని ఆన్ చేయండి", language: "భాష మార్చండి" },
};

export const content: Record<Language, typeof en> = { en, kn, te };
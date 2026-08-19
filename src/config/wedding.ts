/**
 * Wedding invitation data for Kavya & Tejas.
 * The copy is written as one Telugu wedding story: people first,
 * rituals second, and the celebration as the thread connecting both.
 */

export const weddingConfig = {
  couplePhoto: "/images/couple/couple.jpeg",

  groom: {
    name: "Tejas",
    shortName: "Tejas",
    photo: "/images/couple/groom.jpg",
  },

  bride: {
    name: "Kavya",
    shortName: "Kavya",
    photo: "/images/couple/bride.jpg",
  },

  wedding: {
    dateISO: "2026-08-27T23:41:00+05:30",
    dayName: "Thursday",
    dateLabel: "27 August 2026",
    time: "11:41 PM",
    ceremony: "Muhurtham / Wedding Ceremony",
    venue: "Ishaar Staycation, Vijayawada",
    story: {
      eyebrow: "Kavya & Tejas · a Telugu wedding story",
      title: "Two lives. One sacred beginning.",
      intro: "This is not only the story of a wedding day. It is the story of Kavya and Tejas arriving at one auspicious moment with the people, rituals and memories that make it meaningful.",
      culturalNote: "In a Telugu wedding, celebration and tradition live side by side — pasupu in the morning, a gathering in the evening, and the sacred Muhurtham at the heart of the night.",
    },
    events: [
      {
        key: "haldi",
        name: "Haldi",
        teluguName: "పసుపు",
        dayName: "Thursday",
        dateLabel: "27 August 2026",
        time: "10:30 AM",
        venue: "Ishaar Staycation, Vijayawada",
        story: "The day begins with pasupu, warmth and the easy joy of being surrounded by family.",
        plates: ["/images/ceremonies/haldi.png"],
      },
      {
        key: "reception",
        name: "Reception",
        teluguName: "స్వాగతం",
        dayName: "Thursday",
        dateLabel: "27 August 2026",
        time: "6:00 PM",
        venue: "Ishaar Staycation, Vijayawada",
        story: "As evening arrives, loved ones gather to celebrate Kavya and Tejas and welcome the chapter ahead.",
        plates: ["/images/ceremonies/reception.png"],
      },
      {
        key: "muhurtham",
        name: "Muhurtham",
        teluguName: "ముహూర్తం",
        dayName: "Thursday",
        dateLabel: "27 August 2026",
        time: "11:41 PM",
        venue: "Ishaar Staycation, Vijayawada",
        story: "At 11:41 PM, celebration becomes ceremony — the auspicious moment that gives their wedding its beginning.",
        plates: ["/images/ceremonies/muhurtam.png"],
      },
    ],
    address: "Ishaar Staycation, Chirravuru, Andhra Pradesh 522303, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ishaar&query_place_id=ChIJt3N6MQD7NToRT_eM6gPrnMk",
  },

  contact: { whatsapp: "919848045623" },
  music: { enabled: true, source: "/music/marriagesong.mp3" },

  // Keep gallery entries mapped to files that are actually committed under public/.
  // The GitHub upload contains the original DSC filenames, so these paths avoid
  // broken-image tiles caused by the old generated filenames.
 gallery: [
  {
    src: "/images/gallery/02-couple-seated.jpg",
    alt: "Kavya and Tejas sharing a quiet moment",
  },
  {
    src: "/images/gallery/03-hands-together.jpg",
    alt: "A moment held between Kavya and Tejas",
  },
  {
    src: "/images/gallery/06-couple-outdoor.jpg",
    alt: "Kavya and Tejas outdoors",
  },
  {
    src: "/images/gallery/07-couple-car.jpg",
    alt: "Kavya and Tejas with their car",
  },
  {
    src: "/images/gallery/09-couple-car-wide.jpg",
    alt: "Kavya and Tejas on their journey together",
  },
  {
    src: "/images/gallery/DSC01291.jpg",
    alt: "A memory from Kavya and Tejas",
  },
  {
    src: "/images/gallery/DSC01359 copy.jpg",
    alt: "Kavya and Tejas walking together",
  },
  {
    src: "/images/gallery/DSC01669.jpg",
    alt: "Kavya and Tejas together",
  },
  {
    src: "/images/gallery/DSC01686.jpg",
    alt: "A candid moment of Kavya and Tejas",
  },
  {
    src: "/images/gallery/DSC01957 copy.jpg",
    alt: "A beautiful memory together",
  },
  {
    src: "/images/gallery/DSC02002 copy.jpg",
    alt: "A candid memory from their journey",
  },
  {
    src: "/images/gallery/DSC02017 copy1.jpg",
    alt: "Kavya and Tejas together",
  },
  {
    src: "/images/gallery/couple.jpeg",
    alt: "Kavya and Tejas",
  },
    {
    src: "/images/gallery/DSC01704 copy.jpg",
    alt: "Kavya and Tejas in a beautiful setting",
  },
  {
    src: "/images/gallery/DSC01711 copy.jpg",
    alt: "Kavya and Tejas holding hands",
  },
  {
    src: "/images/gallery/DSC01791 copy.jpg",
    alt: "Kavya and Tejas sharing a moment",
  },
  {
    src: "/images/gallery/DSC01924 copy.jpg",
    alt: "Kavya and Tejas beside their car",
  },
  {
    src: "/images/gallery/DSC01967 copy.jpg",
    alt: "Kavya and Tejas together by the car",
  },
],

  site: { url: "" },
} as const;

export type WeddingConfig = typeof weddingConfig;

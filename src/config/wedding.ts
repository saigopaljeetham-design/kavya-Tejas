/**
 * Wedding invitation data for Kavya & Tejas.
 * The copy is intentionally written as one Telugu wedding story,
 * so each section feels connected instead of like separate website cards.
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
      eyebrow: "A Telugu wedding story",
      title: "Two lives. One sacred beginning.",
      intro: "In an Andhra home, a wedding is never only about two people. It is a gathering of families, blessings, traditions and memories — carried from one generation to the next.",
      culturalNote: "From pasupu and flowers to the sacred Muhurtham, every ritual has a place in their story.",
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
        story: "A morning of pasupu, laughter and the warmth of family.",
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
        story: "An evening to gather, celebrate and welcome their new beginning.",
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
        story: "At the auspicious hour, two families become one shared story.",
        plates: ["/images/ceremonies/muhurtam.png"],
      },
    ],
    address: "Ishaar Staycation, Chirravuru, Andhra Pradesh 522303, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ishaar&query_place_id=ChIJt3N6MQD7NToRT_eM6gPrnMk",
  },

  contact: { whatsapp: "919848045623" },
  music: { enabled: true, source: "/music/marriagesong.mp3" },

  gallery: [
    { src: "/images/gallery/01-couple-standing.jpg", alt: "Kavya and Tejas together" },
    { src: "/images/gallery/02-couple-seated.jpg", alt: "Kavya and Tejas sharing a moment" },
    { src: "/images/gallery/05-couple-portrait.jpg", alt: "Kavya and Tejas in traditional attire" },
    { src: "/images/gallery/03-hands-together.jpg", alt: "Kavya and Tejas together" },
    { src: "/images/gallery/04-hands-closeup.jpg", alt: "A close-up wedding moment" },
    { src: "/images/gallery/06-couple-outdoor.jpg", alt: "Kavya and Tejas outdoors" },
    { src: "/images/gallery/07-couple-car.jpg", alt: "Kavya and Tejas by the car" },
    { src: "/images/gallery/09-couple-car-wide.jpg", alt: "Kavya and Tejas with the car" },
    { src: "/images/gallery/08-hands-holding.jpg", alt: "Kavya and Tejas holding hands" },
  ],

  site: { url: "" },
} as const;

export type WeddingConfig = typeof weddingConfig;

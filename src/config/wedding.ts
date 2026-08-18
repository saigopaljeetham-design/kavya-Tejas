/**
 * Wedding invitation data for Kavya & Tejas.
 * Edit this file to change the invitation details.
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
    events: [
      { key: "haldi", name: "Haldi", dayName: "Thursday", dateLabel: "27 August 2026", time: "10:30 AM", venue: "Ishaar Staycation, Vijayawada", plates: ["/images/ceremonies/haldi.png"] },
      { key: "reception", name: "Reception", dayName: "Thursday", dateLabel: "27 August 2026", time: "6:00 PM", venue: "Ishaar Staycation, Vijayawada", plates: ["/images/ceremonies/reception.png"] },
      { key: "muhurtham", name: "Muhurtham", dayName: "Thursday", dateLabel: "27 August 2026", time: "11:41 PM", venue: "Ishaar Staycation, Vijayawada", plates: ["/images/ceremonies/muhurtam.png"] },
    ],
    address: "Ishaar Staycation, Chirravuru, Andhra Pradesh 522303, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ishaar&query_place_id=ChIJt3N6MQD7NToRT_eM6gPrnMk",
  },

  contact: { whatsapp: "" },
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

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
    /** India time; drives the main countdown. */
    dateISO: "2026-08-27T23:41:00+05:30",
    dayName: "Thursday",
    dateLabel: "27 August 2026",
    time: "11:41 PM",
    ceremony: "Muhurtham / Wedding Ceremony",
    venue: "Ishaar Staycation, Vijayawada",

    events: [
      {
        key: "haldi",
        name: "Haldi",
        dayName: "Thursday",
        dateLabel: "27 August 2026",
        time: "10:30 AM",
        venue: "Ishaar Staycation, Vijayawada",
        plates: ["/images/ceremonies/haldi.png"],
      },
      {
        key: "reception",
        name: "Reception",
        dayName: "Thursday",
        dateLabel: "27 August 2026",
        time: "6:00 PM",
        venue: "Ishaar Staycation, Vijayawada",
        plates: ["/images/ceremonies/reception.png"],
      },
      {
        key: "muhurtham",
        name: "Muhurtham",
        dayName: "Thursday",
        dateLabel: "27 August 2026",
        time: "11:41 PM",
        venue: "Ishaar Staycation, Vijayawada",
        plates: ["/images/ceremonies/muhurtam.png"],
      },
    ],

    address: "Ishaar Staycation, Chirravuru, Andhra Pradesh 522303, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ishaar&query_place_id=ChIJt3N6MQD7NToRT_eM6gPrnMk",
  },

  contact: {
    whatsapp: "",
  },

  music: {
    enabled: true,
    source: "/music/marriagesong.mp3",
  },

  gallery: [
    { src: "/images/gallery/couple.jpeg", alt: "Kavya and Tejas together" },
    { src: "/images/ceremonies/haldi.png", alt: "Kavya and Tejas at Haldi" },
    { src: "/images/ceremonies/reception.png", alt: "Kavya and Tejas Reception" },
    { src: "/images/ceremonies/muhurtam.png", alt: "Kavya and Tejas Muhurtham" },
    { src: "/images/envelope/main.jpg", alt: "Kavya and Tejas wedding invitation" },
  ],

  site: {
    url: "",
  },
} as const;

export type WeddingConfig = typeof weddingConfig;

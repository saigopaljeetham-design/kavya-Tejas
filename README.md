# Kavya & Tejas — Wedding Invitation

A cinematic, mobile-first digital wedding invitation.

## Wedding details

- **Bride:** Kavya
- **Groom:** Tejas
- **Date:** 27 August 2026
- **Haldi:** 10:30 AM
- **Reception:** 6:00 PM
- **Muhurtham / Wedding:** 11:41 PM
- **Venue:** Ishaar Staycation, Vijayawada

## Development

```bash
npm install
npm run dev
npm run build
```

## Changing the wedding details

The main invitation data lives in **`src/config/wedding.ts`**. Names, dates, times, venue, photographs, music and RSVP configuration are read from that file.

## Photographs

Place the configured photographs under `public/images/`. Missing photographs fall back to the invitation's ornamental placeholders.

## Music

The configured background track is `/music/marriagesong.mp3`. It starts when the guest opens the invitation, subject to browser autoplay rules.

## RSVP

Add the WhatsApp number in `src/config/wedding.ts` under `contact.whatsapp` when ready.

## Important

The invitation uses the configuration file as the source of truth for the wedding data. Keep dates and times in India Standard Time (`+05:30`) so the countdown remains accurate.

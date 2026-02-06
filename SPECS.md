# FLAMES OF FOE — WEBSITE SPECS (6 Feb 2026)

## Overview
Static multi-page site for the band “Flames of Foe.” Built with HTML/CSS (no framework), one shared stylesheet, and minimal JS (empty). Primary goals: present music, bio, tour dates, EPK assets, and merch links.

## Pages
- **Home** (index.html)
  - Full-width hero with background image.
  - Spotify album embed.
  - Header navigation to external music/merch/video and internal pages.

- **Bio** (info.html)
  - Long-form English bio content.
  - Hero image at top of bio section.
  - CTA button linking to Bandcamp.

- **EPK** (epk.html)
  - Hero header image + logo.
  - Social icon links (Instagram, YouTube, Bandcamp).
  - Spotify album embed.
  - Spanish bio, reviews, mosaic photo gallery.
  - Download links for press photos, bio PDF, stage plot/rider PDF.
  - Stage plot image and contact emails.

- **Tour** (tour.html)
  - Header images.
  - Songkick widget for tour dates.

- **Merch** (merch.html)
  - Simple page linking to Bandcamp merch.

## Navigation
- Consistent top navigation on most pages with links to home, music, merch, videos, tour, bio/EPK.
- External links open in new tabs.

## Styling
- Single stylesheet: styles/style.css.
- Global theme: red background, white text, Montserrat typeface.
- Responsive behavior with breakpoints at 768px and 480px.
- Custom components: hero, mosaic gallery, social icons, reviews, tour images.

## Assets
- Logos, hero images, mosaic gallery photos, icons, PDFs, and ZIPs stored under assets/.

## Scripts
- scripts/main.js exists but is intentionally empty.

## External Integrations
- Spotify album embed (iframe).
- Songkick tour widget.
- Google Fonts (Montserrat, Josefin Sans).

## Notes
- Footer social links on home are placeholders (“#”).
- Merch page navigation includes music/video pages that do not exist locally (external links used elsewhere).

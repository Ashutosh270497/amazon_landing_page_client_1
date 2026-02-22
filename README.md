# ScaleAmazon Landing Page

A modern, animated React landing page for an Amazon growth agency.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS
- Framer Motion
- Lucide React

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  App.jsx                     # Main page composition in render order
  main.jsx                    # React entry point
  index.css                   # Global styles + utility animations
  constants/index.js          # Shared design/layout/animation constants
  config/site.js              # Brand/contact/social/legal + WhatsApp helpers
  hooks/useTypingEffect.js    # Typing effect hook for hero heading
  components/
    hero/
      AnimatedBackground.jsx
      HeroForm.jsx
      HeroStats.jsx
      WorldMapSection.jsx
      index.js
    UrgencyBanner.jsx
    StickyHeader.jsx
    HeroWithForm.jsx
    LiveActivityTicker.jsx
    Stats.jsx
    AchievementBadges.jsx
    TrustedBrands.jsx
    ClientLogosMarquee.jsx
    Services.jsx
    RealClientDashboards.jsx
    ROICalculator.jsx
    CaseStudies.jsx
    Testimonials.jsx
    MeetTheExpert.jsx
    WhyChooseUs.jsx
    IsItWorthIt.jsx
    BookConsultation.jsx
    FAQ.jsx
    ContactForm.jsx
    Footer.jsx
    WhatsAppFAB.jsx
    SocialProofPopup.jsx
    FloatingElements.jsx
```

## Page Flow

Defined in `src/App.jsx`:

1. Decorative/floating layers
2. Top urgency and sticky CTA header
3. Hero + lead form
4. Trust and proof sections
5. Services and results sections
6. Conversion sections (FAQ + Contact)
7. Footer + floating WhatsApp + social proof popup

## Centralized Site Configuration

All brand/contact/social/legal settings are centralized in:

- `src/config/site.js`

Update this file to change:

- Brand name
- Support email
- Phone display/E.164 number
- WhatsApp number and default message
- Social profile URLs
- Legal links

## Form Behavior

- `src/components/hero/HeroForm.jsx` and `src/components/ContactForm.jsx` currently validate on client and log form payload to console.
- No backend submission is implemented yet.

## Deployment Notes

- `vite.config.js` uses a GitHub Pages base path:
  - `/amazon_landing_page_client_1/`
- Update this `base` value if deploying under a different subpath.

# Ness Farm Stay - Website

A beautiful, high-performance static website for Ness Farm Stay boutique hotel in Panchkhal, Nepal.

## Overview

This is a single-page Next.js 14 application designed for GitHub Pages deployment. The site features a boutique 2-villa farm retreat with emphasis on visual storytelling and direct WhatsApp bookings.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Carousel**: embla-carousel-react
- **Icons**: lucide-react
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Deployment**: GitHub Pages (static export)

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ Smooth scrolling navigation with sticky header
- ✅ Image carousels for villa galleries
- ✅ WhatsApp integration for instant booking
- ✅ SEO optimized with meta tags
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ Static export ready for GitHub Pages
- ✅ Beautiful typography and color palette
- ✅ Google Maps integration
- ✅ Social media links (Facebook, Instagram, WhatsApp)

## Project Structure

```
ness-farm-stay/
├── app/
│   ├── components/
│   │   ├── Carousel.tsx       # Embla carousel (client component)
│   │   ├── Navigation.tsx     # Sticky header with mobile menu
│   │   ├── VillaCard.tsx      # Reusable villa component
│   │   └── MapEmbed.tsx       # Google Maps iframe
│   ├── sections/
│   │   ├── Hero.tsx           # Hero section with CTA
│   │   ├── Villas.tsx         # Villa listings
│   │   ├── Experience.tsx     # Farm experience section
│   │   └── Location.tsx       # Location & Contact section
│   ├── globals.css            # Global styles & Tailwind directives
│   ├── layout.tsx             # Root layout with fonts & metadata
│   └── page.tsx               # Main page component
├── lib/
│   └── utils.ts               # WhatsApp link generator
├── public/
│   └── images/
│       ├── hero-main.jpg      # Hero background
│       ├── experience.jpg     # Experience section
│       └── villas/
│           ├── aavas/
│           │   ├── 1-exterior.jpg
│           │   ├── 2-bedroom.jpg
│           │   └── 3-bathroom.jpg
│           └── aalaya/
│               ├── 1-exterior.jpg
│               ├── 2-bedroom.jpg
│               └── 3-bathroom.jpg
├── next.config.ts             # Static export configuration
├── tailwind.config.ts         # Tailwind theme with custom colors
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

   This creates a static export in the `/dist` folder.

4. **Deploy to GitHub Pages:**
   - Configure GitHub Pages to deploy from `/dist` folder
   - Ensure "Enforce HTTPS" is enabled

## Static Export Configuration

The project is configured for static export with these critical settings in `next.config.ts`:

```typescript
output: 'export',
distDir: 'dist',
images: {
  unoptimized: true,
},
trailingSlash: true,
```

## WhatsApp Integration

All booking buttons use WhatsApp's API with pre-filled messages:
- **Generic booking**: For general inquiries
- **Villa-specific**: Pre-fills villa name (Aavas or Aalaya)

Phone: `+977 9814947521`

## Image Requirements

Replace placeholder images in `/public/images/`:

- **Hero**: `1920x1080` (16:9)
- **Experience**: `1200x800` (4:3)
- **Villa images** (9 total): `1200x800` (3:2) each

See `public/images/PLACEHOLDER_IMAGES.md` for detailed specifications.

## Color Palette

- **Background**: `#F9F6F0` (Warm Off-White)
- **Primary**: `#2C4A3B` (Deep Forest Green)
- **Secondary**: `#C17767` (Muted Terracotta)
- **Text**: `#1A1A1A` (Charcoal)
- **Secondary Text**: `#6B6B6B` (Warm Gray)

## Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Performance Goals

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Lighthouse Score: > 90 across all categories

## SEO & Social

- Meta tags implemented for Google & social media
- Open Graph tags for Facebook/LinkedIn
- Semantic HTML structure
- Alt text on all images for accessibility

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Focus indicators visible
- 4.5:1 color contrast ratios
- ARIA labels for screen readers

## Notes

- All images must be pre-optimized before adding to repository
- No server-side functionality (API routes, SSR) - purely static
- Test WhatsApp links on mobile and desktop
- Verify all navigation smooth scrolls work correctly
- Check carousel touch/swipe on mobile devices

## License

Private - All rights reserved by Ness Farm Stay

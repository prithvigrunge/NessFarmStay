# Ness Farm Stay - Maintenance & Development Guide

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [File Structure & Architecture](#file-structure--architecture)
3. [Component Documentation](#component-documentation)
4. [Configuration Files](#configuration-files)
5. [Common Maintenance Tasks](#common-maintenance-tasks)
6. [Phase 2 Upgrade Guide](#phase-2-upgrade-guide)
7. [Troubleshooting](#troubleshooting)
8. [Contact & Resources](#contact--resources)

---

## Project Overview

**Project Name:** Ness Farm Stay Website  
**Framework:** Next.js 14+ with App Router  
**Language:** TypeScript  
**Styling:** Tailwind CSS  
**Deployment:** GitHub Pages (Static Export)  
**Current Version:** 1.0

### Key Business Information
- **Location:** JMMF+FM4, Panchkhal 45200, Nepal
- **Phone/WhatsApp:** +977 980-8120452
- **Facebook:** https://www.facebook.com/profile.php?id=61587979017352
- **Instagram:** @nessfarmstay
- **Villas:** Roof Top Suite, Rock House

---

## File Structure & Architecture

```
ess-farm-stay/
│
├── 📁 app/                          # Main application directory (Next.js App Router)
│   ├── 📁 components/               # Reusable UI components
│   │   ├── Carousel.tsx            # Image carousel using Embla
│   │   ├── HeroCarousel.tsx        # Hero section carousel
│   │   ├── MapEmbed.tsx            # Google Maps iframe
│   │   ├── Navigation.tsx          # Sticky header navigation
│   │   └── VillaCard.tsx           # Villa listing card
│   │
│   ├── 📁 sections/                 # Page section components
│   │   ├── Hero.tsx                # Hero section with carousel
│   │   ├── Villas.tsx              # Villa listings section
│   │   ├── Experience.tsx          # Farm experience section
│   │   └── Location.tsx            # Location & contact section
│   │
│   ├── globals.css                 # Global styles & Tailwind directives
│   ├── layout.tsx                  # Root layout with fonts & metadata
│   └── page.tsx                    # Main page (composes all sections + footer)
│
├── 📁 lib/                          # Utility functions
│   └── utils.ts                    # WhatsApp link generator
│
├── 📁 public/                       # Static assets
│   └── 📁 images/
│       ├── logo.jpg                # Website logo
│       ├── hero-1.jpg              # Hero carousel image 1
│       ├── hero-2.jpg              # Hero carousel image 2
│       ├── experience.jpg          # Experience section image
│       └── 📁 villas/
│           ├── 📁 rooftop/         # Roof Top Suite images
│           │   ├── 1-exterior.jpg
│           │   ├── 2-extrabed.jpg
│           │   └── 3-bedroom.jpg
│           └── 📁 rockhouse/       # Rock House images
│               ├── 1-exterior.jpg
│               ├── 2-fireplace.jpg
│               └── 3-bedroom.jpg
│
├── 📄 next.config.mjs              # Next.js configuration (static export)
├── 📄 tailwind.config.ts           # Tailwind CSS theme configuration
├── 📄 postcss.config.js            # PostCSS configuration
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 package.json                 # Dependencies & scripts
├── 📄 README.md                    # General project overview
└── 📄 MAINTENANCE_GUIDE.md         # This file
```

---

## Component Documentation

### 1. Navigation (`app/components/Navigation.tsx`)
**Purpose:** Sticky header with logo, navigation links, and mobile menu

**Features:**
- Logo with image + text
- Smooth scroll to sections (#villas, #experience, #location)
- Mobile hamburger menu with slide-out drawer
- "Book on WhatsApp" CTA button
- Backdrop blur effect on scroll

**To Modify:**
- **Logo:** Replace `/images/logo.jpg` in the Image component
- **Navigation links:** Edit the `<a>` tags in both desktop and mobile sections
- **CTA button:** Update `createWhatsAppLink()` call or button text

---

### 2. HeroCarousel (`app/components/HeroCarousel.tsx`)
**Purpose:** Full-screen image carousel for hero section

**Features:**
- Auto-play (5-second intervals)
- Manual navigation (arrows + dots)
- Touch/swipe support
- Dark overlay for text readability

**Configuration:**
```typescript
const heroImages = [
  { src: '/images/hero-1.jpg', alt: 'Description' },
  { src: '/images/hero-2.jpg', alt: 'Description' },
  // Add more images here
]
```

**To Add More Images:**
1. Copy image to `/public/images/`
2. Add entry to `heroImages` array in `Hero.tsx`

---

### 3. Carousel (`app/components/Carousel.tsx`)
**Purpose:** Reusable image carousel for villa galleries

**Props:**
```typescript
interface CarouselProps {
  images: string[]      // Array of image paths
  villaName: string     // For alt text generation
}
```

**Used In:** VillaCard component

---

### 4. VillaCard (`app/components/VillaCard.tsx`)
**Purpose:** Display villa information with image carousel

**Props:**
```typescript
interface VillaCardProps {
  name: string
  tagline: string
  description: string
  images: string[]
  features: { icon: LucideIcon; text: string }[]
}
```

**To Add a New Villa:**
1. Add villa data to `villas` array in `Villas.tsx`
2. Create image folder in `/public/images/villas/[villa-name]/`
3. Add images (3 recommended)

---

### 5. MapEmbed (`app/components/MapEmbed.tsx`)
**Purpose:** Google Maps iframe embed

**To Update Location:**
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace `mapSrc` in the component

---

### 6. Section Components

#### Hero (`app/sections/Hero.tsx`)
- Full-screen hero with carousel background
- Headline, subheadline, CTA button
- Scroll indicator animation

#### Villas (`app/sections/Villas.tsx`)
- Displays two villa cards side by side
- Contains villa data configuration
- **This is where you update villa information**

#### Experience (`app/sections/Experience.tsx`)
- Left: Image
- Right: Title, description, feature list
- Features use Lucide icons

#### Location (`app/sections/Location.tsx`)
- Left: Google Maps embed
- Right: Address, phone, WhatsApp, directions button

---

## Configuration Files

### next.config.mjs
```javascript
const nextConfig = {
  output: 'export',        // Static export for GitHub Pages
  distDir: 'dist',         // Output directory
  images: {
    unoptimized: true,     // Required for static export
  },
  trailingSlash: true,     // Recommended for static hosting
};
```

**⚠️ CRITICAL:** Never remove `unoptimized: true` - required for GitHub Pages

---

### tailwind.config.ts
**Custom Colors:**
```typescript
colors: {
  background: '#F9F6F0',   // Warm Off-White
  primary: '#2C4A3B',      // Deep Forest Green
  secondary: '#C17767',    // Muted Terracotta
  charcoal: '#1A1A1A',     // Text Primary
  'warm-gray': '#6B6B6B',  // Text Secondary
}
```

**Fonts:**
```typescript
fontFamily: {
  serif: ['var(--font-playfair)', 'serif'],
  sans: ['var(--font-inter)', 'sans-serif'],
}
```

---

### lib/utils.ts
**WhatsApp Link Generator:**
```typescript
export const createWhatsAppLink = (villaName?: string) => {
  const base = "https://wa.me/9779808120452"  // Update phone here
  // ... message generation
}
```

**To Change WhatsApp Number:**
Update the phone number in this file (format: country code + number, no + or -)

---

## Common Maintenance Tasks

### 1. Update Contact Information

**Phone/WhatsApp Number:**
1. Edit `lib/utils.ts` - Update `base` URL
2. Edit `app/sections/Location.tsx` - Update `callPhone()` and `whatsappBooking()`
3. Edit `app/page.tsx` - Update footer WhatsApp link

**Address:**
Edit `app/sections/Location.tsx` - Update location text

**Social Media Links:**
Edit `app/page.tsx` - Update href attributes in footer

---

### 2. Update Villa Information

Edit `app/sections/Villas.tsx`:

```typescript
const villas = [
  {
    name: 'Villa Name',
    tagline: 'Short description',
    description: 'Full description...',
    images: [
      '/images/villas/folder-name/1-image.jpg',
      '/images/villas/folder-name/2-image.jpg',
    ],
    features: [
      { icon: IconName, text: 'Feature description' },
    ],
  },
]
```

**Available Icons:** https://lucide.dev/icons/
Import at top: `import { IconName } from 'lucide-react'`

---

### 3. Change Hero Images

1. Copy new images to `/public/images/`
2. Edit `app/sections/Hero.tsx`:
```typescript
const heroImages = [
  { src: '/images/your-image.jpg', alt: 'Description' },
]
```

**Recommended Sizes:**
- Hero images: 1920x1080px (16:9)
- Villa images: 1200x800px (3:2)
- Experience image: 1200x800px (4:3)
- Logo: 200x200px (square)

---

### 4. Update SEO/Meta Tags

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  keywords: 'your, keywords',
  // ...
}
```

---

### 5. Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  background: '#YOUR_COLOR',
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
}
```

Then restart dev server.

---

## Phase 2 Upgrade Guide

### Potential Enhancements

#### 1. Online Booking System
**Current:** WhatsApp booking only  
**Phase 2:** Add booking form with date picker

**Implementation:**
- Create `app/components/BookingForm.tsx`
- Use libraries: `react-datepicker`, `react-hook-form`
- Store bookings: Google Sheets API or Supabase (free tier)
- Send confirmation emails: EmailJS or Nodemailer (if server)

**Files to Create:**
```
app/
├── components/
│   ├── BookingForm.tsx
│   └── DatePicker.tsx
├── api/
│   └── booking/
│       └── route.ts (if adding API routes)
```

**⚠️ Note:** Adding API routes requires changing from static export to server deployment (Vercel, Netlify, etc.)

---

#### 2. Photo Gallery Page
**Current:** Villa carousels only  
**Phase 2:** Dedicated gallery page with lightbox

**Implementation:**
- Create `app/gallery/page.tsx`
- Use library: `yet-another-react-lightbox` or `photoswipe`
- Add navigation link to gallery

---

#### 3. Blog/News Section
**Purpose:** Share farm updates, events, local attractions

**Implementation:**
- Create `app/blog/page.tsx` - Blog listing
- Create `app/blog/[slug]/page.tsx` - Individual post
- Use MDX for content: `next-mdx-remote`
- Store posts in `/content/blog/` folder

---

#### 4. Multi-language Support (English/Nepali)
**Implementation:**
- Use `next-intl` or `react-i18next`
- Create translation files: `/messages/en.json`, `/messages/np.json`
- Add language switcher to navigation

---

#### 5. Reviews/Testimonials
**Implementation:**
- Create `app/components/Testimonials.tsx`
- Use static data or integrate Google Reviews API
- Display in carousel or grid layout

---

#### 6. Virtual Tour
**Implementation:**
- Embed 360° tour using Matterport or Google Tour Creator
- Create `app/components/VirtualTour.tsx`
- Add "Virtual Tour" section or page

---

#### 7. Weather Widget
**Implementation:**
- Use OpenWeatherMap API (free tier)
- Display current weather in Panchkhal
- Create `app/components/WeatherWidget.tsx`

---

#### 8. Newsletter Signup
**Implementation:**
- Use Mailchimp or ConvertKit
- Create `app/components/Newsletter.tsx`
- Add to footer or as popup

---

#### 9. Analytics
**Current:** None  
**Phase 2:** Add Google Analytics 4

**Implementation:**
- Create `app/components/Analytics.tsx`
- Use `@next/third-parties/google` (Next.js 14+)
- Add GA4 tracking ID to layout

---

#### 10. CMS Integration
**Purpose:** Easy content management without coding

**Options:**
1. **Sanity.io** - Free tier, great for structured content
2. **Contentful** - Enterprise-grade, free tier available
3. **Strapi** - Self-hosted, open source
4. **Notion + API** - Use Notion as CMS

**Implementation:**
- Replace hardcoded content with CMS API calls
- Update components to fetch data at build time

---

### Switching from Static to Server Deployment

If Phase 2 requires server-side features (booking API, CMS, etc.):

**Change `next.config.mjs`:**
```javascript
// Remove these lines:
// output: 'export',
// distDir: 'dist',
// images: { unoptimized: true },

// Keep only:
const nextConfig = {};
```

**Deployment Options:**
1. **Vercel** (Recommended) - Zero config, free tier
2. **Netlify** - Free tier, easy GitHub integration
3. **Railway** - Free tier, good for databases
4. **AWS/GCP/Azure** - Enterprise options

---

## Troubleshooting

### Issue: Images not loading (404 error)
**Solution:**
1. Check image exists in `/public/images/`
2. Verify path is correct (case-sensitive on Linux)
3. Restart dev server after adding images
4. For static export, ensure images are committed to git

---

### Issue: Styles not applying
**Solution:**
1. Check `postcss.config.js` exists
2. Ensure `globals.css` has `@tailwind` directives
3. Restart dev server
4. Check browser console for CSS errors

---

### Issue: WhatsApp link not working
**Solution:**
1. Verify phone format: `9779808120452` (no +, no dashes)
2. Test on mobile device (desktop opens web.whatsapp.com)
3. Check URL encoding of message text

---

### Issue: Build fails on GitHub Pages
**Solution:**
1. Ensure `next.config.mjs` has:
   ```javascript
   output: 'export',
   distDir: 'dist',
   images: { unoptimized: true },
   ```
2. Check GitHub Pages settings: Source = Deploy from branch, Folder = `/dist`
3. Verify `.github/workflows/` if using GitHub Actions

---

### Issue: Carousel not swiping on mobile
**Solution:**
1. Check `embla-carousel-react` is installed
2. Verify component has `'use client'` directive
3. Check for console errors

---

## Contact & Resources

### Useful Links
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev/icons/
- **Embla Carousel:** https://www.embla-carousel.com/
- **Google Maps Embed:** https://developers.google.com/maps/documentation/embed

### Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server (if not static)
npm start
```

### File Permissions
All files should be committed to git except:
- `node_modules/`
- `.next/`
- `dist/` (if regenerating on deploy)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 2026 | Initial release - Static site with WhatsApp booking |

---

## Future Maintenance Checklist

### Monthly
- [ ] Check all links work (social media, WhatsApp, maps)
- [ ] Review and update villa images if needed
- [ ] Check Google Maps location is accurate

### Quarterly
- [ ] Update SEO keywords based on search performance
- [ ] Review and update content (descriptions, features)
- [ ] Check for outdated dependencies (`npm outdated`)

### Annually
- [ ] Review entire site for redesign opportunities
- [ ] Update copyright year in footer
- [ ] Evaluate Phase 2 features for implementation
- [ ] Performance audit (Lighthouse)

---

**Document Last Updated:** February 20, 2026  
**Maintained By:** Ness Farm Stay Development Team

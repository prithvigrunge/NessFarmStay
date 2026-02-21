 I'll create comprehensive, AI-optimized documentation for your Ness Farm Stay project. This will be structured so any AI agent can parse it unambiguously and generate the exact implementation you need.

---

# NESS FARM STAY — TECHNICAL SPECIFICATION DOCUMENT
## AI Agent Implementation Guide
**Version**: 1.0  
**Target Platform**: GitHub Pages (Static Export)  
**Framework**: Next.js 14+ (App Router)  
**Last Updated**: 2026-02-21

---

## 1. PROJECT OVERVIEW

### 1.1 Purpose
Build a single-page boutique hotel website for "Ness Farm Stay" — a 2-villa farm retreat in Panchkhal, Nepal. The site must be a statically exported Next.js application deployable to GitHub Pages with zero server-side functionality.

### 1.2 Core Business Goal
Drive direct bookings via WhatsApp integration while establishing premium retreat positioning through visual storytelling.

### 1.3 Target Audience
- International tourists visiting Palanchok Bhagawati Temple
- Domestic travelers from Kathmandu seeking weekend retreats
- Couples looking for private, nature-focused accommodation

---

## 2. TECHNOLOGY STACK (STRICT)

| Layer | Technology | Version/Notes |
|-------|-----------|---------------|
| Framework | Next.js | 14+ with App Router |
| Language | TypeScript | Strict mode enabled |
| Styling | Tailwind CSS | Latest stable |
| UI Components | shadcn/ui | Only if needed, prefer custom |
| Carousel | embla-carousel-react | For villa image galleries |
| Icons | lucide-react | All icons from this library only |
| Fonts | Google Fonts | Playfair Display (headings), Inter (body) |
| Deployment | GitHub Pages | Static export only |

### 2.1 Critical Constraints
- **NO SERVER-SIDE RENDERING**: All pages must be static
- **NO API ROUTES**: Zero backend functionality
- **NO DATABASE**: All data hardcoded in components
- **NO DYNAMIC ROUTES**: Single page application only
- **Image Optimization**: Must use `unoptimized: true` in next.config.ts for static export compatibility

---

## 3. VISUAL DESIGN SYSTEM

### 3.1 Color Palette (STRICT HEX VALUES)

| Role | Color Name | HEX Code | Usage |
|------|-----------|----------|-------|
| Background | Warm Off-White | `#F9F6F0` | Page background, cards |
| Primary | Deep Forest Green | `#2C4A3B` | Buttons, primary actions, headings accent |
| Secondary | Muted Terracotta | `#C17767` | Icons, dividers, subtle accents, hover states |
| Text Primary | Charcoal | `#1A1A1A` | Body text |
| Text Secondary | Warm Gray | `#6B6B6B` | Captions, secondary text |
| White | Pure White | `#FFFFFF` | Button text, card backgrounds |

### 3.2 Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| H1 (Hero) | Playfair Display | 700 | 56px | 36px |
| H2 (Section) | Playfair Display | 600 | 42px | 28px |
| H3 (Card Title) | Playfair Display | 600 | 24px | 20px |
| Body | Inter | 400 | 16px | 16px |
| Button | Inter | 600 | 14px | 14px |
| Caption | Inter | 400 | 14px | 14px |

### 3.3 Spacing System
- Section padding: `py-20` (80px) desktop, `py-12` (48px) mobile
- Container max-width: `max-w-7xl` (1280px)
- Card border-radius: `rounded-lg` (8px)
- Button border-radius: `rounded-full` (pill shape)
- Shadow: `shadow-lg` with `shadow-black/5`

---

## 4. ASSET ARCHITECTURE

### 4.1 Directory Structure
```
public/
└── images/
    ├── hero-main.jpg          (Hero background, 1920x1080 minimum)
    ├── experience.jpg         (Farm experience section, 1200x800)
    ├── logo.png               (Optional, if text logo not used)
    └── villas/
        ├── aavas/
        │   ├── 1-exterior.jpg (1200x800, villa exterior)
        │   ├── 2-bedroom.jpg  (1200x800, interior bedroom)
        │   └── 3-bathroom.jpg (1200x800, interior bathroom)
        └── aalaya/
            ├── 1-exterior.jpg (1200x800, villa exterior)
            ├── 2-bedroom.jpg  (1200x800, interior bedroom)
            └── 3-bathroom.jpg (1200x800, interior bathroom)
```

### 4.2 Image Specifications
- **Format**: JPG for photos, PNG for logos (if used)
- **Optimization**: Pre-optimize before adding to repo (GitHub Pages has bandwidth limits)
- **Alt Text**: Mandatory for all images (accessibility)
- **Aspect Ratio**: All villa images 3:2 (landscape)
- **Hero Image**: 16:9 aspect ratio, dark overlay for text readability

---

## 5. PAGE STRUCTURE & SECTIONS

### 5.1 Navigation (Sticky Header)
**Position**: Fixed top, full width  
**Background**: `#F9F6F0` with `backdrop-blur-md` on scroll  
**Height**: 80px desktop, 64px mobile  
**Z-index**: 50

**Content Left**: Logo text "Ness Farm Stay" (Playfair Display, 24px, `#2C4A3B`)

**Content Center** (Desktop only): 
- "Our Villas" → scrolls to #villas
- "Experience" → scrolls to #experience  
- "Location" → scrolls to #location

**Content Right**: 
- "Book on WhatsApp" button (Primary green, pill shape)
- Mobile: Hamburger menu (Sheet component) with same links

**Behavior**: 
- Add shadow on scroll (`shadow-md`)
- Smooth scroll to sections on click

---

### 5.2 Hero Section
**ID**: #hero  
**Height**: 100vh (full viewport)  
**Background**: `hero-main.jpg` with overlay (`bg-black/30`)

**Content Centered**:
- **Headline**: "Escape to Nature in Panchkhal" (H1, white text)
- **Sub-headline**: "A private 2-villa farm retreat near Palanchok Bhagawati Temple" (18px, white, max-width 600px)
- **CTA Button**: "Check Availability" (white background, `#2C4A3B` text, scrolls to #contact)

**Scroll Indicator**: Subtle bounce animation at bottom center

---

### 5.3 The Villas Section
**ID**: #villas  
**Background**: `#F9F6F0`

**Section Header**:
- Title: "Our Villas" (H2, centered)
- Subtitle: "Two private sanctuaries designed for tranquility" (text-secondary, centered)

**Layout**: Two columns on desktop, single column on mobile. Equal width cards with gap-8.

#### Villa Card Component (Reusable)

**Villa AAVAS Card**:
- **Carousel**: Embla carousel with 3 images (1-exterior.jpg, 2-bedroom.jpg, 3-bathroom.jpg)
- **Title**: "Aavas" (H3)
- **Tagline**: "Perfect for couples" (Terracotta color, small caps)
- **Features** (with Lucide icons):
  - Bed icon: "King size bed"
  - Mountain icon: "Valley View"  
  - Users icon: "2 Guests"
- **Description**: "A cozy retreat with panoramic valley views, featuring traditional architecture with modern comforts."
- **Button**: "Book Aavas" (Primary green, full width on mobile)

**Villa AALAYA Card**:
- **Carousel**: Embla carousel with 3 images (1-exterior.jpg, 2-bedroom.jpg, 3-bathroom.jpg)
- **Title**: "Aalaya" (H3)
- **Tagline**: "Spacious luxury" (Terracotta color, small caps)
- **Features**:
  - Bed icon: "King size bed"
  - Mountain icon: "Valley View"
  - Users icon: "2 Guests"
- **Description**: "An expansive villa with private garden access, perfect for those seeking extra space and serenity."
- **Button**: "Book Aalaya" (Primary green, full width on mobile)

#### Carousel Specifications (CRITICAL)
- **Library**: embla-carousel-react
- **Directive**: "use client" at top of file
- **Behavior**: 
  - Loop: true
  - Align: start
  - Draggable: true (touch enabled)
  - Duration: 30 (smooth scroll)
- **Navigation**: 
  - Dots indicator below images (clickable)
  - Optional: Previous/Next arrows on desktop (hidden on mobile)
- **Images**: Object-fit cover, aspect-ratio 3/2, rounded-lg
- **Auto-play**: Disabled (user controlled only)

---

### 5.4 Experience Section
**ID**: #experience  
**Background**: White (`#FFFFFF`)  
**Layout**: Two columns (image left, content right) on desktop, stacked on mobile

**Left Column**:
- Image: `experience.jpg` (rounded-lg, shadow-lg)
- Aspect ratio: 4/3

**Right Column**:
- **Title**: "The Farm Experience" (H2)
- **Description**: "Immerse yourself in sustainable living and authentic Nepali hospitality."

**Feature List** (with Lucide icons, terracotta color):
1. **Utensils icon**: "Organic Farm-to-Table Meals" — "Fresh ingredients harvested daily from our organic gardens"
2. **Trees icon**: "Peaceful Environment" — "Wake up to birdsong and mountain views, not traffic"
3. **Footprints icon**: "Hiking Trails to Palanchok Bhagawati" — "Ancient temple just 30 minutes walk through rhododendron forests"

---

### 5.5 Location & Contact Section
**ID**: #location  
**Background**: `#F9F6F0`

**Layout**: Two columns (map left, contact right) on desktop, stacked on mobile

**Left Column**:
- **Google Maps Embed**: 
  - URL: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.1234567890123!2d85.12345678901234!3d27.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDA3JzI0LjQiTiA4NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp`
  - Replace coordinates with actual Panchkhal 45200 location
  - Height: 400px, rounded-lg, border-none
  - Loading: lazy

**Right Column**:
- **Title**: "Find Us" (H2)
- **Address Block**:
  - MapPin icon: "Ness Farm Stay, Panchkhal 45200, Kavrepalanchok, Nepal"
  - Landmark: "Located near Palanchok Bhagawati Temple"
- **Contact Block**:
  - Phone icon: "+977 9814947521"
  - WhatsApp icon: "WhatsApp Booking Available"
- **CTA Button**: "Get Directions" (opens Google Maps in new tab)

---

### 5.6 Footer
**Background**: `#2C4A3B` (Primary green)  
**Text**: White

**Content**:
- **Logo**: "Ness Farm Stay" (centered, Playfair Display)
- **Tagline**: "Your private retreat in the Himalayas"
- **Social Links** (centered, gap-6):
  - Facebook icon → `https://facebook.com/nessfarmstay`
  - Instagram icon → `https://instagram.com/nessfarmstay`  
  - WhatsApp icon → WhatsApp link (same as booking)
- **Copyright**: "© 2022 Ness Farm Stay. All rights reserved."
- **Credit**: "Designed with care in Panchkhal"

---

## 6. FUNCTIONAL SPECIFICATIONS

### 6.1 WhatsApp Integration (CRITICAL)

All booking buttons link to WhatsApp API with pre-filled messages.

**Base URL**: `https://wa.me/9779814947521`

**Encoding Rules**:
- Use `encodeURIComponent()` for message text
- Replace spaces with `%20` or use proper encoding function
- Include villa name dynamically

**Message Templates**:
- Generic: `Namaste! I am interested in booking a stay at Ness Farm Stay.`
- Villa-specific: `Namaste! I am interested in booking [VILLA_NAME] at Ness Farm Stay.`

**Button Implementation**:
```typescript
// Pseudocode for AI agent
const createWhatsAppLink = (villaName?: string) => {
  const base = "https://wa.me/9779814947521";
  const message = villaName 
    ? `Namaste! I am interested in booking ${villaName} at Ness Farm Stay.`
    : "Namaste! I am interested in booking a stay at Ness Farm Stay.";
  return `${base}?text=${encodeURIComponent(message)}`;
};
```

**Button Locations**:
1. Navigation: "Book on WhatsApp" (generic message)
2. Villa Aavas card: "Book Aavas" (specific message)
3. Villa Aalaya card: "Book Aalaya" (specific message)
4. Footer WhatsApp icon (generic message)

### 6.2 Smooth Scrolling

**Implementation**:
- Use `scroll-behavior: smooth` in globals.css
- Navigation links use anchor tags (`#villas`, `#experience`, `#location`)
- "Check Availability" button scrolls to `#location`

**Offset**: Account for sticky header height (80px) using `scroll-padding-top: 80px` on html element

### 6.3 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|-----------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu, stacked sections |
| Tablet | 640px - 1024px | Two columns where applicable, simplified navigation |
| Desktop | > 1024px | Full layout, all navigation visible |

---

## 7. COMPONENT SPECIFICATIONS

### 7.1 Carousel Component (ISOLATED)

**File**: `app/components/Carousel.tsx`

**Requirements**:
- Must include "use client" at top
- Props interface:
  ```typescript
  interface CarouselProps {
    images: string[];  // Array of image paths
    villaName: string; // For alt text generation
  }
  ```
- Use embla-carousel-react
- Implement dot navigation
- Images: object-fit cover, aspect-ratio 3/2
- Touch/swipe enabled by default
- Loop enabled
- No autoplay

**Accessibility**:
- aria-label on navigation buttons
- role="img" on slides
- keyboard navigation support (optional but preferred)

### 7.2 Navigation Component

**File**: `app/components/Navigation.tsx`

**Requirements**:
- Sticky positioning
- Background blur on scroll
- Mobile responsive with Sheet component for menu
- Smooth scroll to sections
- Active section highlighting (optional enhancement)

### 7.3 Villa Card Component

**File**: `app/components/VillaCard.tsx`

**Props**:
```typescript
interface VillaCardProps {
  name: string;           // "Aavas" or "Aalaya"
  tagline: string;        // "Perfect for couples"
  description: string;
  images: string[];       // Array of 3 image paths
  features: {
    icon: LucideIcon;
    text: string;
  }[];
}
```

---

## 8. CONFIGURATION FILES

### 8.1 next.config.ts (CRITICAL)

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,  // REQUIRED for GitHub Pages
  },
  trailingSlash: true,  // Recommended for static hosting
};

export default nextConfig;
```

### 8.2 tailwind.config.ts

**Extensions**:
```typescript
theme: {
  extend: {
    colors: {
      background: '#F9F6F0',
      primary: '#2C4A3B',
      secondary: '#C17767',
      charcoal: '#1A1A1A',
      'warm-gray': '#6B6B6B',
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
  },
}
```

### 8.3 layout.tsx

**Requirements**:
- Import Google Fonts (Playfair Display, Inter)
- Set metadata for SEO
- Apply background color to body
- Include viewport configuration

---

## 9. SEO & META REQUIREMENTS

### 9.1 Metadata (layout.tsx)

```typescript
export const metadata = {
  title: 'Ness Farm Stay | Boutique Villas in Panchkhal, Nepal',
  description: 'Private farm retreat with valley views near Palanchok Bhagawati Temple. Two luxury villas with organic farm-to-table dining.',
  keywords: 'Panchkhal hotel, Palanchok Bhagawati accommodation, Nepal farm stay, Kathmandu valley retreat, boutique villa Nepal',
  authors: [{ name: 'Ness Farm Stay' }],
  openGraph: {
    title: 'Ness Farm Stay | Boutique Villas in Panchkhal',
    description: 'Escape to nature in our private 2-villa farm retreat',
    images: ['/images/hero-main.jpg'],
    url: 'https://nessfarmstay.com',
    type: 'website',
  },
};
```

### 9.2 Additional SEO
- Semantic HTML (section, article, nav tags)
- Alt text on all images
- Proper heading hierarchy (single H1, logical H2-H3)
- Meta viewport for mobile
- Favicon (optional but recommended)

---

## 10. DEPLOYMENT CHECKLIST

### 10.1 Pre-deployment Verification
- [ ] All images exist in /public/images with correct paths
- [ ] All WhatsApp links open correctly with pre-filled messages
- [ ] Carousel swipes work on mobile (test via DevTools)
- [ ] Smooth scroll works for all navigation links
- [ ] No 404 errors for any assets
- [ ] Lighthouse score > 90 for Performance, Accessibility, SEO
- [ ] GitHub Pages deployment successful from /dist folder

### 10.2 GitHub Pages Setup
1. Repository settings → Pages → Source: Deploy from branch
2. Branch: `main` / Folder: `/dist` (or `/docs` if using that approach)
3. Custom domain: Optional (configure in CNAME file)
4. Enforce HTTPS: Enabled

---

## 11. CONTENT COPY (EXACT TEXT)

Use these exact texts unless otherwise specified:

**Hero**:
- Headline: "Escape to Nature in Panchkhal"
- Sub-headline: "A private 2-villa farm retreat near Palanchok Bhagawati Temple"

**Villas Section**:
- Title: "Our Villas"
- Subtitle: "Two private sanctuaries designed for tranquility"

**Aavas**:
- Tagline: "Perfect for couples"
- Description: "A cozy retreat with panoramic valley views, featuring traditional architecture with modern comforts."

**Aalaya**:
- Tagline: "Spacious luxury"  
- Description: "An expansive villa with private garden access, perfect for those seeking extra space and serenity."

**Experience Section**:
- Title: "The Farm Experience"
- Description: "Immerse yourself in sustainable living and authentic Nepali hospitality."
- Feature 1: "Organic Farm-to-Table Meals" / "Fresh ingredients harvested daily from our organic gardens"
- Feature 2: "Peaceful Environment" / "Wake up to birdsong and mountain views, not traffic"
- Feature 3: "Hiking Trails to Palanchok Bhagawati" / "Ancient temple just 30 minutes walk through rhododendron forests"

**Location Section**:
- Title: "Find Us"
- Address: "Ness Farm Stay, Panchkhal 45200, Kavrepalanchok, Nepal"
- Landmark: "Located near Palanchok Bhagawati Temple"

**Footer**:
- Tagline: "Your private retreat in the Himalayas"
- Copyright: "© 2026 Ness Farm Stay. All rights reserved."

---

## 12. ERROR HANDLING & EDGE CASES

### 12.1 Image Loading
- All images must have fallback background color (`bg-gray-200`)
- Use Next.js Image component with `unoptimized: true`
- Handle missing images gracefully (alt text display)

### 12.2 WhatsApp Links
- If user is on desktop without WhatsApp, link should open WhatsApp Web
- Test on iOS Safari (common issues with wa.me links)
- Ensure phone number format is correct: 9779814947521 (no + in URL)

### 12.3 Mobile Navigation
- Sheet/drawer must close when link is clicked
- Body scroll lock when menu is open
- Focus trap within menu (accessibility)

---

## 13. PERFORMANCE REQUIREMENTS

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s  
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: < 200KB initial JS
- **Image Optimization**: < 500KB per image, use JPG compression 80%

---

## 14. ACCESSIBILITY REQUIREMENTS

- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- Focus indicators visible
- Color contrast ratio minimum 4.5:1 for text
- Alt text for all images
- ARIA labels where icon-only buttons exist

---

## 15. FILE STRUCTURE (FINAL)

```
ness-farm-stay/
├── app/
│   ├── components/
│   │   ├── Carousel.tsx       # Embla carousel with "use client"
│   │   ├── Navigation.tsx     # Sticky header
│   │   ├── VillaCard.tsx      # Reusable villa component
│   │   └── MapEmbed.tsx       # Google Maps iframe
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Villas.tsx
│   │   ├── Experience.tsx
│   │   └── Location.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx               # Main page composing all sections
├── public/
│   └── images/
│       ├── hero-main.jpg
│       ├── experience.jpg
│       └── villas/
│           ├── aavas/
│           │   ├── 1-exterior.jpg
│           │   ├── 2-bedroom.jpg
│           │   └── 3-bathroom.jpg
│           └── aalaya/
│               ├── 1-exterior.jpg
│               ├── 2-bedroom.jpg
│               └── 3-bathroom.jpg
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 16. DEPENDENCIES (package.json)

```json
{
  "dependencies": {
    "next": "14.x",
    "react": "^18",
    "react-dom": "^18",
    "embla-carousel-react": "^8.x",
    "lucide-react": "^0.x",
    "class-variance-authority": "^0.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3.4",
    "typescript": "^5"
  }
}
```

---

## 17. IMPLEMENTATION NOTES FOR AI AGENT

1. **Start with configuration**: Set up next.config.ts first with static export settings
2. **Install dependencies**: embla-carousel-react and lucide-react are mandatory
3. **Build mobile-first**: All components should work on mobile before desktop enhancement
4. **Test carousels early**: Embla requires client directive and specific setup
5. **Verify paths**: All image paths must match exactly (case-sensitive on GitHub Pages)
6. **WhatsApp testing**: Click every booking button to verify message formatting
7. **Static export**: Run `next build` and verify /dist folder contains index.html and all assets
8. **No shortcuts**: Do not use any server-side features (getServerSideProps, API routes, etc.)

---

**End of Document**

This specification is complete and self-contained. Any AI agent with Next.js knowledge should be able to generate the full implementation from this document without additional clarification.
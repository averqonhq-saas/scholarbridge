# ScholarBridge — Educational Development Platform

A modern, responsive, human-centred institutional website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Hook Form + Zod** for an educational development organization serving **K-12 schools, colleges, and universities across India**.

---

## 🏛️ Key Capabilities & Programs

1. **K-12 School Development**:
   - Child development and counselling led by certified professionals
   - Grades 8–12 scientific career development and psychometric mapping
   - Teacher capacity building and Continuous Professional Development (CPD)
   - Parent–child dialogue and adolescent guidance
   - Girls' menstrual health and hygiene awareness
   - Student safety, POCSO adherence, and first-aid drills
   - Social-emotional learning (SEL) and mindfulness
   - Robotics, STEM/STEAM, and tinkering labs
   - Community-based problem solving and local civic impact
   - Vernacular language bridging and neurodivergent inclusion
   - School event management and science expositions

2. **Higher Education & Universities**:
   - Industry-led capstone projects and mentored internships
   - Applied Artificial Intelligence, Generative AI, and autonomous AI agents
   - Data analytics, BI pipelines, and automation
   - Cybersecurity sandboxes and defensive hardening
   - Sustainability and UN SDG-based engineering projects
   - Entrepreneurship pre-incubation and student startup toolkits
   - Placement interview preparation, mock sessions, and resume architecture
   - Technical weekend bootcamps and industrial facility immersions
   - Final-year project incubation and ethical publication support

3. **Experiential Delivery Models**:
   - In-house institutional training on campus
   - Outbound experiential learning and leadership retreats
   - Weekend technical hackathons and boot camps
   - Curated industrial facility walk-throughs

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a curated palette (Deep Navy `#051322` / `#091E33`, Teal `#0D9488` / `#0F766E`, Warm Amber `#F59E0B`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) with accessible `prefers-reduced-motion` fallbacks
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **SEO**: Dynamic `sitemap.ts`, `robots.ts`, Open Graph tags, canonical metadata

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy the example environment file:
```bash
cp .env.example .env.local
```

Configurable variables:
- `CRM_WEBHOOK_URL`: (Optional) Webhook endpoint for forwarding institutional enquiries to your CRM (e.g. HubSpot, Zapier, Make).
- `RESEND_API_KEY`: (Optional) API key for sending confirmation emails.
- `NEXT_PUBLIC_SITE_URL`: Base domain for metadata and sitemap (default: `https://scholarbridge.edu.in`).

*Note: If no CRM webhook is configured, the server-side `/api/enquiry` handler validates inputs, captures them in local console logs, and responds with a transparent development mode message rather than pretending an email was sent.*

### 3. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
scholar-bridge/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, Header & Footer
│   ├── page.tsx                # Homepage (Hero, Intro, 6 Services, Schools, Colleges, Training, Process, Why Partner, CTA)
│   ├── globals.css             # Tailwind layers, theme tokens, reduced-motion reset
│   ├── about/page.tsx          # About Us (Purpose, Approach, Who We Serve, Delivery Model, Safety Charter)
│   ├── services/
│   │   ├── schools/page.tsx    # School Programs (11 detailed categories, activities, outcomes)
│   │   └── colleges/page.tsx   # Higher Ed Programs (Tracks A–J, applied project framework & examples)
│   ├── programs/page.tsx       # Workshops & Training formats
│   ├── contact/page.tsx        # Contact & Institutional Enquiry Desk
│   ├── privacy/page.tsx        # Institutional Privacy Policy & Child Protection
│   ├── terms/page.tsx          # Institutional Terms of Service
│   ├── sitemap.ts              # Dynamic search engine sitemap
│   ├── robots.ts               # Search crawler directives
│   └── api/
│       └── enquiry/route.ts    # Server-side validation, spam protection & CRM dispatch
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Responsive navigation, dropdowns, and mobile drawer
│   │   └── Footer.tsx          # Institutional disclosures, navigation, and links
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── ServiceCategoriesSection.tsx
│   │   ├── DedicatedSchoolsSection.tsx
│   │   ├── DedicatedCollegesSection.tsx
│   │   ├── TrainingCardsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── WhyPartnerSection.tsx
│   │   └── FinalCTASection.tsx
│   ├── forms/
│   │   └── EnquiryForm.tsx     # React Hook Form + Zod enquiry form
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── SectionHeader.tsx
│       └── MotionWrapper.tsx   # Framer Motion with reduced-motion support
├── config/
│   └── site.ts                 # Centralized navigation, links, and branding metadata
├── lib/
│   ├── data/
│   │   ├── home-data.ts        # Services, timeline steps, benefits
│   │   ├── school-programs.ts  # K-12 detailed curricula
│   │   ├── college-programs.ts # Higher ed tracks & concrete project examples
│   │   └── training-programs.ts# Experiential delivery formats
│   ├── validation/
│   │   └── enquiry-schema.ts   # Zod schema for institutional enquiry
│   └── utils.ts                # clsx + twMerge utility
└── tailwind.config.ts          # Brand colors, typography, and shadow tokens
```

---

## 🛡️ Educational Ethics & Safety Compliance

- **No Fabricated Information**: The platform strictly avoids fake testimonials, fabricated statistics, artificial partner logos, or unrealistic placement promises.
- **Child Protection (POCSO)**: Clear disclosures on facilitator vetting, child safety guidelines, and clinical confidentiality for student counselling records.
- **Pedagogical Integrity**: Clear 4-pillar project framework (Problem + Technology + Impact + Industry Mentorship).

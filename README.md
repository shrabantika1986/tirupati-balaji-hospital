# Tirupoti Balaji Hospital — Next.js Website

A production-ready, component-based **Next.js 14** website for Tirupoti Balaji Multi-Specialty Hospital, Vijayawada, Andhra Pradesh.

---

## 🏗️ Project Structure

```
tirupoti-balaji-hospital/
├── public/
│   └── videos/               # Place hospital-tour.mp4 here for video banner slide
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── page.tsx          # Home
│   │   ├── about/            # About Us
│   │   ├── find-a-doctor/    # Doctor search & listing
│   │   ├── departments/      # All departments + [slug] detail
│   │   ├── services/
│   │   │   ├── diagnostics/  # Diagnostic services page
│   │   │   └── health-packages/ # Health package pricing
│   │   ├── gallery/          # Image gallery with lightbox
│   │   ├── blog/             # Blog listing + [slug] detail
│   │   └── contact/          # Contact form + info
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header/       # Responsive header with mega menu
│   │   │   ├── Footer/       # Full-width footer
│   │   │   └── Breadcrumb/   # Inner page hero with breadcrumbs
│   │   ├── home/             # All home page section components
│   │   │   ├── HeroBanner/   # Swiper slider (image + video)
│   │   │   ├── WhyChooseUs/
│   │   │   ├── DepartmentsSection/
│   │   │   ├── DoctorsSection/
│   │   │   ├── AboutSection/
│   │   │   ├── StatsSection/ # Animated count-up stats
│   │   │   ├── FacilitiesSection/
│   │   │   ├── DiagnosticsSection/
│   │   │   ├── FAQSection/   # Accordion FAQs
│   │   │   └── TestimonialsSection/ # Swiper testimonials
│   │   └── ui/               # Reusable UI atoms
│   │       ├── Button.tsx
│   │       ├── SectionLabel.tsx
│   │       ├── StarRating.tsx
│   │       └── AppointmentModal.tsx
│   ├── data/                 # All static data — replace with API calls later
│   │   ├── navigation.ts
│   │   ├── home.ts
│   │   ├── departments.ts
│   │   ├── doctors.ts
│   │   ├── about.ts
│   │   ├── gallery.ts
│   │   ├── blog.ts
│   │   ├── services.ts
│   │   └── contact.ts
│   ├── hooks/
│   │   └── useInView.ts      # Intersection Observer + scroll hooks
│   ├── lib/
│   │   └── utils.ts          # cn(), formatDate(), slugify(), etc.
│   ├── store/
│   │   └── uiStore.ts        # Zustand store (UI state + appointment modal)
│   └── types/
│       └── index.ts          # All TypeScript interfaces
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Primary** | `#0057A8` (Deep Blue) |
| **Secondary** | `#009B8A` (Teal) |
| **Accent** | `#E8832A` (Warm Orange) |
| **Font** | Inter (Google Fonts) |
| **Border radius** | 12px cards, 20px large cards, full for pills |

---

## 📡 Connecting APIs

All data lives in `src/data/*.ts` files. Each file exports typed arrays/objects.

To connect an API, replace the static export with an async fetch:

```ts
// src/data/doctors.ts  — BEFORE (static)
export const doctorsData: Doctor[] = [ ... ]

// AFTER (API-connected, in a server component or getServerSideProps)
export async function fetchDoctors(): Promise<Doctor[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors`, {
    next: { revalidate: 3600 } // ISR — revalidate every hour
  })
  if (!res.ok) throw new Error('Failed to fetch doctors')
  return res.json()
}
```

Then in the page/component:
```tsx
// src/app/find-a-doctor/page.tsx
import { fetchDoctors } from '@/data/doctors'

export default async function FindADoctorPage() {
  const doctors = await fetchDoctors()
  // ...
}
```

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` 14 | Framework |
| `react` 18 | UI library |
| `swiper` 11 | Hero banner + testimonial sliders |
| `zustand` | Global UI state (header, appointment modal) |
| `react-countup` | Animated stats counter |
| `lucide-react` | Icon library |
| `tailwindcss` | Utility CSS |
| `clsx` + `tailwind-merge` | Class merging utility |
| `@headlessui/react` | Accessible modal/dialog primitives |

---

## 🎥 Video Banner

Place your hospital tour video at:
```
public/videos/hospital-tour.mp4
```

The 4th hero slide is pre-configured as a video slide with a poster fallback.

---

## ✅ Features

- [x] Responsive header with mobile drawer + mega menu for departments
- [x] Swiper hero banner — supports both **images and video** slides
- [x] Animated count-up stats section
- [x] Appointment booking modal (Zustand state, pre-fillable)
- [x] Doctor search with live filter by name/specialty/department
- [x] Department detail pages with doctors sidebar
- [x] Gallery with category filter + lightbox
- [x] Blog listing + single post with related articles
- [x] Health packages pricing page
- [x] Diagnostic services page
- [x] Contact form with success state
- [x] Full TypeScript types for all data
- [x] SEO metadata on every page
- [x] Inter font throughout
- [x] Hospital colour theme (Blue + Teal + Warm Orange)

// ─── Navigation ─────────────────────────────────────────────────────────────

export interface NavSubItem {
  label: string
  href: string
  icon?: string
  description?: string
}

export interface NavDropdownColumn {
  items: NavSubItem[]
}

export interface NavItem {
  label: string
  href: string
  children?: NavSubItem[]
  megaMenu?: boolean
  columns?: NavDropdownColumn[]
}

// ─── Hero Banner ─────────────────────────────────────────────────────────────

export interface BannerSlide {
  id: string
  type: 'image' | 'video'
  src: string
  poster?: string        // thumbnail for video slides
  title: string
  subtitle: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
}

// ─── Department ──────────────────────────────────────────────────────────────

export interface Department {
  id: string
  slug: string
  name: string
  shortDesc: string
  description: string
  icon: string           // emoji or svg path key
  image: string
  features?: string[]
  conditions?: string[]
  procedures?: string[]
}

// ─── Doctor ──────────────────────────────────────────────────────────────────

export interface Doctor {
  id: string
  slug: string
  name: string
  qualification: string
  specialization: string
  departmentSlug: string
  experience: number     // years
  image: string
  bio?: string
  schedule?: string
  languages?: string[]
}

// ─── Service / Facility ──────────────────────────────────────────────────────

export interface Facility {
  id: string
  title: string
  description: string
  icon: string
}

export interface DiagnosticService {
  id: string
  title: string
  description: string
  image?: string
  bullets?: string[]
}

// ─── Stats ───────────────────────────────────────────────────────────────────

export interface StatItem {
  id: string
  value: number
  suffix: string
  label: string
  icon: string
}

// ─── Testimonial ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  date: string
  avatar?: string
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FAQItem {
  id: string
  question: string
  answer: string
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

export type GalleryCategory = 'all' | 'infrastructure' | 'operation-theatre' | 'icu' | 'wards' | 'diagnostic' | 'events'

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: GalleryCategory
  caption?: string
}

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  coverImage: string
  author: string
  authorImage?: string
  publishedAt: string
  readTime: number
  tags: string[]
  category: string
}

// ─── Health Package ──────────────────────────────────────────────────────────

export interface HealthPackage {
  id: string
  name: string
  description: string
  price: number
  currency: string
  includes: string[]
  highlight?: boolean
  badge?: string
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface ContactInfo {
  address: string
  phone: { label: string; value: string }[]
  email: string
  emergencyPhone: string
  hours: { label: string; value: string }[]
  mapEmbedUrl?: string
  socialLinks: { platform: string; href: string; icon: string }[]
}

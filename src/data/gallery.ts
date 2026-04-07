import type { GalleryItem, GalleryCategory } from '@/types'

export const galleryCategories: { label: string; value: GalleryCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Operation Theatre', value: 'operation-theatre' },
  { label: 'ICU & Critical Care', value: 'icu' },
  { label: 'Wards & Rooms', value: 'wards' },
  { label: 'Diagnostic Centre', value: 'diagnostic' },
  { label: 'Events', value: 'events' },
]

export const galleryItems: GalleryItem[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&fit=crop', alt: 'Hospital main building', category: 'infrastructure', caption: 'Tirupoti Balaji Hospital – Main Building' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80&fit=crop', alt: 'Hospital reception area', category: 'infrastructure', caption: 'Welcoming Reception & Atrium' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80&fit=crop', alt: 'Modern operation theatre', category: 'operation-theatre', caption: 'Modular Operation Theatre' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80&fit=crop', alt: 'Robotic surgery suite', category: 'operation-theatre', caption: 'Robotic Surgery Suite' },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80&fit=crop', alt: 'ICU monitoring', category: 'icu', caption: 'Advanced ICU with Continuous Monitoring' },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80&fit=crop', alt: 'NICU', category: 'icu', caption: 'Neonatal Intensive Care Unit (NICU)' },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1631549916654-e0b944e98b1e?w=800&q=80&fit=crop', alt: 'Private patient room', category: 'wards', caption: 'Premium Private Suite' },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80&fit=crop', alt: 'General ward', category: 'wards', caption: 'Comfortable General Ward' },
  { id: 'g9', src: 'https://images.unsplash.com/photo-1584036561584-b03c19da874c?w=800&q=80&fit=crop', alt: 'MRI scanner', category: 'diagnostic', caption: '3 Tesla MRI Scanner' },
  { id: 'g10', src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80&fit=crop', alt: 'CT scan machine', category: 'diagnostic', caption: '128-Slice CT Scanner' },
  { id: 'g11', src: 'https://images.unsplash.com/photo-1582560475093-ba66accbc095?w=800&q=80&fit=crop', alt: 'Pathology lab', category: 'diagnostic', caption: 'ISO-Certified Pathology Laboratory' },
  { id: 'g12', src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fit=crop', alt: 'Cancer care centre', category: 'diagnostic', caption: 'Oncology & Chemotherapy Centre' },
  { id: 'g13', src: 'https://images.unsplash.com/photo-1576091160750-91c35e2f3eda?w=800&q=80&fit=crop', alt: 'Health camp', category: 'events', caption: 'Free Health Screening Camp' },
  { id: 'g14', src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80&fit=crop', alt: 'Doctors conference', category: 'events', caption: 'Annual Medical Conference 2024' },
  { id: 'g15', src: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80&fit=crop', alt: 'Doctors on rounds', category: 'infrastructure', caption: 'Specialist Doctors on Ward Rounds' },
  { id: 'g16', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop', alt: 'Physiotherapy gym', category: 'wards', caption: 'Physiotherapy & Rehabilitation Gym' },
]

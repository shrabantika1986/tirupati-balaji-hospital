import type { Metadata } from 'next'
import HeroBanner from '@/components/home/HeroBanner/HeroBanner'
import WhyChooseUs from '@/components/home/WhyChooseUs/WhyChooseUs'
import DepartmentsSection from '@/components/home/DepartmentsSection/DepartmentsSection'
import DoctorsSection from '@/components/home/DoctorsSection/DoctorsSection'
import AboutSection from '@/components/home/AboutSection/AboutSection'
import StatsSection from '@/components/home/StatsSection/StatsSection'
import FacilitiesSection from '@/components/home/FacilitiesSection/FacilitiesSection'
import DiagnosticsSection from '@/components/home/DiagnosticsSection/DiagnosticsSection'
import FAQSection from '@/components/home/FAQSection/FAQSection'
import TestimonialsSection from '@/components/home/TestimonialsSection/TestimonialsSection'
import { bannerSlides } from '@/data/home'

export const metadata: Metadata = {
  title: 'Tirupoti Balaji Hospital | Multi-Specialty Hospital in Vijayawada',
  description:
    'Premier multi-specialty hospital in Vijayawada, Andhra Pradesh. 150+ expert doctors, 22 specialties, advanced diagnostics, and 28 years of excellence in compassionate patient care.',
}

export default function HomePage() {
  return (
    <>
      <HeroBanner slides={bannerSlides} />
      <WhyChooseUs />
      <DepartmentsSection />
      <DoctorsSection />
      <AboutSection />
      <StatsSection />
      <FacilitiesSection />
      <DiagnosticsSection />
      <FAQSection />
      <TestimonialsSection />
    </>
  )
}

import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const highlights = [
  'Expert Doctors & Surgeons',
  'Personalised Treatment Plans',
  'Patient-Centred Care',
  'Cutting-Edge Technology',
  'ISO & NABH Accredited',
  'Affordable & Transparent Pricing',
]

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800 mb-5 leading-tight">
              Welcome to{' '}
              <span className="gradient-text">Tirupoti Balaji Hospital</span>
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-4">
              Tirupoti Balaji Multi-Specialty Hospital is a premier, comprehensive healthcare
              institution equipped with state-of-the-art diagnostic imaging, modern modular
              operation theatres, and over 150 specialist doctors across 22 departments.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed mb-6">
              Founded in 1996 with a mission to bring world-class tertiary care to Andhra Pradesh,
              we have grown to serve over 42 lakh patients — consistently delivering excellence in
              clinical care, patient safety, and compassionate service.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-secondary-500 fill-secondary-50 shrink-0" />
                  <span className="text-sm font-medium text-neutral-700">{h}</span>
                </li>
              ))}
            </ul>

            <Button href="/about" variant="primary">
              Discover Our Story
            </Button>
          </div>

          {/* Image with stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&fit=crop"
                alt="Tirupoti Balaji Hospital building"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-primary-900/40" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-5 left-5 bg-white rounded-2xl shadow-card px-5 py-4 flex items-center gap-4 border border-neutral-100">
              <div className="text-3xl">⭐</div>
              <div>
                <p className="text-2xl font-extrabold text-primary-700 leading-none">52K+</p>
                <p className="text-xs text-neutral-400 mt-1">Five-Star Reviews</p>
              </div>
            </div>
            <div className="absolute -top-5 right-5 bg-white rounded-2xl shadow-card px-5 py-4 flex items-center gap-4 border border-neutral-100">
              <div className="text-3xl">🏅</div>
              <div>
                <p className="text-2xl font-extrabold text-secondary-600 leading-none">NABH</p>
                <p className="text-xs text-neutral-400 mt-1">Accredited Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

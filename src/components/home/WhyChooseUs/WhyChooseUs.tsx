import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { whyChooseUsPoints } from '@/data/home'

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
              <Image
                src="/images/hosp-img.jpg"
                alt="Tirupoti Balaji Hospital team"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#eb1e26] text-white rounded-2xl p-5 shadow-button hidden md:block">
              <div className="text-3xl font-extrabold leading-none">1+</div>
              <div className="text-xs mt-1 font-semibold opacity-90">Years of Excellence</div>
            </div>
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-card hidden md:block border border-neutral-100">
              <div className="text-2xl font-extrabold text-[#2e358f] leading-none">5K+</div>
              <div className="text-xs text-neutral-500 mt-1">Happy Patients</div>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800 mb-4 leading-tight">
              Why Tiruputi Balaji Health Care Group Is{' '}
              <span className="gradient-text">Kolkata&apos;s</span>{' '}
              Most Trusted Hospital?
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              At Tirupati Balaji Health Care Group, we combine advanced medical technology, experienced doctors, and compassionate patient care 
              to deliver trusted healthcare services. With modern diagnostics, specialized departments, and a commitment to
              excellence, Tirupati Balaji Health Care Group continues to serve Kolkata with dedication, safety, 
              and affordable quality treatment.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {whyChooseUsPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-secondary-500 mt-0.5 shrink-0 fill-secondary-50"
                  />
                  <span className="text-neutral-700 text-sm font-medium leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 flex-wrap">
              <Button href="/about" variant="primary">
                Discover More
              </Button>
              <Button href="/find-a-doctor" variant="secondary">
                Find a Doctor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

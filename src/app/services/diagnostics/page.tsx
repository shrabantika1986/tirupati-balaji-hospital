import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/layout/Breadcrumb/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { diagnosticServicesData } from '@/data/services'

export const metadata: Metadata = {
  title: 'Diagnostic Services',
  description: 'World-class diagnostic services at Tirupoti Balaji Hospital — 3T MRI, 128-Slice CT, 4D USG, Pathology, Cardiology Diagnostics and more, available 24×7.',
}

export default function DiagnosticsPage() {
  return (
    <>
      <PageHero
        title="Diagnostic Services"
        subtitle="Precise diagnosis is the foundation of effective treatment. Our NABL-accredited lab and advanced imaging centre operate 24 hours a day, 7 days a week."
        breadcrumbs={[
          { label: 'Services', href: '/services/diagnostics' },
          { label: 'Diagnostic Services' },
        ]}
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          {/* Intro card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 mb-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: '🔬', label: 'NABL Accredited Lab', sub: 'ISO-certified pathology' },
              { icon: '⏰', label: '24×7 Available', sub: 'Round-the-clock service' },
              { icon: '📊', label: '2000+ Tests/Day', sub: 'High-throughput capacity' },
              { icon: '💻', label: 'Online Reports', sub: 'Secure patient portal' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-neutral-800 text-sm">{item.label}</p>
                <p className="text-xs text-neutral-400">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <SectionLabel align="center">Our Services</SectionLabel>
            <h2 className="text-3xl font-extrabold text-neutral-800">
              Comprehensive <span className="gradient-text">Diagnostic Services</span>
            </h2>
          </div>

          <div className="space-y-10">
            {diagnosticServicesData.map((service, i) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image */}
                <div className={`relative rounded-3xl overflow-hidden h-72 shadow-card ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image src={service.image ?? ''} alt={service.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
                  <h3 className="absolute bottom-5 left-5 text-white font-extrabold text-2xl">{service.title}</h3>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-2xl font-extrabold text-neutral-800 mb-4">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-5">{service.description}</p>
                  {service.bullets && (
                    <ul className="space-y-2 mb-6">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-secondary-500 shrink-0" />
                          <span className="text-sm text-neutral-700 font-medium">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button href="/contact" variant="primary" size="sm">
                    Book This Test
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

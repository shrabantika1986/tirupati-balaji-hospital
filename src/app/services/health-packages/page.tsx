import type { Metadata } from 'next'
import { CheckCircle2, Star } from 'lucide-react'
import PageHero from '@/components/layout/Breadcrumb/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { healthPackagesData } from '@/data/services'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Health Packages',
  description: 'Preventive health check-up packages at Tirupoti Balaji Hospital — from basic wellness to comprehensive cancer screening and executive health assessments.',
}

export default function HealthPackagesPage() {
  return (
    <>
      <PageHero
        title="Health Packages"
        subtitle="Invest in your health with our scientifically designed preventive check-up packages. Early detection saves lives."
        breadcrumbs={[
          { label: 'Services', href: '/services/diagnostics' },
          { label: 'Health Packages' },
        ]}
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">Preventive Health Care</SectionLabel>
            <h2 className="text-3xl font-extrabold text-neutral-800">
              Choose Your <span className="gradient-text">Health Package</span>
            </h2>
            <p className="text-neutral-500 mt-3 max-w-xl mx-auto text-sm">
              All packages include a detailed wellness report and physician consultation. Home sample collection available on request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {healthPackagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={cn(
                  'bg-white rounded-3xl shadow-sm border transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden',
                  pkg.highlight
                    ? 'border-primary-400 shadow-card-hover ring-2 ring-primary-200'
                    : 'border-neutral-100 hover:shadow-card hover:border-primary-200'
                )}
              >
                {/* Header */}
                <div className={cn(
                  'p-6 relative',
                  pkg.highlight
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white'
                    : 'bg-neutral-50 border-b border-neutral-100'
                )}>
                  {pkg.badge && (
                    <span className={cn(
                      'absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full',
                      pkg.highlight
                        ? 'bg-accent-500 text-white'
                        : 'bg-primary-100 text-primary-700'
                    )}>
                      {pkg.highlight && <Star size={10} className="inline mr-1" />}
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className={cn('font-extrabold text-xl mb-1', pkg.highlight ? 'text-white' : 'text-neutral-800')}>
                    {pkg.name}
                  </h3>
                  <p className={cn('text-sm leading-relaxed', pkg.highlight ? 'text-white/80' : 'text-neutral-500')}>
                    {pkg.description}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={cn('text-3xl font-black', pkg.highlight ? 'text-white' : 'text-primary-700')}>
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                    <span className={cn('text-sm', pkg.highlight ? 'text-white/70' : 'text-neutral-400')}>
                      / person
                    </span>
                  </div>
                </div>

                {/* Includes */}
                <div className="p-6 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Package Includes</p>
                  <ul className="space-y-2.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className={cn('shrink-0 mt-0.5', pkg.highlight ? 'text-secondary-500' : 'text-secondary-400')} />
                        <span className="text-sm text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Button
                    href="/contact"
                    variant={pkg.highlight ? 'primary' : 'secondary'}
                    className="w-full justify-center"
                  >
                    Book This Package
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 bg-white rounded-2xl p-6 border border-neutral-100 text-center shadow-sm">
            <p className="text-sm text-neutral-600 mb-3">
              💡 <strong>Custom Corporate Packages</strong> available for groups of 10 or more. Contact our corporate health desk.
            </p>
            <Button href="/contact" variant="ghost" size="sm">
              Enquire About Corporate Packages
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

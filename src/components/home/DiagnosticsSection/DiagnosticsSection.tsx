import Image from 'next/image'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { diagnosticServicesHome } from '@/data/home'

export default function DiagnosticsSection() {
  const [main, ...rest] = diagnosticServicesHome

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionLabel align="center">Our Services</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800">
            Accurate Diagnosis. <span className="gradient-text">Better Care.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left – Main Featured Service */}
          <div>
            <div className="relative rounded-3xl overflow-hidden mb-6 shadow-card h-64">
              <Image
                src={main.image ?? ''}
                alt={main.title}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="bg-[#ec1f27] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  Featured
                </span>
                <h3 className="text-white text-2xl font-extrabold mt-2">{main.title}</h3>
              </div>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">{main.description}</p>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              {main.bullets?.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-neutral-700">
                  <CheckCircle2 size={15} className="text-secondary-500 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Button href="/services/diagnostics" variant="primary">
              All Diagnostic Services <ArrowRight size={16} />
            </Button>
          </div>

          {/* Right – Other Services */}
          <div className="space-y-5">
            {rest.map((service) => (
              <div key={service.id} className="flex gap-5 group bg-neutral-50 rounded-2xl p-5 hover:bg-primary-50 transition-colors border border-neutral-100 hover:border-primary-200">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={service.image ?? ''}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-neutral-800 mb-1 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Advanced Dialysis Unit</h3>
              <p className="text-white/80 text-sm mb-4">
                At Tirupati Balaji Health Care Group, our Advanced Dialysis Unit is dedicated to providing safe, effective, and compassionate care for patients suffering from kidney-related disorders and chronic kidney disease. Equipped with modern dialysis machines and supported by experienced nephrologists, trained technicians, and nursing staff, we ensure the highest standards of treatment in a comfortable and hygienic environment.
              </p>
              <Button href="/services/diagnostics" variant="outline-white" size="sm">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

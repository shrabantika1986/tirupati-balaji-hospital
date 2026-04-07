import {
  Microscope, ScanLine, HeartPulse, Cpu, Droplets, Search,
  FlaskConical, Building2, ShieldCheck, Droplet, Truck, Video
} from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { facilitiesData } from '@/data/home'

const iconMap: Record<string, React.ElementType> = {
  microscope: Microscope,
  scan: ScanLine,
  'heart-pulse': HeartPulse,
  cpu: Cpu,
  droplets: Droplets,
  search: Search,
  'flask-conical': FlaskConical,
  'building-2': Building2,
  'shield-check': ShieldCheck,
  droplet: Droplet,
  truck: Truck,
  video: Video,
}

export default function FacilitiesSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionLabel align="center">Multi-Specialty Facilities</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800">
            Your Trusted Partner in <span className="gradient-text">Quality Healthcare</span>
          </h2>
          <p className="text-neutral-500 mt-4 max-w-xl mx-auto text-sm">
            We offer a comprehensive suite of inpatient and outpatient facilities, ensuring every
            aspect of your health is looked after with precision and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {facilitiesData.map((fac) => {
            const Icon = iconMap[fac.icon] ?? Microscope
            return (
              <div
                key={fac.id}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:border-primary-200 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={22} className="text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-neutral-800 text-base mb-2 group-hover:text-primary-700 transition-colors">
                  {fac.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{fac.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

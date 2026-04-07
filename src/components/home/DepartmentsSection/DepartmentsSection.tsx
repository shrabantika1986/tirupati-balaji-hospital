import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { featuredDepartments, departmentsData } from '@/data/departments'

export default function DepartmentsSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Our Departments</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800 leading-tight">
              Comprehensive Care Across{' '}
              <span className="gradient-text">All Specialties</span>
            </h2>
          </div>
          <Button href="/departments" variant="ghost">
            View All 22 Departments <ArrowRight size={16} />
          </Button>
        </div>

        {/* Featured Departments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredDepartments.map((dept) => (
            <Link
              key={dept.slug}
              href={`/departments/${dept.slug}`}
              className="group card-hospital flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={dept.image}
                  alt={dept.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/20 to-transparent" />
                <div className="absolute top-4 left-4 text-3xl">{dept.icon}</div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg leading-tight">{dept.name}</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-neutral-500 text-sm leading-relaxed mb-4 flex-1">{dept.shortDesc}</p>
                <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Department Pills – All */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">All Departments</p>
          <div className="flex flex-wrap gap-2">
            {departmentsData.map((dept) => (
              <Link
                key={dept.slug}
                href={`/departments/${dept.slug}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 text-sm text-neutral-600 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium"
              >
                <span>{dept.icon}</span>
                {dept.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

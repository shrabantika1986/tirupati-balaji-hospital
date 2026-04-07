import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/layout/Breadcrumb/PageHero'
import { departmentsData } from '@/data/departments'

export const metadata: Metadata = {
  title: 'Departments',
  description: 'Explore all 22+ medical departments at Tirupoti Balaji Hospital — from Cardiology and Neurology to Oncology, Orthopaedics, and more.',
}

export default function DepartmentsPage() {
  return (
    <>
      <PageHero
        title="Our Departments"
        subtitle="Comprehensive specialist care across 22+ departments — all under one roof."
        breadcrumbs={[{ label: 'Departments' }]}
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {departmentsData.map((dept) => (
              <Link
                key={dept.slug}
                href={`/departments/${dept.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-card hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={dept.image}
                    alt={dept.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                  <div className="absolute top-3 left-3 text-3xl">{dept.icon}</div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-base leading-tight">{dept.name}</h3>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-neutral-500 text-sm leading-relaxed flex-1 mb-3">{dept.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

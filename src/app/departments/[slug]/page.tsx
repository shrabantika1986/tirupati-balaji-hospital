import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Calendar, ArrowRight } from 'lucide-react'
import PageHero from '@/components/layout/Breadcrumb/PageHero'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'
import { getDepartmentBySlug, departmentsData } from '@/data/departments'
import { getDoctorsByDepartment } from '@/data/doctors'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return departmentsData.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dept = getDepartmentBySlug(params.slug)
  if (!dept) return { title: 'Department Not Found' }
  return {
    title: dept.name,
    description: dept.description.slice(0, 160),
  }
}

export default function DepartmentPage({ params }: Props) {
  const dept = getDepartmentBySlug(params.slug)
  if (!dept) notFound()

  const doctors = getDoctorsByDepartment(dept.slug)

  return (
    <>
      <PageHero
        title={dept.name}
        subtitle={dept.shortDesc}
        breadcrumbs={[
          { label: 'Departments', href: '/departments' },
          { label: dept.name },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden h-72 mb-8 shadow-card">
                <Image src={dept.image} alt={dept.name} fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <div className="text-4xl mb-2">{dept.icon}</div>
                  <h2 className="text-2xl font-extrabold">{dept.name}</h2>
                </div>
              </div>

              <SectionLabel>About This Department</SectionLabel>
              <h2 className="text-2xl font-extrabold text-neutral-800 mb-4">{dept.name} at Tirupoti Balaji Hospital</h2>
              <p className="text-neutral-600 leading-relaxed mb-8">{dept.description}</p>

              {/* Features */}
              {dept.features && (
                <div className="mb-8">
                  <h3 className="font-bold text-neutral-800 text-lg mb-4">Department Highlights</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {dept.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 bg-primary-50 rounded-xl p-3 border border-primary-100">
                        <CheckCircle2 size={17} className="text-primary-600 shrink-0" />
                        <span className="text-sm font-medium text-neutral-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Conditions */}
              {dept.conditions && (
                <div className="mb-8">
                  <h3 className="font-bold text-neutral-800 text-lg mb-4">Conditions Treated</h3>
                  <div className="flex flex-wrap gap-2">
                    {dept.conditions.map((c) => (
                      <span key={c} className="bg-neutral-100 text-neutral-700 text-sm px-3 py-1.5 rounded-full font-medium border border-neutral-200">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Procedures */}
              {dept.procedures && (
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-4">Key Procedures & Treatments</h3>
                  <div className="flex flex-wrap gap-2">
                    {dept.procedures.map((p) => (
                      <span key={p} className="bg-secondary-50 text-secondary-700 text-sm px-3 py-1.5 rounded-full font-medium border border-secondary-100">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book Appointment */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Book a Consultation</h3>
                <p className="text-white/80 text-sm mb-5">Speak with one of our {dept.name} specialists today.</p>
                <Button href="/contact" variant="outline-white" size="sm">
                  <Calendar size={15} /> Schedule Now
                </Button>
              </div>

              {/* Doctors in this dept */}
              {doctors.length > 0 && (
                <div className="bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm">
                  <h3 className="font-bold text-neutral-800 mb-4 flex items-center justify-between">
                    Our Doctors
                    <Link href="/find-a-doctor" className="text-xs text-primary-600 font-semibold">View All →</Link>
                  </h3>
                  <div className="space-y-4">
                    {doctors.map((doc) => (
                      <div key={doc.id} className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                          <Image src={doc.image} alt={doc.name} fill className="object-cover object-top" sizes="48px" />
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-800 text-sm">{doc.name}</p>
                          <p className="text-xs text-neutral-400">{doc.specialization}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Departments */}
              <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-5">
                <h3 className="font-bold text-neutral-800 mb-4 text-sm">Other Departments</h3>
                <div className="space-y-1">
                  {departmentsData.filter(d => d.slug !== dept.slug).slice(0, 8).map((d) => (
                    <Link
                      key={d.slug}
                      href={`/departments/${d.slug}`}
                      className="flex items-center gap-2 text-sm text-neutral-600 hover:text-primary-600 py-1.5 hover:pl-1 transition-all"
                    >
                      <span>{d.icon}</span> {d.name} <ArrowRight size={12} className="ml-auto" />
                    </Link>
                  ))}
                  <Link href="/departments" className="text-xs text-primary-600 font-semibold block pt-2">
                    All Departments →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Search, Calendar, Filter } from 'lucide-react'
import PageHero from '@/components/layout/Breadcrumb/PageHero'
import { doctorsData } from '@/data/doctors'
import { departmentsData } from '@/data/departments'
import { useAppointmentStore } from '@/store/uiStore'
import { cn } from '@/lib/utils'

export default function FindADoctorPage() {
  const [search, setSearch] = useState('')
  const [selectedDept, setSelectedDept] = useState('')
  const { openModal } = useAppointmentStore()

  const filtered = useMemo(() => {
    return doctorsData.filter((d) => {
      const matchSearch =
        !search ||
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.specialization.toLowerCase().includes(search.toLowerCase())
      const matchDept = !selectedDept || d.departmentSlug === selectedDept
      return matchSearch && matchDept
    })
  }, [search, selectedDept])

  return (
    <>
      <PageHero
        title="Find A Doctor"
        subtitle="Browse our team of 150+ specialist doctors and book an appointment with your preferred expert."
        breadcrumbs={[{ label: 'Find A Doctor' }]}
      />

      {/* Filter Bar */}
      <section className="bg-white border-b border-neutral-100 py-6 sticky top-[64px] z-40 shadow-sm">
        <div className="container-custom flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or specialty…"
              className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
            />
          </div>
          <div className="relative">
            <Filter size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="pl-9 pr-8 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition bg-white appearance-none cursor-pointer"
            >
              <option value="">All Departments</option>
              {departmentsData.map((d) => (
                <option key={d.slug} value={d.slug}>{d.name}</option>
              ))}
            </select>
          </div>
          <div className="text-sm text-neutral-400 self-center shrink-0">
            {filtered.length} doctor{filtered.length !== 1 ? 's' : ''} found
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-neutral-700 mb-2">No doctors found</h3>
              <p className="text-neutral-400">Try a different name, specialty, or department filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((doctor) => {
                const dept = departmentsData.find(d => d.slug === doctor.departmentSlug)
                return (
                  <div
                    key={doctor.id}
                    id={doctor.slug}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-card hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Photo */}
                    <div className="relative h-52 bg-gradient-to-br from-primary-50 to-secondary-50">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                      />
                      <div className="absolute bottom-3 right-3 bg-accent-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {doctor.experience} yrs exp
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-extrabold text-neutral-800 text-base mb-0.5">{doctor.name}</h3>
                      <p className="text-secondary-600 font-semibold text-sm mb-1">{doctor.specialization}</p>
                      <p className="text-neutral-400 text-xs mb-3 leading-snug">{doctor.qualification}</p>

                      {dept && (
                        <span className="inline-flex items-center gap-1 bg-primary-50 text-primary-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit">
                          {dept.icon} {dept.name}
                        </span>
                      )}

                      {doctor.schedule && (
                        <p className="text-xs text-neutral-400 mb-4">
                          🕐 {doctor.schedule}
                        </p>
                      )}

                      <div className="mt-auto">
                        <button
                          onClick={() => openModal({ doctor: doctor.slug, department: doctor.departmentSlug })}
                          className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                        >
                          <Calendar size={15} />
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

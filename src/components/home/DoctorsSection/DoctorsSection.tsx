import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { featuredDoctors } from '@/data/doctors'

export default function DoctorsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Our Experts</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800 leading-tight">
              Meet Our <span className="gradient-text">Experienced Doctors</span>
            </h2>
          </div>
          <Button href="/find-a-doctor" variant="ghost">
            View All Doctors <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {featuredDoctors.map((doctor) => (
            <Link
              key={doctor.slug}
              href={`/find-a-doctor#${doctor.slug}`}
              className="group card-hospital text-center p-6"
            >
              {/* Avatar */}
              <div className="relative w-28 h-28 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="120px"
                    />
                  </div>
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-1 -right-1 bg-accent-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                  {doctor.experience}y
                </div>
              </div>

              <h3 className="font-bold text-neutral-800 text-sm mb-1 group-hover:text-primary-600 transition-colors">
                {doctor.name}
              </h3>
              <p className="text-xs text-secondary-600 font-semibold mb-1">
                {doctor.specialization}
              </p>
              <p className="text-xs text-neutral-400 mb-4 leading-snug">
                {doctor.qualification}
              </p>

              {/* Book button */}
              <button className="inline-flex items-center gap-1 text-xs text-primary-600 border border-primary-200 rounded-full px-3 py-1.5 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all font-semibold group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600">
                <Calendar size={11} />
                Book
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

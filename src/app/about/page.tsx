import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Award } from 'lucide-react'
import PageHero from '@/components/layout/Breadcrumb/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import { aboutData } from '@/data/about'
import TestimonialsSection from '@/components/home/TestimonialsSection/TestimonialsSection'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Tirupoti Balaji Hospital — our 28-year journey, mission, vision, and the technology that makes us Andhra Pradesh\'s most trusted multi-specialty hospital.',
}

export default function AboutPage() {
  const { hero, story, missionVision, phases, technology, accreditations } = aboutData

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="28 years of healing, innovating, and transforming healthcare in Andhra Pradesh."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionLabel>About Us</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800 mb-5 leading-tight">
                Welcome to{' '}
                <span className="gradient-text">Tirupoti Balaji Hospital</span>
              </h2>
              {hero.subtitle.split('. ').map((para, i) => (
                <p key={i} className="text-neutral-600 text-base leading-relaxed mb-3">{para}.</p>
              ))}
              <div className="flex flex-wrap gap-3 mt-6">
                {hero.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full border border-primary-100"
                  >
                    <CheckCircle2 size={14} />
                    {h}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
              <Image src={hero.image} alt="Hospital" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
              <Image src={story.image} alt="Hospital story" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-3xl font-extrabold text-neutral-800 mb-6 leading-tight">{story.title}</h2>
              {story.paragraphs.map((p, i) => (
                <p key={i} className="text-neutral-600 text-base leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">Mission & Vision</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800">
              Our Purpose & <span className="gradient-text">Direction</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 text-white">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-extrabold mb-3">{missionVision.mission.title}</h3>
              <p className="text-white/85 leading-relaxed">{missionVision.mission.text}</p>
            </div>
            <div className="bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-3xl p-8 text-white">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-xl font-extrabold mb-3">{missionVision.vision.title}</h3>
              <p className="text-white/85 leading-relaxed">{missionVision.vision.text}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {missionVision.values.map((v) => (
              <div key={v.label} className="bg-neutral-50 rounded-2xl p-6 text-center border border-neutral-100 hover:border-primary-200 hover:shadow-card transition-all">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h4 className="font-bold text-neutral-800 mb-2">{v.label}</h4>
                <p className="text-neutral-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases / Timeline */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">Our Journey</SectionLabel>
            <h2 className="text-3xl font-extrabold text-neutral-800">
              Building Blocks of <span className="gradient-text">Tirupoti Balaji</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-200 hidden md:block" />
            <div className="space-y-8">
              {phases.map((p, i) => (
                <div key={i} className="relative flex gap-8">
                  <div className="hidden md:flex flex-col items-center shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg shadow-lg z-10">
                      {['I', 'II', 'III', 'IV'][i]}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:border-primary-200 transition-colors">
                    <h3 className="font-bold text-primary-700 mb-2">{p.phase}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">Advanced Technology</SectionLabel>
            <h2 className="text-3xl font-extrabold text-neutral-800">
              Our <span className="gradient-text">Medical Technology</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technology.map((t) => (
              <div key={t.name} className="flex items-start gap-4 bg-neutral-50 rounded-2xl p-5 border border-neutral-100 hover:border-primary-200 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <Award size={18} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800 text-sm mb-1">{t.name}</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-neutral-800">Accreditations & Certifications</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {accreditations.map((a) => (
              <div key={a.name} className="bg-white rounded-2xl px-8 py-5 shadow-sm border border-neutral-100 text-center min-w-40">
                <div className="text-2xl font-extrabold text-primary-700 mb-1">{a.name}</div>
                <div className="text-xs text-neutral-400">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  )
}

'use client'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { Award, Stethoscope, Activity, Heart } from 'lucide-react'
import { statsData } from '@/data/home'
import { useInView } from '@/hooks/useInView'
import type { StatItem } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  award: Award,
  stethoscope: Stethoscope,
  activity: Activity,
  heart: Heart,
}

function StatCard({ stat, triggerCount }: { stat: StatItem; triggerCount: boolean }) {
  const Icon = iconMap[stat.icon] ?? Award
  return (
    <div className="text-center group">
      <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ec1f27] transition-colors duration-300 border border-white/20">
        <Icon size={28} className="text-white" />
      </div>
      <div className="flex items-end justify-center gap-1 mb-1">
        <span className="text-4xl md:text-5xl font-black text-white counter-value tabular-nums">
          {triggerCount ? (
            <CountUp
              end={stat.value}
              duration={2.5}
              separator=","
              useEasing
            />
          ) : (
            '0'
          )}
        </span>
        <span className="text-2xl font-black text-[#ec1f27] mb-1">{stat.suffix}</span>
      </div>
      <p className="text-white/75 text-sm font-medium">{stat.label}</p>
    </div>
  )
}

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-600 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#ec1f27] text-sm font-bold uppercase tracking-widest mb-2">Our Achievement</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Trusted by Millions, Guided by Care
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} triggerCount={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

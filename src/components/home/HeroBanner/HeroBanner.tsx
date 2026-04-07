'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import type { BannerSlide } from '@/types'
import Button from '@/components/ui/Button'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface HeroBannerProps {
  slides: BannerSlide[]
}

function VideoSlide({ slide }: { slide: BannerSlide }) {
  return (
    <div className="relative w-full h-full">
      <video
        src={slide.src}
        poster={slide.poster}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}

function ImageSlide({ slide }: { slide: BannerSlide }) {
  return (
    <Image
      src={slide.src}
      alt={slide.title}
      fill
      priority
      className="object-cover"
      sizes="100vw"
    />
  )
}

export default function HeroBanner({ slides }: HeroBannerProps) {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <section className="relative h-[580px] md:h-[680px] lg:h-[760px] overflow-hidden hero-swiper">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        pagination={{ clickable: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onSwiper={(swiper) => {
          // Re-init navigation after refs are available
          setTimeout(() => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              if (swiper.navigation) {
                swiper.navigation.init()
                swiper.navigation.update()
              }
            }
          }, 100)
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Media */}
              {slide.type === 'video' ? (
                <VideoSlide slide={slide} />
              ) : (
                <ImageSlide slide={slide} />
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container-custom">
                  <div className="max-w-xl">
                    {/* Video badge */}
                    {slide.type === 'video' && (
                      <div className="inline-flex items-center gap-2 bg-accent-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                        <Play size={11} className="fill-white" />
                        Video Tour
                      </div>
                    )}

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-5 drop-shadow-md">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-lg">
                      {slide.subtitle}
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
                      {slide.ctaPrimary && (
                        <Button href={slide.ctaPrimary.href} variant="primary" size="lg">
                          {slide.ctaPrimary.label}
                        </Button>
                      )}
                      {slide.ctaSecondary && (
                        <Button href={slide.ctaSecondary.href} variant="outline-white" size="lg">
                          {slide.ctaSecondary.label}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Nav Buttons */}
      <button
        ref={prevRef}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-accent-500 hover:border-accent-500 flex items-center justify-center transition-all duration-300 hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-accent-500 hover:border-accent-500 flex items-center justify-center transition-all duration-300 hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Quick Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden lg:block">
        <div className="container-custom">
          <div className="bg-white/95 backdrop-blur-md rounded-t-2xl shadow-lg px-8 py-4 flex items-center justify-around divide-x divide-neutral-200">
            {[
              { icon: '⭐', label: '28+ Years of Excellence', value: 'Est. 1996' },
              { icon: '👨‍⚕️', label: 'Expert Doctors', value: '150+' },
              { icon: '🏥', label: 'Specialties', value: '22+' },
              { icon: '❤️', label: 'Happy Patients', value: '42 Lakh+' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 px-6">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <div className="font-extrabold text-primary-700 text-lg leading-none">{stat.value}</div>
                  <div className="text-xs text-neutral-500 mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

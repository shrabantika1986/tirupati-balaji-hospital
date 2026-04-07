'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Quote } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import StarRating from '@/components/ui/StarRating'
import { testimonialsData } from '@/data/home'

import 'swiper/css'
import 'swiper/css/pagination'

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionLabel align="center">Testimonials</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="text-neutral-500 mt-3 max-w-lg mx-auto text-sm">
            Every patient story inspires us to deliver better care. Here are some of the heartfelt
            experiences shared by families we have had the privilege to serve.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          loop
          className="!pb-12"
        >
          {testimonialsData.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-primary-200 hover:shadow-card transition-all h-full flex flex-col">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <Quote size={18} className="text-primary-500" />
                </div>

                <StarRating rating={t.rating} className="mb-3" />

                <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                  {t.avatar && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="40px" />
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-neutral-800 text-sm">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Google Rating CTA */}
        <div className="text-center mt-6">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors font-medium"
          >
            <span>⭐</span>
            4.8 / 5 on Google Reviews — View All Reviews →
          </a>
        </div>
      </div>
    </section>
  )
}

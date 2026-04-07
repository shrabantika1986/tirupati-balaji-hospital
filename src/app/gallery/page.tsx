'use client'
import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import PageHero from '@/components/layout/Breadcrumb/PageHero'
import { galleryItems, galleryCategories } from '@/data/gallery'
import type { GalleryCategory } from '@/types'
import { cn } from '@/lib/utils'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory)

  const activeSrc = galleryItems.find(g => g.id === lightbox)

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Take a look inside Tirupoti Balaji Hospital — our state-of-the-art infrastructure, operation theatres, ICU, and patient care areas."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-semibold border transition-all',
                  activeCategory === cat.value
                    ? 'bg-primary-600 text-white border-primary-600 shadow'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-primary-300 hover:text-primary-600'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item.id)}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-colors" />
                {item.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-medium">{item.caption}</p>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                    🔍
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeSrc && (
        <div
          className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeSrc.src}
              alt={activeSrc.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh]"
            />
            {activeSrc.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-4 text-center">
                {activeSrc.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

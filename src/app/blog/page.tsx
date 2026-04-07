import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Tag, ArrowRight } from 'lucide-react'
import PageHero from '@/components/layout/Breadcrumb/PageHero'
import { blogPosts, blogCategories } from '@/data/blog'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Health Blog',
  description: 'Health tips, medical insights, and expert advice from the specialist doctors at Tirupoti Balaji Hospital.',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHero
        title="Health Blog"
        subtitle="Expert medical insights, health tips, and the latest from our specialist doctors — keeping you informed and healthy."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          {/* Featured Post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all mb-10 border border-neutral-100 hover:border-primary-200"
          >
            <div className="relative h-64 lg:h-auto">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-900/20 lg:bg-none" />
              <span className="absolute top-4 left-4 bg-accent-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Featured
              </span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-xs font-bold text-secondary-600 uppercase tracking-widest mb-3">{featured.category}</span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-neutral-800 mb-4 leading-tight group-hover:text-primary-700 transition-colors">
                {featured.title}
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-6 text-sm">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
                <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime} min read</span>
                <span>{formatDate(featured.publishedAt)}</span>
                <span>By {featured.author}</span>
              </div>
              <span className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={15} />
              </span>
            </div>
          </Link>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-primary-600 text-white">All</span>
            {blogCategories.map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-neutral-200 text-neutral-600 cursor-pointer hover:border-primary-300 hover:text-primary-600 transition-all">
                {cat}
              </span>
            ))}
          </div>

          {/* Rest of Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-card hover:border-primary-200 transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-bold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-neutral-800 text-base mb-2 leading-snug group-hover:text-primary-700 transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center gap-3 text-xs text-neutral-400 mt-auto pt-4 border-t border-neutral-100">
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} min</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

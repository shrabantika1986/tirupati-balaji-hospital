import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, ArrowLeft, Tag } from 'lucide-react'
import PageHero from '@/components/layout/Breadcrumb/PageHero'
import { getBlogPostBySlug, blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }
  return { title: post.title, description: post.excerpt }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.category, href: '/blog' },
          { label: post.title },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Article */}
            <article className="lg:col-span-2">
              {/* Cover Image */}
              <div className="relative rounded-3xl overflow-hidden h-80 mb-8 shadow-card">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" />
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 mb-6 pb-6 border-b border-neutral-100">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(post.publishedAt)}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime} min read</span>
                <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                {post.authorImage && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image src={post.authorImage} alt={post.author} fill className="object-cover" sizes="48px" />
                  </div>
                )}
                <div>
                  <p className="font-bold text-neutral-800">{post.author}</p>
                  <p className="text-sm text-neutral-400">{post.category} Specialist, Tirupoti Balaji Hospital</p>
                </div>
              </div>

              {/* Content placeholder (API will supply real content) */}
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed font-medium mb-6">{post.excerpt}</p>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  This article provides comprehensive insights on {post.title.toLowerCase()}, written by our expert {post.author} at Tirupoti Balaji Hospital.
                  When the API is connected, the full article content will be rendered here from the CMS.
                </p>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Our specialists at Tirupoti Balaji Hospital are committed to providing evidence-based, patient-friendly health information that helps you make informed decisions about your health and wellbeing.
                </p>
                <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 my-6">
                  <p className="text-primary-700 font-semibold text-sm">
                    📌 <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Please consult one of our specialist doctors for personalised medical guidance.
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-neutral-100">
                <Tag size={14} className="text-neutral-400 mt-1" />
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-neutral-100 text-neutral-600 text-xs font-medium px-3 py-1.5 rounded-full border border-neutral-200">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 mt-8 text-primary-600 font-semibold text-sm hover:gap-3 transition-all"
              >
                <ArrowLeft size={15} /> Back to Blog
              </Link>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Related Posts */}
              {related.length > 0 && (
                <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
                  <h3 className="font-bold text-neutral-800 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-3">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                          <Image src={p.coverImage} alt={p.title} fill className="object-cover" sizes="64px" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-neutral-800 group-hover:text-primary-600 transition-colors leading-snug mb-1">
                            {p.title}
                          </p>
                          <p className="text-xs text-neutral-400">{p.readTime} min read</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Book CTA */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Have health concerns?</h3>
                <p className="text-white/80 text-sm mb-4">Consult one of our expert doctors today.</p>
                <Link
                  href="/contact"
                  className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-accent-50 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

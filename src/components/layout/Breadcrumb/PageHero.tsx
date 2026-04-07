import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
}

export default function PageHero({ title, subtitle, breadcrumbs = [] }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container-custom relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-sm text-white/70 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home size={14} />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-white/40" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>

      {/* Decorative circles */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute right-32 bottom-0 w-48 h-48 rounded-full bg-secondary/20 translate-y-1/2 pointer-events-none" />
    </section>
  )
}

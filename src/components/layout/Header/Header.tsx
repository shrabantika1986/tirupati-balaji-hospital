'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Phone, ChevronDown, Menu, X, Calendar, Search
} from 'lucide-react'
import { navigationData, topBarLinks } from '@/data/navigation'
import { useScrollY } from '@/hooks/useInView'
import { useUIStore, useAppointmentStore } from '@/store/uiStore'
import { cn } from '@/lib/utils'

export default function Header() {
  const scrollY = useScrollY()
  const { mobileMenuOpen, activeDropdown, setMobileMenuOpen, setActiveDropdown } = useUIStore()
  const { openModal } = useAppointmentStore()
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const isScrolled = scrollY > 60

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [setActiveDropdown])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setMobileMenuOpen])

  return (
    <>
      {/* Top Bar – Mobile */}
      <div className="bg-primary-800 text-white py-1.5 hidden md:block lg:hidden">
        <div className="container-custom flex items-center justify-center gap-4 overflow-x-auto scrollbar-hide">
          {topBarLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-white/80 hover:text-accent-300 transition-colors whitespace-nowrap text-[11px]"
            >
              <Phone size={10} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Top Bar – Desktop */}
      <div className="bg-primary-800 text-white text-sm py-2 hidden lg:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-6">
            {topBarLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 text-white/80 hover:text-accent-300 transition-colors"
              >
                <Phone size={13} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-white/70 text-xs">
            <span>Emergency: Available 24×7</span>
            <span className="w-px h-4 bg-white/20" />
            <a href="mailto:info@tirupoticarebalaji.com" className="hover:text-white transition-colors">
              info@tirupoticarebalaji.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        ref={headerRef}
        className={cn(
          'sticky top-0 z-[100] transition-all duration-300',
          isScrolled
            ? 'bg-white shadow-md py-2'
            : 'bg-white/95 backdrop-blur-md shadow-sm py-3'
        )}
      >
        <div className="container-custom flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-md shrink-0">
              <span className="text-white font-black text-xl leading-none">TB</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-extrabold text-primary-700 text-lg leading-none">Tirupoti Balaji</div>
              <div className="text-xs text-neutral-500 font-medium tracking-wide">Multi-Specialty Hospital</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navigationData.map((item) => (
              <div key={item.label} className="relative group">
                {item.children || item.megaMenu ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded-lg font-semibold text-sm transition-colors',
                      activeDropdown === item.label
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={cn('transition-transform', activeDropdown === item.label && 'rotate-180')}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-lg font-semibold text-sm text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && !item.megaMenu && (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={cn(
                      'absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-card-hover border border-neutral-100 py-2 min-w-56 z-50 transition-all duration-200',
                      activeDropdown === item.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        <div className="font-medium">{child.label}</div>
                        {child.description && (
                          <div className="text-xs text-neutral-400 mt-0.5">{child.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Mega Menu – Departments */}
                {item.megaMenu && item.children && (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-2xl shadow-card-hover border border-neutral-100 z-50 w-[720px] p-6 transition-all duration-200',
                      activeDropdown === item.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    )}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary-500">All Departments</p>
                      <Link
                        href="/departments"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs text-primary-600 hover:text-primary-700 font-semibold"
                      >
                        View All →
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors group/item"
                        >
                          <span className="text-base w-6 text-center">{child.icon}</span>
                          <span className="font-medium">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              className="p-2 rounded-lg text-neutral-500 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => openModal()}
              className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-button hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              <Calendar size={15} />
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-[99] transition-all duration-300',
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-neutral-900/50 transition-opacity',
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl flex flex-col transition-transform duration-300',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-neutral-100 bg-gradient-to-r from-primary-600 to-secondary-500">
            <span className="font-bold text-white text-lg">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex-1 overflow-y-auto py-4">
            {navigationData.map((item) => (
              <div key={item.label} className="border-b border-neutral-50">
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="flex items-center justify-between w-full px-5 py-3.5 text-neutral-800 font-semibold hover:bg-primary-50 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={cn('transition-transform text-neutral-400', mobileExpanded === item.label && 'rotate-180')}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="bg-neutral-50 px-4 pb-2">
                        {item.children.slice(0, 10).map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 py-2 px-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                          >
                            {child.icon && <span>{child.icon}</span>}
                            {child.label}
                          </Link>
                        ))}
                        {item.children.length > 10 && (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-2 text-sm text-primary-600 font-semibold"
                          >
                            View All {item.label} →
                          </Link>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-5 py-3.5 text-neutral-800 font-semibold hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Book Appointment CTA */}
          <div className="p-5 border-t border-neutral-100 space-y-3">
            <button
              onClick={() => { openModal(); setMobileMenuOpen(false) }}
              className="w-full flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 rounded-xl transition-colors"
            >
              <Calendar size={18} />
              Book Appointment
            </button>
            <a
              href="tel:08662500108"
              className="w-full flex items-center justify-center gap-2 border-2 border-primary-200 text-primary-600 font-semibold py-3 rounded-xl hover:bg-primary-50 transition-colors text-sm"
            >
              <Phone size={16} />
              Emergency: 0866-250-0108
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

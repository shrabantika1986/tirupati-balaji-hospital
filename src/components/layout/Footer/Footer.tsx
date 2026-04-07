import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Linkedin, Heart } from 'lucide-react'
import { navigationData } from '@/data/navigation'
import { contactInfo } from '@/data/contact'
import { departmentsData } from '@/data/departments'

const socialIconMap: Record<string, React.ElementType> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  linkedin: Linkedin,
}

export default function Footer() {
  const quickLinks = navigationData.filter(n => !n.children).concat([
    { label: 'Careers', href: '/careers' },
    { label: 'Patient Portal', href: '/patient-portal' },
  ])

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center shadow-md shrink-0">
                <span className="text-white font-black text-xl">TB</span>
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-white text-lg leading-none">Tirupoti Balaji</div>
                <div className="text-xs text-white/50 font-medium tracking-wide mt-0.5">Multi-Specialty Hospital</div>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Tirupoti Balaji Multi-Specialty Hospital is dedicated to delivering world-class, compassionate healthcare to the people of Andhra Pradesh since 1996.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {contactInfo.socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon] ?? Facebook
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-accent-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-accent-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">Departments</h3>
            <ul className="space-y-2.5">
              {departmentsData.slice(0, 10).map((dept) => (
                <li key={dept.slug}>
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="text-sm text-neutral-400 hover:text-accent-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-accent-400 transition-colors" />
                    {dept.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/departments"
                  className="text-sm text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                >
                  View All Departments →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-400 mt-0.5 shrink-0" />
                <p className="text-sm text-neutral-400 leading-relaxed">{contactInfo.address}</p>
              </div>
              {contactInfo.phone.map((p) => (
                <div key={p.label} className="flex items-center gap-3">
                  <Phone size={15} className="text-accent-400 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 leading-none mb-0.5">{p.label}</p>
                    <a href={`tel:${p.value.replace(/[\s-]/g, '')}`} className="text-sm text-neutral-300 hover:text-white transition-colors font-medium">
                      {p.value}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-accent-400 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Hours quick view */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Timings</p>
              {contactInfo.hours.map((h) => (
                <div key={h.label} className="flex justify-between text-xs text-neutral-400 py-0.5">
                  <span>{h.label}</span>
                  <span className="text-white/70 font-medium">{h.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} Tirupoti Balaji Hospital. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart size={13} className="text-red-500 fill-red-500" /> for better health
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

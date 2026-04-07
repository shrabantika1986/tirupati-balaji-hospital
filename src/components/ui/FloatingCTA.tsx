'use client'
import { useState } from 'react'
import { Phone, X, MessageCircle } from 'lucide-react'
import { topBarLinks } from '@/data/navigation'

export default function FloatingCTA() {
  const [showNumbers, setShowNumbers] = useState(false)

  return (
    <div className="fixed right-4 bottom-6 z-[90] flex flex-col items-end gap-3">
      {/* Emergency Numbers Popover */}
      {showNumbers && (
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-4 mb-1 w-64 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-600">Emergency Numbers</span>
            <button
              onClick={() => setShowNumbers(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors"
            >
              <X size={14} />
            </button>
          </div>
          <div className="space-y-2">
            {topBarLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                <Phone size={14} className="text-primary-500 shrink-0" />
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-neutral-100 text-center">
            <span className="text-[11px] text-neutral-400 font-medium">Available 24×7</span>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918662500108"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#1fb855] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="fill-white" />
      </a>

      {/* Call Button */}
      <button
        onClick={() => setShowNumbers(!showNumbers)}
        className="w-14 h-14 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        aria-label="Call us"
      >
        <Phone size={24} />
      </button>
    </div>
  )
}

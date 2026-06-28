'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { faqData } from '@/data/home'
import { cn } from '@/lib/utils'

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className={cn(
      'border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-200',
      isOpen && 'border-primary-200 shadow-sm'
    )}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-primary-50 transition-colors"
      >
        <span className={cn('font-semibold text-base', isOpen ? 'text-primary-700' : 'text-neutral-800')}>
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn('shrink-0 text-neutral-400 transition-transform duration-300', isOpen && 'rotate-180 text-primary-500')}
        />
      </button>
      <div className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-96' : 'max-h-0'
      )}>
        <div className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed bg-white border-t border-neutral-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id)

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Text */}
          <div className="lg:col-span-2">
            <SectionLabel>FAQs</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800 mb-4 leading-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Have questions about our services, doctors, or facilities? Find quick answers to the
              most common queries below.
            </p>
            <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Still have questions?</p>
              <p className="text-white/80 text-sm mb-4">
                Our patient care team is available 24×7 to assist you.
              </p>
              <a
                href="tel:7596896054"
                className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-full hover:bg-accent-50 transition-colors"
              >
                📞 Call 7596896054
              </a>
            </div>
          </div>

          {/* FAQ List */}
          <div className="lg:col-span-3 space-y-3">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

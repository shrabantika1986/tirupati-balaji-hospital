'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/layout/Breadcrumb/PageHero'
import { contactInfo } from '@/data/contact'
import { cn } from '@/lib/utils'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', department: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connect to API
    setSubmitted(true)
    setForm({ name: '', phone: '', email: '', department: '', message: '' })
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to us for appointments, enquiries, or emergencies. We are here to help you 24×7."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Panel */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2">Our Address</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Phones */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-secondary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-800 mb-3">Phone Numbers</h3>
                    {contactInfo.phone.map((p) => (
                      <div key={p.label} className="flex justify-between items-center py-2 border-b border-neutral-50 last:border-0">
                        <span className="text-xs text-neutral-400">{p.label}</span>
                        <a href={`tel:${p.value.replace(/[\s-]/g, '')}`} className="text-sm font-bold text-primary-700 hover:text-accent-600 transition-colors">
                          {p.value}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-1">Email Us</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-sm text-primary-600 hover:text-primary-700 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-800 mb-3">Working Hours</h3>
                    {contactInfo.hours.map((h) => (
                      <div key={h.label} className="flex justify-between items-center py-1.5 border-b border-neutral-50 last:border-0">
                        <span className="text-xs text-neutral-500">{h.label}</span>
                        <span className="text-xs font-semibold text-neutral-700">{h.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-5 text-white text-center">
                <div className="text-2xl mb-2">🚑</div>
                <p className="font-bold text-lg mb-1">Emergency Helpline</p>
                <a href={`tel:${contactInfo.emergencyPhone.replace(/[\s-]/g, '')}`} className="text-2xl font-black">
                  {contactInfo.emergencyPhone}
                </a>
                <p className="text-white/80 text-xs mt-1">Available 24 × 7</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100">
                <h2 className="text-2xl font-extrabold text-neutral-800 mb-2">Send Us a Message</h2>
                <p className="text-neutral-500 text-sm mb-8">Fill in the form and our patient care team will get back to you within 2 hours.</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-extrabold text-neutral-800 mb-2">Message Sent!</h3>
                    <p className="text-neutral-500">Our team will reach out to you shortly.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-primary-600 font-semibold text-sm underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Full Name *</label>
                        <input
                          name="name" required value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Phone Number *</label>
                        <input
                          name="phone" required value={form.phone} onChange={handleChange}
                          placeholder="Your mobile number"
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Email Address</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Department / Specialty</label>
                      <select
                        name="department" value={form.department} onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition bg-white"
                      >
                        <option value="">Select department (optional)</option>
                        {['Cardiology','Neurology','Orthopaedics','Oncology','Gastroenterology','Gynecology & Obstetrics','Paediatrics','Urology','General Medicine','Other'].map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Your Message *</label>
                      <textarea
                        name="message" required value={form.message} onChange={handleChange}
                        rows={5} placeholder="Please describe your query or concern…"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors text-base shadow-sm hover:shadow-md"
                    >
                      Send Message
                    </button>
                    <p className="text-center text-xs text-neutral-400">
                      Your information is kept confidential and secure.
                    </p>
                  </form>
                )}
              </div>

              {/* Map placeholder */}
              <div className="mt-6 bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm h-64 flex items-center justify-center">
                <div className="text-center text-neutral-400">
                  <div className="text-5xl mb-3">📍</div>
                  <p className="font-semibold text-neutral-600">Interactive Map</p>
                  <p className="text-sm">NH-16 Bypass Road, Vijayawada – 520 008</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-primary-600 font-semibold text-sm underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'
import { useEffect, useState } from 'react'
import { X, Calendar, User, Phone, Mail, MessageSquare } from 'lucide-react'
import { useAppointmentStore } from '@/store/uiStore'
import { departmentsData } from '@/data/departments'
import { doctorsData } from '@/data/doctors'
import { cn } from '@/lib/utils'

export default function AppointmentModal() {
  const { isOpen, closeModal, prefillDoctor, prefillDepartment } = useAppointmentStore()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    department: prefillDepartment || '',
    doctor: prefillDoctor || '',
    date: '', time: '', message: '',
  })

  useEffect(() => {
    setForm(f => ({
      ...f,
      department: prefillDepartment || '',
      doctor: prefillDoctor || '',
    }))
  }, [prefillDepartment, prefillDoctor])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const filteredDoctors = form.department
    ? doctorsData.filter(d => d.departmentSlug === form.department)
    : doctorsData

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connect to API
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); closeModal() }, 2500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm" onClick={closeModal} />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-500 p-6 text-white">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-3 mb-1">
            <Calendar size={22} className="text-accent-300" />
            <h2 className="text-xl font-bold">Book an Appointment</h2>
          </div>
          <p className="text-white/80 text-sm">Fill in the details and we will confirm within 2 hours.</p>
        </div>

        {submitted ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-2">Appointment Requested!</h3>
            <p className="text-neutral-500 text-sm">Our team will call you shortly to confirm.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">Full Name *</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    name="name" required value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="w-full pl-9 pr-3 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">Phone *</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    name="phone" required value={form.phone} onChange={handleChange}
                    placeholder="10-digit mobile"
                    className="w-full pl-9 pr-3 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-9 pr-3 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                />
              </div>
            </div>

            {/* Department & Doctor */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">Department</label>
                <select
                  name="department" value={form.department} onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition bg-white"
                >
                  <option value="">All Departments</option>
                  {departmentsData.map(d => (
                    <option key={d.slug} value={d.slug}>{d.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">Doctor</label>
                <select
                  name="doctor" value={form.doctor} onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition bg-white"
                >
                  <option value="">Any Doctor</option>
                  {filteredDoctors.map(d => (
                    <option key={d.id} value={d.slug}>{d.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">Preferred Date *</label>
                <input
                  name="date" required type="date" value={form.date} onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">Preferred Time</label>
                <select
                  name="time" value={form.time} onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition bg-white"
                >
                  <option value="">Any Time</option>
                  <option value="morning">Morning (8 AM – 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                  <option value="evening">Evening (4 PM – 8 PM)</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Brief Symptoms / Notes</label>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-3 top-3 text-neutral-400" />
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  rows={3} placeholder="Describe your concern briefly…"
                  className="w-full pl-9 pr-3 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className={cn(
                'w-full py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl',
                'transition-all duration-300 hover:shadow-button text-base'
              )}
            >
              Request Appointment
            </button>
            <p className="text-center text-xs text-neutral-400">
              We respect your privacy. Your information is safe with us.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

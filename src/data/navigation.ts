import type { NavItem } from '@/types'

export const navigationData: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Find Our Doctors',
    href: '/find-a-doctor',
  },
  {
    label: 'Our Departments',
    href: '/departments',
    megaMenu: true,
    children: [
      { label: 'Cardiology', href: '/departments/cardiology', icon: '🫀' },
      { label: 'Neurology', href: '/departments/neurology', icon: '🧠' },
      { label: 'Neurosurgery', href: '/departments/neurosurgery', icon: '⚕️' },
      { label: 'Orthopaedics', href: '/departments/orthopaedics', icon: '🦴' },
      { label: 'Oncology', href: '/departments/oncology', icon: '🔬' },
      { label: 'Gastroenterology', href: '/departments/gastroenterology', icon: '🏥' },
      { label: 'Gynecology & Obstetrics', href: '/departments/gynecology-obstetrics', icon: '👶' },
      { label: 'Paediatrics', href: '/departments/paediatrics', icon: '🍼' },
      { label: 'Urology', href: '/departments/urology', icon: '⚕️' },
      { label: 'Nephrology', href: '/departments/nephrology', icon: '🏥' },
      { label: 'Ophthalmology', href: '/departments/ophthalmology', icon: '👁️' },
      { label: 'ENT', href: '/departments/ent', icon: '👂' },
      { label: 'Dermatology', href: '/departments/dermatology', icon: '🩺' },
      { label: 'Endocrinology', href: '/departments/endocrinology', icon: '⚕️' },
      { label: 'General Surgery', href: '/departments/general-surgery', icon: '🏥' },
      { label: 'General Medicine', href: '/departments/general-medicine', icon: '💊' },
      { label: 'Anaesthesiology', href: '/departments/anaesthesiology', icon: '💉' },
      { label: 'Physiotherapy', href: '/departments/physiotherapy', icon: '🤸' },
      { label: 'Psychiatry', href: '/departments/psychiatry', icon: '🧬' },
      { label: 'Dental', href: '/departments/dental', icon: '🦷' },
      { label: 'Haematology', href: '/departments/haematology', icon: '🩸' },
      { label: 'Plastic Surgery', href: '/departments/plastic-surgery', icon: '⚕️' },
    ],
  },
  {
    label: 'Services',
    href: '/services/diagnostics',
    children: [
      {
        label: 'Diagnostic Services',
        href: '/services/diagnostics',
        description: 'MRI, CT Scan, X-Ray, Pathology & more',
      },
      {
        label: 'Health Packages',
        href: '/services/health-packages',
        description: 'Preventive health check-up packages',
      },
    ],
  },
  {
    label: 'Gallery',
    href: '/gallery',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const topBarLinks = [
  { label: 'Emergency: 7596896054', href: 'tel:7596896054', icon: 'phone' },
  { label: 'OPD: 6290345648', href: 'tel:6290345648', icon: 'phone' },
  { label: 'Diagnostics: 9038704929', href: 'tel:9038704929', icon: 'phone' },
]

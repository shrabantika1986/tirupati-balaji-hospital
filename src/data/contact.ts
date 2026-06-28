import type { ContactInfo } from '@/types'

export const contactInfo: ContactInfo = {
  address: 'Tirupati Balaji Health Care Group, 34/1A, B.T. Road, Kolkata - 700002',
  phone: [
    { label: 'Hospital (Main)', value: '7596896054' },
    { label: 'OPD Appointments', value: '6290345648' },
    { label: 'Diagnostic Centre', value: '9038704929' },
  ],
  email: 'tirupatibalaji180524@gmail.com',
  emergencyPhone: '0866-250-0108',
  hours: [
    { label: 'Emergency & ICU', value: '24 × 7 (Always Open)' },
    { label: 'OPD (Specialist)', value: 'Mon – Sun: 8:00 AM – 8:00 PM' },
    { label: 'Diagnostic Lab', value: '24 × 7 (Always Open)' },
    { label: 'Pharmacy', value: '24 × 7 (Always Open)' },
  ],
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2!2d80.6480!3d16.5063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlqYXlhd2FkYQ!5e0!3m2!1sen!2sin!4v1234567890',
  socialLinks: [
    { platform: 'Facebook', href: 'https://facebook.com/tirupotibalajihospital', icon: 'facebook' },
    { platform: 'Instagram', href: 'https://instagram.com/tirupotibalajihospital', icon: 'instagram' },
    { platform: 'YouTube', href: 'https://youtube.com/@tirupotibalajihospital', icon: 'youtube' },
    { platform: 'Twitter', href: 'https://twitter.com/tbhospital', icon: 'twitter' },
    { platform: 'LinkedIn', href: 'https://linkedin.com/company/tirupotibalajihospital', icon: 'linkedin' },
  ],
}

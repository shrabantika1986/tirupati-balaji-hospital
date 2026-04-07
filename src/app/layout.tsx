import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import AppointmentModal from '@/components/ui/AppointmentModal'
import FloatingCTA from '@/components/ui/FloatingCTA'

export const metadata: Metadata = {
  title: {
    default: 'Tirupoti Balaji Hospital | Multi-Specialty Hospital in Vijayawada',
    template: '%s | Tirupoti Balaji Hospital',
  },
  description:
    'Tirupoti Balaji Hospital is a premier multi-specialty hospital in Vijayawada, Andhra Pradesh offering advanced cardiology, neurology, oncology, orthopaedics, and 22+ specialties with 150+ expert doctors and 28 years of excellence.',
  keywords: [
    'multi specialty hospital Vijayawada',
    'best hospital Andhra Pradesh',
    'Tirupoti Balaji Hospital',
    'cardiology hospital Vijayawada',
    'cancer treatment Vijayawada',
    'orthopaedics hospital AP',
    'neurology Vijayawada',
  ],
  authors: [{ name: 'Tirupoti Balaji Hospital' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Tirupoti Balaji Hospital',
    title: 'Tirupoti Balaji Hospital | Multi-Specialty Hospital in Vijayawada',
    description:
      'Advanced healthcare with 150+ specialist doctors across 22 departments. Serving Andhra Pradesh since 1996.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Tirupoti Balaji Hospital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tirupoti Balaji Hospital',
    description: 'Premier multi-specialty healthcare in Vijayawada, Andhra Pradesh',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AppointmentModal />
        <FloatingCTA />
      </body>
    </html>
  )
}

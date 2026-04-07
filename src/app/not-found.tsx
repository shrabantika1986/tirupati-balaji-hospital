import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4 py-20">
        <div className="text-8xl font-black text-primary-100 mb-4">404</div>
        <div className="text-5xl mb-6">🏥</div>
        <h1 className="text-3xl font-extrabold text-neutral-800 mb-3">Page Not Found</h1>
        <p className="text-neutral-500 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to good health.
        </p>
        <div className="flex items-center gap-4 justify-center flex-wrap">
          <Button href="/" variant="primary">Go to Home</Button>
          <Button href="/contact" variant="secondary">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}

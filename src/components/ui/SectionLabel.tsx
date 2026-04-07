import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  align?: 'left' | 'center'
}

export default function SectionLabel({ children, className, align = 'left' }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'eyebrow',
        align === 'center' && 'justify-center',
        className
      )}
    >
      {children}
    </div>
  )
}

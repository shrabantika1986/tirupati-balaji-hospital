import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
  max?: number
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function StarRating({ rating, max = 5, className, size = 'md' }: StarRatingProps) {
  const sizeMap = { sm: 'text-sm', md: 'text-base', lg: 'text-xl' }
  return (
    <div className={cn('flex items-center gap-0.5', sizeMap[size], className)}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-amber-400' : 'text-neutral-200'}>
          ★
        </span>
      ))}
    </div>
  )
}

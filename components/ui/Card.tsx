'use client'

import { forwardRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/cn'
import { hoverLift } from '@/lib/animations'

/**
 * Card Component
 * 
 * Versatile card component with multiple styles:
 * - Standard card with optional hover effects
 * - Image overlay card (DesignSpells style)
 * 
 * @example
 * ```tsx
 * <Card hoverable>
 *   <CardBody>Content here</CardBody>
 * </Card>
 * 
 * <CardOverlay
 *   image="/image.jpg"
 *   title="Card Title"
 *   description="Description"
 *   href="/link"
 * />
 * ```
 */

// ==========================================================================
// STANDARD CARD
// ==========================================================================

export interface CardProps extends HTMLMotionProps<'div'> {
  hoverable?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, padding = 'none', children, ...props }, ref) => {
    const paddingClasses = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    return (
      <motion.div
        ref={ref}
        whileHover={hoverable ? hoverLift : undefined}
        className={cn(
          'bg-[var(--bg)] rounded-[var(--radius-xl)]',
          'border border-[var(--border-light)]',
          'overflow-hidden',
          'transition-all duration-300',
          hoverable && 'cursor-pointer',
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

// ==========================================================================
// CARD BODY
// ==========================================================================

export interface CardBodyProps {
  className?: string
  children: React.ReactNode
}

export function CardBody({ className, children }: CardBodyProps) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  )
}

// ==========================================================================
// CARD HEADER
// ==========================================================================

export interface CardHeaderProps {
  className?: string
  title: string
  subtitle?: string
  action?: React.ReactNode
}

export function CardHeader({ className, title, subtitle, action }: CardHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between p-6 pb-0', className)}>
      <div>
        <h3 className="text-lg font-semibold text-[var(--text)]">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-sm text-[var(--text-muted)]">{subtitle}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}

// ==========================================================================
// CARD FOOTER
// ==========================================================================

export interface CardFooterProps {
  className?: string
  children: React.ReactNode
}

export function CardFooter({ className, children }: CardFooterProps) {
  return (
    <div className={cn('px-6 py-4 bg-[var(--bg-alt)] border-t border-[var(--border-light)]', className)}>
      {children}
    </div>
  )
}

// ==========================================================================
// IMAGE OVERLAY CARD (DesignSpells Style)
// ==========================================================================

export interface CardOverlayProps {
  className?: string
  image: string
  title: string
  description?: string
  category?: string
  href?: string
  index?: number
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide'
}

const aspectRatios = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/9]',
}

export function CardOverlay({
  className,
  image,
  title,
  description,
  category,
  href,
  index,
  aspectRatio = 'video',
}: CardOverlayProps) {
  const content = (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-[var(--radius-xl)] group',
        aspectRatios[aspectRatio],
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Index Badge (upper left) */}
      {typeof index === 'number' && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-sm font-medium text-[var(--text)]">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      )}

      {/* Category Badge (upper right) */}
      {category && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-[var(--text)]">
            {category}
          </span>
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-white/80 line-clamp-2">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return content
}

export default Card

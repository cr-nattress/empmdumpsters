import { cn } from '@/lib/cn'

/**
 * Badge Component
 * 
 * Small label for status, categories, or tags.
 * 
 * @example
 * ```tsx
 * <Badge>New</Badge>
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning" size="lg">Pending</Badge>
 * ```
 */

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

const variants = {
  default: 'bg-[var(--bg-muted)] text-[var(--text-secondary)]',
  primary: 'bg-[var(--primary-light)] text-[var(--primary)]',
  secondary: 'bg-[var(--accent-light)] text-[var(--accent)]',
  success: 'bg-[var(--success-light)] text-[var(--success)]',
  warning: 'bg-[var(--warning-light)] text-[var(--warning)]',
  error: 'bg-[var(--error-light)] text-[var(--error)]',
  outline: 'bg-transparent border border-[var(--border)] text-[var(--text-secondary)]',
}

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
}

export function Badge({
  variant = 'default',
  size = 'md',
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center',
        'font-medium rounded-full',
        'whitespace-nowrap',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge

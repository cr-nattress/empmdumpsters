'use client'

import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/cn'
import { tapScale, hoverScale } from '@/lib/animations'

/**
 * Button Component
 * 
 * A versatile button with multiple variants, sizes, and built-in animations.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">Get Started</Button>
 * <Button variant="outline" asChild><Link href="/about">Learn More</Link></Button>
 * ```
 */

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  children: React.ReactNode
}

const variants = {
  primary: 'bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-sm hover:shadow-[var(--shadow-primary)]',
  secondary: 'bg-[var(--bg-muted)] text-[var(--text)] hover:bg-[var(--border)]',
  outline: 'border border-[var(--border-dark)] bg-transparent text-[var(--text)] hover:bg-[var(--bg-muted)]',
  ghost: 'bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-muted)] hover:text-[var(--text)]',
  danger: 'bg-[var(--error)] text-white hover:bg-red-600',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={disabled || isLoading ? undefined : hoverScale}
        whileTap={disabled || isLoading ? undefined : tapScale}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center',
          'font-medium rounded-[var(--radius-lg)]',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          // Variant styles
          variants[variant],
          // Size styles
          sizes[size],
          // Full width
          fullWidth && 'w-full',
          // Loading state
          isLoading && 'cursor-wait',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner className="mr-2" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

// Loading spinner component
function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-4 w-4 animate-spin', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export default Button

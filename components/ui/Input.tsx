'use client'

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

/**
 * Input Components
 * 
 * Form input elements with consistent styling.
 * 
 * @example
 * ```tsx
 * <Input label="Email" type="email" placeholder="you@example.com" />
 * <Textarea label="Message" rows={4} />
 * ```
 */

// ==========================================================================
// INPUT
// ==========================================================================

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || props.name

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[var(--text)] mb-1.5"
          >
            {label}
            {props.required && <span className="text-[var(--error)] ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3',
            'text-base text-[var(--text)]',
            'bg-[var(--bg)] border rounded-[var(--radius-lg)]',
            'transition-all duration-200',
            'placeholder:text-[var(--text-light)]',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            error
              ? 'border-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error-light)]'
              : 'border-[var(--border)] hover:border-[var(--border-dark)] focus:border-[var(--primary)] focus:ring-[var(--primary-light)]',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[var(--bg-muted)]',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-[var(--error)]">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-sm text-[var(--text-muted)]">
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

// ==========================================================================
// TEXTAREA
// ==========================================================================

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || props.name

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[var(--text)] mb-1.5"
          >
            {label}
            {props.required && <span className="text-[var(--error)] ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3',
            'text-base text-[var(--text)]',
            'bg-[var(--bg)] border rounded-[var(--radius-lg)]',
            'transition-all duration-200',
            'placeholder:text-[var(--text-light)]',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'resize-y min-h-[120px]',
            error
              ? 'border-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error-light)]'
              : 'border-[var(--border)] hover:border-[var(--border-dark)] focus:border-[var(--primary)] focus:ring-[var(--primary-light)]',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[var(--bg-muted)]',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-[var(--error)]">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-sm text-[var(--text-muted)]">
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Input

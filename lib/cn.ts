/**
 * Utility for merging Tailwind CSS classes
 * 
 * Combines clsx for conditional classes with tailwind-merge
 * to properly handle Tailwind class conflicts.
 * 
 * Usage:
 * ```tsx
 * import { cn } from '@/lib/cn'
 * 
 * <div className={cn(
 *   'base-class',
 *   condition && 'conditional-class',
 *   className // prop
 * )}>
 * ```
 */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Shared TypeScript Types
 * 
 * Common interfaces and types used across the application.
 */

// ==========================================================================
// COMPONENT PROPS
// ==========================================================================

export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export interface WithId {
  id: string
}

// ==========================================================================
// NAVIGATION
// ==========================================================================

export interface NavItem {
  title: string
  href: string
  description?: string
  disabled?: boolean
  external?: boolean
  icon?: React.ComponentType<{ className?: string }>
  children?: NavItem[]
}

export interface NavSection {
  title: string
  items: NavItem[]
}

// ==========================================================================
// CONTENT
// ==========================================================================

export interface Feature {
  id: string
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
  image?: string
  link?: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: string
  rating?: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface Stat {
  id: string
  value: string
  label: string
  description?: string
}

export interface PricingTier {
  id: string
  name: string
  description: string
  price: string | number
  period?: string
  features: string[]
  cta: string
  href: string
  highlighted?: boolean
}

// ==========================================================================
// MEDIA
// ==========================================================================

export interface ImageData {
  src: string
  alt: string
  width?: number
  height?: number
  blurDataURL?: string
}

export interface VideoData {
  src: string
  poster?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
}

// ==========================================================================
// FORMS
// ==========================================================================

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: {
    min?: number
    max?: number
    pattern?: string
    message?: string
  }
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  consent?: boolean
}

// ==========================================================================
// API RESPONSES
// ==========================================================================

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  errors?: Record<string, string[]>
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// ==========================================================================
// UTILITY TYPES
// ==========================================================================

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

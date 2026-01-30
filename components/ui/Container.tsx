import { cn } from '@/lib/cn'

/**
 * Container Component
 * 
 * Responsive container with consistent max-width and padding.
 * 
 * @example
 * ```tsx
 * <Container>Content</Container>
 * <Container size="narrow">Narrow content</Container>
 * <Container size="wide" className="py-20">Wide with custom padding</Container>
 * ```
 */

export interface ContainerProps {
  className?: string
  size?: 'default' | 'narrow' | 'wide' | 'full'
  as?: 'div' | 'section' | 'article' | 'main'
  children: React.ReactNode
}

const sizes = {
  default: 'max-w-[1280px]',
  narrow: 'max-w-[768px]',
  wide: 'max-w-[1536px]',
  full: 'max-w-none',
}

export function Container({
  className,
  size = 'default',
  as: Component = 'div',
  children,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full',
        'px-4 sm:px-6 lg:px-8 xl:px-12',
        sizes[size],
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Container

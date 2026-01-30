'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'
import { staggerContainer, staggerItem, fadeUp, scrollViewport } from '@/lib/animations'
import type { Feature } from '@/lib/types'

/**
 * Features Section
 * 
 * Display features/benefits in a grid layout with icons.
 * 
 * @example
 * ```tsx
 * <Features
 *   title="Why Choose Us"
 *   subtitle="Everything you need to succeed"
 *   features={features}
 * />
 * ```
 */

export interface FeaturesProps {
  title: string
  subtitle?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  variant?: 'cards' | 'icons' | 'minimal'
  className?: string
}

export function Features({
  title,
  subtitle,
  features,
  columns = 3,
  variant = 'cards',
  className,
}: FeaturesProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <section className={cn('section bg-[var(--bg-alt)]', className)}>
      <Container>
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text)]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className={cn('grid grid-cols-1 gap-6 lg:gap-8', gridCols[columns])}
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={staggerItem}>
              {variant === 'cards' && <FeatureCard feature={feature} />}
              {variant === 'icons' && <FeatureIcon feature={feature} />}
              {variant === 'minimal' && <FeatureMinimal feature={feature} />}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

// Card variant
function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon

  return (
    <div className="p-6 lg:p-8 bg-[var(--bg)] rounded-[var(--radius-xl)] border border-[var(--border-light)] hover:border-[var(--border)] hover:shadow-[var(--shadow-md)] transition-all duration-300">
      {Icon && (
        <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center mb-4">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
        {feature.title}
      </h3>
      <p className="text-[var(--text-secondary)]">{feature.description}</p>
    </div>
  )
}

// Icon variant (centered)
function FeatureIcon({ feature }: { feature: Feature }) {
  const Icon = feature.icon

  return (
    <div className="text-center p-6">
      {Icon && (
        <div className="w-16 h-16 mx-auto rounded-full bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center mb-4">
          <Icon className="w-8 h-8" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
    </div>
  )
}

// Minimal variant
function FeatureMinimal({ feature }: { feature: Feature }) {
  const Icon = feature.icon

  return (
    <div className="flex gap-4">
      {Icon && (
        <div className="shrink-0 w-10 h-10 rounded-[var(--radius-md)] bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div>
        <h3 className="font-semibold text-[var(--text)] mb-1">{feature.title}</h3>
        <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
      </div>
    </div>
  )
}

export default Features

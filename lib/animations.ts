/**
 * Framer Motion Animation Variants
 * 
 * Centralized animation definitions for consistent motion across the site.
 * Import these variants and use with Framer Motion components.
 * 
 * Usage:
 * ```tsx
 * import { fadeUp, staggerContainer } from '@/lib/animations'
 * 
 * <motion.div variants={fadeUp} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 * ```
 */

import type { Variants, Transition } from 'framer-motion'

// ==========================================================================
// TRANSITIONS
// ==========================================================================

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

export const smoothTransition: Transition = {
  type: 'tween',
  ease: [0.4, 0, 0.2, 1],
  duration: 0.5,
}

export const bounceTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 10,
}

// ==========================================================================
// FADE VARIANTS
// ==========================================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// ==========================================================================
// SCALE VARIANTS
// ==========================================================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
}

// ==========================================================================
// STAGGER CONTAINERS
// ==========================================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// Child item for stagger containers
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// ==========================================================================
// HOVER EFFECTS
// ==========================================================================

export const hoverScale = {
  scale: 1.02,
  transition: springTransition,
}

export const hoverLift = {
  y: -4,
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
  transition: springTransition,
}

export const hoverGlow = {
  boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)',
  transition: { duration: 0.3 },
}

// ==========================================================================
// TAP EFFECTS
// ==========================================================================

export const tapScale = {
  scale: 0.98,
}

export const tapBounce = {
  scale: 0.95,
  transition: bounceTransition,
}

// ==========================================================================
// PAGE TRANSITIONS
// ==========================================================================

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

// ==========================================================================
// SCROLL-TRIGGERED ANIMATIONS
// ==========================================================================

/**
 * Default viewport options for scroll animations
 * Use with whileInView prop
 */
export const scrollViewport = {
  once: true,
  margin: '-100px',
}

/**
 * Create a delayed fade-up animation
 * @param delay - Delay in seconds
 */
export const fadeUpWithDelay = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  },
})

// ==========================================================================
// SPECIAL EFFECTS
// ==========================================================================

export const floatAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const pulseAnimation: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const shimmerAnimation: Variants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

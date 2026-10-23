import type { Variants } from 'motion/react';

/**
 * The site's one scroll-reveal: content rises into place the first time it is scrolled
 * into view. Defined once so every section reveals at the same speed and curve — the
 * same easing the hero already animates on.
 *
 * Apply `revealProps` to a single element, or `revealGroupProps` to a container whose
 * children each carry `variants={revealVariants}` to have them arrive one after another.
 * Reduced motion is handled globally by the MotionConfig in App.
 */
const REVEAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.7, ease: REVEAL_EASE } }
};

const revealGroupVariants: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.1 } }
};

export const revealProps = {
  variants: revealVariants,
  initial: 'hidden',
  whileInView: 'shown',
  viewport: { once: true, amount: 0.2 }
} as const;

export const revealGroupProps = {
  variants: revealGroupVariants,
  initial: 'hidden',
  whileInView: 'shown',
  viewport: { once: true, amount: 0.15 }
} as const;

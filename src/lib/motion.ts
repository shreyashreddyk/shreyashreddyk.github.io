import type { MotionProps, Variants } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export function useMotionPreference() {
  return useReducedMotion() ?? false;
}

export function createPageMotionProps(reducedMotion: boolean): MotionProps {
  if (reducedMotion) {
    return {
      initial: false,
      animate: { opacity: 1 },
      exit: { opacity: 1 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  };
}

export function createRevealProps(reducedMotion: boolean, delay = 0): MotionProps {
  if (reducedMotion) {
    return {
      initial: false,
      whileInView: { opacity: 1 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
  };
}

export function createStaggerVariants(reducedMotion: boolean): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    };
  }

  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };
}

export function createStaggerChildVariants(reducedMotion: boolean): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 },
    };
  }

  return {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

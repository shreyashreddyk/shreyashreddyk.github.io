import type { MotionProps, Variants } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.5, ease: EASE },
  };
}

export function createRevealProps(reducedMotion: boolean, delay = 0): MotionProps {
  if (reducedMotion) {
    return {
      initial: false,
      animate: { opacity: 1 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: EASE },
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
      transition: { duration: 0.4, ease: EASE },
    },
  };
}

export function createHoverLiftProps(reducedMotion: boolean): MotionProps {
  if (reducedMotion) {
    return {
      whileHover: undefined,
      transition: { duration: 0 },
    };
  }

  return {
    whileHover: { y: -6, scale: 1.01 },
    transition: { duration: 0.22, ease: EASE },
  };
}

export function createHeroGlowProps(reducedMotion: boolean): MotionProps {
  if (reducedMotion) {
    return {
      animate: { opacity: 1, x: 0, y: 0 },
      transition: { duration: 0 },
    };
  }

  return {
    animate: {
      x: [0, 12, -10, 0],
      y: [0, -8, 10, 0],
    },
    transition: {
      duration: 18,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  };
}

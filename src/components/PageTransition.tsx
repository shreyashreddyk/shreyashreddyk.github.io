import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { createPageMotionProps, useMotionPreference } from '../lib/motion';

type PageTransitionProps = PropsWithChildren<{
  ariaLabel: string;
}>;

export function PageTransition({ ariaLabel, children }: PageTransitionProps) {
  const reducedMotion = useMotionPreference();

  return (
    <motion.div aria-label={ariaLabel} {...createPageMotionProps(reducedMotion)}>
      {children}
    </motion.div>
  );
}

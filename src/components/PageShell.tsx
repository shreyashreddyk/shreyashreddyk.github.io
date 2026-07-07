import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { createPageMotionProps, useMotionPreference } from '../lib/motion';

type PageShellProps = PropsWithChildren<{
  ariaLabel: string;
}>;

export function PageShell({ ariaLabel, children }: PageShellProps) {
  const reducedMotion = useMotionPreference();

  return (
    <motion.div aria-label={ariaLabel} {...createPageMotionProps(reducedMotion)}>
      {children}
    </motion.div>
  );
}

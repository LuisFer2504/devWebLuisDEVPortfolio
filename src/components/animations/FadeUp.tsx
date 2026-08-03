'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUpVariants, VIEWPORT_ONCE } from '@/lib/constants';

interface FadeUpProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
  readonly as?: keyof typeof motion;
}

export default function FadeUp({
  children,
  className,
  delay = 0,
  as = 'div',
}: FadeUpProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

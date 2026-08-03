'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import {
  staggerContainerVariants,
  fadeUpVariants,
  VIEWPORT_ONCE,
} from '@/lib/constants';

interface StaggerChildrenProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly staggerDelay?: number;
}

export default function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={{
        ...staggerContainerVariants,
        visible: {
          ...staggerContainerVariants.visible,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Child wrapper for items inside StaggerChildren ───────────
export function StaggerItem({
  children,
  className,
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return (
    <motion.div variants={fadeUpVariants} className={className}>
      {children}
    </motion.div>
  );
}

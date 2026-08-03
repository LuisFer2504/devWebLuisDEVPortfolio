'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly hoverGlow?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hoverGlow = false,
}: GlassCardProps) {
  const hoverClasses = hoverGlow
    ? 'hover:shadow-[0_0_25px_rgba(0,238,252,0.4)] hover:border-[rgba(0,238,252,0.5)] hover:-translate-y-1'
    : '';

  return (
    <motion.div
      className={`glass-card rounded-3xl transition-all duration-500 ${hoverClasses} ${className}`}
      whileHover={hoverGlow ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
}

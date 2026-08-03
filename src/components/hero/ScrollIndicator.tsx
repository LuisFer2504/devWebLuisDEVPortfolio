'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <ChevronDown size={36} className="text-on-surface-variant opacity-40" />
    </motion.div>
  );
}

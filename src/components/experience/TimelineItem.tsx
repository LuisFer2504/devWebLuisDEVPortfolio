'use client';

import { motion } from 'framer-motion';
import type { Experience } from '@/types';
import { fadeUpVariants, VIEWPORT_ONCE } from '@/lib/constants';

interface TimelineItemProps {
  readonly experience: Experience;
  readonly index: number;
}

export default function TimelineItem({
  experience,
  index,
}: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      transition={{ delay: index * 0.15 }}
      className={`group relative flex flex-col items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } ${index > 0 ? 'md:mt-24' : ''}`}
    >
      {/* Info Side */}
      <div
        className={`md:w-1/2 mb-4 md:mb-0 ${
          isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'
        }`}
      >
        <span className="font-mono text-sm tracking-wider text-primary">
          {experience.period}
        </span>
        <h4 className="font-headline text-2xl font-semibold text-on-surface">
          {experience.role}
        </h4>
        <p className="font-bold text-secondary">{experience.company}</p>
      </div>

      {/* Timeline Dot */}
      <div
        className={`absolute left-0 md:left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background ${experience.dotColor}`}
        aria-hidden="true"
      />

      {/* Description Card */}
      <div className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <div
          className={`glass-card rounded-2xl p-6 transition-colors ${experience.hoverBorderColor}`}
        >
          <p className="text-on-surface-variant leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

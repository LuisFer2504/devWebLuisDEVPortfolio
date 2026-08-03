'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiKotlin,
  SiVuedotjs,
  SiPython,
  SiLaravel,
  SiGithub
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa6';
import { DiMsqlServer } from 'react-icons/di';
import type { Technology } from '@/types';

// ─── Map icon string → real brand component ──────────────────
const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  react: SiReact,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  nextjs: SiNextdotjs,
  postgresql: SiPostgresql,
  docker: SiDocker,
  aws: FaAws,
  kotlin: SiKotlin,
  vue: SiVuedotjs,
  python: SiPython,
  java: FaJava,
  laravel: SiLaravel,
  sqlserver: DiMsqlServer,
  github: SiGithub
};

interface TechCardProps {
  readonly technology: Technology;
}

export default function TechCard({ technology }: TechCardProps) {
  const Icon = iconMap[technology.icon];

  if (!Icon) return null;

  return (
    <motion.div
      className="flex flex-col items-center gap-3 transition-transform"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div
        className="glass-card flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-300 hover:drop-shadow-[0_0_10px_currentColor]"
        style={{ color: technology.color }}
      >
        <Icon size={36} />
      </div>
      <span className="font-mono text-sm tracking-wider text-on-surface-variant">
        {technology.name}
      </span>
    </motion.div>
  );
}

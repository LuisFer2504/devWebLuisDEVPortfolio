'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import GlassCard from '@/components/ui/GlassCard';
import ProjectTags from './ProjectTags';
import type { Project, ProjectLink } from '@/types';

// ─── Icon Mapping ──────────────────────────────────────────────
const linkIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  'external-link': ExternalLink,
  github: SiGithub,
  'book-open': BookOpen,
  'arrow-right': ArrowRight,
};

function ProjectLinkItem({ link }: { readonly link: ProjectLink }) {
  const Icon = linkIconMap[link.icon] ?? ExternalLink;
  const isButton = link.variant === 'button';
  const isPrimary = link.variant === 'primary';

  if (isButton) {
    return (
      <Link
        href={link.href}
        className="inline-flex items-center gap-2 bg-primary text-on-primary-fixed px-8 py-3 rounded-lg font-bold transition-all hover:brightness-110"
      >
        {link.label}
        <Icon size={16} />
      </Link>
    );
  }

  return (
    <Link
      href={link.href}
      className={`inline-flex items-center gap-2 font-mono text-sm transition-colors ${
        isPrimary
          ? 'text-primary hover:underline'
          : 'text-on-surface-variant hover:text-on-surface'
      }`}
    >
      {link.label}
      <Icon size={14} />
    </Link>
  );
}

interface ProjectCardProps {
  readonly project: Project;
  readonly isFullWidth?: boolean;
}

export default function ProjectCard({
  project,
  isFullWidth = false,
}: ProjectCardProps) {
  return (
    <GlassCard hoverGlow>
      <div
        className={`group overflow-hidden rounded-3xl flex ${
          isFullWidth ? 'flex-col md:flex-row' : 'flex-col'
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${
            isFullWidth ? 'md:w-1/2 h-80' : 'h-72 w-full'
          }`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes={
              isFullWidth
                ? '(max-width: 768px) 100vw, 640px'
                : '(max-width: 768px) 100vw, 50vw'
            }
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div
          className={`space-y-4 p-8 flex flex-col justify-center ${
            isFullWidth ? 'md:w-1/2 lg:space-y-6 lg:p-10' : ''
          }`}
        >
          <div>
            <ProjectTags tags={project.tags} />
          </div>
          <h3
            className={`font-headline font-semibold text-on-surface ${
              isFullWidth
                ? 'text-2xl lg:text-[40px] lg:font-extrabold lg:leading-[1.2]'
                : 'text-2xl'
            }`}
          >
            {project.title}
          </h3>
          <p className="text-on-surface-variant leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className={`flex flex-wrap gap-4 pt-4 ${isFullWidth ? 'lg:gap-6' : ''}`}>
            {project.links.map((link) => (
              <ProjectLinkItem key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

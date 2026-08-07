'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, BookOpen, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = !!(project.images && project.images.length > 1);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!project.images) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images!.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!project.images) return;
    setCurrentImageIndex((prev) =>
      prev === project.images!.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <GlassCard hoverGlow>
      <div
        className={`group overflow-hidden rounded-3xl flex ${
          isFullWidth ? 'flex-col md:flex-row' : 'flex-col'
        }`}
      >
        {/* Image / Carousel Container */}
        <div
          className={`relative overflow-hidden bg-surface-container-low ${
            isFullWidth ? 'md:w-1/2 h-80 md:h-auto min-h-[320px]' : 'h-72 w-full'
          }`}
        >
          {hasMultipleImages ? (
            <>
              {project.images!.map((img, idx) => (
                <div
                  key={img}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    idx === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 z-[-1] pointer-events-none'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.imageAlt} - Vista ${idx + 1}`}
                    fill
                    sizes={
                      isFullWidth
                        ? '(max-width: 768px) 100vw, 640px'
                        : '(max-width: 768px) 100vw, 50vw'
                    }
                    className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                    priority={idx === 0}
                    loading={idx === 0 ? undefined : 'lazy'}
                  />
                </div>
              ))}

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Imagen anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-background/40 backdrop-blur-md border border-outline-variant/30 text-on-surface hover:bg-background/70 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-primary"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Siguiente imagen"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-background/40 backdrop-blur-md border border-outline-variant/30 text-on-surface hover:bg-background/70 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-primary"
              >
                <ChevronRight size={20} />
              </button>

              {/* Indicators (Dots) */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 px-3 py-1.5 rounded-full bg-background/50 backdrop-blur-md border border-outline-variant/20 shadow-lg">
                {project.images!.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    aria-label={`Ver imagen ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? 'bg-primary w-5'
                        : 'bg-on-surface-variant/40 w-2 hover:bg-on-surface-variant'
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes={
                isFullWidth
                  ? '(max-width: 768px) 100vw, 640px'
                  : '(max-width: 768px) 100vw, 50vw'
              }
              className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              loading="lazy"
            />
          )}
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

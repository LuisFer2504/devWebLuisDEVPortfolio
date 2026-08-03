'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import FadeUp from '@/components/animations/FadeUp';
import StaggerChildren, {
  StaggerItem,
} from '@/components/animations/StaggerChildren';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  const standardProjects = projects.filter((p) => !p.featured);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-28 md:py-32">
      <Container>
        {/* Header */}
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-headline text-[40px] font-bold leading-[1.2] text-on-background mb-2">
              Proyectos Destacados
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Una selección de mis trabajos recientes que involucran
              arquitecturas complejas y soluciones creativas de front-end.
            </p>
          </div>
          <Link
            href="#"
            className="group flex items-center gap-2 font-mono text-sm text-primary whitespace-nowrap"
          >
            Ver todos los proyectos
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </FadeUp>

        {/* Project Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {standardProjects.map((project, index) => {
            const isLastAndOdd =
              index === standardProjects.length - 1 &&
              standardProjects.length % 2 !== 0;
            return (
              <StaggerItem
                key={project.id}
                className={isLastAndOdd ? 'md:col-span-2' : ''}
              >
                <ProjectCard project={project} isFullWidth={isLastAndOdd} />
              </StaggerItem>
            );
          })}
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id} className="md:col-span-2">
              <ProjectCard project={project} isFullWidth />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

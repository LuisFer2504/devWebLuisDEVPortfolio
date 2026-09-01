'use client';

import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import StaggerChildren, {
  StaggerItem,
} from '@/components/animations/StaggerChildren';
import TechCard from './TechCard';
import { technologies } from '@/data/technologies';

export default function Stack() {
  // Duplicamos el array para el efecto de loop infinito
  const loopedTechs = [...technologies, ...technologies];

  return (
    <section
      id="stack"
      className="bg-surface-container-lowest py-20 md:py-32 overflow-hidden"
    >
      <Container>
        <SectionHeader title="Mi Stack Tecnológico" />

        {/* ── Desktop / Tablet Grid (md+) ── */}
        <div className="hidden md:block">
          <StaggerChildren className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {technologies.map((tech) => (
              <StaggerItem key={tech.name}>
                <TechCard technology={tech} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* ── Mobile Horizontal Scroll Marquee (<md) ── */}
        <div className="block md:hidden">
          <div
            className="relative overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused] w-max">
              {loopedTechs.map((tech, idx) => (
                <div key={`${tech.name}-${idx}`} className="shrink-0">
                  <TechCard technology={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

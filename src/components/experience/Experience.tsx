import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import TimelineItem from './TimelineItem';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="bg-surface-container-low py-28 md:py-32">
      <Container>
        <SectionHeader
          title="Crecimiento Profesional"
          subtitle="El camino de un desarrollador dedicado a la mejora continua."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Gradient Line */}
          <div
            className="timeline-gradient absolute left-0 md:left-1/2 top-0 bottom-0 hidden w-1 -translate-x-1/2 md:block"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import StaggerChildren, {
  StaggerItem,
} from '@/components/animations/StaggerChildren';
import TechCard from './TechCard';
import { technologies } from '@/data/technologies';

export default function Stack() {
  return (
    <section id="stack" className="bg-surface-container-lowest py-28 md:py-32">
      <Container>
        <SectionHeader title="Mi Stack Tecnológico" />

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {technologies.map((tech) => (
            <StaggerItem key={tech.name}>
              <TechCard technology={tech} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

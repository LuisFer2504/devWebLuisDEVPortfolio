'use client';

import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import StaggerChildren, {
  StaggerItem,
} from '@/components/animations/StaggerChildren';
import TechCard from './TechCard';
import { technologies } from '@/data/technologies';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const slideVariants = {
  enter: { opacity: 0, scale: 0.8, x: 60, filter: 'blur(8px)' },
  center: { opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, scale: 0.8, x: -60, filter: 'blur(8px)' },
};

export default function Stack() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % technologies.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const activeTech = technologies[activeIndex];

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

        {/* ── Mobile Auto-Play Loop (< md) ── */}
        <div className="block md:hidden">
          <div className="relative flex items-center justify-center h-40 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech.name}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                className="absolute"
              >
                <div
                  className="absolute inset-0 -z-10 rounded-3xl opacity-30 blur-2xl"
                  style={{ background: activeTech.color }}
                />
                <TechCard technology={activeTech} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

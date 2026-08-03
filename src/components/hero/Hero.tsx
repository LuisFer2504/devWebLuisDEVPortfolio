'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import GradientText from '@/components/ui/GradientText';
import HeroButtons from './HeroButtons';
import ScrollIndicator from './ScrollIndicator';

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const },
  },
} as const;

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  },
} as const;

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="max-w-4xl space-y-6">
          {/* Heading */}
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="font-headline text-[40px] md:text-[64px] font-extrabold leading-[1.2] md:leading-[1.1] md:tracking-tight text-on-background"
          >
            Creando{' '}
            <GradientText>Experiencias Digitales</GradientText>{' '}
            con Código y Creatividad
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="font-body text-lg leading-relaxed text-on-surface-variant max-w-2xl"
          >
            Desarrollador Full Stack especializado en aplicaciones de alto
            rendimiento con{' '}
            <span className="text-secondary font-semibold">
              React, Node.js y Arquitecturas Cloud
            </span>
            . Construyendo soluciones escalables para empresas modernas.
          </motion.p>

          {/* CTA Buttons */}
          <HeroButtons />
        </div>
      </Container>

      <ScrollIndicator />
    </header>
  );
}

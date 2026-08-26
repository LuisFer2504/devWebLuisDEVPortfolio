'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import GradientText from '@/components/ui/GradientText';
import HeroButtons from './HeroButtons';
import ScrollIndicator from './ScrollIndicator';

const introVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
} as const;

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] as const },
  },
} as const;

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] as const },
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
          {/* Personal Intro */}
          <motion.div
            variants={introVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_0_20px_rgba(0,238,252,0.08)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-body text-sm md:text-base text-on-surface-variant/80">
              Hola, soy{' '}
              <span className="gradient-text font-semibold">Luis Morales</span>
              {' '}&middot; Dev Full Stack
            </span>
          </motion.div>

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

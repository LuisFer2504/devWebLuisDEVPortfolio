'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroButtons() {
  return (
    <motion.div
      className="flex flex-wrap gap-4 pt-4"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={buttonVariants} transition={{ duration: 0.5 }}>
        <Link
          href="#projects"
          className="group inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-headline text-lg font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,238,252,0.4)] hover:brightness-110"
        >
          Ver Proyectos
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      <motion.div variants={buttonVariants} transition={{ duration: 0.5 }}>
        <Link
          href="#contact"
          className="group inline-flex items-center gap-2 bg-white/5 border border-outline/30 text-on-surface font-headline text-lg font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
        >
          <MessageSquare size={20} />
          Contactar
        </Link>
      </motion.div>
    </motion.div>
  );
}

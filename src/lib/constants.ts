import type { Variants, Transition } from 'framer-motion';

// ─── Shared Transition ────────────────────────────────────────
export const SPRING_TRANSITION: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

export const EASE_TRANSITION: Transition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

// ─── Fade Up Variants ─────────────────────────────────────────
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: EASE_TRANSITION },
};

// ─── Stagger Container ───────────────────────────────────────
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// ─── Scale On Hover ───────────────────────────────────────────
export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 17 },
};

// ─── Viewport Config ──────────────────────────────────────────
export const VIEWPORT_ONCE = { once: true, margin: '-100px' } as const;

// ─── Navbar ───────────────────────────────────────────────────
export const NAVBAR_HEIGHT = 80;

// ─── Section IDs ──────────────────────────────────────────────
export const SECTION_IDS = {
  hero: 'hero',
  stack: 'stack',
  projects: 'projects',
  experience: 'experience',
  contact: 'contact',
} as const;

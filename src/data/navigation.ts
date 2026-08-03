import type { NavLink } from '@/types';

export const navLinks: readonly NavLink[] = [
  { label: 'Proyectos', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
] as const;

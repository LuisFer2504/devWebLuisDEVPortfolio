import type { Experience } from '@/types';

export const experiences: readonly Experience[] = [
  {
    id: 'casamarket',
    period: '02/2026 - Presente',
    role: 'Desarrollador Junior',
    company: 'CASAMARKET APP S.A.C.',
    description:
      'Desarrollo y mantenimiento de App movil y frontend con React y VUE, aplicando principios SOLID, limpio y estructurado.',
    dotColor: 'bg-[#00eefc]',
    hoverBorderColor: 'group-hover:border-[#00eefc]/40',
  },
  {
    id: 'industriasbalinsa',
    period: '03/2025- 10/2025',
    role: 'Desarrollador de Software',
    company: 'Industrias Balinsa S.A.C',
    description:
      'Diseño, desarrollo y mantenimiento de los diversos sistemas, operaciones, páginas web y bases de datos de la empresa.',
    dotColor: 'bg-[#cd5dff]',
    hoverBorderColor: 'group-hover:border-[#cd5dff]/40',
  },
  {
    id: 'unal',
    period: '2023 - 2024',
    role: 'Practicante',
    company: 'Hospital de Apoyo Nuestra Señora de las Mercedes',
    description:
      'Participación en el desarrollo del proyecto Gestión Colas, mejorando la experiencia del usuario y optimizando el flujo de atención en el hospital.',
    dotColor: 'bg-[#cd5dff]',
    hoverBorderColor: 'group-hover:border-[#cd5dff]/40',
  },
] as const;

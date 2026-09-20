import type { Project } from '@/types';

export const projects: readonly Project[] = [
  {
    id: 'queue-management-system',
    title: 'Sistema de Gestión de Colas y Ventanillas',
    description:
      'Proyecto profesional desarrollado durante mis prácticas en el Hospital de Apoyo Nuestra Señora de las Mercedes de Paita. Gestiona la atención de usuarios mediante tickets y ventanillas: administra áreas, genera y llama tickets, controla tiempos de espera y atención, y ofrece una pantalla de visualización en tiempo real junto con reportes filtrables y soporte para atención preferencial.',
    image: '/images/projects/queue-management-1.webp',
    imageAlt:
      'Interfaz del Sistema de Gestión de Colas y Ventanillas del Hospital Nuestra Señora de las Mercedes mostrando el manejo de tickets, ventanillas y pantalla de visualización.',
    tags: ['Java', 'NetBeans', 'SQLServer'],
    links: [
      {
        label: 'Ver Funcionamiento del Proyecto',
        href: 'https://drive.google.com/file/d/1tRABHPwPk34clfGRemstXOxWRt9RBYm3/view?usp=sharing',
        icon: 'external-link',
        variant: 'primary',
      },
    ],
    images: [
      '/images/projects/queue-management-1.webp',
      '/images/projects/queue-management-2.webp',
      '/images/projects/queue-management-3.webp',
      '/images/projects/queue-management-4.webp',
    ],
  },
  {
    id: 'dev-eco-link',
    title: 'Dev-EcoLink',
    description:
      'Dev-EcoLink es una aplicación web diseñada para fomentar el cuidado del medio ambiente mediante la participación ciudadana. El proyecto propone una experiencia gamificada donde los usuarios pueden registrar actividades ecológicas, acumular puntos, completar retos y contribuir al cuidado de las playas de Paita.',
    image: '/images/projects/eco-link-home.webp',
    imageAlt:
      'Interfaz principal de la aplicación Dev-EcoLink Paita mostrando la sección de inicio, mapa de playas, registro de actividades y ranking de líderes.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Gamificación'],
    links: [
      { label: 'Ver Demo', href: 'https://dev-eco-link.vercel.app/', icon: 'external-link', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/LuisFer2504/Dev-EcoLink', icon: 'github', variant: 'secondary' },
    ],
    images: [
      '/images/projects/eco-link-home.webp',
      '/images/projects/eco-link-register.webp',
      '/images/projects/eco-link-ranking.webp',
    ],
    featured: true,
  },
] as const;

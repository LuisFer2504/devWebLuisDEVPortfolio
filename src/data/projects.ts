import type { Project } from '@/types';

export const projects: readonly Project[] = [
  {
    id: 'nexus-dashboard',
    title: 'Nexus Dashboard',
    description:
      'Motor analítico en tiempo real con integración de WebSockets y componentes personalizados de visualización de datos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKSb9f2JUgZgpF0LwCNEnP4GnwTKrYBQcVB9OQ1Rgov1Vl6apsMLatKwDahNord6m1SXQInCk2QkbfJdtEksM6ZzjiXf-SNiQ-pHERSCAtkh5R2WC8GaQ0RpsuEz3fshilzG93zLywjsW2okzewnzZ2-8kytOjZ2AujPLwYcar2RUQL7s_EnHiBJX8kCesomzeYGPOlRyw183aK6aosYSwHtYVVsD7bI4vgx4L3npS-pD_Eg_0HyPDsmGMJJeqi44DxpAKp20zp_s',
    imageAlt:
      'Dashboard profesional de alta tecnología con visualizaciones de datos, gráficos y análisis de usuarios en tema oscuro con acentos cyan y azul eléctrico.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    links: [
      { label: 'Demo', href: '#', icon: 'external-link', variant: 'primary' },
      { label: 'GitHub', href: '#', icon: 'github', variant: 'secondary' },
    ],
  },
  {
    id: 'ecommerce-titan',
    title: 'E-Commerce Titan',
    description:
      'Plataforma de comercio headless de alta conversión con SSR optimizado y procesamiento de pagos serverless.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDePb_N3CXDKvwr0M40I0z2Clz-BEIkp2P3pWLTq17VLNQcdREIDBdTjOEhmWjvDUKDARfQ3YmgCozhiKJQPY91ySqEWLuPTczUgIbnaA5vMRdH1e4DM3PfVp8mEn55ye-trOr5OiV8_yokUYx_7ZLeBvIfAtK6vzGz2Nx2jER3pgxN9QwrSFJeh7CWBaDp2cDoHw1e29h8yEoj8Rhlj8VjwYCHGcHfTrPDgfDPLk6EA1OlJ-FzDQIpcrZxtSgqmyvqYrQy7p5ig8c',
    imageAlt:
      'Aplicación de e-commerce elegante mostrando una página de producto minimalista con fotografía de alta resolución.',
    tags: ['Next.js', 'Stripe', 'AWS'],
    links: [
      { label: 'Demo', href: '#', icon: 'external-link', variant: 'primary' },
      { label: 'GitHub', href: '#', icon: 'github', variant: 'secondary' },
    ],
  },
  {
    id: 'dev-eco-link',
    title: 'Dev-EcoLink',
    description:
      'Dev-EcoLink es una aplicación web diseñada para fomentar el cuidado del medio ambiente mediante la participación ciudadana. El proyecto propone una experiencia gamificada donde los usuarios pueden registrar actividades ecológicas, acumular puntos, completar retos y contribuir al cuidado de las playas de Paita.',
    image: '/images/projects/eco-link-home.png',
    imageAlt:
      'Interfaz principal de la aplicación Dev-EcoLink Paita mostrando la sección de inicio, mapa de playas, registro de actividades y ranking de líderes.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Gamificación'],
    links: [
      { label: 'Ver Demo', href: 'https://dev-eco-link.vercel.app/', icon: 'external-link', variant: 'button' },
      { label: 'GitHub', href: 'https://github.com/LuisFer2504/Dev-EcoLink', icon: 'github', variant: 'secondary' },
    ],
    images: [
      '/images/projects/eco-link-home.png',
      '/images/projects/eco-link-register.png',
      '/images/projects/eco-link-ranking.png',
    ],
    featured: true,
  },
] as const;

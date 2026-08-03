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
    id: 'orbit-cloud-manager',
    title: 'Orbit Cloud Manager',
    description:
      'Una plataforma integral de orquestación para microservicios, con pipelines de CI/CD automatizados y despliegues de infraestructura como código.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwJIv-zUBWIkUR8i1tUWal61HWeYi3F4ByfOtM2kcyf840ABF_i6PM05peZBeOCDyhohCqZZCTYAAKjmlUMSrKHN9rWx0zg9tA8O13-1hiROU6SsnVRKrLDDxW6lff9EZ12SFjkeOGcNJYw1lI9BLHXNOcykwF7CBvNgwjHvi_CKltE2zHbT2nMtxrempMdFlQTayMq46f7OGh-JmTjGHqUmicTvXc11DzB4YGEoWTU60s3Bi3It62qMCfbc30sJ7t3_EFOAdZa14',
    imageAlt:
      'Plataforma futurista de gestión de infraestructura cloud mostrando grafos de red y métricas de monitoreo de servidores.',
    tags: ['Docker', 'Kubernetes', 'TypeScript'],
    links: [
      { label: 'Ver Proyecto', href: '#', icon: 'arrow-right', variant: 'button' },
      { label: 'Documentación', href: '#', icon: 'book-open', variant: 'secondary' },
    ],
    featured: true,
  },
] as const;

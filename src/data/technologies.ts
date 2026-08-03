import type { Technology } from '@/types';

export const technologies: readonly Technology[] = [
  { name: 'React', color: '#61DAFB', icon: 'react' },
  { name: 'TypeScript', color: '#3178C6', icon: 'typescript' },
  { name: 'Node.js', color: '#68A063', icon: 'nodejs' },
  { name: 'Next.js', color: '#FFFFFF', icon: 'nextjs' },
  { name: 'PostgreSQL', color: '#336791', icon: 'postgresql' },
  { name: 'Docker', color: '#2496ED', icon: 'docker' },
  { name: 'AWS', color: '#FF9900', icon: 'aws' },
  { name: 'Kotlin', color: '#7F52FF', icon: 'kotlin' },
  { name: 'Vue', color: '#42B883', icon: 'vue' },
  { name: 'Python', color: '#4B8BBE', icon: 'python' },
  { name: 'Java', color: '#ED8B00', icon: 'java' },
  { name: 'Laravel', color: '#FF2D20', icon: 'laravel' },
  { name: 'SQLServer', color: '#CC292B', icon: 'sqlserver' },
  { name: 'GitHub', color: '#F05032', icon: 'github' },
] as const;

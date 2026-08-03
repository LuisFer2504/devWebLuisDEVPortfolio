import type { ReactNode } from 'react';

interface ContainerProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly as?: 'div' | 'section' | 'header' | 'footer';
}

export default function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1280px] px-5 md:px-6 ${className}`}
    >
      {children}
    </Component>
  );
}

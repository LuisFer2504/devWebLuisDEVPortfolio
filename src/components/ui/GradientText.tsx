import type { ReactNode } from 'react';

interface GradientTextProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export default function GradientText({
  children,
  className = '',
}: GradientTextProps) {
  return <span className={`gradient-text ${className}`}>{children}</span>;
}

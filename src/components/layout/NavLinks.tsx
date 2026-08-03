'use client';

import Link from 'next/link';
import { navLinks } from '@/data/navigation';
import type { NavLink } from '@/types';

interface NavLinksProps {
  readonly activeSection?: string;
  readonly onLinkClick?: () => void;
  readonly className?: string;
}

function NavLinkItem({
  link,
  isActive,
  onClick,
}: {
  readonly link: NavLink;
  readonly isActive: boolean;
  readonly onClick?: () => void;
}) {
  return (
    <Link
      href={link.href}
      onClick={onClick}
      className={`font-mono text-sm tracking-wider transition-colors ${
        isActive
          ? 'text-primary'
          : 'text-on-surface-variant hover:text-primary'
      }`}
    >
      {link.label}
    </Link>
  );
}

export default function NavLinks({
  activeSection = '',
  onLinkClick,
  className = '',
}: NavLinksProps) {
  return (
    <div className={`flex items-center gap-8 ${className}`}>
      {navLinks.map((link) => (
        <NavLinkItem
          key={link.href}
          link={link}
          isActive={activeSection === link.href.replace('#', '')}
          onClick={onLinkClick}
        />
      ))}
    </div>
  );
}

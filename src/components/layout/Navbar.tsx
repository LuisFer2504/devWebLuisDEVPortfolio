'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import Container from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { SECTION_IDS } from '@/lib/constants';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(Object.values(SECTION_IDS));

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-white/5 shadow-sm"
        role="navigation"
        aria-label="Navegación principal"
      >
        <Container className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="#"
            className="font-headline text-2xl font-bold text-primary tracking-tighter"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks activeSection={activeSection} />
            <Link
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-5 py-2 rounded-lg font-bold transition-transform active:scale-95 hover:brightness-110"
            >
              <span>Currículum</span>
              <Download size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-primary"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </Container>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

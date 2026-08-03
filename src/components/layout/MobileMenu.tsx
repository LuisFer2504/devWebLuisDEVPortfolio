'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site';

interface MobileMenuProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

const menuVariants = {
  closed: { opacity: 0, x: '100%' },
  open: { opacity: 1, x: 0 },
};

const linkVariants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0 },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <motion.nav
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 z-50 h-full w-72 bg-surface-container border-l border-white/5 p-8 md:hidden"
            aria-label="Menú de navegación móvil"
          >
            <div className="flex justify-end mb-12">
              <button
                onClick={onClose}
                aria-label="Cerrar menú"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={linkVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block font-mono text-lg tracking-wider text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={linkVariants}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  href={siteConfig.resumeUrl}
                  onClick={onClose}
                  className="inline-block w-full text-center bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-bold transition-transform active:scale-95"
                >
                  Currículum
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  readonly isOpen: boolean;
  readonly images: readonly string[];
  readonly currentIndex: number;
  readonly alt: string;
  readonly title?: string;
  readonly onClose: () => void;
  readonly onSelectIndex?: (index: number) => void;
}

export default function ImageModal({
  isOpen,
  images,
  currentIndex,
  alt,
  title,
  onClose,
  onSelectIndex,
}: ImageModalProps) {
  const currentImg = images[currentIndex] ?? images[0];
  const hasMultiple = images.length > 1;

  const handlePrev = useCallback(() => {
    if (!onSelectIndex || !hasMultiple) return;
    onSelectIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, hasMultiple, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (!onSelectIndex || !hasMultiple) return;
    onSelectIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, hasMultiple, onSelectIndex]);

  // Teclado: Escape para cerrar, Flechas para navegar
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Bloquear scroll del fondo
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && currentImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md select-none"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title ?? alt}
        >
          {/* Top Bar: Title & Close Button */}
          <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex items-center justify-between z-20 pointer-events-none">
            <div className="pointer-events-auto max-w-[70%]">
              {title && (
                <h4 className="text-white text-sm md:text-base font-semibold truncate drop-shadow-md">
                  {title}
                </h4>
              )}
              {hasMultiple && (
                <p className="text-xs text-white/70 font-mono">
                  {currentIndex + 1} / {images.length}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Cerrar imagen"
              className="pointer-events-auto p-2.5 rounded-full bg-surface-container-highest/60 hover:bg-surface-container-highest text-white backdrop-blur-md border border-white/10 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Buttons */}
          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Imagen anterior"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-surface-container-highest/60 hover:bg-surface-container-highest text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110 active:scale-95 shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Siguiente imagen"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-surface-container-highest/60 hover:bg-surface-container-highest text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110 active:scale-95 shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Image Container with Smooth Animation */}
          <motion.div
            key={currentImg}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full max-h-[80vh] md:max-h-[85vh] aspect-video flex items-center justify-center overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl bg-surface-container-lowest/40"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImg}
              alt={alt}
              fill
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 85vw, 1024px"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Bottom Thumbnails on Mobile/Desktop if multiple */}
          {hasMultiple && (
            <div
              className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 p-1.5 rounded-full bg-surface-container-highest/60 backdrop-blur-md border border-white/10 shadow-lg max-w-[90vw] overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => onSelectIndex?.(idx)}
                  aria-label={`Ver captura ${idx + 1}`}
                  className={`relative h-9 w-14 sm:h-12 sm:w-18 rounded-lg overflow-hidden border transition-all ${
                    idx === currentIndex
                      ? 'border-primary ring-2 ring-primary/50 scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

'use client';

import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { siteConfig } from '@/data/site';

// ─── Icon Mapping ──────────────────────────────────────────────
const socialIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
};

export default function ContactInfo() {
  return (
    <div className="space-y-12 lg:w-2/5 border-r border-white/5 bg-primary-container/10 p-10 md:p-16">
      {/* Heading */}
      <div>
        <h2 className="font-headline text-[40px] font-bold leading-[1.2] mb-6">
          Construyamos algo{' '}
          <span className="text-primary">extraordinario</span> juntos.
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          {siteConfig.availability}
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {/* Email */}
        <Link
          href={`mailto:${siteConfig.email}`}
          className="group flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-primary/20">
            <Mail size={20} className="text-primary" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
              Envíame un email
            </p>
            <p className="font-headline text-lg font-semibold">
              {siteConfig.email}
            </p>
          </div>
        </Link>

        {/* Location */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
            <MapPin size={20} className="text-primary" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
              Ubicación
            </p>
            <p className="font-headline text-lg font-semibold">
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4">
        {siteConfig.socials
          .filter((s) => socialIconMap[s.icon])
          .map((social) => {
            const Icon = socialIconMap[social.icon];
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-colors hover:bg-white/5"
              >
                <Icon size={18} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

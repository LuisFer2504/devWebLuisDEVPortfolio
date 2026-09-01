import Link from 'next/link';
import Container from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

const currentYear = new Date().getFullYear();

// ─── Icon Mapping ──────────────────────────────────────────────
const socialIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: Mail,
};

export default function Footer() {
  return (
    <footer
      className="bg-surface-container-lowest w-full py-12 border-t border-outline-variant/20"
      role="contentinfo"
    >
      <Container className="flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-mono text-sm tracking-wider text-on-surface-variant">
          {siteConfig.name} © {currentYear} Desarrollador Full Stack •
          Construido con Precisión
        </p>

        <nav
          className="flex gap-6 text-on-surface-variant"
          aria-label="Redes sociales"
        >
          {siteConfig.socials.map((social) => {
            const Icon = socialIconMap[social.icon];
            if (!Icon) return null;
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200"
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </nav>
      </Container>
    </footer>
  );
}

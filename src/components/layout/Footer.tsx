import Link from 'next/link';
import Container from '@/components/ui/Container';
import { siteConfig } from '@/data/site';

const currentYear = new Date().getFullYear();

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
          className="flex gap-8 text-on-surface-variant"
          aria-label="Redes sociales"
        >
          {siteConfig.socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-fixed-dim transition-colors opacity-80 hover:opacity-100 text-sm"
            >
              {social.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}

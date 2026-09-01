import FadeUp from '@/components/animations/FadeUp';

interface SectionHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly align?: 'center' | 'left';
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'text-center' : 'text-left';

  return (
    <FadeUp className={`mb-14 md:mb-16 ${alignClasses}`}>
      <h2 className="font-headline text-[28px] md:text-[40px] font-bold leading-[1.2] text-on-background mb-4">
        {title}
      </h2>
      {align === 'center' && (
        <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-secondary-container mx-auto rounded-full" />
      )}
      {subtitle && (
        <p className="text-on-surface-variant mt-4 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </FadeUp>
  );
}

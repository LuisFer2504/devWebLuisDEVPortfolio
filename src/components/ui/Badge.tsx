interface BadgeProps {
  readonly label: string;
  readonly className?: string;
}

export default function Badge({ label, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono text-xs tracking-wider text-secondary ${className}`}
    >
      {label}
    </span>
  );
}

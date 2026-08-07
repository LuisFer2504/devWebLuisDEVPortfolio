// ─── Navigation ────────────────────────────────────────────────
export interface NavLink {
  readonly label: string;
  readonly href: string;
}

// ─── Site Configuration ────────────────────────────────────────
export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: string;
}

export interface SiteConfig {
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly email: string;
  readonly location: string;
  readonly availability: string;
  readonly resumeUrl: string;
  readonly socials: readonly SocialLink[];
}

// ─── Technologies ──────────────────────────────────────────────
export interface Technology {
  readonly name: string;
  readonly color: string;
  readonly icon: string;
}

// ─── Projects ──────────────────────────────────────────────────
export interface ProjectLink {
  readonly label: string;
  readonly href: string;
  readonly icon: string;
  readonly variant: 'primary' | 'secondary' | 'button';
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly tags: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly featured?: boolean;
  readonly images?: readonly string[];
}

// ─── Experience ────────────────────────────────────────────────
export interface Experience {
  readonly id: string;
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly description: string;
  readonly dotColor: string;
  readonly hoverBorderColor: string;
}

// ─── Contact Form ──────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormField {
  readonly name: keyof ContactFormData;
  readonly label: string;
  readonly type: 'text' | 'email' | 'textarea';
  readonly placeholder: string;
  readonly rows?: number;
}

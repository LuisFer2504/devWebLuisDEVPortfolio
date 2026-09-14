'use client';

import { useState, useCallback } from 'react';
import { Send } from 'lucide-react';
import type { ContactFormData, ContactFormField } from '@/types';

// ─── Form Field Configuration ─────────────────────────────────
const formFields: readonly ContactFormField[] = [
  {
    name: 'name',
    label: 'Tu Nombre',
    type: 'text',
    placeholder: 'Juan Pérez',
  },
  {
    name: 'email',
    label: 'Correo Electrónico',
    type: 'email',
    placeholder: 'juan@ejemplo.com',
  },
  {
    name: 'subject',
    label: 'Asunto',
    type: 'text',
    placeholder: 'Consulta sobre proyecto',
  },
  {
    name: 'message',
    label: 'Mensaje',
    type: 'textarea',
    placeholder: 'Cuéntame sobre tu proyecto...',
    rows: 5,
  },
];

const INITIAL_FORM_STATE: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

// ─── Reusable Input Component ─────────────────────────────────
function FormField({ field, value, onChange, disabled }: {
  readonly field: ContactFormField;
  readonly value: string;
  readonly onChange: (name: keyof ContactFormData, value: string) => void;
  readonly disabled?: boolean;
}) {
  const baseClasses =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed';

  return (
    <div className="space-y-2">
      <label
        htmlFor={`contact-${field.name}`}
        className="block font-mono text-sm text-on-surface-variant"
      >
        {field.label}
      </label>
      {field.type === 'textarea' ? (
        <textarea
          id={`contact-${field.name}`}
          name={field.name}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
          placeholder={field.placeholder}
          rows={field.rows}
          required={field.name === 'message'}
          disabled={disabled}
          className={baseClasses}
        />
      ) : (
        <input
          id={`contact-${field.name}`}
          name={field.name}
          type={field.type}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
          placeholder={field.placeholder}
          required={field.name === 'name' || field.name === 'email'}
          disabled={disabled}
          className={baseClasses}
        />
      )}
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────
export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Honeypot — invisible for real users, bots tend to fill it in
  const [honeypot, setHoneypot] = useState('');

  const isSubmitting = status === 'loading';

  const handleFieldChange = useCallback(
    (name: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isSubmitting) return;

      setStatus('loading');
      setFeedbackMessage('');

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, website: honeypot }),
        });

        const data: { message: string } = await res.json();

        if (res.ok) {
          setStatus('success');
          setFeedbackMessage(data.message ?? '¡Mensaje enviado!');
          setFormData(INITIAL_FORM_STATE);
        } else {
          setStatus('error');
          setFeedbackMessage(data.message ?? 'Hubo un error. Inténtalo de nuevo.');
        }
      } catch {
        setStatus('error');
        setFeedbackMessage('Error de conexión. Verifica tu internet e inténtalo de nuevo.');
      }
    },
    [formData, honeypot, isSubmitting]
  );

  // Separate grid fields (name, email) from full-width fields
  const gridFields = formFields.filter(
    (f) => f.name === 'name' || f.name === 'email'
  );
  const fullFields = formFields.filter(
    (f) => f.name !== 'name' && f.name !== 'email'
  );

  return (
    <div className="p-6 md:p-10 lg:p-16 lg:w-3/5">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Honeypot — hidden from real users, trap for bots */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ display: 'none' }}
        />

        {/* Name & Email in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridFields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={handleFieldChange}
              disabled={isSubmitting}
            />
          ))}
        </div>

        {/* Subject & Message full-width */}
        {fullFields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={formData[field.name]}
            onChange={handleFieldChange}
            disabled={isSubmitting}
          />
        ))}

        {/* Feedback banner — success */}
        {status === 'success' && (
          <div
            role="status"
            aria-live="polite"
            className="flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400"
          >
            <span aria-hidden="true" className="mt-0.5 shrink-0">✓</span>
            <span>{feedbackMessage}</span>
          </div>
        )}

        {/* Feedback banner — error */}
        {status === 'error' && (
          <div
            role="alert"
            aria-live="assertive"
            className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
          >
            <span aria-hidden="true" className="mt-0.5 shrink-0">✕</span>
            <span>{feedbackMessage}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary-container py-4 font-bold text-on-primary-container transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,238,252,0.4)] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          <Send
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </form>
    </div>
  );
}

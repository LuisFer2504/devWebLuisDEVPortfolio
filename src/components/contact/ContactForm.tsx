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
function FormField({ field, value, onChange }: {
  readonly field: ContactFormField;
  readonly value: string;
  readonly onChange: (name: keyof ContactFormData, value: string) => void;
}) {
  const baseClasses =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all';

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
          className={baseClasses}
        />
      )}
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────
export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = useCallback(
    (name: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      // TODO: Connect to API/EmailJS/Resend/Formspree
      // await sendContactEmail(formData);
      console.log('Form submitted:', formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormData(INITIAL_FORM_STATE);
      setIsSubmitting(false);
    },
    [formData]
  );

  // Separate grid fields (name, email) from full-width fields
  const gridFields = formFields.filter(
    (f) => f.name === 'name' || f.name === 'email'
  );
  const fullFields = formFields.filter(
    (f) => f.name !== 'name' && f.name !== 'email'
  );

  return (
    <div className="p-10 md:p-16 lg:w-3/5">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name & Email in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridFields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={handleFieldChange}
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
          />
        ))}

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

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// ─── Rate Limiting (in-memory, per IP) ───────────────────────────────────────
// Suitable for a portfolio — resets on server restart, no external dependencies.
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes in ms

const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count += 1;
  return false;
}

// ─── Validation ───────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // honeypot field — must be empty
}

interface ValidationResult {
  ok: boolean;
  error?: string;
}

function validatePayload(payload: ContactPayload): ValidationResult {
  const { name, email, subject, message } = payload;

  if (!name?.trim())    return { ok: false, error: 'El nombre es obligatorio.' };
  if (!email?.trim())   return { ok: false, error: 'El correo es obligatorio.' };
  if (!subject?.trim()) return { ok: false, error: 'El asunto es obligatorio.' };
  if (!message?.trim()) return { ok: false, error: 'El mensaje es obligatorio.' };

  if (name.trim().length > 100)
    return { ok: false, error: 'El nombre no puede superar los 100 caracteres.' };

  if (!EMAIL_REGEX.test(email.trim()))
    return { ok: false, error: 'El formato del correo no es valido.' };

  if (email.trim().length > 200)
    return { ok: false, error: 'El correo no puede superar los 200 caracteres.' };

  if (subject.trim().length > 150)
    return { ok: false, error: 'El asunto no puede superar los 150 caracteres.' };

  if (message.trim().length < 10)
    return { ok: false, error: 'El mensaje debe tener al menos 10 caracteres.' };

  if (message.trim().length > 2000)
    return { ok: false, error: 'El mensaje no puede superar los 2000 caracteres.' };

  return { ok: true };
}

// ─── Email HTML Template ──────────────────────────────────────────────────────
function buildEmailHtml(payload: ContactPayload): string {
  const { name, email, subject, message } = payload;

  const escape = (str: string) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nuevo mensaje desde tu portafolio</title>
</head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f0f;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;border-bottom:1px solid rgba(0,238,252,0.15);">
              <p style="margin:0 0 8px;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:rgba(0,238,252,0.7);font-weight:600;">LuisDEV Portfolio</p>
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">Nuevo mensaje desde tu portafolio</h1>
            </td>
          </tr>
          <tr>
            <td style="background:#1a1a2e;padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr><td style="padding-bottom:4px;"><p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:rgba(0,238,252,0.6);font-weight:600;">Nombre</p></td></tr>
                <tr><td style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px 16px;"><p style="margin:0;font-size:15px;color:#e8eaf0;font-weight:500;">${escape(name)}</p></td></tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr><td style="padding-bottom:4px;"><p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:rgba(0,238,252,0.6);font-weight:600;">Correo</p></td></tr>
                <tr><td style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px 16px;"><a href="mailto:${escape(email)}" style="margin:0;font-size:15px;color:#00eefc;text-decoration:none;font-weight:500;">${escape(email)}</a></td></tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr><td style="padding-bottom:4px;"><p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:rgba(0,238,252,0.6);font-weight:600;">Asunto</p></td></tr>
                <tr><td style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px 16px;"><p style="margin:0;font-size:15px;color:#e8eaf0;font-weight:500;">${escape(subject)}</p></td></tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding-bottom:4px;"><p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:rgba(0,238,252,0.6);font-weight:600;">Mensaje</p></td></tr>
                <tr><td style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:16px;"><p style="margin:0;font-size:15px;color:#e8eaf0;line-height:1.7;white-space:pre-wrap;">${escape(message)}</p></td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#12121f;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.05);">
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.3);">Mensaje enviado desde el formulario de contacto de <a href="https://luisF3r.dev" style="color:rgba(0,238,252,0.5);text-decoration:none;">luisF3r.dev</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Route Handler ────────────────────────────────────────────────────────────
export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: 'Demasiadas solicitudes. Intenta de nuevo en unos minutos.' },
      { status: 429 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: 'El cuerpo de la solicitud no es valido.' },
      { status: 400 }
    );
  }

  if (payload.website) {
    return NextResponse.json({ message: 'Mensaje enviado correctamente.' }, { status: 200 });
  }

  const validation = validatePayload(payload);
  if (!validation.ok) {
    return NextResponse.json({ message: validation.error }, { status: 400 });
  }

  const apiKey       = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail    = process.env.FROM_EMAIL;

  if (!apiKey || !contactEmail || !fromEmail) {
    console.error('[contact/route] Missing required environment variables.');
    return NextResponse.json(
      { message: 'Error de configuracion del servidor. Intenta mas tarde.' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, subject, message } = payload;

  try {
    const { error } = await resend.emails.send({
      from:    fromEmail,
      to:      [contactEmail],
      replyTo: email.trim(),
      subject: `[Portafolio] ${subject.trim()}`,
      html:    buildEmailHtml({ name, email, subject, message }),
    });

    if (error) {
      console.error('[contact/route] Resend error:', error);
      return NextResponse.json(
        { message: 'No se pudo enviar el mensaje. Intenta de nuevo.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Mensaje enviado! Me pondre en contacto contigo pronto.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('[contact/route] Unexpected error:', err);
    return NextResponse.json(
      { message: 'Error inesperado del servidor. Intenta mas tarde.' },
      { status: 500 }
    );
  }
}

export async function GET():    Promise<NextResponse> { return methodNotAllowed(); }
export async function PUT():    Promise<NextResponse> { return methodNotAllowed(); }
export async function DELETE(): Promise<NextResponse> { return methodNotAllowed(); }
export async function PATCH():  Promise<NextResponse> { return methodNotAllowed(); }

function methodNotAllowed(): NextResponse {
  return NextResponse.json(
    { message: 'Metodo no permitido.' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

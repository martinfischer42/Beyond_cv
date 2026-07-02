type CvRequestBody = {
  firma?: unknown;
  vorname?: unknown;
  name?: unknown;
  email?: unknown;
  website?: unknown;
};

type VercelRequest = {
  method?: string;
  body?: CvRequestBody | string;
};

type VercelResponse = {
  status: (statusCode: number) => VercelResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string | string[]) => void;
};

declare const process: {
  env: Record<string, string | undefined>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fallbackToEmail = 'kontakt@martin-fischer-ai-marketing.de';
const fallbackFromEmail = 'lebenslauf@martin-fischer-ai-marketing.de';

function parseBody(body: VercelRequest['body']): CvRequestBody | null {
  if (!body) return null;
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as CvRequestBody;
    } catch {
      return null;
    }
  }

  return body;
}

function getStringValue(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildEmailContent(values: Required<Pick<CvRequestBody, 'firma' | 'vorname' | 'name' | 'email'>>, requestedAt: string) {
  const firma = getStringValue(values.firma);
  const vorname = getStringValue(values.vorname);
  const name = getStringValue(values.name);
  const email = getStringValue(values.email);

  const text = `Neue Anfrage für den Lebenslauf:\n\nFirma: ${firma}\nVorname: ${vorname}\nName: ${name}\nE-Mail: ${email}\n\nZeitpunkt: ${requestedAt}\n\nQuelle: martin-fischer-ai-marketing.de`;

  const html = `
    <p>Neue Anfrage für den Lebenslauf:</p>
    <p>
      Firma: ${escapeHtml(firma)}<br />
      Vorname: ${escapeHtml(vorname)}<br />
      Name: ${escapeHtml(name)}<br />
      E-Mail: ${escapeHtml(email)}
    </p>
    <p>Zeitpunkt: ${escapeHtml(requestedAt)}</p>
    <p>Quelle: martin-fischer-ai-marketing.de</p>
  `;

  return { html, text };
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  response.setHeader('Allow', 'POST');

  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Nur POST-Anfragen sind erlaubt.' });
  }

  const body = parseBody(request.body);
  if (!body) {
    return response.status(400).json({ message: 'Die Anfrage enthält keine gültigen Formulardaten.' });
  }

  if (getStringValue(body.website)) {
    return response.status(400).json({ message: 'Die Anfrage konnte nicht verarbeitet werden.' });
  }

  const firma = getStringValue(body.firma);
  const vorname = getStringValue(body.vorname);
  const name = getStringValue(body.name);
  const email = getStringValue(body.email);

  if (!firma || !vorname || !name || !email) {
    return response.status(400).json({ message: 'Bitte füllen Sie alle Pflichtfelder aus.' });
  }

  if (!emailPattern.test(email)) {
    return response.status(400).json({ message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return response.status(500).json({ message: 'Der E-Mail-Versand ist nicht konfiguriert.' });
  }

  const to = process.env.CV_REQUEST_TO_EMAIL || fallbackToEmail;
  const from = process.env.CV_REQUEST_FROM_EMAIL || fallbackFromEmail;
  const requestedAt = new Date().toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Berlin' });
  const { html, text } = buildEmailContent({ firma, vorname, name, email }, requestedAt);

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: 'Neue Lebenslauf-Anfrage über martin-fischer-ai-marketing.de',
      text,
      html,
      reply_to: email,
    }),
  });

  if (!resendResponse.ok) {
    return response.status(502).json({ message: 'Die E-Mail konnte nicht gesendet werden.' });
  }

  return response.status(200).json({ message: 'Die Anfrage wurde gesendet.' });
}

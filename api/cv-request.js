const REQUIRED_FIELDS = ['firma', 'vorname', 'name', 'email'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getStringValue(payload, key) {
  const value = payload[key];
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseBody(body) {
  if (!body) return {};
  if (typeof body === 'string') return JSON.parse(body);
  return body;
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Diese Anfrage ist nicht erlaubt.' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CV_REQUEST_TO_EMAIL;
  const fromEmail = process.env.CV_REQUEST_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return res.status(500).json({ error: 'Der E-Mail-Versand ist aktuell nicht konfiguriert.' });
  }

  let payload;

  try {
    payload = parseBody(req.body);
  } catch {
    return res.status(400).json({ error: 'Die Anfrage konnte nicht gelesen werden.' });
  }

  const [firma, vorname, name, email] = REQUIRED_FIELDS.map((field) => getStringValue(payload, field));

  if (!firma || !vorname || !name || !email) {
    return res.status(400).json({ error: 'Bitte füllen Sie alle Pflichtfelder aus.' });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' });
  }

  const requestedAt = new Intl.DateTimeFormat('de-DE', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/Berlin',
  }).format(new Date());

  const text = [
    'Neue Anfrage für den Lebenslauf:',
    '',
    `Firma: ${firma}`,
    `Vorname: ${vorname}`,
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Zeitpunkt: ${requestedAt}`,
    'Quelle: martin-fischer-ai-marketing.de',
  ].join('\n');

  const html = `
    <p>Neue Anfrage für den Lebenslauf:</p>
    <p>
      Firma: ${escapeHtml(firma)}<br />
      Vorname: ${escapeHtml(vorname)}<br />
      Name: ${escapeHtml(name)}<br />
      E-Mail: ${escapeHtml(email)}<br />
      Zeitpunkt: ${escapeHtml(requestedAt)}<br />
      Quelle: martin-fischer-ai-marketing.de
    </p>
  `;

  let resendResponse;

  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: 'Neue Lebenslauf-Anfrage über martin-fischer-ai-marketing.de',
        text,
        html,
      }),
    });
  } catch {
    return res.status(502).json({ error: 'Die Anfrage konnte nicht versendet werden. Bitte versuchen Sie es später erneut.' });
  }

  if (!resendResponse.ok) {
    return res.status(502).json({ error: 'Die Anfrage konnte nicht versendet werden. Bitte versuchen Sie es später erneut.' });
  }

  return res.status(200).json({ ok: true });
}

import { FormEvent, useEffect, useState } from 'react';

type FormValues = {
  firma: string;
  vorname: string;
  name: string;
  email: string;
  website: string;
};

type FormErrors = Partial<Record<Exclude<keyof FormValues, 'website'>, string>>;

const initialValues: FormValues = {
  firma: '',
  vorname: '',
  name: '',
  email: '',
  website: '',
};

const skills = [
  'AI Governance & Tooling',
  'Changemanagement',
  'Datenanalyse',
  'Erprobte Führungsfähigkeit im kleinen Team',
  'Produktevermarktung (SaaS, LKW, Bus, Logistik)',
  'E-Mail-Marketing',
  'Event-Management',
  'Markenmanagement',
  'Marketingstrategie',
  'PR & Kommunikation',
  'Social Media Strategie & Content',
  'Website Architektur & Content',
  'Budgetverantwortung',
];

const softSkills = [
  'Analytik & Entscheidungsstärke',
  'Diplomatisches Geschick',
  'Hands-on Mentalität',
  'Innere Motivation zur fortwährenden Weiterentwicklung',
  'Starke Kommunikationsfähigkeit',
  'Konfliktfähigkeit und konstruktive Vermittlung zwischen Stakeholdern',
];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.firma.trim()) errors.firma = 'Bitte geben Sie Ihre Firma an.';
  if (!values.vorname.trim()) errors.vorname = 'Bitte geben Sie Ihren Vornamen an.';
  if (!values.name.trim()) errors.name = 'Bitte geben Sie Ihren Namen an.';

  if (!values.email.trim()) {
    errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
  }

  return errors;
}

function DownloadGate() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(() => {
    if (typeof window === 'undefined') return false;

    return window.localStorage.getItem('cvRequestSubmitted') === 'true';
  });

  const onChange = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));

    if (key !== 'website' && errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }

    if (error) setError('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setError(
        nextErrors.email === 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
          ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
          : 'Bitte füllen Sie alle Pflichtfelder aus.',
      );
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/cv-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setIsSubmitted(false);
        window.localStorage.removeItem('cvRequestSubmitted');
        setError(
          result.error ??
            'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an kontakt@martin-fischer-ai-marketing.de.',
        );
        return;
      }

      window.localStorage.setItem('cvRequestSubmitted', 'true');
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(false);
      window.localStorage.removeItem('cvRequestSubmitted');
      setError(
        'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an kontakt@martin-fischer-ai-marketing.de.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="surface-card p-6 md:p-8">
      <div>
        <h2 className="text-xl font-semibold md:text-2xl">Lebenslauf als PDF</h2>
        <p className="mt-1 text-sm text-slate-600">Erst nach kurzer Anfrage wird der Download freigegeben.</p>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
        {!isSubmitted ? (
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {error && (
              <p
                className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700"
                role="alert"
              >
                {error}
              </p>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              {([
                { key: 'firma', label: 'Firma', type: 'text' },
                { key: 'vorname', label: 'Vorname', type: 'text' },
                { key: 'name', label: 'Name', type: 'text' },
                { key: 'email', label: 'E-Mail-Adresse', type: 'email' },
              ] as const).map((field) => (
                <label key={field.key} className="block text-sm font-semibold text-slate-800">
                  {field.label}
                  <input
                    type={field.type}
                    value={values[field.key]}
                    onChange={(event) => onChange(field.key, event.target.value)}
                    required
                    aria-invalid={Boolean(errors[field.key])}
                    className={`mt-1 w-full rounded-md border bg-white px-3 py-2 font-normal text-slate-800 outline-none transition focus:border-slate-400 ${
                      errors[field.key] ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors[field.key] && <span className="mt-1 block text-xs text-red-600">{errors[field.key]}</span>}
                </label>
              ))}
            </div>

            <label className="sr-only" aria-hidden="true">
              Website
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={(event) => onChange('website', event.target.value)}
              />
            </label>

            <p className="text-xs text-slate-600">
              Ich verwende Ihre Angaben ausschließlich zur Bearbeitung der Lebenslauf-Anfrage.
            </p>

            <button
              type="submit"
              className="cta-primary disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Anfrage wird gesendet …' : 'Anfrage senden'}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="font-semibold text-emerald-700">
              Vielen Dank. Ihre Anfrage wurde gesendet. Sie können den Lebenslauf jetzt herunterladen.
            </p>
            <a href="/Lebenslauf_Martin_Fischer.pdf" className="cta-primary" download>
              Lebenslauf herunterladen
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CvPage() {
  useEffect(() => {
    document.title = 'Lebenslauf | Martin Fischer';

    let description = document.querySelector('meta[name="description"]');

    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }

    description.setAttribute(
      'content',
      'Lebenslauf von Martin Fischer – Marketing Leader für Wachstum, Effizienz und AI-gestützte Skalierung.',
    );
  }, []);

  return (
    <section className="subpage-stack">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_240px] md:gap-10">
        <div className="space-y-4">
          <p className="kicker">Profil</p>
          <h1 className="text-3xl font-semibold md:text-5xl">Martin Fischer</h1>
          <p className="text-lg font-semibold text-slate-800 md:text-2xl">
            Marketing Leader für Wachstum, Effizienz und AI-gestützte Skalierung
          </p>
          <p className="max-w-4xl text-slate-600">
            Ich setze Marketing gezielt als strategisches Instrument zur Unterstützung von Unternehmenszielen ein und entwickle es
            systematisch weiter. Gleichzeitig professionalisiere ich Marketing-Teams so, dass Qualität, Konsistenz und Output deutlich
            steigen – bei hoher Motivation, Klarheit und Zufriedenheit im Team durch wirksame Führung.
          </p>
        </div>

        <img
          src="/images/Portrait_Lebenslauf.png"
          alt="Portrait von Martin Fischer"
          className="mx-auto h-52 w-52 rounded-full border-4 border-white object-cover shadow-lg md:h-60 md:w-60"
        />
      </div>
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="section-card space-y-4">
          <h2 className="text-2xl font-semibold">Fähigkeiten</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="section-card space-y-4">
          <h2 className="text-2xl font-semibold">Soft Skills</h2>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold md:text-3xl">Berufserfahrung</h2>
        <div className="space-y-4 border-l-2 border-slate-200 pl-5">
          <article className="section-card relative">
            <span className="absolute -left-[1.85rem] top-8 h-3 w-3 rounded-full bg-[#FF4A2D]" />
            <h3 className="text-xl font-semibold">Teamleitung Marketing</h3>
            <p className="text-slate-700">RIO | The Logistics Flow · TB Digital Services GmbH</p>
            <p className="text-sm text-slate-500">04/2024 – aktuell · München, Deutschland</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Transformation eines verkleinerten Marketing-Teams in eine hochperformante, AI-gestützte Marketing-Einheit mit klarem Business Impact.</li>
              <li>Aufbau eines skalierbaren Leistungsmodells durch Generalisten-Ansatz, KPI-basierte Steuerung und konsequente Automatisierung.</li>
              <li>Signifikante Steigerung von Effizienz, Output und Konsistenz trotz begrenzter Ressourcen.</li>
              <li>Nachhaltige Sicherung von Teamzufriedenheit und Entwicklung durch adaptive Führungsmodelle in einem dynamischen Umfeld.</li>
              <li>Etablierung eines klaren Performance-Frameworks mit messbaren Verbesserungen der Kern-KPIs in E-Mail-Marketing, Social Media und Website-Performance.</li>
              <li>Positionierung des Marketings als Vorreiter für AI-driven Arbeitsweisen innerhalb aller Non-Engineering-Bereiche.</li>
              <li>Aktive Unterstützung und Enablement anderer Abteilungen bei der Einführung KI-gestützter Prozesse, Strukturen und Arbeitsmodelle.</li>
            </ul>
          </article>

          <article className="section-card relative">
            <span className="absolute -left-[1.85rem] top-8 h-3 w-3 rounded-full bg-[#FF4A2D]" />
            <h3 className="text-xl font-semibold">Marketing Manager für Marketing Automation</h3>
            <p className="text-slate-700">RIO | The Logistics Flow · TB Digital Services GmbH</p>
            <p className="text-sm text-slate-500">11/2020 – 04/2024</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Transformation von ad-hoc E-Mail-Versand hin zu einer strukturierten Marketing-Automation-Architektur mit klaren Ziel- und KPI-Definitionen.</li>
              <li>Reduzierung der Plattformkosten um 85 % bei erhöhter Leistungsfähigkeit.</li>
              <li>Aufbau und Weiterentwicklung von Awareness- und später Lead-Nurturing-Kampagnen zur systematischen Unterstützung der Leadgenerierung.</li>
              <li>Priorisierung und Umsetzung der engen Verzahnung von Marketing Automation und CRM, inklusive Verbesserung von Datenqualität und Datenmodell.</li>
              <li>End-to-End-Verantwortung für Kampagnen, inklusive Sicherstellung konsistenter, zielgruppenorientierter und markenkonformer Botschaften über alle relevanten Kanäle hinweg.</li>
              <li>Strategische Steuerung der externen Kommunikation und PR in enger Ausrichtung an Unternehmenszielen und Markenpositionierung, übersetzt in konsistente Kampagnen- und Content-Logiken.</li>
            </ul>
          </article>

          <article className="section-card relative">
            <span className="absolute -left-[1.85rem] top-8 h-3 w-3 rounded-full bg-[#FF4A2D]" />
            <h3 className="text-xl font-semibold">Marketing Manager & Product Owner für CMS & Marketing Automation Plattform</h3>
            <p className="text-slate-700">RIO | The Logistics Flow · TB Digital Services GmbH</p>
            <p className="text-sm text-slate-500">03/2016 – 11/2020</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Strategische Ablösung eines kostenintensiven Enterprise-CMS Adobe Experience Manager durch eine flexible Open-Source-Plattform TYPO3.</li>
              <li>Reduktion der jährlichen Plattform- und Entwicklungskosten von ca. 700.000 € auf rund 55.000 €, bei gleichzeitiger deutlicher Steigerung von Flexibilität und Umsetzungsgeschwindigkeit.</li>
              <li>Tool-Owner-Verantwortung für Anforderungsdefinition, Systemauswahl, Umsetzung und Go-live in enger Abstimmung mit IT, externen Partnern und Management.</li>
              <li>Neustrukturierung der Website als leistungsfähiger Marken- und Kommunikationskanal, ausgerichtet an Unternehmensstrategie und Kundenbedürfnissen.</li>
              <li>Schaffung der technischen und strukturellen Grundlagen für SEO-, SEA- und Performance-Marketing-Maßnahmen im Zuge des Website-Relaunchs.</li>
              <li>Verantwortung für die Namensgebung digitaler Produkte sowie Sicherstellung einer konsistenten Produktarchitektur.</li>
              <li>Enge Verzahnung mit Product Ownern zur systematischen Überführung von Produktwissen in Marketing- und Kommunikationsstrukturen.</li>
              <li>Positionierung als Single Point of Contact für Product Owner und Marketing Manager zur Bündelung von Produkt-, Markt- und Kommunikationsanforderungen.</li>
              <li>Erste Erfahrungen im Bereich Marketing Automation mit Fokus auf Wissensaufbau und Grundlagenlegung für spätere Skalierung.</li>
            </ul>
          </article>

          <article className="section-card relative">
            <span className="absolute -left-[1.85rem] top-8 h-3 w-3 rounded-full bg-[#FF4A2D]" />
            <h3 className="text-xl font-semibold">Zusammenfassung der Anfänge</h3>
            <p className="text-slate-700">MAN Truck & Bus SE</p>
            <p className="text-sm text-slate-500">10/2010 – 03/2016 · München, Deutschland</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Teamleitung Business Development Digital Solutions 03/2015 – 03/2016</li>
              <li>Marketing u. Brand Manager 10/2013 – 03/2015</li>
              <li>Produktmarketing Experte Bus 10/2011 – 10/2013</li>
              <li>Projektkoordinator After Sales 10/2010 – 10/2011</li>
            </ul>
          </article>
        </div>
      </section>

      <article className="section-card space-y-2">
        <h2 className="text-2xl font-semibold">Akademischer Grad</h2>
        <p className="text-lg font-semibold">Diplom-Kaufmann</p>
        <p className="text-slate-700">Universität Bremen</p>
        <p className="text-sm text-slate-500">10/2004 – 08/2010 · Bremen</p>
      </article>

      <DownloadGate />
    </section>
  );
}

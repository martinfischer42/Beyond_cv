import { Link } from 'react-router-dom';

const focusAreas = [
  {
    title: 'AI-gestützte Marketing-Organisation',
    text: 'Aufbau klarer Operating Models, die Teams entlasten, Qualität sichern und schnellere Umsetzung ermöglichen.',
  },
  {
    title: 'Marketing Automation & CRM',
    text: 'Verzahnung von Prozessen, Daten und Plattformen für messbar effizientere Demand- und Revenue-Abläufe.',
  },
  {
    title: 'Marketing-Tech & CMS-Transformation',
    text: 'Strategische Modernisierung der MarTech-Landschaft mit Fokus auf Skalierbarkeit, Governance und Kostenwirkung.',
  },
];

export default function HomePage() {
  return (
    <section className="space-y-14 md:space-y-16">
      <div className="space-y-8 rounded-3xl border border-slate-200 bg-white px-7 py-10 md:px-12 md:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-600">Executive Portfolio</p>
        <div className="space-y-5">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Marketing Leadership für Wachstum, Effizienz und AI-gestützte Skalierung
          </h1>
          <p className="max-w-3xl text-lg text-slate-600 md:text-xl">
            Ich unterstütze Unternehmen dabei, Marketing als belastbare Wachstumsfunktion zu entwickeln: mit klarer
            Führung, effizienten Strukturen und AI-gestützter Umsetzung entlang der gesamten Revenue Journey.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/cases"
            className="rounded-md bg-accent-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-accent-600"
          >
            Cases mit Business Impact
          </Link>
          <Link
            to="/kontakt"
            className="rounded-md border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            Gespräch vereinbaren
          </Link>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold md:text-3xl">Kernbereiche</h2>
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {focusAreas.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

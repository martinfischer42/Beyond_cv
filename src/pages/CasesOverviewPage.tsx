import { Link } from 'react-router-dom';

const cases = [
  {
    title: 'AI-gestützte Skalierung eines Marketing-Teams',
    impact: 'Effizientere Teamleistung durch klare Rollen, standardisierte Workflows und AI-unterstützte Execution.',
    to: '/cases/ai-marketing-scaling',
  },
  {
    title: 'Marketing Automation von ad-hoc zu skalierbarer Architektur',
    impact: 'Reduktion der Marketing-Automation-Plattformkosten um 85 % bei gleichzeitig höherer Prozessstabilität.',
    to: '/cases/marketing-automation',
  },
  {
    title: 'CMS-Migration mit signifikanter Kostenreduktion',
    impact: 'Senkung der CMS-/Plattformkosten von ca. 700.000 € jährlich auf rund 55.000 € bei stabiler Betriebsfähigkeit.',
    to: '/cases/cms-migration',
  },
];

export default function CasesOverviewPage() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-600">Business Impact</p>
        <h1 className="text-3xl font-semibold md:text-4xl">Ausgewählte Transformations-Cases</h1>
        <p className="text-lg text-slate-600">
          Drei Beispiele, wie strategische Marketing-Führung zu messbarer Effizienz, höherer Skalierbarkeit und
          belastbarerem Wachstum geführt hat.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {cases.map((item) => (
          <article key={item.to} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Wirkungsnachweis</p>
            <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
            <p className="mt-4 flex-1 text-slate-600">{item.impact}</p>
            <Link to={item.to} className="mt-6 inline-block font-semibold text-accent-600 hover:text-accent-500">
              Vollständigen Case ansehen →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

const cases = [
  {
    title: 'AI-gestützte Skalierung eines Marketing-Teams',
    summary: 'Aufbau einer effizienteren Marketing-Organisation mit klaren Prozessen und AI-gestützter Umsetzung.',
    to: '/cases/ai-marketing-scaling',
  },
  {
    title: 'Marketing Automation von ad-hoc zu skalierbarer Architektur',
    summary: 'Transformation der Automatisierung mit messbar effizienterer Plattform- und Prozessstruktur.',
    to: '/cases/marketing-automation',
  },
  {
    title: 'CMS-Migration mit signifikanter Kostenreduktion',
    summary: 'Strategische Plattformmigration inklusive Governance, Betriebssicherheit und klarer Kosteneffekte.',
    to: '/cases/cms-migration',
  },
];

export default function CasesOverviewPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold">Cases</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((item) => (
          <article key={item.to} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.summary}</p>
            <Link to={item.to} className="mt-4 inline-block font-medium text-accent-600 hover:text-accent-500">
              Case lesen →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="space-y-6 rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">Executive Portfolio</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          Marketing Leadership für Wachstum, Effizienz und AI-gestützte Skalierung
        </h1>
        <p className="max-w-3xl text-lg text-slate-600">
          Martin Fischer unterstützt Unternehmen dabei, Marketing als strategisches Instrument für Wachstum,
          Effizienz und messbaren Business Impact einzusetzen.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/cases" className="rounded-md bg-accent-500 px-5 py-3 font-medium text-white hover:bg-accent-600">
            Cases ansehen
          </Link>
          <Link to="/kontakt" className="rounded-md border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-100">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          'AI-gestützte Marketing-Organisation',
          'Marketing Automation & CRM',
          'Marketing-Tech & CMS-Transformation',
        ].map((item) => (
          <article key={item} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold">{item}</h2>
            <p className="mt-3 text-slate-600">
              Strategische und operative Umsetzung mit Fokus auf skalierbare Strukturen, klare Verantwortlichkeiten und
              nachhaltige Leistungsfähigkeit im Marketing.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

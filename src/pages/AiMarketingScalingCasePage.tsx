import { Link } from 'react-router-dom';

const highlights = [
  'AI-gestützte Marketing-Einheit',
  'Generalisten-Ansatz mit klaren Verantwortlichkeiten',
  'KPI-Framework für E-Mail, Social Media und Website',
] as const;

const sections = [
  {
    title: 'Ausgangslage / Herausforderung',
    text: 'Nach einer Teamverkleinerung musste Marketing trotz begrenzter Ressourcen verlässlich liefern. Die bestehende Arbeitsweise war stark auf Einzelbeiträge ausgelegt und nur eingeschränkt skalierbar.',
  },
  {
    title: 'Strategischer Ansatz',
    text: 'Aufbau eines leistungsfähigen Generalisten-Modells mit klaren Prioritäten, standardisierten Prozessen und AI als integraler Bestandteil der täglichen Wertschöpfung.',
  },
  {
    title: 'Umsetzung / Hebel',
    text: 'Einführung eines KPI-basierten Steuerungsmodells, Automatisierung repetitiver Aufgaben und AI-gestützte Workflows für Recherche, Content-Entwicklung, Qualitätssicherung und Kampagnenadaption.',
  },
  {
    title: 'Ergebnis / Business Impact',
    text: 'Höhere Konsistenz, Qualität und Output trotz kleinerer Teamgröße. Marketing etablierte sich als Vorreiter für AI-driven Arbeitsweisen in Non-Engineering-Bereichen.',
  },
  {
    title: 'Relevanz für zukünftige Rollen',
    text: 'Besonders relevant für Führungsrollen, die Wachstum unter Ressourcenrestriktionen ermöglichen und Marketing als strategische Transformationsfunktion aufstellen wollen.',
  },
] as const;

export default function AiMarketingScalingCasePage() {
  return (
    <section className="space-y-10 md:space-y-14">
      <div className="grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 p-7 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700">Case 01</p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">AI-gestützte Marketing-Team-Transformation</h1>
          <p className="text-lg text-slate-600">
            Transformation eines verkleinerten Teams in eine leistungsfähige Marketing-Einheit mit belastbarer
            Delivery-Struktur und klarer KPI-Steuerung.
          </p>
          <ul className="space-y-2 text-sm font-medium text-slate-700">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[280px] bg-slate-200">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
            alt="Marketing-Team arbeitet datenbasiert und strategisch zusammen"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
        </div>
      </div>

      <div className="grid gap-5">
        {sections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 text-slate-600">{section.text}</p>
          </article>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">Weiterführung</p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Dieses Setup lässt sich direkt auf neue Growth-Phasen übertragen.</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/cases/marketing-automation" className="rounded-md bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100">
            Nächster Case
          </Link>
          <Link to="/kontakt" className="rounded-md border border-slate-300/40 px-5 py-3 font-semibold text-white hover:bg-white/10">
            Gespräch anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}

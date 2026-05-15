import { Link } from 'react-router-dom';

const highlights = ['AEM → TYPO3 Migration', '700.000 € → 55.000 € jährliche Kosten', 'Tool-Owner von Anforderung bis Go-live'] as const;

const sections = [
  {
    title: 'Ausgangslage / Herausforderung',
    text: 'Ein kostenintensives Enterprise-CMS band erhebliche Budgetanteile und verlangsamte Marketing-seitige Umsetzung. Gleichzeitig stiegen Anforderungen an Performance, SEO/SEA-Fähigkeit und Content-Flexibilität.',
  },
  {
    title: 'Strategischer Ansatz',
    text: 'Ablösung von Adobe Experience Manager durch TYPO3 mit Fokus auf Wirtschaftlichkeit, Governance, Time-to-Market und technischer Anschlussfähigkeit für Performance-Marketing.',
  },
  {
    title: 'Umsetzung / Hebel',
    text: 'Verantwortung als Tool Owner für Anforderungsdefinition, Systemauswahl, Implementierungssteuerung und Go-live. Parallel wurden strukturelle Grundlagen für SEO, SEA und datengetriebene Weiterentwicklung geschaffen.',
  },
  {
    title: 'Ergebnis / Business Impact',
    text: 'Reduktion jährlicher Plattform- und Entwicklungskosten von ca. 700.000 € auf rund 55.000 €. Zugleich stiegen Flexibilität und Umsetzungsgeschwindigkeit deutlich.',
  },
  {
    title: 'Relevanz für zukünftige Rollen',
    text: 'Starker Nachweis für Führungsrollen an der Schnittstelle von Marketingstrategie, Technologieentscheidungen und Budgetverantwortung.',
  },
] as const;

export default function CmsMigrationCasePage() {
  return (
    <section className="space-y-10 md:space-y-14">
      <div className="grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 p-7 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700">Case 03</p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">CMS-/Marketing-Tech-Transformation</h1>
          <p className="text-lg text-slate-600">
            Migration von einem teuren Enterprise-Setup zu einer deutlich effizienteren Plattform mit belastbarer
            Grundlage für Wachstum, Geschwindigkeit und Performance-Marketing.
          </p>
          <ul className="space-y-2 text-sm font-medium text-slate-700">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[280px] bg-slate-200">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="Moderne digitale Infrastruktur als Basis für B2B-Markenkommunikation"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/15 to-transparent" />
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
        <h2 className="text-2xl font-semibold md:text-3xl">Technologieentscheidungen mit klarer Ergebnisverantwortung.</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/cases" className="rounded-md bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100">
            Zur Case-Übersicht
          </Link>
          <Link to="/kontakt" className="rounded-md border border-slate-300/40 px-5 py-3 font-semibold text-white hover:bg-white/10">
            Gespräch anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}

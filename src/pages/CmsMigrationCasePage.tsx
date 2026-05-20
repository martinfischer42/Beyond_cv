import { Link } from 'react-router-dom';

const highlights = ['AEM → TYPO3 Migration', '700.000 € → 55.000 € jährliche Kosten', 'Tool-Owner von Anforderung bis Go-live'] as const;

const sections = [
  {
    title: 'Ausgangslage',
    text: 'Ein kostenintensives Enterprise-CMS band erhebliche Budgetanteile. Die zusätzlich erforderliche externe Entwicklungsunterstützung machte den Betrieb einer einfachen Website teuer und unflexibel. Getrieben von Einsparzielen sollte hier eine neue Lösung gefunden werden. Mehr Flexibilität bei geringeren Kosten war der Anspruch.',
  },
  {
    title: 'Strategischer Ansatz',
    text: 'Im ersten Schritt wurde eine umfassende Umfeldanalyse durchgeführt. Cloud-Lösungen und On premise-Anbieter, WYSISWYG und Headless, unterschiedliche Programmiersprachen wurden gegeneinander gechallenged.',
  },
  {
    title: 'Umsetzung',
    text: 'Typo3 als etablierte Programmiersprache ist wegen der hohen Flexibilität und der hohen Verfügbarkeit externer Entwickler sollte die Basis stellen. In der Funktion als Product Owner war ich in der Verantwortung für die Anforderungsdefinition, Systemauswahl, Implementierungssteuerung und Go-live. Parallel wurden strukturelle Grundlagen für SEO, SEA und datengetriebene Weiterentwicklung geschaffen. Besonders herausfordernd war die Zeit, in der dieses Projekt fertiggestellt werden musste. Der Corona Lockdown wurde ausgerufen und mein erstes Kind wurde geboren. ',
  },
  {
    title: 'Ergebnis / Business Impact',
    text: 'Reduktion jährlicher Plattform- und Entwicklungskosten von ca. 700.000 € auf rund 55.000 € hat sich bewahrheitet und ist auch heute (2026) noch aktuell. Zugleich stiegen Flexibilität und Umsetzungsgeschwindigkeit deutlich. Zusammen mit einem internen UX Designer entwickeln wir das CMS kontinuierlich weiter. Der nächste plausible Schritt wäre nun, die Möglichkeiten durch KI zu evaluieren. Denn heute ist eine React SPA als auch ohne Software Engineering möglich.',
  },
  {
    title: 'Relevanz für zukünftige Rollen',
    text: 'Starker Nachweis für Führungsrollen an der Schnittstelle von Marketingstrategie, Technologieentscheidungen und Budgetverantwortung.',
  },
] as const;

export default function CmsMigrationCasePage() {
  return (
    <section className="subpage-stack">
      <div className="surface-card grid gap-8 overflow-hidden lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 p-7 md:p-10">
          <p className="kicker">Case 03</p>
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
          <article key={section.title} className="section-card">
            <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 text-slate-600">{section.text}</p>
          </article>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white md:p-10">
        <h2 className="text-2xl font-semibold md:text-3xl">Technologieentscheidungen mit klarer Ergebnisverantwortung.</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/cases" className="cta-secondary border-white/40 bg-white text-slate-900 hover:bg-slate-100">
            Zur Case-Übersicht
          </Link>
          <Link to="/kontakt" className="cta-primary">
            Gespräch anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}

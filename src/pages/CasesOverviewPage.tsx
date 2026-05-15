import { Link } from 'react-router-dom';

const caseVisuals = {
  ai: {
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80',
    alt: 'Strategie-Workshop in einem professionellen Teamsetting',
  },
  automation: {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Dashboard und KPI-Analyse im B2B-Marketing-Kontext',
  },
  cms: {
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    alt: 'Digitale Infrastruktur als Grundlage für skalierbares Marketing',
  },
} as const;

const cases = [
  {
    title: 'AI-gestützte Marketing-Team-Transformation',
    impact: 'Transformation eines verkleinerten Teams in eine leistungsfähige, AI-gestützte Marketing-Einheit mit höherer Konsistenz, Qualität und Output.',
    highlights: ['AI-gestützte Marketing-Einheit', 'KPI-Framework für E-Mail, Social Media und Website'],
    to: '/cases/ai-marketing-scaling',
    visual: caseVisuals.ai,
  },
  {
    title: 'Marketing Automation & CRM-Verzahnung',
    impact: 'Von ad-hoc E-Mail-Versand zu einer strukturierten Automation-Architektur mit klaren KPIs, verbesserten Datenmodellen und stabilen Prozessen.',
    highlights: ['85 % Plattformkostenreduktion', 'Awareness- & Lead-Nurturing-Strecken'],
    to: '/cases/marketing-automation',
    visual: caseVisuals.automation,
  },
  {
    title: 'CMS-/Marketing-Tech-Transformation',
    impact: 'Ablösung eines kostenintensiven Enterprise-CMS durch TYPO3 mit signifikant reduzierter Kostenbasis und höherer Umsetzungsgeschwindigkeit.',
    highlights: ['700.000 € → 55.000 € jährliche Kosten', 'Tool-Owner von Auswahl bis Go-live'],
    to: '/cases/cms-migration',
    visual: caseVisuals.cms,
  },
] as const;

export default function CasesOverviewPage() {
  return (
    <section className="space-y-14 md:space-y-20">
      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-7 md:p-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700">Executive Portfolio</p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">Cases mit Business Impact</h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Drei Transformations-Cases als belastbare Wirkungsnachweise für strategische Marketingführung,
            Technologie-Entscheidungen und skalierbare B2B-Execution.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-900 p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Impact Highlights</p>
          <ul className="mt-4 space-y-4 text-base md:text-lg">
            <li>85 % Plattformkostenreduktion in Marketing Automation</li>
            <li>700.000 € → 55.000 € jährliche CMS-/Plattformkosten</li>
            <li>AI-gestützte Teamstruktur für mehr Output bei begrenzten Ressourcen</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {cases.map((item) => (
          <article key={item.to} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-44 bg-slate-200">
              <img src={item.visual.src} alt={item.visual.alt} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/15 to-transparent" />
            </div>
            <div className="space-y-4 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Business-Impact-Case</p>
              <h2 className="text-2xl font-semibold text-slate-900">{item.title}</h2>
              <p className="text-slate-600">{item.impact}</p>
              <ul className="space-y-2 text-sm font-medium text-slate-700">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <Link to={item.to} className="inline-block font-semibold text-accent-700 hover:text-accent-800 hover:underline">
                Vollständigen Case ansehen →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Nächster Schritt: Austausch zur Rolle</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Wenn Sie die Cases auf Ihre aktuelle Wachstums- oder Transformationssituation übertragen möchten,
          freue ich mich auf ein Gespräch.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/kontakt" className="rounded-md bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700">
            Gespräch vereinbaren
          </Link>
          <Link to="/profil" className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
            Profil ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}

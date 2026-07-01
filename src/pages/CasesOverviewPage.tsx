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
  aiFirst: {
    src: '/images/hero.png',
    alt: 'Abstrakte digitale Arbeitsumgebung als Symbol für AI-first Transformation',
  },
} as const;

const cases = [
  {
    title: 'Team-Transformation',
    impact: 'Transformation eines verkleinerten Teams in eine leistungsfähige, AI-fokussierte Marketing-Einheit mit höherer Konsistenz, Qualität und Output.',
    highlights: ['AI-gestützte Marketing-Einheit', 'KPI-Framework für E-Mail, Social Media und Website'],
    to: '/cases/ai-marketing-scaling',
    visual: caseVisuals.ai,
  },
  {
    title: 'Einführung Kampagnen-Management',
    impact: 'Von ungesteuerten Einzelmaßnahmen zur Orchestrierung eines Marketing-Mixes mit starker KI-Unterstützung.',
    highlights: ['Steigerung der Leadgenerierung', 'Steigerung der Team-Produktivität'],
    to: '/cases/marketing-automation',
    visual: caseVisuals.automation,
  },
  {
    title: 'CMS-/Marketing-Tech-Transformation',
    impact: 'Ablösung eines kostenintensiven Enterprise-CMS durch TYPO3 mit signifikant reduzierter Kostenbasis und höherer Umsetzungsgeschwindigkeit.',
    highlights: ['700.000 € → 55.000 € jährliche Kosten', 'Verantwortung von Auswahl bis Go-live'],
    to: '/cases/cms-migration',
    visual: caseVisuals.cms,
  },
  {
    title: 'AI-first Unternehmenstransformation',
    impact: 'Mitgestaltung einer unternehmensweiten AI-first Arbeitsweise mit Tool Ownership, Governance, Enablement und messbarer Reifegradentwicklung.',
    highlights: ['Tool Ownership für ChatGPT', 'AI Community und Enablement'],
    to: '/cases/ai-first-transformation',
    visual: caseVisuals.aiFirst,
  },
] as const;

export default function CasesOverviewPage() {
  return (
    <section className="subpage-stack">
      <div className="surface-card grid gap-6 p-7 md:p-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="kicker">Executive Portfolio</p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">Cases mit Business Impact</h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Vier Transformations-Cases als belastbare Wirkungsnachweise für strategische Marketingführung,
            Technologie-Entscheidungen und skalierbare B2B-Execution.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-900 p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Impact Highlights</p>
          <ul className="mt-4 space-y-4 text-base md:text-lg">
            <li>85 % Plattformkostenreduktion in Marketing Automation</li>
            <li>700.000 € → 55.000 € jährliche CMS-/Plattformkosten</li>
            <li>AI-gestützte Teamstruktur für mehr Output bei begrenzten Ressourcen</li>
            <li>AI-first Transformation mit Governance, Enablement und Reifegradmessung</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cases.map((item) => (
          <article key={item.to} className="surface-card overflow-hidden">
            <div className="relative h-44 bg-slate-200">
              <img src={item.visual.src} alt={item.visual.alt} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/15 to-transparent" />
            </div>
            <div className="space-y-4 p-6">
              <p className="kicker text-xs">Business-Impact-Case</p>
              <h2 className="text-2xl font-semibold text-slate-900">{item.title}</h2>
              <p className="text-slate-600">{item.impact}</p>
              <ul className="space-y-2 text-sm font-medium text-slate-700">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <Link to={item.to} className="link-inline no-underline">
                Vollständigen Case ansehen →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="surface-card p-7 md:p-10">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Nächster Schritt: Austausch zur Rolle</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Wenn Sie die Cases auf Ihre aktuelle Wachstums- oder Transformationssituation übertragen möchten,
          freue ich mich auf ein Gespräch.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/kontakt" className="cta-primary">
            Gespräch vereinbaren
          </Link>
        </div>
      </div>
    </section>
  );
}

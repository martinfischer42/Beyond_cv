import { Link } from 'react-router-dom';

const highlights = ['Steigerung der Leadgenerierung', 'Automation-Architektur', 'Fundiertes KPI Tracking'] as const;

const sections = [
  {
    title: 'Ausgangslage',
    text: 'Die Verantwortlichen der Kanäle E-Mail, Website, Social Media & Event haben viele gute aber isolierte Einzelmaßnahmen umgesetzt. So konnten die Maßnahmen sich gegenseitig nicht stützen und die Messung der Zielerreichung (OKR) war unmöglich.',
  },
  {
    title: 'Strategischer Ansatz',
    text: 'Ich habe eine Kampagnenplanung eingeführt. Die Kernfrage jeder Kampagne war: "Welcher Marketing-Mix kann das nächste gesteckte Ziel am wirkungsvollsten erreichen?" Die gemeinsame Planung, Ausgestaltung und Messung einer Kampagne sollte Erfolg oder Misserfolg steuerbar machen.',
  },
  {
    title: 'Umsetzung',
    text: 'Aus neuen Objectives (OKR) habe ich Ziele für das Marketing-Team abgeleitet. In einer gemeinsamen Redaktionsplanung hat das Team den Marketing-Mix definiert und die relevanten KPIs abgestimmt. Die Messung der Kanal-Performance wurde auf eine Plattform gebracht. So war die Steuerung auf Kampagnenebene möglich. KI hat bei Planung, der Contenterstellung und der Messung eine zunehmend wichtig Rolle bekommen. Besonders bei der Content-Vorbereitung und in der Übernahme zeitaufwändiger, repetitiver Aufgaben war die KI wie ein eigenes Teammitglied. Auch die Datenanalyse wäre ohne KI so nicht möglich gewesen.',
  },
  {
    title: 'Ergebnis',
    text: 'Erstmalig gesteuerte Leadgenerierung mit kontinuierlicher Verbesserung. Es wurde möglich, themenspezifische Leadgenerierung zu betreiben und solide Zahlen auch für das Management zu liefern.',
  },
  {
    title: 'Relevanz für zukünftige Rollen',
    text: 'Relevanter Nachweis für Rollen mit Verantwortung für Demand Generation, Revenue Operations und operative Exzellenz im B2B-Marketing.',
  },
] as const;

export default function MarketingAutomationCasePage() {
  return (
    <section className="space-y-10 md:space-y-14">
      <div className="grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 p-7 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700">Case 02</p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">Kampagnenmanagement</h1>
          <p className="text-lg text-slate-600">
            Ganzheitliche Orchestrierung vormals losgelöster Marketing-Maßnahmen zu Erhöhung des Wirkungsgrades.
          </p>
          <ul className="space-y-2 text-sm font-medium text-slate-700">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[280px] bg-slate-200">
          <img
            src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=80"
            alt="Analytische Auswertung von Kampagnen- und CRM-Daten"
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
        <h2 className="text-2xl font-semibold md:text-3xl">Von Prozessklarheit zu messbarer Wirkung.</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/cases/cms-migration" className="rounded-md bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100">
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

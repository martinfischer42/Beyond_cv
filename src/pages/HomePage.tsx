import { Link } from 'react-router-dom';

const valuePillars = [
  {
    title: 'Marketing Leadership & Team Enablement',
    text: 'Ich baue Marketing-Teams mit klaren Rollen, fokussierter Priorisierung und verlässlicher Delivery-Kultur auf – für mehr Qualität, Konsistenz und Motivation.',
  },
  {
    title: 'AI Enablement & skalierbare Prozesse',
    text: 'Ich integriere AI dort, wo sie tatsächlich Wirkung erzeugt: in Workflows, Produktion, Qualitätssicherung und Entscheidungsprozessen.',
  },
  {
    title: 'Marketing Operations, Performance & Technologie',
    text: 'Ich verbinde Martech, CRM und KPI-Steuerung zu belastbaren Systemen, die Wachstum unterstützen und gleichzeitig operative Komplexität reduzieren.',
  },
];

const impactCases = [
  {
    title: 'AI-gestützte Teamtransformation',
    result: 'Aus einem verkleinerten Team entstand eine hochperformante, AI-gestützte Marketing-Einheit mit höherem Output und stabiler Qualität.',
  },
  {
    title: 'Kostenreduktion Marketing Automation',
    result: 'Plattformkosten im Marketing-Automation-Stack wurden um 85 % reduziert – bei gleichzeitig höherer Steuerbarkeit und besserer Prozessqualität.',
  },
  {
    title: 'CMS-Migration mit Business-Effekt',
    result: 'Ablösung eines teuren Enterprise-CMS durch TYPO3; jährliche Plattform- und Entwicklungskosten von ~700.000 € auf ~55.000 € gesenkt.',
  },
  {
    title: 'Strukturierte Automation-Architektur',
    result: 'Einführung einer skalierbaren Architektur mit sauberer CRM-Verzahnung, verbesserter Datenqualität und messbar robusteren Prozessen.',
  },
];

export default function HomePage() {
  return (
    <section className="space-y-16 md:space-y-24">
      <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-8 px-7 py-10 md:px-12 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-700">Executive Positioning</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
            Marketing Leadership für Wachstum, Effizienz und AI-gestützte Skalierung
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 md:text-xl">
            Ich führe B2B-Marketing als strategische Unternehmensfunktion: mit klarer Struktur, messbarer Performance
            und Teams, die komplexe Angebote verständlich in Business Impact übersetzen.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/cases"
              className="rounded-md bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-700"
            >
              Cases mit Business Impact
            </Link>
            <Link
              to="/kontakt"
              className="rounded-md border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              Gespräch vereinbaren
            </Link>
            <a
              href="https://www.linkedin.com/in/martin-fischer-299b19116"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              LinkedIn ansehen
            </a>
          </div>
        </div>

        <div className="relative min-h-[380px] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
            alt="Executive Meeting mit Fokus auf Strategie und Entscheidungsfindung"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-800/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
            <p className="max-w-md text-base md:text-lg">
              Fokus auf B2B-Positionierung, Marketing Operations und AI Enablement für nachhaltige Skalierung.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-7 md:p-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700">Positionierung</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Executive Summary</h2>
          <p className="text-lg text-slate-600">
            Relevant für Unternehmen, die Marketing von einer operativen Funktion zu einem strategischen
            Werttreiber entwickeln wollen – besonders in komplexen B2B-Umfeldern, Transformationen und
            Wachstumsphasen.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
          alt="Teamwork und Leadership in einem professionellen Business-Umfeld"
          className="h-64 w-full rounded-2xl object-cover md:h-full"
        />
      </div>

      <div className="space-y-7">
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Kernkompetenzen</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {valuePillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-slate-600">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="space-y-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Business Impact</h2>
          <Link to="/cases" className="text-base font-semibold text-accent-700 hover:text-accent-800 hover:underline">
            Alle Cases ansehen →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {impactCases.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Impact 0{index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.result}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-7 md:p-10 lg:grid-cols-[1fr_1.1fr]">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
          alt="Leadership und kollaborative Arbeitsweise mit Fokus auf Struktur und Ergebnisse"
          className="h-72 w-full rounded-2xl object-cover"
        />
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700">Arbeitsweise & Führung</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Klar führen. Strukturiert skalieren.</h2>
          <p className="text-slate-600">
            Ich kombiniere strategisches Denken mit operativer Exzellenz: klare Prioritäten, belastbare Prozesse,
            praktikable AI-Integration und ein Führungsstil, der Teams stärkt und Verantwortung fördert.
          </p>
          <p className="text-slate-600">
            So wird Marketing zur verlässlichen Schnittstelle zwischen Business-Zielen, Technologie und messbaren
            Ergebnissen – mit hoher Umsetzungsqualität auch unter Veränderungsdruck.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-900 px-7 py-10 text-white md:px-10 md:py-12">
        <h2 className="text-3xl font-semibold md:text-4xl">Lassen Sie uns über Wirkung sprechen.</h2>
        <p className="mt-3 max-w-3xl text-lg text-slate-200">
          Wenn Sie Marketing strukturell stärken, AI wirksam integrieren und nachhaltiges Wachstum ermöglichen wollen,
          freue ich mich auf den Austausch.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to="/kontakt"
            className="rounded-md bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Kontakt aufnehmen
          </Link>
          <a
            href="mailto:contact@martin-fischer.eu"
            className="rounded-md border border-slate-300/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            E-Mail senden
          </a>
        </div>
      </div>
    </section>
  );
}

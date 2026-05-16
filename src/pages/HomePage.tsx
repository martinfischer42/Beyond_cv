import { useState } from 'react';
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
  const [heroImageError, setHeroImageError] = useState(false);

  return (
    <section className="space-y-16 pb-2 md:space-y-24">
      <div className="relative isolate min-h-[560px] overflow-hidden bg-[#07090D] md:min-h-[680px] md:h-[82vh]">
        {!heroImageError && (
          <img
            src="/images/strategic_leadership_for_growth_and_impact.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            onError={() => setHeroImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#07090D]/95 via-[#07090D]/80 to-[#0B0F14]/35" />
        <div className="absolute inset-0 bg-[#07090D]/35" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-end px-5 pb-12 md:px-10 md:pb-16 lg:pb-20">
          <div className="max-w-[1100px] space-y-6">
            <h1 className="text-white text-[clamp(3.1rem,7vw,7.2rem)] font-black leading-[0.98]">
              Marketing leadership that turns complexity into growth.
            </h1>
            <p className="text-base font-semibold uppercase tracking-[0.08em] text-white/90 md:text-lg">
              B2B Marketing <span className="px-1.5 text-[#FF4A2D]">|</span> Positioning{' '}
              <span className="px-1.5 text-[#FF4A2D]">|</span> AI Enablement{' '}
              <span className="px-1.5 text-[#FF4A2D]">|</span> Growth
            </p>
          </div>
        </div>
      </div>

      <section id="about" className="bg-[#F7F4EF]">
        <div className="mx-auto grid w-full max-w-content gap-8 px-5 py-10 md:px-8 md:py-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <p className="text-xl text-slate-700 md:text-2xl">
            I partner with ambitious B2B organizations to clarify positioning, activate AI-enabled marketing, and
            build the systems and teams that drive sustainable growth.
          </p>
          <div className="lg:justify-self-end">
            <Link
              to="/kontakt"
              className="inline-flex rounded-md bg-[#FF4A2D] px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#E8452A]"
            >
              Let&apos;s connect
            </Link>
          </div>
        </div>
      </section>

      <div id="impact" className="mx-auto w-full max-w-content space-y-7 px-5 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Business Impact</h2>
          <Link to="/cases" className="text-base font-semibold text-[#FF4A2D] hover:text-[#E8452A] hover:underline">
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

      <div id="leadership" className="mx-auto w-full max-w-content space-y-7 px-5 md:px-8">
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

      <div className="mx-auto grid w-full max-w-content gap-8 rounded-3xl border border-slate-200 bg-white p-7 md:px-10 md:py-10 lg:grid-cols-[1fr_1.1fr]">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
          alt="Leadership und kollaborative Arbeitsweise mit Fokus auf Struktur und Ergebnisse"
          className="h-72 w-full rounded-2xl object-cover"
        />
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#FF4A2D]">Arbeitsweise & Führung</p>
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

      <div className="mx-auto w-full max-w-content rounded-3xl border border-slate-200 bg-slate-900 px-7 py-10 text-white md:px-10 md:py-12">
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

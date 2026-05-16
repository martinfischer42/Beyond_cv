import { Link } from 'react-router-dom';

const proofPoints = [
  {
    metric: '85 % geringere Plattformkosten',
    detail: 'durch Neuaufstellung der Marketing-Technologie.',
  },
  {
    metric: '700.000 € → 55.000 € p.a.',
    detail: 'durch Ablösung eines Enterprise-CMS und Aufbau eines flexibleren Setups.',
  },
  {
    metric: 'AI-gestütztes Marketing-Team aufgebaut',
    detail: 'mit höherem Output, klareren Prozessen und KPI-basierter Steuerung.',
  },
];

export default function HomePage() {
  return (
    <section className="space-y-8 pb-8 md:space-y-12 md:pb-12">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#07090D] md:min-h-[660px]">
        <img
          src="/images/hero.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07090D]/92 via-[#07090D]/78 to-[#07090D]/42" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-end px-5 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36">
          <div className="max-w-[900px]">
            <h1 className="text-[clamp(1.85rem,4.1vw,3.5rem)] font-black leading-[1.08] text-white">
              Marketing Leadership für B2B-Wachstum, Effizienz und AI-gestützte Skalierung.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-content px-5 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-[#F7F4EF] px-6 py-8 shadow-sm md:px-10 md:py-10">
          <p className="max-w-4xl text-base leading-relaxed text-slate-700 md:text-xl">
            Ich helfe Unternehmen, komplexe Produkte verständlich zu positionieren, Marketing-Teams leistungsfähiger
            zu machen und Prozesse, Daten und Technologie so zu verbinden, dass messbarer Business Impact entsteht.
          </p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-600 md:text-sm">
            Marketing Lead · Head of Marketing · B2B Software · Logistik · Marketing Automation · AI Enablement
          </p>

          <div className="mt-6 flex flex-wrap gap-3 md:gap-4">
            <Link
              to="/profil"
              className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 md:text-base"
            >
              Lebenslauf ansehen
            </Link>

            <Link
              to="/kontakt"
              className="rounded-md bg-[#FF4A2D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#E8452A] md:text-base"
            >
              Gespräch vereinbaren
            </Link>

            <a
              href="https://www.linkedin.com/in/martin-fischer-299b19116"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 md:text-base"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-content gap-4 px-5 md:grid-cols-3 md:px-8">
        {proofPoints.map((point) => (
          <article key={point.metric} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xl font-bold leading-tight text-slate-900 md:text-2xl">{point.metric}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">{point.detail}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-content px-5 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-8 text-white md:px-10 md:py-10">
          <p className="max-w-4xl text-lg leading-relaxed text-slate-100 md:text-2xl">
            Ich bin offen für Rollen als Marketing Lead, Teamlead Marketing oder Head of Marketing — besonders in B2B
            Software, Logistik und digitalen Services.
          </p>

          <div className="mt-6">
            <Link
              to="/kontakt"
              className="inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 md:text-base"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
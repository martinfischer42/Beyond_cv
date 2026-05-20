import { Link } from 'react-router-dom';

const highlights = [
  'AI-gestützte Marketing-Einheit',
  'Generalisten-Ansatz mit klaren Verantwortlichkeiten',
  'KPI-Framework für E-Mail, Social Media und Website',
] as const;

const sections = [
  {
    title: 'Ausgangslage',
    text: 'Sowohl das Team als auch das Budget wurden kontinuierlich reduziert. Unternehmerische Entscheidungen haben ein aus Spezialisten bestehendes Team nahezu handlungsunfähig gemacht.',
  },
  {
    title: 'Strategischer Ansatz',
    text: 'Aufbau eines leistungsfähigen Generalisten-Modells mit klaren Prioritäten, standardisierten Prozessen, einem erhöhten Automatisierungsgrad und KI als integraler Bestandteil der täglichen Wertschöpfung.',
  },
  {
    title: 'Umsetzung',
    text: `Ich habe dafür gesorgt, dass neue Fähigkeiten hin zum Marketing-Generalisten durch interne Wissensvermittlung und erweiterte Verantwortlichkeiten aufgebaut wurden. Die Einführung eines Kampagnenmanagements hat die thematische Steuerung stark erleichtert und gleichzeitig die Messung des Business Impacts erst möglich gemacht.

Einführung eines KPI-basierten Steuerungsmodells, Automatisierung repetitiver Aufgaben und KI-gestützte Workflows für Recherche, Content-Entwicklung, Qualitätssicherung und Kampagnenadaption haben weitere Kapazitätslücken gefüllt.`,
  },
  {
    title: 'Ergebnis',
    text: 'Höhere Konsistenz, Qualität und Output trotz kleinerer Teamgröße und reduziertem Budget. Das Marketing-Team etablierte sich als Vorreiter für AI-driven Arbeitsweisen in Non-Engineering-Bereichen. Heute unterstütze ich auch andere Teams in der KI-Transformation.',
  },
  {
    title: 'Relevanz für zukünftige Rollen',
    text: 'Besonders relevant für Führungsrollen, die Wachstum unter Ressourcenrestriktionen ermöglichen und Marketing als strategische Transformationsfunktion aufstellen wollen. Ich habe die Fähigkeit und den inneren Antrieb, zielgerichtete, stetige Veränderung und Weiterentwicklung sowohl bei mir selbst als auch im Team voranzutreiben.',
  },
] as const;

export default function AiMarketingScalingCasePage() {
  return (
    <section className="subpage-stack">
      <div className="surface-card grid gap-8 overflow-hidden lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 p-7 md:p-10">
          <p className="kicker">Case 01</p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">Marketing-Team-Transformation</h1>
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
          <article key={section.title} className="section-card">
            <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 whitespace-pre-line text-slate-600">{section.text}</p>
          </article>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white md:p-10">
        <p className="kicker text-slate-300">Weiterführung</p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Dieses Setup lässt sich direkt auf neue Growth-Phasen übertragen.</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/cases/marketing-automation" className="cta-secondary border-white/40 bg-white text-slate-900 hover:bg-slate-100">
            Nächster Case
          </Link>
          <Link to="/kontakt" className="cta-primary">
            Gespräch anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}

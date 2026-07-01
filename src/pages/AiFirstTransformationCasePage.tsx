import { Link } from 'react-router-dom';

const highlights = [
  'Tool Ownership für ChatGPT im Unternehmen',
  'AI Community, Enablement und Instructions',
  'AI Maturity Index zur Messung des Reifegrades',
] as const;

const sections = [
  {
    title: 'Ausgangslage',
    text: `KI wurde zunehmend als strategischer Hebel erkannt, war im Unternehmen jedoch noch nicht flächendeckend in Strukturen, Prozessen und Arbeitsroutinen verankert. Erste Anwendungen entstanden punktuell, häufig abhängig von individueller Initiative, persönlicher Tool-Kompetenz und einzelnen Use Cases.

Damit bestand die Herausforderung, aus einzelnen KI-Anwendungen eine belastbare, skalierbare und verantwortungsvoll gesteuerte AI-first Arbeitsweise zu entwickeln. Neben dem Zugang zu geeigneten Tools mussten auch Budgettransparenz, Nutzungsleitlinien, Community-Strukturen, Reifegradmessung und Enablement für Non-Engineering-Abteilungen aufgebaut werden.`,
  },
  {
    title: 'Strategischer Ansatz',
    text: `Der strategische Ansatz lag darin, KI nicht als isoliertes Tool-Thema zu behandeln, sondern als Transformationsprogramm für moderne Wissensarbeit. Entscheidend war die Verbindung aus Tool Ownership, Governance, Community Management, praktischer Befähigung und messbarer Weiterentwicklung.

ChatGPT wurde dabei als zentraler Enabler verstanden: nicht nur als Produktivitätswerkzeug, sondern als Plattform für neue Arbeitsweisen in Non-Engineering-Bereichen. Ziel war es, den Einsatz von KI strukturiert, sicher und wirksam zu skalieren – mit klaren Verantwortlichkeiten, nachvollziehbaren Instructions, Budgetkontrolle und einem AI Maturity Index zur Bewertung des organisatorischen Reifegrades.`,
  },
  {
    title: 'Umsetzung',
    text: `In meiner Verantwortung liegt die Tool Ownership für ChatGPT, inklusive Steuerung, Weiterentwicklung und Budgetmonitoring. Dazu gehört, den Einsatz des Tools organisatorisch anschlussfähig zu machen, Nutzung und Kosten im Blick zu behalten und sicherzustellen, dass KI nicht unkoordiniert, sondern entlang klarer Anforderungen und Verantwortlichkeiten genutzt wird.

Ein weiterer Schwerpunkt ist das AI Community Management. Ich unterstütze den Aufbau einer aktiven KI-Community, in der Wissen geteilt, Use Cases sichtbar gemacht und neue Arbeitsweisen in die Organisation getragen werden. Ergänzend dazu arbeite ich an Instructions und Orientierungshilfen, damit Mitarbeitende KI zielgerichtet, qualitativ belastbar und verantwortungsvoll einsetzen können.

Zur Messung der Entwicklung wurde ein AI Maturity Index etabliert beziehungsweise mitentwickelt. Dieser macht sichtbar, wie weit Teams und Bereiche in der KI-Nutzung sind, wo konkrete Entwicklungsfelder bestehen und welche Enablement-Maßnahmen priorisiert werden sollten.

Besonders wichtig ist das Enablement der Non-Engineering-Abteilungen. Der Fokus liegt darauf, KI nicht auf technische Teams zu begrenzen, sondern Marketing, Kommunikation, Sales-nahe Funktionen, Operations und weitere Unternehmensbereiche in die Lage zu versetzen, eigene sinnvolle KI-Anwendungsfälle zu entwickeln und nachhaltig in ihre Arbeitsprozesse zu integrieren.`,
  },
  {
    title: 'Ergebnis',
    text: `Aus einem zunächst tool- und use-case-getriebenen KI-Einsatz entsteht ein strukturierter Transformationsansatz mit klarer Ownership, Budgettransparenz, Community-Mechanik, Reifegradmessung und Enablement-Struktur.

KI wird dadurch im Unternehmen nicht nur ausprobiert, sondern zunehmend als fester Bestandteil moderner Arbeitsweisen verankert. Non-Engineering-Abteilungen erhalten Orientierung, konkrete Anwendungskompetenz und nachvollziehbare Leitplanken, um KI produktiv, verantwortungsvoll und mit messbarem Mehrwert einzusetzen.`,
  },
  {
    title: 'Relevanz für zukünftige Rollen',
    text: `Besonders relevant ist diese Erfahrung für Rollen, in denen KI-Transformation nicht nur strategisch formuliert, sondern operativ in der Organisation verankert werden muss. Ich bringe Erfahrung darin mit, AI-first Arbeitsweisen über Tool-Zugang hinaus zu skalieren: durch Governance, Community Building, Instructions, Reifegradmessung, Budgetsteuerung und gezieltes Enablement.

Damit verbinde ich technologische Anwendungskompetenz mit Organisationsentwicklung, Change Management und einer klaren Business-Perspektive. Genau diese Kombination ist entscheidend, wenn Unternehmen KI nicht punktuell nutzen, sondern strukturell wirksam machen wollen.`,
  },
] as const;

export default function AiFirstTransformationCasePage() {
  return (
    <section className="subpage-stack">
      <div className="surface-card grid gap-8 overflow-hidden lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 p-7 md:p-10">
          <p className="kicker">Case 04</p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">AI-first Transformation</h1>
          <p className="text-lg text-slate-600">
            Mitgestaltung der unternehmensweiten Transformation hin zu einer Organisation, die KI systematisch in
            Arbeitsweisen, Prozesse und Entscheidungslogiken integriert – mit klarer Tool Ownership, Governance,
            Enablement und messbarer Reifegradentwicklung.
          </p>
          <ul className="space-y-2 text-sm font-medium text-slate-700">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[280px] bg-slate-200">
          <img
            src="/images/hero.png"
            alt="Abstrakte digitale Arbeitsumgebung als Symbol für AI-first Transformation"
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
        <h2 className="text-2xl font-semibold md:text-3xl">AI-first Arbeitsweisen strukturiert in der Organisation verankern.</h2>
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

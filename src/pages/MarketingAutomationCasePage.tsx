const sections = [
  ['Ausgangslage', 'Die bestehende Marketing-Automation war historisch gewachsen, stark manuell geprägt und nur eingeschränkt skalierbar.'],
  ['Herausforderung', 'Fehlende Prozessstandards und zu hohe Plattformkosten bremsten Effizienz, Transparenz und nachhaltiges Wachstum.'],
  ['Vorgehen', 'Neudesign der Architektur mit klaren Ownerships, konsolidierten Automationsstrecken und enger Verzahnung mit CRM und Lead-Management.'],
  ['Wirkung', 'Die Marketing-Automation-Plattformkosten wurden um 85 % reduziert. Gleichzeitig stieg die operative Stabilität und Umsetzungsqualität deutlich.'],
  ['Relevanz für zukünftige Rollen', 'Starke Relevanz für Führungsrollen mit Verantwortung für Revenue-Impact, operative Exzellenz und skalierbare Demand-Generation.'],
] as const;

export default function MarketingAutomationCasePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold">Case: Marketing Automation von ad-hoc zu skalierbarer Architektur</h1>
      {sections.map(([title, text]) => (
        <article key={title} className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-3 text-slate-600">{text}</p>
        </article>
      ))}
    </section>
  );
}

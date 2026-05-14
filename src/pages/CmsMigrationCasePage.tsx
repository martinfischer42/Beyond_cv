const sections = [
  ['Ausgangslage', 'Die bestehende CMS-Landschaft war kostenintensiv, technisch komplex und für moderne Marketing-Anforderungen nur eingeschränkt geeignet.'],
  ['Herausforderung', 'Migration ohne Business-Unterbrechung bei gleichzeitiger Sicherung von Governance, Performance und Content-Qualität.'],
  ['Vorgehen', 'Planung und Steuerung einer strukturierten CMS- und Plattformmigration inklusive Betriebsmodell, Qualitätskriterien und klarer Übergabeprozesse.'],
  ['Wirkung', 'Die CMS-/Plattformkosten wurden von ca. 700.000 € jährlich auf rund 55.000 € reduziert. Gleichzeitig wurde die Basis für schnellere, effizientere Weiterentwicklung geschaffen.'],
  ['Relevanz für zukünftige Rollen', 'Besonders relevant für Head-of-Marketing- und Transformationsrollen mit Verantwortung für MarTech, Kostenstruktur und skalierbare digitale Plattformen.'],
] as const;

export default function CmsMigrationCasePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold">Case: CMS-Migration mit signifikanter Kostenreduktion</h1>
      {sections.map(([title, text]) => (
        <article key={title} className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-3 text-slate-600">{text}</p>
        </article>
      ))}
    </section>
  );
}

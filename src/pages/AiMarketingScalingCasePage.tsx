const sections = [
  ['Ausgangslage', 'Das Marketing-Team arbeitete mit hohem Einsatz, aber mit begrenzter Skalierbarkeit in Prozessen, Content-Produktion und Kampagnensteuerung.'],
  ['Herausforderung', 'Wachstumsziele und steigende Komplexität erforderten ein Operating Model, das Qualität und Geschwindigkeit gleichzeitig verbessert.'],
  ['Vorgehen', 'Einführung klarer Rollen, standardisierter Workflows und AI-gestützter Arbeitsweisen zur Unterstützung von Recherche, Content-Erstellung und Performance-Optimierung.'],
  ['Wirkung', 'Höhere Umsetzungsgeschwindigkeit, bessere Priorisierung und stärkere Entlastung des Teams bei gleichbleibend hohem Qualitätsanspruch.'],
  ['Relevanz für zukünftige Rollen', 'Übertragbar auf Marketing-Lead- und Head-of-Marketing-Rollen, in denen Teamleistung, Skalierung und effiziente Prozesse entscheidend sind.'],
] as const;

export default function AiMarketingScalingCasePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold">Case: AI-gestützte Skalierung eines Marketing-Teams</h1>
      {sections.map(([title, text]) => (
        <article key={title} className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-3 text-slate-600">{text}</p>
        </article>
      ))}
    </section>
  );
}

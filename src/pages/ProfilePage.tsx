export default function ProfilePage() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-semibold">Profil</h1>
      <article className="space-y-4 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Executive Summary</h2>
        <p className="text-slate-600">
          Marketing Leader mit Fokus auf Wachstum, Effizienz und Transformation. Schwerpunkt ist der Aufbau
          leistungsfähiger Marketing-Organisationen, die AI sinnvoll nutzen und klar auf Business-Ziele einzahlen.
        </p>
      </article>
      <article className="space-y-4 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Leadership-Schwerpunkte & Kompetenzen</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-600">
          <li>Führung und Transformation von Marketing-Teams</li>
          <li>AI Enablement und produktivere Marketing-Organisationen</li>
          <li>Performance Marketing und datengetriebene Leadgenerierung</li>
          <li>Marketing Automation und CRM-Verzahnung</li>
          <li>Marketing-Tech-/CMS-Transformation</li>
          <li>B2B Content und Produktmarketing für erklärungsbedürftige digitale Angebote</li>
        </ul>
      </article>
      <article className="space-y-4 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Branchenfokus</h2>
        <p className="text-slate-600">Software, Digital Services und Logistik.</p>
      </article>
    </section>
  );
}

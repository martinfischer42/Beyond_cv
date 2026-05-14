export default function ProfilePage() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-600">Profil</p>
        <h1 className="text-3xl font-semibold md:text-4xl">Executive Summary</h1>
      </div>

      <article className="space-y-4 rounded-2xl border border-slate-200 bg-white p-7 md:p-9">
        <p className="text-lg text-slate-700">
          Marketing Leader mit Fokus auf B2B Growth, AI Enablement und nachhaltige operative Exzellenz. Ich verbinde
          Leadership mit pragmatischer Umsetzung, um Teams, Technologie und Prozesse entlang klarer Business-Ziele
          auszurichten.
        </p>
        <p className="text-slate-600">
          Mein Schwerpunkt liegt auf dem Aufbau leistungsfähiger Marketing-Organisationen, die datenbasiert arbeiten,
          AI sinnvoll im Alltag einsetzen und ihre MarTech-Investitionen in messbare Wirkung übersetzen.
        </p>
      </article>

      <article className="space-y-4 rounded-2xl border border-slate-200 bg-white p-7 md:p-9">
        <h2 className="text-2xl font-semibold">Leadership-Schwerpunkte & Kompetenzen</h2>
        <ul className="grid gap-2 text-slate-600 md:grid-cols-2">
          <li>• Führung und Transformation von Marketing-Teams</li>
          <li>• AI Enablement für produktivere Operating Models</li>
          <li>• Marketing Automation und CRM-Verzahnung</li>
          <li>• Marketing-Tech- und CMS-Transformation</li>
          <li>• Performance Marketing und datengetriebene Leadgenerierung</li>
          <li>• B2B Content- und Produktmarketing für komplexe Angebote</li>
        </ul>
      </article>

      <article className="space-y-3 rounded-2xl border border-slate-200 bg-white p-7 md:p-9">
        <h2 className="text-2xl font-semibold">Branchenfokus</h2>
        <p className="text-slate-600">Software, Digital Services und Logistik.</p>
      </article>
    </section>
  );
}

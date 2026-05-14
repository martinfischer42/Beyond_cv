export default function ImpressumPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold">Impressum</h1>
      <article className="space-y-4 rounded-xl bg-white p-8 text-slate-600 shadow-sm ring-1 ring-slate-200">
        <p className="text-slate-800">Martin Fischer</p>
        <p>München, Deutschland</p>
        <p>
          E-Mail:{' '}
          <a
            href="mailto:martinfischer.jnb@gmail.com"
            className="text-accent-600 underline decoration-accent-300 underline-offset-4 transition hover:text-accent-700"
          >
            martinfischer.jnb@gmail.com
          </a>
        </p>

        <p>
          Hinweis: Eine vollständige ladungsfähige Anschrift liegt derzeit noch nicht vor und wird vor finaler
          Veröffentlichung ergänzt.
        </p>

        <p>
          Datenschutz-Hinweis: Diese Website ist aktuell als statische Website umgesetzt und verwendet kein
          Kontaktformular.
        </p>
      </article>
    </section>
  );
}

export default function ImpressumPage() {
  return (
    <section className="subpage-stack">
      <div className="space-y-4">
        <p className="kicker">Rechtliches</p>
        <h1 className="text-3xl font-semibold md:text-5xl">Impressum</h1>
      </div>
      <article className="surface-card space-y-4 p-8 text-slate-600 md:p-10">
        <p className="text-slate-800">Martin Fischer</p>
        <p>München, Deutschland</p>
        <p>
          E-Mail:{' '}
          <a
            href="mailto:martinfischer.jnb@gmail.com"
            className="link-inline"
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

export default function ContactPage() {
  return (
    <section className="subpage-stack">
      <div className="space-y-4">
        <p className="kicker">Direkter Austausch</p>
        <h1 className="text-3xl font-semibold md:text-5xl">Kontakt</h1>
      </div>
      <article className="surface-card space-y-6 p-8 md:p-10">
        <p className="text-slate-600">
          Ich freue mich auf den Austausch zu Marketing Leadership, AI Enablement, B2B Growth und
          Marketing-Tech-Transformation.
        </p>

        <div className="space-y-4">
          <p className="text-slate-800">
            <span className="font-semibold">Martin Fischer</span>
            <br />
            <span className="text-slate-600">München, Deutschland</span>
          </p>

          <p>
            <span className="font-semibold">E-Mail:</span>{' '}
            <a
              href="mailto:martinfischer.jnb@gmail.com"
              className="link-inline"
            >
              martinfischer.jnb@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold">Telefon:</span>{' '}
            <a
              href="tel:+4917621636276"
              className="link-inline"
            >
              +49 176 21636276
            </a>
          </p>

          <p>
            <span className="font-semibold">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com/in/martin-fischer-299b19116"
              target="_blank"
              rel="noreferrer"
              className="link-inline"
            >
              linkedin.com/in/martin-fischer-299b19116
            </a>
          </p>
        </div>
      </article>
    </section>
  );
}

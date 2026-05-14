export default function ContactPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold">Kontakt</h1>
      <article className="space-y-6 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
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
              className="text-accent-600 underline decoration-accent-300 underline-offset-4 transition hover:text-accent-700"
            >
              martinfischer.jnb@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold">Telefon:</span>{' '}
            <a
              href="tel:+4917621636276"
              className="text-accent-600 underline decoration-accent-300 underline-offset-4 transition hover:text-accent-700"
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
              className="text-accent-600 underline decoration-accent-300 underline-offset-4 transition hover:text-accent-700"
            >
              linkedin.com/in/martin-fischer-299b19116
            </a>
          </p>
        </div>
      </article>
    </section>
  );
}

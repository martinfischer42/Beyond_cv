import { useEffect } from 'react';

export default function ImpressumPage() {
  useEffect(() => {
    document.title = 'Impressum';
  }, []);

  return (
    <section className="subpage-stack" aria-labelledby="impressum-title">
      <div className="space-y-4">
        <p className="kicker">Rechtliches</p>
        <h1 id="impressum-title" className="text-3xl font-semibold md:text-5xl">
          Impressum
        </h1>
      </div>

      <section className="surface-card space-y-8 p-8 text-slate-600 md:p-10" aria-label="Impressumsangaben">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Angaben gemäß § 5 DDG</h2>
          <address className="not-italic leading-relaxed">
            Martin Fischer
            <br />
            Leinorstraße 39b
            <br />
            85757 Karlsfeld
            <br />
            Deutschland
          </address>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Kontakt</h2>
          <address className="space-y-2 not-italic leading-relaxed">
            <p>
              E-Mail:{' '}
              <a href="mailto:kontakt@martin-fischer-ai-marketing.de" className="link-inline">
                kontakt@martin-fischer-ai-marketing.de
              </a>
            </p>
            <p>
              Website:{' '}
              <a
                href="https://martin-fischer-ai-marketing.de"
                target="_blank"
                rel="noreferrer"
                className="link-inline"
              >
                https://martin-fischer-ai-marketing.de
              </a>
            </p>
          </address>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h2>
          <address className="not-italic leading-relaxed">
            Martin Fischer
            <br />
            Leinorstraße 39b
            <br />
            85757 Karlsfeld
            <br />
            Deutschland
          </address>
        </div>
      </section>
    </section>
  );
}

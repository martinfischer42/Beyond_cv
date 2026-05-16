import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

const primaryNavItems = [
  { href: '/#about', label: 'About' },
  { href: '/#impact', label: 'Impact' },
  { href: '/#leadership', label: 'Leadership' },
  { href: '/cases', label: 'Cases' },
];

const secondaryNavItems = [
  { to: '/', label: 'Start' },
  { to: '/profil', label: 'Profil' },
  { to: '/cases', label: 'Cases' },
  { to: '/kontakt', label: 'Kontakt' },
  { to: '/impressum', label: 'Impressum' },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen bg-slate-100">
      <header
        className={`top-0 z-30 border-b transition-colors ${
          isHomePage
            ? 'absolute left-0 right-0 border-white/15 bg-slate-950/25 backdrop-blur-md'
            : 'sticky border-slate-200/80 bg-white/90 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto w-full max-w-content px-5 py-4 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className={`text-lg font-bold uppercase tracking-[0.12em] md:text-xl ${isHomePage ? 'text-white' : 'text-slate-900'}`}>
              MARTIN FISCHER
              <span className="mt-1 block h-0.5 w-16 bg-[#FF4A2D]" aria-hidden="true" />
            </Link>

            <button
              type="button"
              className={`rounded-md border px-3 py-2 text-sm font-semibold md:hidden ${
                isHomePage ? 'border-white/35 text-white' : 'border-slate-300 text-slate-700'
              }`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-label="Navigationsmenü umschalten"
            >
              Menü
            </button>

            <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
              {isHomePage
                ? primaryNavItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="rounded-md px-3 py-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))
                : secondaryNavItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `rounded-md px-3 py-2 transition-colors ${
                          isActive
                            ? 'bg-slate-900 text-white'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
              <Link
                to="/kontakt"
                className={`ml-2 rounded-md px-4 py-2 text-sm font-semibold text-white transition ${
                  isHomePage ? 'bg-[#FF4A2D] hover:bg-[#E8452A]' : 'bg-accent-600 hover:bg-accent-700'
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>

          {isMenuOpen && (
            <nav
              className={`mt-3 flex flex-col gap-1 border-t pt-3 md:hidden ${
                isHomePage ? 'border-white/20' : 'border-slate-200'
              }`}
            >
              {(isHomePage
                ? [...primaryNavItems, { href: '/kontakt', label: 'Contact' }]
                : secondaryNavItems.map((item) => ({ href: item.to, label: item.label }))
              ).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isHomePage
                      ? 'text-white/90 hover:bg-white/10 hover:text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className={isHomePage ? 'w-full' : 'mx-auto w-full max-w-content px-5 py-10 md:px-8 md:py-16'}>
        <Outlet />
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-content flex-col gap-4 px-5 py-10 text-sm text-slate-500 md:px-8">
          <p className="font-semibold text-slate-800">Martin Fischer · Executive Marketing Leadership</p>
          <p>Marketing Leadership für Wachstum, Effizienz und AI-gestützte Skalierung.</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/kontakt" className="hover:text-slate-700 hover:underline">
              Kontakt
            </Link>
            <a
              href="https://www.linkedin.com/in/martin-fischer-299b19116"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-700 hover:underline"
            >
              LinkedIn
            </a>
            <Link to="/impressum" className="hover:text-slate-700 hover:underline">
              Impressum
            </Link>
          </div>

          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

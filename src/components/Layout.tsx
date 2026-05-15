import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Start' },
  { to: '/profil', label: 'Profil' },
  { to: '/cases', label: 'Cases' },
  { to: '/kontakt', label: 'Kontakt' },
  { to: '/impressum', label: 'Impressum' },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-content px-5 py-4 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
              Martin Fischer · Beyond CV
            </Link>

            <button
              type="button"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              Menü
            </button>

            <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
              {navItems.map((item) => (
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
                className="ml-2 rounded-md bg-accent-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-700"
              >
                Gespräch vereinbaren
              </Link>
            </nav>
          </div>

          {isMenuOpen && (
            <nav className="mt-3 flex flex-col gap-1 border-t border-slate-200 pt-3 md:hidden">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="mx-auto w-full max-w-content px-5 py-10 md:px-8 md:py-16">
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

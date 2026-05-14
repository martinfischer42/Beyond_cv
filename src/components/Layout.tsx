import { Link, NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Start' },
  { to: '/profil', label: 'Profil' },
  { to: '/cases', label: 'Cases' },
  { to: '/kontakt', label: 'Kontakt' },
  { to: '/impressum', label: 'Impressum' },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-content flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link to="/" className="text-xl font-semibold text-slate-900">
            Beyond CV
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition-colors ${
                    isActive
                      ? 'bg-accent-500 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-content px-5 py-10 md:px-8 md:py-14">
        <Outlet />
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-content flex-col gap-3 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-medium text-slate-700">Martin Fischer · Beyond CV</p>
          <p>Executive Marketing Leadership · AI Enablement · B2B Growth</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

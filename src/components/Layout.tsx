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
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-4">
          <Link to="/" className="text-lg font-semibold tracking-tight text-slate-900">
            Beyond CV
          </Link>
          <nav className="flex gap-1 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition ${
                    isActive ? 'bg-accent-500 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-content px-6 py-12">
        <Outlet />
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-content px-6 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Martin Fischer · Beyond CV
        </div>
      </footer>
    </div>
  );
}

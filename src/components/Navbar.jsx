import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const Logo = (
    <a href="#home" className="flex items-center gap-2 shrink-0">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-white">
        DS
      </span>
      <span className="text-lg font-bold tracking-tight text-slate-900">
        Dev <span className="text-gradient-brand">Stack</span>
      </span>
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile: hamburger left */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>

        {/* Desktop: logo left */}
        <div className="hidden md:flex">{Logo}</div>
        {/* Mobile: logo centered */}
        <div className="md:hidden">{Logo}</div>

        {/* Desktop center links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActiveLink(link)}
                className={
                  activeLink === link
                    ? "text-pink-600"
                    : "transition-colors hover:text-slate-900"
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#signin"
            className="text-xs font-medium text-slate-700 hover:text-slate-900 sm:text-sm"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-pink-200 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 py-3 text-sm font-medium text-slate-600 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => {
                  setActiveLink(link);
                  setMenuOpen(false);
                }}
                className={`block rounded-lg px-3 py-2 ${
                  activeLink === link ? "bg-pink-50 text-pink-600" : "hover:bg-slate-50"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

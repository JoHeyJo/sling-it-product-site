import { useEffect, useState } from "react";

type NavLink = { label: string; href: string };
type NavBarProps = {
  logo?: any;
  links?: NavLink[];
  cta?: { label: string; href: string };
};

function NavBar({
  logo,
  links,
  cta,
}: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Colors: transparent at top (white text over hero), solid on scroll (light card / dark card)
  const shell = "fixed inset-x-0 top-0 z-50 transition-colors duration-300";
  const surface = scrolled
    ? "bg-white/80 ring-1 ring-black/5 backdrop-blur-md dark:bg-gray-900/80 dark:ring-white/10"
    : "bg-transparent";
  const linkBase = scrolled
    ? "text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
    : "text-white/90 hover:text-white drop-shadow";

  return (
    <header className={`${shell}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${surface}`}>
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <a href="#" className={`flex items-center gap-2 ${linkBase}`}>
            {logo}
          </a>

          {/* Center: desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm font-medium ${linkBase}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={cta.href}
              className={`hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition shadow-sm ring-1 ring-transparent
                ${
                  scrolled
                    ? "bg-indigo-600 text-white hover:brightness-110 dark:bg-indigo-500"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {cta.label}
            </a>

            {/* Mobile menu button */}
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`md:hidden inline-flex items-center justify-center rounded-lg p-2 ring-1 transition
                ${
                  scrolled
                    ? "text-gray-700 ring-gray-300 hover:bg-gray-50 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-white/5"
                    : "text-white ring-white/30 hover:bg-white/10"
                }`}
            >
              {/* simple hamburger */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {open && (
          <div
            className="md:hidden border-t border-black/5 dark:border-white/10 
               bg-white/70 dark:bg-gray-900/80 backdrop-blur-md">
            <nav className="px-2 py-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium ${linkBase}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={cta.href}
                className="mt-2 block rounded-xl bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white dark:bg-indigo-500"
                onClick={() => setOpen(false)}
              >
                {cta.label}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar
export default function Footer() {
  const product = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "Changelog", href: "#changelog" },
  ];
  const company = [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Press", href: "#press" },
    { label: "Contact", href: "#contact" },
  ];
  const resources = [
    { label: "Docs", href: "#docs" },
    { label: "API", href: "#api" },
    { label: "Guides", href: "#guides" },
    { label: "Support", href: "#support" },
  ];

  return (
    <footer className="border-t border-black/5 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-gray-900 dark:text-gray-100"
            >
              <span className="inline-block h-6 w-6 rounded bg-indigo-600"></span>
              <span className="text-base font-semibold">YourLogo</span>
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Build, launch, and scale modern product sites with React +
              Tailwind.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                aria-label="Twitter/X"
                href="#"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M18.244 2H21l-6.59 7.52L22 22h-6.8l-4.77-6.2L4.8 22H2l7.1-8.1L2 2h6.86l4.33 5.72L18.24 2Zm-1.19 18h1.88L7.02 4H5.1l11.95 16Z" />
                </svg>
              </a>
              <a
                aria-label="GitHub"
                href="#"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.46-1.18-1.12-1.5-1.12-1.5-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05 .9 1.55 2.36 1.1 2.94.84 .09-.66.35-1.1.63-1.35 -2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68 -.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.86 0 1.73.12 2.54.36 1.9-1.29 2.74-1.02 2.74-1.02 .56 1.39 .21 2.42 .1 2.67 .64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93 .36.31.67.92.67 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M6.94 8.5V21H3.56V8.5h3.38ZM5.25 3a2.06 2.06 0 1 1 0 4.12A2.06 2.06 0 0 1 5.25 3Zm6.7 7.1c1.77 0 2.97.92 3.5 1.87V8.5h3.36V21h-3.36v-6.11c0-1.55-.98-2.58-2.3-2.58-1.22 0-2.02.83-2.35 1.62-.12.28-.15.68-.15 1.08V21h-3.36s.04-10.5 0-12.5h3.36v1.73c.45-.69 1.25-1.63 2.9-1.63Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              {product.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {resources.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-black/5 pt-6 dark:border-white/10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <a
                href="#privacy"
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Terms
              </a>
              <a
                href="#status"
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

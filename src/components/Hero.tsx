import LogoTicker from "./LogoTicker";

/**
 * Hero (Responsive)
 * -------------------------------------------------------------
 * A modern hero section built with Tailwind CSS.
 * - Mobile-first column layout → switches to split layout on md+
 * - Supports: eyebrow (kicker), title, subtitle, CTAs, stats, logos, media (image/video)
 * - Accessible: semantic headings, ARIA labels, focus-visible styles
 * - CLS-safe: fixed aspect ratio for media to prevent layout shift
 * - Dark-mode ready: uses Tailwind dark: tokens
 *
 * Usage:
 * <Hero
 *   eyebrow="NEW"
 *   title="Ship product pages 10× faster"
 *   subtitle="A React + Tailwind block library designed for speed, a11y, and polish."
 *   primaryCta={{ label: "Get Started", href: "#get-started" }}
 *   secondaryCta={{ label: "View Docs", href: "#docs" }}
 *   screenshotUrl="/images/dashboard.png"
 *   stats={[{ label: "Teams", value: "3k+" }, { label: "Uptime", value: "99.99%" }]}
 *   logos={[
 *     { name: "Acme", url: "/logos/acme.svg" },
 *     { name: "Piper", url: "/logos/piper.svg" },
 *   ]}
 * />
 */



export type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  screenshotUrl?: string; // If present, used as primary media
  videoUrl?: string; // If present, supersedes screenshotUrl
  stats?: Array<{ label: string; value: string }>;
  logos?: Array<{ name: string; url: string }>;
  className?: string;
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  screenshotUrl,
  videoUrl,
  stats,
  logos,
  className = "",
}: HeroProps) {
  return (
    <section className={`relative isolate overflow-hidden ${className}`}>
      {/* Decorative gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-30"
      >
        <div className="absolute left-1/2 top-[-10%] h-[60rem] w-[120rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-300 via-sky-300 to-emerald-300 blur-3xl dark:from-indigo-800/40 dark:via-sky-800/40 dark:to-emerald-800/40" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-28 lg:px-8">
        <div className="grid items-center gap-y-12 gap-x-8 md:grid-cols-2">
          {/* Copy column */}
          <div>
            {eyebrow && (
              <p className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:ring-indigo-900/60">
                {eyebrow}
              </p>
            )}

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-300">
                {subtitle}
              </p>
            )}

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-transparent transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 bg-indigo-600 dark:bg-indigo-500"
                    aria-label={primaryCta.label}
                  >
                    {primaryCta.label}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:text-white dark:ring-gray-700/80 dark:hover:bg-white/5"
                    aria-label={secondaryCta.label}
                  >
                    {secondaryCta.label}
                  </a>
                )}
              </div>
            )}

            {/* Stats */}
            {/* {stats && stats.length > 0 && (
              <dl className="mt-8 grid grid-cols-2 gap-6 sm:max-w-md">
                {stats.map((s) => (
                  <div key={s.label} className="">
                    <dt className="text-sm text-gray-600 dark:text-gray-400">
                      {s.label}
                    </dt>
                    <dd className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )} */}
          </div>

          {/* Media column */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-2xl">
              {/* Browser chrome mock */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 mx-auto h-8 w-[95%] rounded-t-2xl border border-b-0 border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-white/5" />

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl ring-1 ring-black/5 dark:border-white/10 dark:bg-white/5 dark:ring-white/10">
                {videoUrl ? (
                  <video
                    className="h-full w-full object-cover"
                    src={videoUrl}
                    poster={screenshotUrl}
                    controls
                    preload="none"
                  />
                ) : (
                  <img
                    src={
                      screenshotUrl ||
                      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1800&auto=format&fit=crop"
                    }
                    alt="Product screenshot"
                    className="h-full w-full object-cover"
                    loading="eager"
                    width={1600}
                    height={1000}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Logo ticker */}
        {logos && logos.length > 0 && <LogoTicker logos={logos} />}
      </div>
    </section>
  );
}

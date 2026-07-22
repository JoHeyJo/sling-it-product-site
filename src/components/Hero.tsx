import { bgGradient, cardDimensions, darkBgGradient } from "../styles";
import VideoSnippet from "./VideoSnippet";

/**
 * Hero (Responsive)
 * -------------------------------------------------------------
 * A modern hero section built with Tailwind CSS.
 * - Mobile-first column layout → switches to split layout on md+
 * - Supports: eyebrow (kicker), title, subtitle, CTAs, stats, logos, media (image/video)
 * - Accessible: semantic headings, ARIA labels, focus-visible styles
 * - CLS-safe: fixed aspect ratio for media to prevent layout shift
 * - Dark-mode ready: uses Tailwind dark: tokens
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
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  screenshotUrl,
  videoUrl,
}: HeroProps) {
  return (
    <section id="About" className="relative isolate overflow-hidden">
      {/* Decorative gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-30"
      >
        <div id="Hero-background" />
      </div>
      <div
        id="Hero-foreground"
        className={`
             ${cardDimensions} sm:py-20 lg:py-28
             bg-gradient-to-br
             backdrop-blur-sm
             /* Border effect*/
             rounded-2xl shadow-lg 
             ${bgGradient} ${darkBgGradient} 
             `}
      >
        <div className="grid items-center gap-y-12 gap-x-8 md:grid-cols-2">
          {/* Copy column */}
          <div>
            {/* {eyebrow && (
              <p className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:ring-indigo-900/60">
                {eyebrow}
              </p>
            )} */}

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
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-transparent transition hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 bg-blue-700 dark:bg-blue-900"
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
          </div>

          {/* Media column */}
            <div className="relative mx-auto w-full max-w-2xl">
              <div className="relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl ring-1 ring-black/5 dark:border-white/10 dark:bg-white/5 dark:ring-white/10">
                <VideoSnippet src={videoUrl} className={"demo-video"} poster={screenshotUrl}/>
              </div>
            </div>
        </div>

        {/* Logo ticker */}
        {/* {logos && logos.length > 0 && <LogoTicker logos={logos} />} */}
      </div>
    </section>
  );
}

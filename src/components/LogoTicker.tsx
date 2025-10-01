// ADD
type Logo = { name: string; url: string };

function LogoTicker({
  logos = [] as Logo[],
  speed = 30,
}: {
  logos?: Logo[];
  speed?: number;
}) {
  // Duplicate the list to create a seamless loop
  const items = [...logos, ...logos, ...logos];

  return (
    <div className="relative mx-auto mt-14 max-w-7xl">
      <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
        Trusted by bartenders at
      </p>

      <div className="group relative mt-6 overflow-hidden">
        {/* Edge gradients */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-900"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-900"
        />

        {/* Track */}
        <div
          className="flex w-max gap-8 will-change-transform animate-[marquee_linear_infinite] motion-reduce:animate-none group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
          style={{ animationDuration: `${speed}s` }}
          aria-label="Customer logos marquee"
        >
          {items.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex h-14 min-w-40 items-center justify-center rounded-xl border border-dashed border-gray-200 px-4 dark:border-white/10"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 w-auto opacity-70"
                loading="eager"
                width={160}
                height={32}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes + reduced motion */}
      <style>{`
  @keyframes marquee {
    from { transform: translate3d(0,0,0); }
    to   { transform: translate3d(-33.3333333333333%,0,0); }
  }
`}</style>
    </div>
  );
}

export default LogoTicker
import { useCases } from "../data/content";

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative
        mx-auto max-w-7xl px-6 py-16 lg:px-8
  bg-gradient-to-tr 

  /* Border effect*/
  rounded-2xl shadow-lg 
  bg-translucent
  -mt-px border-x border-b border-slate-200/30 

  /* Light mode styles */
  from-stone-200/70 to-gray-50/60
  
  /* Dark mode overrides */
  dark:bg-transparent 
  dark:from-gray-900/90 dark:to-gray-800/80
"
    >
      <div
        id="edge-blur-top"
        className="absolute rounded-2xl top-0 left-1/2 h-1 w-[98%] -translate-x-1/2 
                bg-gradient-to-b from-slate-300/40 to-transparent blur-[5px]"
      />
      <div className="rounded-2x shadow-lg bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur-md dark:bg-gray-900/80 dark:ring-white/10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Use cases
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="rounded-xl border border-black/5 p-5 dark:border-white/10"
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {u.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {u.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

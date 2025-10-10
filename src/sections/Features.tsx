import { features } from "../data/content";

export default function Features() {
  return (
    <section
      id="Features"
      className="
  mx-auto max-w-7xl px-6 py-16 lg:px-8
  bg-gradient-to-tr 

  /* Border effect*/
  rounded-2xl shadow-lg 
  bg-translucent
  -mt-px border border-slate-200/30 

  /* Light mode styles */
  from-stone-200/70 to-gray-50/60
  
  /* Dark mode overrides */
  dark:bg-transparent 
  dark:from-gray-900/90 dark:to-gray-800/80
"
    >
      <div
        className="rounded-2xl 
      shadow-lg
      p-8 ring-1 ring-black/5 backdrop-blur-md dark:bg-gray-900/80 dark:ring-white/10"
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Key features
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-black/5 p-5 dark:border-white/10"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-3 text-base font-semibold text-gray-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {f.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

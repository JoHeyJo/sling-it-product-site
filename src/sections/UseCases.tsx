import { useCases } from "../data/content";
import {
  bgGradient,
  cardBorder,
  cardDimensions,
  darkBgGradient,
  darkCardBorder,
} from "../styles";

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className={`relative
        ${cardDimensions} ${bgGradient} ${cardBorder} ${darkBgGradient} ${darkCardBorder} bg-gradient-to-tr `}
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

import { bgGradient, cardBorder, cardDimensions, darkBgGradient, darkCardBorder } from "../styles";

export default function ProblemSolution() {
  return (
    <section
      id="problem"
      className={`relative backdrop-blur-sm
            ${cardDimensions} ${bgGradient} ${cardBorder} ${darkBgGradient} ${darkCardBorder} bg-gradient-to-br`}
    >
      <div
        id="edge-blur-top"
        className="absolute rounded-2xl top-0 left-1/2 h-1 w-[98%] -translate-x-1/2 
                bg-gradient-to-b from-slate-300/40 to-transparent blur-[5px]"
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div
          id="ProblemSolution-problem-container"
          className="rounded-2xl shadow-2xl p-8 ring-1 ring-black/5 backdrop-blur-md dark:bg-gray-900/80 dark:ring-white/10"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Intuitive Design
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            <li>Created for bartenders on the job.</li>
            <li>Ready to use out of the box - no experience necessary.</li>
            <li>Quickly create, view, share recipes.</li>
            <li>Think: mixing with once .</li>
          </ul>
        </div>
        <div
          id="ProblemSolution-solution-container"
          className="rounded-2xl shadow-2xl p-8 ring-1 ring-black/5 backdrop-blur-md dark:bg-gray-900/80 dark:ring-white/10"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Our solution
          </h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            A curated set of React + Tailwind sections that are accessible,
            responsive, and ready to ship—so you focus on content and
            conversion, not plumbing.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#get-started"
              className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold hover:bg-blue-800 text-white dark:bg-blue-900"
            >
              Get started
            </a>
            <a
              href="#features"
              className="rounded-xl px-4 py-2 text-sm font-semibold ring-1 hover:bg-gray-50 dark:hover:bg-white/5 ring-gray-300 dark:text-white dark:ring-gray-700/80"
            >
              See features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

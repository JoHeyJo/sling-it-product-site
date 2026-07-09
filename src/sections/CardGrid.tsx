import {
  bgGradient,
  cardBorder,
  cardDimensions,
  darkBgGradient,
  darkCardBorder,
} from "../styles";

type GuidProps = {
  id: number;
  title: string;
  info: InfoCard[];
};

/**
 * One standalone card's worth of data.
 * Map your new objects onto these field names, e.g.
 *   { problem, problems }  ->  { title: problem, points: problems }
 */
export type InfoCard = {
  title: string;
  points: string[];
  cta?: { label: string; href: string };
};


const isEven = (n: number) => n % 2 === 0;

export default function CardGrid({
  id,
  title,
  info
}: GuidProps) {

  return (
    <section
      id="problem"
      className={`relative backdrop-blur-sm ${cardDimensions} ${bgGradient} ${cardBorder} ${darkBgGradient} ${darkCardBorder} bg-gradient-to-${
        isEven(id) ? "br" : "tr"
      }`}
    >
      <div
        id="edge-blur-top"
        className="absolute rounded-2xl top-0 left-1/2 h-1 w-[98%] -translate-x-1/2
                bg-gradient-to-b from-slate-300/40 to-transparent blur-[5px]"
      />

      {/* grid-cols-1 on mobile (stacked), two per row from lg up.
          The whole array is mapped; the grid handles wrapping. */}
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {info.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl shadow-2xl p-8 ring-1 ring-black/5 backdrop-blur-md dark:bg-gray-900/80 dark:ring-white/10"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
              {item.points
                .filter((p) => p.trim() !== "") // your sample had "" entries
                .map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
            </ul>

            {item.cta && (
              <div className="mt-6 flex justify-end gap-3">
                <a
                  href={item.cta.href}
                  className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 dark:bg-blue-900"
                >
                  {item.cta.label}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


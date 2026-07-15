import {
  bgGradient,
  cardBorder,
  cardDimensions,
  darkBgGradient,
  darkCardBorder,
} from "../styles";

import { cta } from "../functions";

type CardGrid = {
  id: number;
  leftCard: string;
  leftInfo: string[];
  leftLink: { label: string; href: string };
  rightCard: string;
  rightInfo: string[];
  rightLink: { label: string; href: string };
};

function isEven(number: number) {
  console.log(number);
  return number % 2 === 0;
}

export default function CardGrid({
  id,
  leftCard,
  leftInfo,
  leftLink,
  rightCard,
  rightInfo,
  rightLink,
}: CardGrid) {

  return (
    <section
      id="leftCard"
      className={`relative backdrop-blur-sm
            ${cardDimensions} ${bgGradient} ${cardBorder} ${darkBgGradient} ${darkCardBorder} bg-gradient-to-${isEven(id) ? "br" : "tr"}`}
    >
      <div
        id="edge-blur-top"
        className="absolute rounded-2xl top-0 left-1/2 h-1 w-[98%] -translate-x-1/2 
                bg-gradient-to-b from-slate-300/40 to-transparent blur-[5px]"
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div
          id="CardGrid-leftCard-container"
          className="rounded-2xl shadow-2xl p-8 ring-1 ring-black/5 backdrop-blur-md dark:bg-gray-900/80 dark:ring-white/10"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {leftCard}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            {leftInfo.map((card, i) => (
              <li key={i}>{card}</li>
            ))}
          </ul>
          {cta(leftLink)}
        </div>
        <div
          id="CardGrid-rightCard-container"
          className="rounded-2xl shadow-2xl p-8 ring-1 ring-black/5 backdrop-blur-md dark:bg-gray-900/80 dark:ring-white/10"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {rightCard}
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            {rightInfo.map((card, i) => (
              <li key={i}>{card}</li>
            ))}
          </ul>
          {cta(rightLink)}
        </div>
      </div>
    </section>
  );
}

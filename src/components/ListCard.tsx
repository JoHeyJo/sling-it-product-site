import StatusBadge from "../components/common/StatusBadge";
import TagPill from "../components/common/TagPill";
import NiceDate from "../components/common/NiceDate";
import type { Feature } from "../types";

function ListCard({ f }: { f: Feature }) {
  return (
    <article className="relative flex flex-col sm:flex-row items-start gap-6 rounded-2xl shadow-lg bg-gradient-to-br backdrop-blur-sm from-stone-200 to-gray-50/60 text-gray-900 dark:from-gray-900/90 dark:to-gray-800/80 dark:text-gray-100 border border-slate-200/60 dark:border-white/10 px-6 py-8">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
            {f.title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {f.version && (
              <span className="rounded-md bg-white/60 px-2 py-0.5 text-[11px] font-medium text-gray-700 ring-1 ring-black/5 backdrop-blur-lg dark:bg-gray-900/50 dark:text-gray-200 dark:ring-white/10">
                {f.version}
              </span>
            )}
            <StatusBadge status={f.status} />
          </div>
        </div>
        <p className="mt-2 text-sm/6 text-gray-700 dark:text-gray-300">
          {f.summary}
        </p>
        {f.details && (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm/6 text-gray-700 dark:text-gray-300">
            {f.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {f.tags?.map((t) => (
            <TagPill key={t} t={t} />
          ))}
          <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">
            <NiceDate iso={f.date} />
          </span>
        </div>
      </div>
    </article>
  );
}

export default ListCard;
import { useMemo, useState, useEffect } from "react";
import ViewSwitch from "../components/ViewSwitch";
import ListCard from "../components/ListCard";
import type { Feature, FeatureStatus } from "../types";

type Props = {
  toggleView: () => void;
  isGrid: boolean;
};

export default function BlogList(props : Props) {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<FeatureStatus | "all">("all");
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.error("Failed to load features.json", err));
  }, []);

  const items = useMemo(() => {
    return features
      .filter(
        (f) =>
          (tab === "all" || f.status === tab) &&
          (query.trim()
            ? [f.title, f.summary, f.tags?.join(" ")]
                .join(" ")
                .toLowerCase()
                .includes(query.toLowerCase())
            : true)
      )
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [features, query, tab]);

  return (
    <main className="relative mx-auto max-w-4xl px-4 py-16 sm:py-20 lg:py-28">
      <header className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Product updates & roadmap
        </h1>
        <p className="mt-3 text-pretty text-base text-gray-600 dark:text-gray-300">
          Shipping notes, behind-the-scenes details, and what’s coming next.
        </p>
      </header>
      <ViewSwitch toggleView={props.toggleView} isGrid={props.isGrid} />
      <div className="mb-10 flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-xl bg-white/70 p-1 ring-1 ring-black/5 backdrop-blur-sm dark:bg-gray-900/70 dark:ring-white/10">
          {(
            [
              { key: "all", label: "All" },
              { key: "shipped", label: "Shipped" },
              { key: "in-progress", label: "In progress" },
              { key: "planned", label: "Planned" },
            ] as const
          ).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key as any)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                tab === key
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "text-gray-700 hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="ml-auto flex-1 sm:flex-none">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search features, tags, notes…"
            className="w-full rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm shadow-sm outline-none ring-1 ring-transparent placeholder:text-gray-400 focus:border-slate-300 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-gray-900/70 dark:text-gray-100 dark:placeholder:text-gray-500"
          />
        </div>
      </div>

      <section className="flex flex-col gap-6">
        {items.map((f) => (
          <ListCard key={f.id} f={f} />
        ))}
      </section>
    </main>
  );
}

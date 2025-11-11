import { useMemo, useState,useEffect } from "react";
import BlogCard from "../components/BlogCard";
import type { FeatureStatus } from "../types";
import ViewSwitch from "../components/ViewSwitch";

export default function BlogGrid() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<FeatureStatus | "all">("all");
  const [FEATURES , setFeatures] = useState([]);

  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.error("Failed to load features.json", err));
  }, []);

  const items = useMemo(() => {
    return FEATURES.filter(
      (f) =>
        (tab === "all" || f.status === tab) &&
        (query.trim()
          ? [f.title, f.summary, f.tags?.join(" ")]
              .join(" ")
              .toLowerCase()
              .includes(query.toLowerCase())
          : true)
    ).sort((a, b) => b.date.localeCompare(a.date));
  }, [FEATURES, query, tab]);

  return (
    <main className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-28 lg:px-8">
      {/* Page header */}
      <header className="mx-auto mb-8 max-w-3xl text-center">
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Product updates & roadmap
        </h1>
        <p className="mt-3 text-pretty text-base text-gray-600 dark:text-gray-300">
          Shipping notes, behind-the-scenes details, and what’s coming next.
        </p>
      </header>
      <ViewSwitch />
      {/* Controls */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
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
          <label className="sr-only" htmlFor="feature-search">
            Search features
          </label>
          <div className="relative">
            <input
              id="feature-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search features, tags, notes…"
              className="w-full rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm shadow-sm outline-none ring-1 ring-transparent placeholder:text-gray-400 focus:border-slate-300 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-gray-900/70 dark:text-gray-100 dark:placeholder:text-gray-500"
            />
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              ⌘K
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <BlogCard key={f.id} f={f} />
        ))}
      </section>

      {/* Footer callout */}
      <div className="mx-auto mt-12 max-w-3xl text-center text-sm text-gray-600 dark:text-gray-300">
        Looking for the raw changelog?{" "}
        <a
          className="font-medium text-indigo-600 hover:underline dark:text-indigo-300"
          href="#"
        >
          See full release notes →
        </a>
      </div>
    </main>
  );
}

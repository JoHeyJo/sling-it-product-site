import { useMemo, useState, useEffect } from "react";

// -----------------------------
// Seed Data (edit freely)
// -----------------------------
export type FeatureStatus = "shipped" | "in-progress" | "planned";

type Feature = {
  id: string;
  title: string;
  status: FeatureStatus;
  date: string; // ISO like "2025-10-10" (shown with Intl)
  version?: string; // e.g. "v0.7.3"
  summary: string;
  details?: string[]; // bullet points
  tags?: string[]; // e.g. ["frontend", "infra"]
  links?: { label: string; href: string }[];
};

// -----------------------------
// UI Helpers
// -----------------------------

function StatusBadge({ status }: { status: FeatureStatus }) {
  const map: Record<FeatureStatus, string> = {
    shipped:
      "bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-600/20 dark:text-emerald-300",
    "in-progress":
      "bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/20 dark:text-amber-300",
    planned:
      "bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/20 dark:text-sky-300",
  };
  const label =
    status === "shipped"
      ? "Shipped"
      : status === "in-progress"
      ? "In progress"
      : "Planned";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${map[status]}`}
    >
      {status === "shipped" ? "✅" : status === "in-progress" ? "🔧" : "🧭"}
      {label}
    </span>
  );
}

function TagPill({ t }: { t: string }) {
  return (
    <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs text-gray-600 ring-1 ring-black/5 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10">
      {t}
    </span>
  );
}

function NiceDate({ iso }: { iso: string }) {
  const d = useMemo(() => new Date(iso), [iso]);
  const fmt = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
  }).format(d);
  return <time dateTime={iso}>{fmt}</time>;
}

// -----------------------------
// Card
// -----------------------------
function FeatureCard({ f }: { f: Feature }) {
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

// -----------------------------
// Page
// -----------------------------
export default function BlogVertical() {
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
          <FeatureCard key={f.id} f={f} />
        ))}
      </section>
    </main>
  );
}

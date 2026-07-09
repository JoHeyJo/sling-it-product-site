import { useState, useRef, useLayoutEffect, useCallback } from "react";
import {
  Folder,
  FolderOpen,
  ChevronRight,
  Hash,
} from "lucide-react";
import { directories } from "../data/directories";

 import { cardBorder, bgGradient } from "../styles";
import { MonoPanel } from "../components/MonoPanel";
/* ------------------------------------------------------------------ *
 * Palette (from the provided design tokens).
 * `bg-translucent` isn't a stock Tailwind class, so the gradient is
 * expressed with `bg-gradient-to-br`; a solid base sits underneath so
 * the panel stays legible even where the translucent layer is subtle.
 * ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ *
 * Content
 * ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ *
 * Brace path — the signature element.
 * A left-pointing curly brace: the tip sits at the selected directory,
 * and the two arms reach the top and bottom of the open panel. Works
 * asymmetrically, so the tip tracks the item wherever it sits.
 * ------------------------------------------------------------------ */
function bracePath({ tipX, tipY, armX, topY, botY }) {
  const cx = (armX - tipX) * 0.55; // horizontal pull of the control points
  const beak = 6; // how far the point pokes past the arms
  return [
    `M ${armX} ${topY}`,
    `C ${armX - cx} ${topY} ${tipX + cx} ${tipY} ${tipX - beak} ${tipY}`,
    `C ${tipX + cx} ${tipY} ${armX - cx} ${botY} ${armX} ${botY}`,
  ].join(" ");
}

/* ------------------------------------------------------------------ */
export default function Documentation() {
  const [dark, setDark] = useState(false);
  const [selectedId, setSelectedId] = useState(directories[0].id);
  const [brace, setBrace] = useState(null);

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const itemRefs = useRef({});

  const selected = directories.find((d) => d.id === selectedId);

  /* Measure the geometry the brace needs, relative to the row container. */
  const measure = useCallback(() => {
    const container = containerRef.current;
    const item = itemRefs.current[selectedId];
    const content = contentRef.current;
    if (!container || !item || !content) return;

    const c = container.getBoundingClientRect();
    const i = item.getBoundingClientRect();
    const o = content.getBoundingClientRect();
    
    setBrace({
      w: c.width,
      h: c.height,
      tipX: i.right - c.left,
      tipY: i.top + i.height / 2 - c.top,
      armX: o.left - c.left,
      topY: o.top - c.top + 22,
      botY: o.bottom - c.top - 22,
    });
  }, [selectedId]);

  /* Re-measure before paint on selection change, and on any resize. */
  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (contentRef.current) ro.observe(contentRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const stops = dark
    ? { a: "#a8a29e", b: "#f5f5f4" } // stone-400 -> stone-100
    : { a: "#57534e", b: "#1c1917" }; // stone-600 -> stone-900


  const arr = ["string", "string2", "string3"];

  return (
    <div className={dark ? "dark" : ""}>
      <style>{`
        @keyframes brace-draw {
          from { stroke-dashoffset: 1; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes brace-dot {
          from { opacity: 0; transform: scale(0.4); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes panel-in {
          from { opacity: 0; transform: translateX(6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .brace-line { animation: brace-draw .6s ease forwards; }
        .brace-dot  { animation: brace-dot .35s ease .15s both; transform-origin: center; }
        .panel-in   { animation: panel-in .35s ease; }
        @media (prefers-reduced-motion: reduce) {
          .brace-line, .brace-dot, .panel-in { animation: none; }
          .brace-line { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="min-h-screen text-stone-800 transition-colors dark:text-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {/* Header */}
          <header className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                <Hash className="h-3.5 w-3.5" />
                <span>docs</span>
              </div>
              <h1 className="font-mono text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl dark:text-white">
                Documentation
              </h1>
              <p className="mt-2 max-w-md text-sm text-stone-600 dark:text-stone-400">
                Pick a directory to view documentation.
              </p>
            </div>
          </header>

          {/* Layout row (relative so the brace SVG can overlay the gap) */}
          <div
            ref={containerRef}
            className="relative flex flex-col gap-6 lg:flex-row lg:gap-16"
          >
            {/* Brace connector — desktop only */}
            {brace && (
              <svg
                className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
                width={brace.w}
                height={brace.h}
                viewBox={`0 0 ${brace.w} ${brace.h}`}
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="brace-stroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={stops.a} />
                    <stop offset="100%" stopColor={stops.b} />
                  </linearGradient>
                </defs>
                <path
                  key={selectedId}
                  className="brace-line"
                  d={bracePath(brace)}
                  stroke="url(#brace-stroke)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray={1}
                />
                {/* origin dot at the selected directory */}
                {/* <circle
                  key={`dot-${selectedId}`}
                  className="brace-dot"
                  cx={brace.tipX}
                  cy={brace.tipY}
                  r={3.5}
                  fill={stops.b}
                /> */}
              </svg>
            )}

            {/* Sidebar */}
            <aside className="w-full shrink-0 lg:w-64">
              <nav
                className={`${cardBorder} ${bgGradient} bg-stone-50 p-2 dark:bg-gray-900`}
                aria-label="Directories"
              >
                <p className="px-3 pb-2 pt-1 font-mono text-[11px] uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  Directories
                </p>
                <ul className="space-y-0.5">
                  {directories.map((dir) => {
                    const active = dir.id === selectedId;
                    const Icon = active ? FolderOpen : Folder;
                    return (
                      <li key={dir.id}>
                        <button
                          ref={(el) => (itemRefs.current[dir.id] = el)}
                          onClick={() => setSelectedId(dir.id)}
                          aria-current={active ? "true" : undefined}
                          className={[
                            "group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500",
                            active
                              ? "bg-white font-medium text-stone-900 shadow-sm ring-1 ring-gray-900/10 dark:bg-white/10 dark:text-white dark:ring-white/10"
                              : "text-stone-600 hover:bg-white/60 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-white/5 dark:hover:text-white",
                          ].join(" ")}
                        >
                          <span
                            className={[
                              "grid h-6 w-6 place-items-center rounded-md transition",
                              active
                                ? "bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900"
                                : "bg-stone-200/70 text-stone-500 group-hover:bg-stone-200 dark:bg-white/5 dark:text-stone-400",
                            ].join(" ")}
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <span className="flex-1 font-mono">{dir.label}</span>
                          <ChevronRight
                            className={[
                              "h-4 w-4 transition",
                              active
                                ? "translate-x-0 text-stone-900 opacity-100 dark:text-white"
                                : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60",
                            ].join(" ")}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Content panel */}
            <section className="min-w-0 flex-1">
              <div
                ref={contentRef}
                className={`${cardBorder} ${bgGradient} bg-stone-50 p-6 sm:p-8 dark:bg-gray-900`}
                style={{ minHeight: 420 }}
              >
                <div key={selectedId} className="panel-in">
                  <div className="mb-6 flex items-start gap-3 border-b border-gray-900/10 pb-5 dark:border-white/10">
                    <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-lg bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900">
                      <selected.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h2 className="font-mono text-xl font-semibold tracking-tight text-stone-900 dark:text-white">
                        {selected.label}
                      </h2>
                      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                        {selected.blurb}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {selected.sections.map((s) => (
                      <article key={s.heading}>
                        <h3 className="mb-1.5 flex items-center gap-2 font-mono text-sm font-semibold text-stone-800 dark:text-stone-100">
                          <span className="text-stone-400 dark:text-stone-500">
                            {"{"}
                          </span>
                          {s.heading}
                        </h3>
                        <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                          {s.body}
                        </p>
                        {s.instructions && (
                          // <pre className="mt-3 overflow-x-auto rounded-xl border border-gray-900/15 bg-stone-900 p-4 font-mono text-xs leading-relaxed text-stone-100 shadow-inner dark:border-white/10 dark:bg-black/40">
                          //   <instructions>{s.instructions}</instructions>
                          // </pre>
                          // arr.map((s) => <MonoPanel>{s}</MonoPanel>)
                          <MonoPanel
                            lines={[
                              "Click 'Create a book'",
                              "Give it a name",
                              "You're ready to start sharing"]}/>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MonoPanel({ lines }: { lines: string[] }) {
  return (
    <div className="mt-3 space-y-1.5 overflow-x-auto rounded-xl border border-gray-900/15 bg-stone-900 p-4 font-mono text-xs leading-relaxed text-stone-100 shadow-inner dark:border-white/10 dark:bg-black/40">
      {lines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}

function TagPill({ t }: { t: string }) {
  return (
    <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs text-gray-600 ring-1 ring-black/5 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10">
      {t}
    </span>
  );
}

export default TagPill;
export function cta(link){

  return (
    <div className="mt-6 justify-end flex gap-3">
      {link.isDocsLink ? (
        <a
          href={link.href}
          className="rounded-xl px-4 py-2 text-sm font-semibold ring-1 hover:bg-gray-50 dark:hover:bg-white/5 ring-gray-300 dark:text-white dark:ring-gray-700/80"
        >
          {link.label}
        </a>
      ) : (
        <a
          href={link.href}
          className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold hover:bg-blue-800 text-white dark:bg-blue-900"
        >
          {link.label}
        </a>
      )}
    </div>
  );
}
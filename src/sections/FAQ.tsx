import { useState } from "react";
import { faqs } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-2xl bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur-md dark:bg-gray-900/80 dark:ring-white/10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          FAQs
        </h2>
        <div className="mt-6 divide-y divide-black/5 dark:divide-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  className="flex w-full items-center justify-between py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {f.q}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-4 text-sm text-gray-600 dark:text-gray-400">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ToggleThemeSwitch.tsx
import { useEffect, useState } from "react";

export default function ToggleThemeSwitch() {
  const [isDark, setIsDark] = useState(false);

  // Init from localStorage / system
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const next = saved ? saved === "dark" : prefersDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);

  // Apply + persist
  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <label
      className="relative inline-block"
      style={
        {
          // mirrors your CSS custom props (tuned to Tailwind units)
          ["--trans-dur" as any]: "300ms",
          ["--timing" as any]: "cubic-bezier(0.76,0.05,0.24,0.95)",
        } as React.CSSProperties
      }
    >
      {/* Hidden checkbox drives peer-based styles */}
      <input
        type="checkbox"
        role="switch"
        aria-label="Dark Mode"
        checked={isDark}
        onChange={toggle}
        className="peer sr-only"
      />

      {/* Track */}
      <span
        className={[
          "block h-6 w-12 rounded-full",
          "transition-colors duration-300 [transition-timing-function:var(--timing)]",
          // light track
          "bg-[hsl(210,90%,70%)]",
          // dark track
          "peer-checked:bg-[hsl(290,90%,40%)]",
          // focus ring
          "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2",
          "peer-focus-visible:outline-[hsl(223,90%,50%)]",
          // subtle outer shadow
          "shadow-[0.125rem_0.125rem_0.25rem_rgba(0,0,0,0.2)]",
          // gradient glow overlay (pseudo via before)
          "relative before:content-[''] before:absolute before:inset-0 before:rounded-full",
          "before:bg-[hsl(50,90%,50%)]",
          "peer-checked:before:bg-[hsl(220,90%,40%)]",
          // mask to create the angled glow fade
          "before:[mask-image:linear-gradient(120deg,#000_20%,transparent_80%)]",
          "before:[-webkit-mask-image:linear-gradient(120deg,#000_20%,transparent_80%)]",
          "before:transition-colors before:duration-300",
          "before:[transition-timing-function:var(--timing)]",
        ].join(" ")}
      />

      {/* Thumb */}
      <span
        className={[
          "absolute left-0.5 top-0.5 h-5 w-5 rounded-full",
          "bg-white shadow-[0.05em_0.05em_0.05em_rgba(0,0,0,0.1)]",
          "z-[1]",
          "transition-transform transition-colors duration-300 [transition-timing-function:var(--timing)]",
          // slide when checked
          "peer-checked:translate-x-6",
          // dark thumb color
          "peer-checked:bg-black",
        ].join(" ")}
      />

      {/* Sun (light icon) */}
      <svg
        viewBox="0 0 12 12"
        width="12"
        height="12"
        aria-hidden="true"
        className={[
          "pointer-events-none absolute right-1.5 top-1.5 h-3 w-3",
          "transition duration-150",
          // visible by default
          "opacity-100",
          // fade/rotate out on dark
          "peer-checked:opacity-0 peer-checked:-translate-x-3 peer-checked:-rotate-12 peer-checked:scale-75",
        ].join(" ")}
      >
        <g fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round">
          <circle cx="6" cy="6" r="2" />
          <g strokeDasharray="1.5 1.5" className="transition-[stroke-dashoffset] duration-150 peer-checked:[stroke-dashoffset:1.5]">
            {Array.from({ length: 8 }).map((_, i) => (
              <polyline
                key={i}
                points="6 10,6 11.5"
                transform={`rotate(${i * 45},6,6)`}
              />
            ))}
          </g>
        </g>
      </svg>

      {/* Moon (dark icon) */}
      <svg
        viewBox="0 0 12 12"
        width="12"
        height="12"
        aria-hidden="true"
        className={[
          "pointer-events-none absolute right-1.5 top-1.5 h-3 w-3",
          "transition duration-300",
          // start hidden & slightly tilted
          "opacity-0 -translate-x-3 rotate-[30deg] scale-75",
          // slide/fade in on dark
          "peer-checked:opacity-100 peer-checked:translate-x-[-1.5rem] peer-checked:rotate-0 peer-checked:scale-100",
        ].join(" ")}
      >
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="1"
          strokeLinejoin="round"
          transform="rotate(-45,6,6)"
        >
          <path d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z" />
        </g>
      </svg>

      {/* SR-only text */}
      <span className="sr-only">Dark Mode</span>
    </label>
  );
}

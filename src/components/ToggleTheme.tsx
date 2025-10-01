// export default function ThemeToggle() {
//   const toggle = () => {
//     const isDark = document.documentElement.classList.contains("dark");
//     const next = isDark ? "light" : "dark";
//     document.documentElement.classList.toggle("dark", next === "dark");
//     localStorage.setItem("theme", next);
//   };

//   return (
//     <button
//       onClick={toggle}
//       className="fixed bottom-4 right-4 rounded-full border px-3 py-1.5 text-sm bg-white/80 backdrop-blur dark:bg-gray-800/80"
//       aria-label="Toggle theme"
//     >
//       <span className="dark:hidden">🌙 Dark</span>
//       <span className="hidden dark:inline">☀️ Light</span>
//     </button>
//   );
// }


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

/** Component responsible for toggling function that adds/removes dark class on HTML element
 */
function ToggleColorScheme() {
  function toggleColorScheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light"; // Persist the selected theme on refresh
  }

  return (
    <button type="button" onClick={toggleColorScheme}>
      <span className="dark:hidden">🌙 Dark</span>
      <span className="hidden dark:inline">☀️ Light</span>
    </button>
  );
}

export default ToggleColorScheme;

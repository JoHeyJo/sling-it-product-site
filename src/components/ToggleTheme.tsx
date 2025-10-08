function ToggleColorScheme() {
  function toggleColorScheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light"; // Persist the selected theme on refresh
  }

  return (
    <button type="button" onClick={toggleColorScheme}>
      <span className="dark:hidden ">🌙</span>
      <span
        className="dark:hidden px-3 py-1 rounded-md text-gray-700 transition-all duration-300 ease-out
             hover:text-[#111] hover:font-semibold
             hover:[text-shadow:-1px_-1px_0_rgb(255_255_255_/_55%),1px_1px_0_rgb(0_0_0_/_70%)]
             transition-[text-shadow]"
      >
        Dark
      </span>
      <span className="hidden dark:inline">☀️</span>
      <span
        className="hidden dark:inline px-3 py-1 rounded-md text-gray-300 transition-all duration-300 ease-out
             hover:text-white hover:font-semibold
             hover:[text-shadow:0_0_3px_rgb(255_255_255_/_45%)]
             hover:drop-shadow-[3px_3px_6px_rgba(0,0,0,0.85)]
             transition-[text-shadow,filter,color]"
      >
        Light
      </span>
    </button>
  );
}

export default ToggleColorScheme;

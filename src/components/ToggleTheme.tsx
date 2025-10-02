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

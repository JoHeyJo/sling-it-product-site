/**Self-invoking function checks the saved theme preference in localStorage
 * and the OS-level dark mode setting to apply the correct theme on page load. */
export default (() => {
  // On page load or when changing themes, best to add inline in `head` to avoid  flash of unstyled content (FOUC)
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

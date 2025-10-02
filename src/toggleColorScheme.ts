/**Self-invoking function checks the saved theme preference in localStorage
 * and the OS-level dark mode setting to apply the correct theme on page load. */
(() => {
  // On page load or when changing themes, best to add inline in `head` to avoid  flash of unstyled content (FOUC)
  console.log("local theme", localStorage.theme);
  console.log("theme in localStorage", "theme" in localStorage);
  console.log(
    "system theme",
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );
  if (
    localStorage.theme === "dark" || (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    console.log("remove dark")
    document.documentElement.classList.remove("dark");
  }
})();

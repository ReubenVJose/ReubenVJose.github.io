document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle-switch");
  if (!toggle) return;

  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    toggle.checked = false;
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
});

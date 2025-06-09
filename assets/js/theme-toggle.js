document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  const tooltip = new bootstrap.Tooltip(toggleBtn);

  function updateTheme() {
    const isDark = html.getAttribute("data-bs-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";

    html.setAttribute("data-bs-theme", newTheme);
    toggleBtn.innerText = isDark ? "🌙" : "☀️";

    // Update tooltip content
    tooltip.setContent({
      '.tooltip-inner': `Toggle ${newTheme} mode`
    });

    // Update button outline
    toggleBtn.classList.remove("btn-outline-dark", "btn-outline-light");
    toggleBtn.classList.add(`btn-outline-${newTheme === "light" ? "dark" : "light"}`);
  }

  toggleBtn.addEventListener("click", updateTheme);

  // Initial setup
  html.setAttribute("data-bs-theme", "dark");
  toggleBtn.classList.add("btn-outline-light");
});

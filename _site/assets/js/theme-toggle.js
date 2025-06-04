document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Initialize tooltip once
  const tooltip = new bootstrap.Tooltip(toggleBtn);

  function updateTheme() {
    const isDark = html.getAttribute("data-bs-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";

    html.setAttribute("data-bs-theme", newTheme);
    toggleBtn.innerText = isDark ? "🌙" : "☀️";

    // Update tooltip content
    tooltip.setContent({
        '.tooltip-inner': `Toggle ${isDark ? "light" : "dark"} mode`
    });
  }

  toggleBtn.addEventListener("click", updateTheme);
});

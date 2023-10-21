document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeStylesheet = document.getElementById("theme-stylesheet");

  // Rest of your code here...
  function toggleTheme() {
    if (themeStylesheet.getAttribute("href") === "/src/light-theme.css") {
      themeStylesheet.href = "/src/dark-theme.css";
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      themeStylesheet.href = "/src/light-theme.css";
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
  
  themeToggle.addEventListener("change", toggleTheme);
});



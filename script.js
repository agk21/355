const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function updateThemeIcon() {
  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("bi-sun-fill");
    themeIcon.classList.add("bi-moon-fill");
  } else {
    themeIcon.classList.remove("bi-moon-fill");
    themeIcon.classList.add("bi-sun-fill");
  }
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");

  // Rainbow background only for dark mode
  if (body.classList.contains("dark-mode")) {
    body.classList.add("animated-bg");
  } else {
    body.classList.remove("animated-bg");
  }

  updateThemeIcon();
});

window.addEventListener("DOMContentLoaded", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.add("animated-bg");
  }
  updateThemeIcon();
});

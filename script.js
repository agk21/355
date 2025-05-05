document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");

  const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");

  // Enable animated background in dark mode only
  if (body.classList.contains("dark-mode")) {
    body.classList.add("animated-bg");
  } else {
    body.classList.remove("animated-bg");
  }
});

// Enable rainbow background by default if in dark mode
window.addEventListener("DOMContentLoaded", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.add("animated-bg");
  }
});

});

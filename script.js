const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");

  // Rainbow animated background only in dark mode
  if (body.classList.contains("dark-mode")) {
    body.classList.add("animated-bg");
  } else {
    body.classList.remove("animated-bg");
  }
});

// Initialize animation on load if in dark mode
window.addEventListener("DOMContentLoaded", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.add("animated-bg");
  }
});

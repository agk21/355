// Toggle Dark Mode

// Define the function separately
function toggleTheme() {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
}

document.getElementById("email").addEventListener("click", function(event) {
    window.location.href = "mailto:Arun.Kanhai55@qmail.cuny.edu";
});

// Attach the function to the button click event
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);


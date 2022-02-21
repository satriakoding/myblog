var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
// the default theme is light
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";setTheme(savedTheme);

toggle.addEventListener("click", () => {
    if (toggle.className === "bi bi-moon-stars") {
        setTheme("dark");
    } else if (toggle.className === "bi bi-sun") {
        setTheme("light");
    }
});

function setTheme(mode) {
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "bi bi-sun";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "bi bi-moon-stars";
    }
    localStorage.setItem("dark-mode-storage", mode);
}

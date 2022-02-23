var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
// the default theme is light
var savedTheme = localStorage.getItem("dark-mode-storage") || "dark";setTheme(savedTheme);

toggle.addEventListener("click", () => {
    if (toggle.className === "bi bi-sun") {
        setTheme("light");
    } else if (toggle.className === "bi bi-moon-stars") {
        setTheme("dark");
    }
});

function setTheme(mode) {
    if (mode === "light") {
        darkTheme.disabled = false;
        toggle.className = "bi bi-moon-stars";
    } else if (mode === "dark") {
        darkTheme.disabled = true;
        toggle.className = "bi bi-sun";
    }
    localStorage.setItem("dark-mode-storage", mode);
}

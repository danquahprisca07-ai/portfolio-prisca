const toggle = document.querySelector(".toggle-dark");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark");
    }
});

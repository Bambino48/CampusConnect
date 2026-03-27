(function setupTheme() {
    const themeStorageKey = "campusconnect-theme";
    const storedTheme = localStorage.getItem(themeStorageKey);

    if (storedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    function syncToggleLabel() {
        const toggle = document.getElementById("themeToggle");

        if (!toggle) {
            return;
        }

        toggle.textContent = document.body.classList.contains("dark-theme") ? "Clair" : "Sombre";
    }

    document.addEventListener("DOMContentLoaded", function onReady() {
        const toggle = document.getElementById("themeToggle");
        syncToggleLabel();

        if (!toggle) {
            return;
        }

        toggle.addEventListener("click", function handleThemeToggle() {
            document.body.classList.toggle("dark-theme");
            localStorage.setItem(
                themeStorageKey,
                document.body.classList.contains("dark-theme") ? "dark" : "light"
            );
            syncToggleLabel();
        });
    });
})();

window.CampusModal = (function buildModalApi() {
    function open(content) {
        const modal = document.getElementById("eventModal");
        const body = document.getElementById("modalBody");

        if (!modal || !body) {
            return;
        }

        body.innerHTML = content;
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function close() {
        const modal = document.getElementById("eventModal");

        if (!modal) {
            return;
        }

        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    document.addEventListener("DOMContentLoaded", function wireModal() {
        const modal = document.getElementById("eventModal");
        const closeButton = document.getElementById("closeModal");

        if (!modal || !closeButton) {
            return;
        }

        closeButton.addEventListener("click", close);

        modal.addEventListener("click", function closeOnOverlay(event) {
            if (event.target === modal) {
                close();
            }
        });

        document.addEventListener("keydown", function closeOnEscape(event) {
            if (event.key === "Escape" && modal.classList.contains("is-open")) {
                close();
            }
        });
    });

    return { open, close };
})();

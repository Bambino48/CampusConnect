document.addEventListener("DOMContentLoaded", function initSharedUi() {
    const menuToggle = document.getElementById("menuToggle");
    const siteNav = document.getElementById("siteNav");
    const backToTopButton = document.getElementById("backToTop");
    const revealNodes = Array.from(document.querySelectorAll(".reveal"));
    const featuredEventsContainer = document.getElementById("featuredEvents");
    const faqItems = Array.from(document.querySelectorAll(".faq-item"));
    const favoriteStorageKey = "campusconnect-favorites";

    function loadFavorites() {
        try {
            return JSON.parse(localStorage.getItem(favoriteStorageKey) || "[]");
        } catch (error) {
            return [];
        }
    }

    function buildFeaturedCard(eventItem) {
        const favorites = loadFavorites();
        const isFavorite = favorites.includes(eventItem.id);

        return [
            '<article class="event-card reveal is-visible">',
            '<div class="event-topline">',
            '<span class="event-badge">' + window.CampusConnectData.getCategoryLabel(eventItem.category) + "</span>",
            '<span class="event-date-pill">' + window.CampusConnectData.formatEventDate(eventItem.date) + "</span>",
            "</div>",
            "<h3>" + eventItem.title + "</h3>",
            "<p>" + eventItem.description + "</p>",
            '<div class="event-meta">',
            "<span>" + eventItem.location + "</span>",
            "<span>" + eventItem.attendees + " participants</span>",
            "</div>",
            '<div class="event-speaker">Intervenant : <strong>' + eventItem.speaker + "</strong></div>",
            '<div class="event-actions">',
            '<a class="ghost-link" href="events.html">Voir la liste</a>',
            '<button class="' + (isFavorite ? "event-favorite is-favorite" : "event-favorite") + '" type="button" disabled>' + (isFavorite ? "♥" : "♡") + "</button>",
            "</div>",
            "</article>"
        ].join("");
    }

    function renderFeaturedEvents() {
        if (!featuredEventsContainer || !window.CampusConnectData) {
            return;
        }

        const featuredEvents = window.CampusConnectData.eventsData.filter(function filterFeatured(item) {
            return item.featured;
        });

        featuredEventsContainer.innerHTML = featuredEvents.map(buildFeaturedCard).join("");
    }

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", function toggleMenu() {
            siteNav.classList.toggle("is-open");
        });
    }

    if (backToTopButton) {
        window.addEventListener("scroll", function handleScroll() {
            backToTopButton.classList.toggle("is-visible", window.scrollY > 480);
        });

        backToTopButton.addEventListener("click", function scrollTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    if (revealNodes.length) {
        const observer = new IntersectionObserver(
            function observe(entries) {
                entries.forEach(function handleEntry(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.16 }
        );

        revealNodes.forEach(function watch(node) {
            observer.observe(node);
        });
    }

    document.querySelectorAll(".counter").forEach(function initCounter(counterNode) {
        const target = Number(counterNode.dataset.target || 0);
        let current = 0;
        const increment = Math.max(1, Math.round(target / 48));

        function animateCounter() {
            current = Math.min(target, current + increment);
            counterNode.textContent = String(current);

            if (current < target) {
                window.requestAnimationFrame(animateCounter);
            }
        }

        animateCounter();
    });

    faqItems.forEach(function bindFaq(item) {
        const button = item.querySelector(".faq-question");

        if (!button) {
            return;
        }

        button.addEventListener("click", function toggleFaq() {
            item.classList.toggle("is-open");
        });
    });

    renderFeaturedEvents();
});

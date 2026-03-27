document.addEventListener("DOMContentLoaded", function initEventsPage() {
    const container = document.getElementById("eventsContainer");
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");
    const chips = Array.from(document.querySelectorAll(".chip"));
    const resultsCount = document.getElementById("resultsCount");

    if (!container || !window.CampusConnectData) {
        return;
    }

    const favoriteStorageKey = "campusconnect-favorites";
    const sourceEvents = window.CampusConnectData.eventsData.slice();
    let activeCategory = "all";
    let favorites = loadFavorites();

    function loadFavorites() {
        try {
            return JSON.parse(localStorage.getItem(favoriteStorageKey) || "[]");
        } catch (error) {
            return [];
        }
    }

    function saveFavorites() {
        localStorage.setItem(favoriteStorageKey, JSON.stringify(favorites));
    }

    function isFavorite(id) {
        return favorites.includes(id);
    }

    function toggleFavorite(id) {
        favorites = isFavorite(id)
            ? favorites.filter(function removeFavorite(item) {
                return item !== id;
            })
            : favorites.concat(id);

        saveFavorites();
        render();
    }

    function buildCard(eventItem) {
        const favoriteClass = isFavorite(eventItem.id) ? "event-favorite is-favorite" : "event-favorite";
        const favoriteIcon = isFavorite(eventItem.id) ? "♥" : "♡";

        return [
            '<article class="event-card reveal is-visible">',
            '<span class="event-badge">' + window.CampusConnectData.getCategoryLabel(eventItem.category) + "</span>",
            "<h3>" + eventItem.title + "</h3>",
            "<p>" + eventItem.description + "</p>",
            '<div class="event-meta">',
            "<span>" + window.CampusConnectData.formatEventDate(eventItem.date) + "</span>",
            "<span>" + eventItem.location + "</span>",
            "<span>" + eventItem.speaker + "</span>",
            "</div>",
            '<div class="event-actions">',
            '<button class="ghost-link" type="button" data-detail-id="' + eventItem.id + '">Voir le détail</button>',
            '<button class="' + favoriteClass + '" type="button" aria-label="Ajouter en favori" data-favorite-id="' + eventItem.id + '">' + favoriteIcon + "</button>",
            "</div>",
            "</article>"
        ].join("");
    }

    function openDetail(id) {
        const eventItem = sourceEvents.find(function findEvent(candidate) {
            return candidate.id === id;
        });

        if (!eventItem || !window.CampusModal) {
            return;
        }

        const agendaItems = eventItem.agenda
            .map(function mapAgenda(item) {
                return "<li>" + item + "</li>";
            })
            .join("");

        const content = [
            '<div class="modal-body-content">',
            '<span class="event-badge">' + window.CampusConnectData.getCategoryLabel(eventItem.category) + "</span>",
            "<h2>" + eventItem.title + "</h2>",
            "<p>" + eventItem.description + "</p>",
            '<div class="event-meta">',
            "<span>" + window.CampusConnectData.formatEventDate(eventItem.date) + "</span>",
            "<span>" + eventItem.location + "</span>",
            "<span>" + eventItem.attendees + " participants attendus</span>",
            "</div>",
            "<h3>Programme</h3>",
            '<ul class="modal-list">' + agendaItems + "</ul>",
            "</div>"
        ].join("");

        window.CampusModal.open(content);
    }

    function getFilteredEvents() {
        const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
        const sortMode = sortSelect ? sortSelect.value : "featured";

        let filtered = sourceEvents.filter(function matchEvent(eventItem) {
            const matchesCategory = activeCategory === "all" || eventItem.category === activeCategory;
            const searchableContent = [eventItem.title, eventItem.location, eventItem.speaker, eventItem.description]
                .join(" ")
                .toLowerCase();

            return matchesCategory && searchableContent.includes(query);
        });

        if (sortMode === "date") {
            filtered = filtered.sort(function sortByDate(left, right) {
                return new Date(left.date) - new Date(right.date);
            });
        } else if (sortMode === "title") {
            filtered = filtered.sort(function sortByTitle(left, right) {
                return left.title.localeCompare(right.title, "fr");
            });
        } else {
            filtered = filtered.sort(function sortFeaturedFirst(left, right) {
                return Number(right.featured) - Number(left.featured);
            });
        }

        return filtered;
    }

    function render() {
        const filteredEvents = getFilteredEvents();

        container.innerHTML = filteredEvents.length
            ? filteredEvents.map(buildCard).join("")
            : '<article class="event-card"><h3>Aucun résultat</h3><p>Essaie une autre recherche ou un autre filtre.</p></article>';

        if (resultsCount) {
            resultsCount.textContent =
                filteredEvents.length > 1
                    ? filteredEvents.length + " événements trouvés"
                    : filteredEvents.length + " événement trouvé";
        }

        container.querySelectorAll("[data-detail-id]").forEach(function bindDetails(button) {
            button.addEventListener("click", function onDetailClick() {
                openDetail(Number(button.getAttribute("data-detail-id")));
            });
        });

        container.querySelectorAll("[data-favorite-id]").forEach(function bindFavorites(button) {
            button.addEventListener("click", function onFavoriteClick() {
                toggleFavorite(Number(button.getAttribute("data-favorite-id")));
            });
        });
    }

    chips.forEach(function bindChip(chip) {
        chip.addEventListener("click", function onChipClick() {
            activeCategory = chip.dataset.category || "all";
            chips.forEach(function resetActive(currentChip) {
                currentChip.classList.toggle("active", currentChip === chip);
            });
            render();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", render);
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", render);
    }

    render();
});

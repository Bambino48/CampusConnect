const eventsData = [
    {
        id: 1,
        title: "Data & IA responsable",
        category: "conference",
        date: "2026-05-08",
        location: "Amphi A, Campus Nord",
        speaker: "Dr Mariam Coulibaly",
        attendees: 140,
        featured: true,
        description: "Une conférence orientée impact, gouvernance des données et usages concrets de l'intelligence artificielle.",
        agenda: [
            "Panorama des usages académiques de l'IA",
            "Ethique et gouvernance des données",
            "Questions-réponses avec les intervenants"
        ]
    },
    {
        id: 2,
        title: "Atelier UI Web Portfolio",
        category: "atelier",
        date: "2026-05-12",
        location: "Lab Design, Bâtiment C",
        speaker: "Nadia Bamba",
        attendees: 40,
        featured: true,
        description: "Un atelier pratique pour concevoir une page web crédible, moderne et présentable en portfolio.",
        agenda: [
            "Hiérarchie visuelle et composition",
            "Responsive design avec Grid et Flexbox",
            "Micro-interactions et états d'interface"
        ]
    },
    {
        id: 3,
        title: "Hackathon Campus Build",
        category: "hackathon",
        date: "2026-05-20",
        location: "Hub Innovation",
        speaker: "Collectif Tech Students",
        attendees: 100,
        featured: true,
        description: "48 heures pour concevoir une solution numérique autour de l'orientation, de la santé ou de la mobilité sur le campus.",
        agenda: [
            "Kickoff et constitution des équipes",
            "Mentorat produit et technique",
            "Pitch final devant le jury"
        ]
    },
    {
        id: 4,
        title: "Forum Orientation & Carrière",
        category: "forum",
        date: "2026-05-25",
        location: "Esplanade Centrale",
        speaker: "Invités entreprises",
        attendees: 180,
        featured: false,
        description: "Une journée pour relier les étudiants aux entreprises, métiers émergents et parcours académiques spécialisés.",
        agenda: [
            "Stands entreprises et écoles",
            "Mini-conférences métier",
            "Conseils CV et entretiens"
        ]
    },
    {
        id: 5,
        title: "Workshop JavaScript DOM Lab",
        category: "atelier",
        date: "2026-06-03",
        location: "Salle Numérique 4",
        speaker: "Arsène Kouadio",
        attendees: 35,
        featured: false,
        description: "Une session orientée DOM, événements, filtres et composants interactifs en JavaScript natif.",
        agenda: [
            "Sélection et modification de nœuds",
            "Gestion d'événements utilisateur",
            "Construction d'une interface filtrable"
        ]
    },
    {
        id: 6,
        title: "Rencontre Cybersécurité Campus",
        category: "conference",
        date: "2026-06-10",
        location: "Auditorium Sud",
        speaker: "Ing. Ibrahim Tano",
        attendees: 90,
        featured: false,
        description: "Un temps fort consacré à la sécurité numérique, aux bonnes pratiques et aux opportunités de spécialisation.",
        agenda: [
            "Panorama des risques actuels",
            "Carrières et spécialisations",
            "Démonstration et échange public"
        ]
    }
];

function formatEventDate(dateString) {
    return new Date(dateString).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function getCategoryLabel(category) {
    const labels = {
        conference: "Conférence",
        atelier: "Atelier",
        hackathon: "Hackathon",
        forum: "Forum"
    };

    return labels[category] || "Événement";
}

window.CampusConnectData = {
    eventsData,
    formatEventDate,
    getCategoryLabel
};

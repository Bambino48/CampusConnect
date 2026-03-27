**1. Cahier des Charges Complet**

**Nom du projet**  
`CampusConnect` : plateforme front-end de présentation et d’inscription à des événements académiques.

**Contexte**  
Les universités, écoles et clubs étudiants organisent souvent des conférences, ateliers, hackathons et journées portes ouvertes. Le projet consiste à créer une interface moderne permettant de présenter ces événements, d’aider les visiteurs à les filtrer et de faciliter l’inscription.

**Problématique**  
Comment concevoir un site vitrine interactif, responsive et professionnel permettant de consulter, filtrer et découvrir des événements académiques tout en mettant en valeur les compétences front-end du développeur ?

**Objectifs pédagogiques**  
- Structurer un projet web complet en `HTML`, `CSS` et `JavaScript`.
- Maîtriser le `DOM`, les événements, les formulaires et le `localStorage`.
- Créer une interface professionnelle avec animations, `carousel`, responsive design et composants interactifs.
- Produire un projet crédible à intégrer dans un portfolio.

**Public cible**  
- Étudiants
- Futurs candidats
- Enseignants
- Organisateurs d’événements académiques

**Périmètre du projet**  
Le projet est un site front-end multi-sections ou multi-pages, sans backend obligatoire. Les données peuvent être simulées avec des tableaux d’objets JavaScript.

**Fonctionnalités obligatoires**  
- Barre de navigation responsive
- Section d’accueil avec message principal et bouton d’action
- Présentation des événements sous forme de cartes
- Génération dynamique des cartes via JavaScript
- Filtrage des événements par catégorie
- Recherche d’événement par mot-clé
- `Carousel` des intervenants ou témoignages
- Fenêtre `modal` pour voir le détail d’un événement
- Formulaire d’inscription avec validation JavaScript
- FAQ avec accordéon
- Bouton retour en haut
- Mode clair/sombre
- Sauvegarde des préférences utilisateur avec `localStorage`
- Animations d’apparition au scroll

**Fonctionnalités avancées recommandées**  
- Tri par date ou popularité
- Compteur animé de statistiques
- Système de favoris
- Barre de progression de lecture/scroll
- Notification visuelle après inscription réussie

**Exigences techniques**  
- `HTML5` sémantique
- `CSS3` avec variables CSS, Flexbox et Grid
- `JavaScript` natif sans framework
- Code organisé par fichiers et modules simples
- Site responsive mobile, tablette, desktop

**Exigences UI/UX**  
- Interface claire, académique et moderne
- Navigation simple et intuitive
- Contrastes lisibles
- Boutons et états `hover` visibles
- Animations fluides et non excessives
- Temps de chargement léger

**Compétences démontrées dans le portfolio**  
- Intégration front-end complète
- Mise en page responsive
- Manipulation avancée du `DOM`
- Gestion d’interactions utilisateur
- Organisation propre du code
- Sens du design et des micro-interactions

**Livrables attendus**  
- Maquette fonctionnelle du site
- Code source complet
- Dossier organisé
- `README` de présentation du projet
- Captures d’écran pour le portfolio

**Critères d’évaluation**  
- Qualité visuelle
- Qualité du responsive
- Propreté du code
- Richesse des interactions JavaScript
- Cohérence du projet avec un usage réel
- Bonne expérience utilisateur

**2. Maquette Textuelle**

**Page d’accueil `index.html`**  
- Header avec logo, liens de navigation et bouton `Inscription`
- Hero section avec titre fort, texte court, image ou illustration, deux boutons
- Section statistiques avec chiffres animés
- Section événements en vedette avec 3 ou 6 cartes
- Section catégories ou filtres rapides
- Section intervenants ou témoignages avec `carousel`
- Section “Pourquoi participer ?” avec icônes et avantages
- Section FAQ en accordéon
- Section appel à l’action final
- Footer avec contact, réseaux, newsletter

**Page événements `events.html`**  
- Bannière de page avec titre et sous-titre
- Barre de recherche
- Boutons de filtre par catégorie
- Zone de tri
- Grille dynamique de cartes événements
- Bouton “Voir plus” ou pagination simple
- `Modal` de détail au clic sur une carte

**Page contact / inscription `contact.html`**  
- Titre de page
- Bloc d’informations de contact
- Formulaire avec nom, prénom, email, filière, choix d’événement, message
- Validation en direct
- Message de succès après soumission

**Comportements interactifs de la maquette**  
- Le menu mobile s’ouvre et se ferme en JavaScript
- Les cartes apparaissent avec animation au scroll
- Le `carousel` défile automatiquement et manuellement
- Les filtres mettent à jour les cartes sans recharger la page
- Le `modal` affiche les détails de l’événement sélectionné
- Le thème clair/sombre change l’apparence globale
- Les favoris et le thème sont mémorisés via `localStorage`

**3. Structure du Projet**

```text
CampusConnect/
├── index.html
├── events.html
├── contact.html
├── README.md
├── assets/
│   ├── images/
│   ├── icons/
│   └── mockups/
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── data.js
│   ├── events.js
│   ├── carousel.js
│   ├── modal.js
│   ├── form.js
│   ├── theme.js
│   └── utils.js
└── docs/
    ├── cahier-des-charges.md
    └── portfolio-description.md
```

**Rôle des fichiers**  
- `style.css` : styles globaux
- `responsive.css` : adaptation mobile/tablette
- `animations.css` : transitions, keyframes, effets visuels
- `data.js` : données simulées des événements
- `events.js` : affichage, filtre, recherche, tri
- `carousel.js` : logique du slider
- `modal.js` : ouverture/fermeture des détails
- `form.js` : validation du formulaire
- `theme.js` : mode clair/sombre
- `main.js` : initialisation générale et interactions globales

Si tu veux, la prochaine étape logique est : **je te rédige un plan de développement complet en étapes**, puis je peux enchaîner avec le **code HTML de base du projet**.
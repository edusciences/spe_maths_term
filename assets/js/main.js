// Script principal de l'application
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de l'application
    initializeApp();
});

function initializeApp() {
    // Amélioration de l'accessibilité
    setupAccessibility();
    
    // Gestion des liens externes
    setupExternalLinks();
    
    // Animation d'entrée
    setupAnimations();
    
    // Performance et optimisations
    setupPerformanceOptimizations();
}

// Configuration de l'accessibilité
function setupAccessibility() {
    // Ajout de labels aria pour les boutons d'aide
    const pencilButtons = document.querySelectorAll('.pencil-btn');
    pencilButtons.forEach(btn => {
        const parentItem = btn.closest('.point-item');
        const title = parentItem.querySelector('strong').textContent;
        btn.setAttribute('aria-label', `Aide pour: ${title}`);
        btn.setAttribute('title', `Aide pour: ${title}`);
    });
    
    // Navigation au clavier
    setupKeyboardNavigation();
}

// Navigation au clavier améliorée
function setupKeyboardNavigation() {
    const focusableElements = document.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                if (element.tagName === 'BUTTON') {
                    e.preventDefault();
                    element.click();
                }
            }
        });
    });
}

// Gestion des liens externes
function setupExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('title', 'Ouvre dans un nouvel onglet');
        
        // Les liens externes n'ont plus d'indicateur visuel
    });
}

// Animations d'entrée
function setupAnimations() {
    // Observer pour les animations à l'entrée
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Préparation des éléments pour l'animation
    const animatedElements = document.querySelectorAll('.section, .point-item');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Optimisations de performance
function setupPerformanceOptimizations() {
    // Lazy loading des modales pour améliorer les performances initiales
    lazyLoadModals();
    
    // Préchargement des liens importants
    preloadImportantLinks();
}

// Chargement paresseux des modales
function lazyLoadModals() {
    const pencilButtons = document.querySelectorAll('.pencil-btn');
    const loadedModals = new Set();
    
    pencilButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            const modalId = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
            if (!loadedModals.has(modalId)) {
                // Précharger le contenu de la modale si nécessaire
                loadedModals.add(modalId);
            }
        }, { once: true });
    });
}

// Préchargement des liens importants
function preloadImportantLinks() {
    const importantLinks = document.querySelectorAll('.correction-link');
    importantLinks.forEach(link => {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'prefetch';
        preloadLink.href = link.href;
        document.head.appendChild(preloadLink);
    });
}

// Fonction utilitaire pour déboguer (développement uniquement)
function debugInfo() {
    console.log('🎓 Site Spécialité Mathématiques Terminale');
    console.log('📊 Modales chargées:', Object.keys(modalData).length);
    console.log('🔗 Liens externes:', document.querySelectorAll('a[href^="http"]').length);
    console.log('✏️ Boutons d\'aide:', document.querySelectorAll('.pencil-btn').length);
}

// Affichage des informations de debug en mode développement
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    debugInfo();
}

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    console.warn('Erreur détectée:', e.error);
    // En production, vous pourriez envoyer ces erreurs à un service de monitoring
});

// Export des fonctions utiles pour les tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        setupAccessibility,
        setupExternalLinks
    };
}
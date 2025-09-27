// Données des modales
const modalData = {
    // Modales Probabilités
    modal1: {
        title: "1. Arbre pondéré",
        content: "Les probabilités doivent apparaître sous forme décimale (pas en %). Les calculs doivent apparaître soit sur les branches de l'arbre, soit avant de reproduire l'arbre."
    },
    modal2: {
        title: "2. Calcul P(A ∩ B)",
        content: "La formule avec les probabilités conditionnelles doit apparaître. Vous devez ensuite remplacer les probabilités par leurs valeurs exactes. Seul le résultat final doit être arrondi si cela est exigé."
    },
    modal3: {
        title: "3. Calcul P(B)",
        content: "La loi des probabilités totales doit être explicitement citée. Vous devez ensuite l'appliquer. Seul le résultat final doit être arrondi si cela est exigé."
    },
    modal4: {
        title: "4. Calcul P<span class=\"subscript\">B</span>(A)",
        content: `Citez la formule des probabilités conditionnelles avant de l'appliquer.
        <div class="attention">
            Attention : si l'énoncé demande une valeur arrondie, l'approximation doit se faire uniquement au niveau du résultat final. Gardez les valeurs exactes dans les calculs intermédiaires !
        </div>`
    },
    
    // Modales Suites
    modal5: {
        title: "1. Termes d'une suite récurrente",
        content: "<p><strong>Chapitre 02_Limites de suites : capacité 10.</strong></p><p>Vous devez détailler les étapes du calcul.</p>"
    },
    modal6: {
        title: "2. Sens de variation",
        content: `<p><strong>Chapitre 01_Suites_et_raisonnement_par_récurrence :</strong></p>
        <ul>
            <li>1.d de la capacité 1</li>
            <li>2.a de la capacité 3</li>
            <li>capacité 6</li>
            <li>1.b de la capacité 10</li>
        </ul>
        <p><strong>Chapitre 02_Limites de suites :</strong></p>
        <ul>
            <li>1.a et 2.a de la capacité 1</li>
            <li>1. de la capacité 9</li>
            <li>2. de la capacité 10</li>
        </ul>
        <p>Vous devez démontrer que <span class="math-notation">u<span class="subscript">n+1</span> - u<span class="subscript">n</span></span> est toujours du même signe (positif ⇒ croissante et négatif ⇒ décroissante).</p>
        <p>Attention, vous pouvez comparer <span class="math-notation">u<span class="subscript">n+1</span>/u<span class="subscript">n</span></span> à 1 seulement si tous les termes de la suite sont positifs.</p>`
    },
    modal7: {
        title: "3. Suite arithmétique",
        content: "Vous devez démontrer qu'à partir du 1er terme de la suite, <span class=\"math-notation\">u<span class=\"subscript\">n+1</span> - u<span class=\"subscript\">n</span></span> est égal à une valeur constante à déterminer."
    },
    modal8: {
        title: "4. Forme explicite arithmétique",
        content: "Vous devez utiliser la formule <span class=\"math-notation\">u<span class=\"subscript\">n</span> = u<span class=\"subscript\">p</span> + (n - p) × r</span>."
    },
    modal9: {
        title: "5. Suite géométrique",
        content: `<p><strong>Chapitre 01_Suites_et_raisonnement_par_récurrence :</strong></p>
        <ul>
            <li>1. de la capacité 9</li>
        </ul>
        <p>Vous devez démontrer qu'à partir du 1er terme de la suite, <span class="math-notation">v<span class="subscript">n+1</span> = q × v<span class="subscript">n</span></span> où <span class="math-notation">q</span> est une valeur fixe à déterminer.</p>
        <p>Vous pouvez simplifier <span class="math-notation">v<span class="subscript">n+1</span>/v<span class="subscript">n</span></span> seulement si l'énoncé précise que tous les termes de la suite sont non nuls ou s'il est très simple et rapide de justifier qu'ils sont tous non nuls.</p>`
    },
    modal10: {
        title: "6. Forme explicite géométrique",
        content: "Vous devez utiliser la formule <span class=\"math-notation\">u<span class=\"subscript\">n</span> = u<span class=\"subscript\">p</span> × q<sup>n-p</sup></span>."
    },
    modal11: {
        title: "7. Récurrence",
        content: `<p><strong>Chapitre 01_Suites_et_raisonnement_par_récurrence :</strong></p>
        <ul>
            <li>capacité 10</li>
        </ul>
        <p>Doivent apparaître de manière explicite les étapes suivantes :</p>
        <ul class="steps-list">
            <li>nommer la proposition</li>
            <li>démontrer qu'elle est vraie pour la 1ère valeur de n</li>
            <li>démontrer que la proposition est héréditaire</li>
            <li>conclure (le terme récurrence doit apparaître)</li>
        </ul>`
    },
    modal12: {
        title: "8. Limite par opérations",
        content: `<p><strong>Chapitre 02_Limites de suites : capacités 3 et 7.</strong></p>
        <p>Les valeurs des limites du type <span class="math-notation">a × u<span class="subscript">n</span> + b</span> où <span class="math-notation">a</span> et <span class="math-notation">b</span> sont des constantes et <span class="math-notation">u<span class="subscript">n</span></span> est une suite usuelle, ne nécessitent aucune justification.</p>
        <p>Toutes les autres limites doivent être justifiées par somme, produit ou quotient.</p>`
    },
    modal13: {
        title: "9. Limite par factorisation",
        content: `<p><strong>Chapitre 02_Limites de suites : capacités 3 et 7.</strong></p>
        <p>Si la forme de la suite est explicite et qu'il y a une forme indéterminée, essayez de la lever en factorisant, puis appliquez les consignes de rédaction des limites par opérations.</p>
        <p>Si vous ne parvenez pas à lever la forme indéterminée, alors écrivez sur votre copie la forme indéterminée (ex : "∞ - ∞") puis donnez la réponse.</p>`
    },
    modal14: {
        title: "10. Théorème de comparaison",
        content: `<p><strong>Chapitre 02_Limites de suites : 2. à 4. de la capacité 5.</strong></p>
        <p>Le théorème de comparaison doit être explicitement cité APRÈS avoir établi l'inégalité et avoir donné la limite de la suite qui sert de comparaison.</p>`
    },
    modal15: {
        title: "11. Théorème des gendarmes",
        content: `<p><strong>Chapitre 02_Limites de suites :</strong></p>
        <ul>
            <li>capacité 6</li>
            <li>2. de la capacité 8</li>
        </ul>
        <p>Le théorème des gendarmes doit être explicitement cité APRÈS avoir établi la double inégalité et avoir donné la limite des deux suites qui servent pour l'encadrement.</p>`
    },
    modal16: {
        title: "12. Théorème de la limite monotone",
        content: `<p><strong>Chapitre 02_Limites de suites :</strong></p>
        <ul>
            <li>capacités 9 et 10</li>
        </ul>
        <p>Le théorème de la limite monotone doit être explicitement cité APRÈS avoir cité :</p>
        <ul class="steps-list">
            <li>le sens de variation de la suite</li>
            <li>préciser si elle est majorée/minorée</li>
        </ul>`
    }
};

// Fonction pour créer une modale
function createModal(modalId, data) {
    return `
        <div id="${modalId}" class="modal">
            <div class="modal-content">
                <button class="close-btn" onclick="closeModal('${modalId}')" aria-label="Fermer">×</button>
                <div class="modal-header">${data.title}</div>
                <div class="modal-body">
                    ${data.content}
                </div>
            </div>
        </div>
    `;
}

// Fonction pour initialiser toutes les modales
function initModals() {
    const container = document.getElementById('modal-container');
    if (!container) return;
    
    let modalsHTML = '';
    for (const [modalId, data] of Object.entries(modalData)) {
        modalsHTML += createModal(modalId, data);
    }
    container.innerHTML = modalsHTML;
}

// Fonction pour ouvrir une modale
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus sur le bouton de fermeture pour l'accessibilité
        const closeBtn = modal.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.focus();
        }
    }
}

// Fonction pour fermer une modale
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Fermer la modale en cliquant en dehors
function handleModalClick(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Fermer avec la touche Escape
function handleKeyDown(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
}

// Initialisation des événements
document.addEventListener('DOMContentLoaded', function() {
    initModals();
    
    // Événements globaux
    document.addEventListener('click', handleModalClick);
    document.addEventListener('keydown', handleKeyDown);
});

// Rendre les fonctions globales pour les onclick dans le HTML
window.openModal = openModal;
window.closeModal = closeModal;
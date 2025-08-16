// Script personnalisé pour Tingo - Complément à Bootstrap

// Animation du temps dans le mockup
function updateTime() {
    const timeDisplay = document.querySelector('.time-display');
    if (timeDisplay) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        timeDisplay.textContent = timeString;
    }
}

// Mettre à jour l'heure toutes les secondes
setInterval(updateTime, 1000);
updateTime(); // Première mise à jour

// Animation au scroll avec Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .feature-item, .advantage-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Formulaire de contact
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Désactiver le bouton et afficher un message de chargement
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Envoi en cours...';
        
        try {
            // Simuler l'envoi (remplacez par votre logique d'envoi réelle)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Succès
            showNotification('Demande de devis envoyée avec succès ! Nous vous recontacterons rapidement.', 'success');
            contactForm.reset();
            
        } catch (error) {
            // Erreur
            showNotification('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
        } finally {
            // Réactiver le bouton
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }
    });
}

// Système de notification Bootstrap
function showNotification(message, type = 'info') {
    // Supprimer les notifications existantes
    const existingNotifications = document.querySelectorAll('.toast');
    existingNotifications.forEach(notification => notification.remove());
    
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `toast align-items-center text-white bg-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'primary'} border-0`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'assertive');
    notification.setAttribute('aria-atomic', 'true');
    
    notification.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} me-2"></i>
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    
    // Créer le conteneur de toast s'il n'existe pas
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
        toastContainer.style.zIndex = '1055';
        document.body.appendChild(toastContainer);
    }
    
    // Ajouter la notification
    toastContainer.appendChild(notification);
    
    // Initialiser et afficher le toast Bootstrap
    const toast = new bootstrap.Toast(notification, {
        autohide: true,
        delay: 5000
    });
    
    toast.show();
}

// Smooth scrolling pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Ajuster pour la navbar fixe
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navigation active au scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Écouter le scroll pour mettre à jour la navigation
window.addEventListener('scroll', updateActiveNavLink);

// Effet de parallaxe léger pour le hero
function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero && window.innerWidth > 768) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
}

window.addEventListener('scroll', updateParallax);

// Animation des compteurs (pour les statistiques futures)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Effets de hover sur les cartes
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Gestion des erreurs globales
window.addEventListener('error', (e) => {
    console.error('Erreur JavaScript:', e.error);
    showNotification('Une erreur est survenue. Veuillez rafraîchir la page.', 'error');
});

// Gestion de la visibilité de la page
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '👋 Revenez sur Tingo !';
    } else {
        document.title = 'Tingo - Système d\'Alarme Automatique Scolaire';
    }
});

// Amélioration de l'accessibilité
document.addEventListener('keydown', (e) => {
    // Navigation au clavier
    if (e.key === 'Escape') {
        // Fermer les toasts
        const toasts = document.querySelectorAll('.toast');
        toasts.forEach(toast => {
            const bsToast = bootstrap.Toast.getInstance(toast);
            if (bsToast) {
                bsToast.hide();
            }
        });
    }
});

// Lazy loading des images (pour les futures images)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    
    // Ajouter des classes d'animation aux éléments
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    const advantageCards = document.querySelectorAll('.advantage-card');
    advantageCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Préchargement des ressources importantes
function preloadResources() {
    const resources = [
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    ];
    
    resources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// Initialiser le préchargement
preloadResources();

// Fonction pour tester les animations
function testAnimations() {
    const elements = document.querySelectorAll('.card, .feature-item, .advantage-card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
    });
    
    setTimeout(() => {
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
}

// Exposer la fonction de test (pour la console)
window.testAnimations = testAnimations;

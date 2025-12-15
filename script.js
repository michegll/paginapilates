// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = menuToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add animation to button
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // Update cart count
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Animate cart icon
        const cartBtn = document.querySelector('.cart-btn');
        cartBtn.style.animation = 'none';
        setTimeout(() => {
            cartBtn.style.animation = 'cartBounce 0.5s ease';
        }, 10);
        
        // Show notification
        showNotification('Producto agregado al carrito');
    });
});

// Notification system
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification styles dynamically
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 100px;
        right: 2rem;
        background: #1a1a1a;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        transform: translateX(400px);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 10000;
        font-size: 0.95rem;
        font-weight: 500;
    }
    
    .notification.show {
        transform: translateX(0);
        opacity: 1;
    }
    
    @keyframes cartBounce {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(1.2); }
        50% { transform: scale(0.9); }
        75% { transform: scale(1.1); }
    }
    
    @media (max-width: 768px) {
        .notification {
            right: 1rem;
            left: 1rem;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
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

// Observe sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Search functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    const searchInput = prompt('¿Qué estás buscando?');
    if (searchInput) {
        console.log('Searching for:', searchInput);
        // Here you would implement actual search functionality
        showNotification(`Buscando: ${searchInput}`);
    }
});

// Filter toggle placeholder
const filterToggle = document.querySelector('.filter-toggle');
if (filterToggle) {
    filterToggle.addEventListener('click', () => {
        showNotification('Filtros próximamente disponibles');
    });
}

// Account button
const accountBtn = document.querySelector('.account-btn');
accountBtn.addEventListener('click', () => {
    showNotification('Inicia sesión para continuar');
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add to favorites functionality (placeholder)
function createFavoriteButton() {
    document.querySelectorAll('.product-card').forEach(card => {
        const favBtn = document.createElement('button');
        favBtn.className = 'favorite-btn';
        favBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M10 17.5L3.5 11C1.5 9 1.5 5.5 3.5 3.5C5.5 1.5 9 1.5 10 3.5C11 1.5 14.5 1.5 16.5 3.5C18.5 5.5 18.5 9 16.5 11L10 17.5Z"/>
            </svg>
        `;
        
        favBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            favBtn.classList.toggle('active');
            const message = favBtn.classList.contains('active') ? 
                'Agregado a favoritos' : 'Eliminado de favoritos';
            showNotification(message);
        });
        
        card.querySelector('.product-images').appendChild(favBtn);
    });
}

// Add favorite button styles
const favoriteStyles = document.createElement('style');
favoriteStyles.textContent = `
    .favorite-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 3;
        color: #666;
    }
    
    .favorite-btn:hover {
        transform: scale(1.1);
        background: white;
    }
    
    .favorite-btn.active {
        color: #d4a574;
    }
    
    .favorite-btn.active svg {
        fill: #d4a574;
    }
`;
document.head.appendChild(favoriteStyles);

// Initialize favorite buttons
createFavoriteButton();

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-image img');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Product card click to view details
document.querySelectorAll('.product-card').forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking on buttons
        if (e.target.classList.contains('btn-add-to-cart') || 
            e.target.classList.contains('favorite-btn') ||
            e.target.closest('.favorite-btn')) {
            return;
        }
        
        const title = card.querySelector('.product-title').textContent;
        showNotification(`Ver detalles de: ${title}`);
        // Here you would navigate to product details page
    });
});

console.log('Blue Zone Store - Ready! 🏋️‍♀️');

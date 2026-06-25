/**
 * Tech Nexus Global Interactivity
 * Handles navigation, smooth scrolling, and scroll-reveal animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Sticky Navbar
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Darken the background when scrolling down
            navbar.style.background = 'rgba(10, 25, 47, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            // Revert to transparent glass at the top
            navbar.style.background = 'rgba(255, 255, 255, 0.03)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        }
    });

    // 2. Smooth Scrolling for Anchor Links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    const hubCards = document.querySelectorAll('.hub-card');
    
    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the card is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            // Add the 'visible' class to trigger the CSS animation
            entry.target.classList.add('visible');
            
            // Stop observing once it has been revealed
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    // Apply initial hidden state and observe each card
    hubCards.forEach(card => {
        card.classList.add('hidden');
        revealOnScroll.observe(card);
    });
});

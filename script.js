document.addEventListener('DOMContentLoaded', () => {
    // 1. Keep the copyright year automatically updated
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Add a simple fade-in effect to the cards
    const cards = document.querySelectorAll('.card');
    
    // Set initial state for animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Trigger the animation slightly after page load for a smooth effect
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100); // Staggers the animation by 100ms per card
        });
    }, 100);

    console.log("Tech Nexus Hub initialized successfully!");
});

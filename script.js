document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Card Fade-in Animation
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100); 
        });
    }, 200);

    // 3. Typewriter Effect for Hero Section
    const words = ["Programming.", "Generative AI.", "Hardware.", "Digital Literacy.", "Your Future."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById('typewriter');
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typewriterElement.textContent = currentWord.substring(0, charIndex);

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000; // Pause at the end of the word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
            typingSpeed = 500; // Pause before starting new word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Start the typing effect
    if (typewriterElement) {
        setTimeout(typeEffect, 1000);
    }
});

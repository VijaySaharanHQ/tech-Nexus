// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        // Toggle the display of the navigation links on mobile
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '5%';
            navLinks.style.backgroundColor = '#0A192F';
            navLinks.style.padding = '1rem';
            navLinks.style.borderRadius = '8px';
            navLinks.style.border = '1px solid rgba(0, 207, 255, 0.2)';
        }
    
    // --- Academy Course Filtering Logic ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // 1. Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                // 2. Add active class to clicked button
                btn.classList.add('active');

                // 3. Get the filter category
                const filterValue = btn.getAttribute('data-filter');

                // 4. Show/Hide cards based on category
                courseCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex'; // Use flex to maintain internal card layout
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Course IDE Tab Logic ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const codeInputs = document.querySelectorAll('.code-input');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all tabs and inputs
                tabBtns.forEach(b => b.classList.remove('active'));
                codeInputs.forEach(input => input.classList.remove('active'));

                // Add active class to clicked tab
                btn.classList.add('active');

                // Show corresponding textarea
                const targetTab = btn.getAttribute('data-tab');
                document.getElementById(`${targetTab}-editor`).classList.add('active');
            });
        });
    }

    // --- Live Preview Engine ---
    const htmlEditor = document.getElementById('html-editor');
    const cssEditor = document.getElementById('css-editor');
    const jsEditor = document.getElementById('js-editor');
    const livePreview = document.getElementById('live-preview');

    // Make sure we are on the course page where these elements exist
    if (htmlEditor && cssEditor && jsEditor && livePreview) {
        
        function updatePreview() {
            const html = htmlEditor.value;
            const css = `<style>${cssEditor.value}</style>`;
            // We escape the closing script tag to prevent breaking the parent document
            const js = `<script>${jsEditor.value}<\/script>`; 
            
            // Access the iframe's internal document
            const previewDocument = livePreview.contentDocument || livePreview.contentWindow.document;
            
            // Write the combined code into the iframe
            previewDocument.open();
            previewDocument.write(html + css + js);
            previewDocument.close();
        }

        // Listen for user typing in any of the editors
        htmlEditor.addEventListener('input', updatePreview);
        cssEditor.addEventListener('input', updatePreview);
        jsEditor.addEventListener('input', updatePreview);

        // Run once on load to show initial code
        updatePreview();
    }
    });

});

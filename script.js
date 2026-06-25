// Automatically update the copyright year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
    
    console.log("Welcome to Tech Nexus!");
});

// 1. Find the button in our HTML using its ID
const button = document.getElementById('magic-btn');

// 2. Tell the button to listen for a 'click' event
button.addEventListener('click', function() {
    
    // Generate a random hex color code (e.g., #FF5733)
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Change the background color of the whole page
    document.body.style.backgroundColor = randomColor;
    
    // Optional: Log the color to the developer console
    console.log("Background changed to: " + randomColor);
});

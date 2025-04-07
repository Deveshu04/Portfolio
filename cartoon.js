// Create a dynamic cartoon character that finds empty space
const cartoonContainer = document.createElement('div');
cartoonContainer.className = 'cartoon-container';
document.querySelector('.hero').appendChild(cartoonContainer);

// Create a wrapper for the character and frame to float together
const floatingWrapper = document.createElement('div');
floatingWrapper.className = 'floating-wrapper';
cartoonContainer.appendChild(floatingWrapper);

// Create the cartoon element
const cartoon = document.createElement('img');
cartoon.className = 'cartoon-character';
cartoon.alt = 'Pixar character';

// Use the correct path to your image
cartoon.src = 'src/Pixar pic.jpeg';

// Add error handling
cartoon.onerror = function() {
    console.error('Failed to load image:', this.src);
    // Try a fallback path if the first one fails
    this.src = './src/Pixar pic.jpeg';
};

floatingWrapper.appendChild(cartoon);

// Create a frame around the character (the line outside the box)
const frame = document.createElement('div');
frame.className = 'character-frame';
floatingWrapper.appendChild(frame);

// Style the container initially off-screen
cartoonContainer.style.cssText = `
    position: absolute;
    right: -300px; /* Start off-screen */
    bottom: 25%; /* Positioned higher up */
    z-index: 10;
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy transition */
`;

// Add animation styles
const cartoonStyle = document.createElement('style');
cartoonStyle.textContent = `
    .floating-wrapper {
        position: relative;
        animation: float 3s ease-in-out infinite;
        transition: transform 0.3s ease;
    }
    
    .cartoon-character {
        width: 220px; /* Increased size */
        height: auto;
        display: block;
        filter: drop-shadow(0 10px 15px rgba(0,0,0,0.2));
        border-radius: 15px; /* Rounded corners */
        position: relative;
        z-index: 2;
    }
    
    .character-frame {
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border: 2px solid rgba(255,255,255,0.4);
        border-radius: 20px;
        z-index: 1;
        pointer-events: none;
    }
    
    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-15px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    
    .cartoon-container:hover .floating-wrapper {
        transform: scale(1.1) rotate(5deg);
    }
    
    .speech-bubble {
        position: absolute;
        top: -80px;
        right: 0;
        background: white;
        padding: 10px 15px;
        border-radius: 20px;
        font-size: 14px;
        max-width: 200px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s, transform 0.3s;
        pointer-events: none;
        z-index: 11;
        color: #333; /* Ensure text color is visible */
        font-weight: 500; /* Make text slightly bolder */
    }
    
    .speech-bubble span {
        display: inline-block; /* Ensure the text is properly displayed */
    }
    
    .speech-bubble:after {
        content: '';
        position: absolute;
        bottom: -10px;
        right: 20px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid white;
    }
    
    .cartoon-container:hover .speech-bubble {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(cartoonStyle);

// Add a glow effect behind the character
const glowEffect = document.createElement('div');
glowEffect.className = 'character-glow';
glowEffect.style.cssText = `
    position: absolute;
    width: 240px; /* Increased to match larger image */
    height: 240px; /* Increased to match larger image */
    border-radius: 50%;
    background: radial-gradient(circle at center, 
        rgba(88, 166, 255, 0.2) 0%,
        rgba(130, 80, 223, 0.1) 50%,
        transparent 70%);
    filter: blur(15px);
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
floatingWrapper.appendChild(glowEffect);

// Add a speech bubble with the specified text
const speechBubble = document.createElement('div');
speechBubble.className = 'speech-bubble';
speechBubble.innerHTML = '<span>Hi, I am Deveshu. How are you?</span>';
cartoonContainer.appendChild(speechBubble);

// Function to position the character between text content and right edge
function positionCharacter() {
    // Get the hero section
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    // Find the rightmost text content in the hero section
    const textElements = Array.from(heroSection.querySelectorAll('h1, h2, h3, p, .btn'));

    let rightmostTextEdge = 0;
    textElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        rightmostTextEdge = Math.max(rightmostTextEdge, rect.right);
    });

    // Get viewport width
    const viewportWidth = window.innerWidth;

    // Calculate the center point between text edge and viewport edge
    const availableSpace = viewportWidth - rightmostTextEdge;

    // Adjust the position to be more to the left (40% of available space instead of 50%)
    const leftOffset = rightmostTextEdge + (availableSpace * 0.4);

    // Calculate the left position for the character (centering it at the adjusted point)
    const characterWidth = 220; // Same as in CSS
    const leftPosition = leftOffset - (characterWidth / 2);

    // Position the character
    cartoonContainer.style.right = 'auto';
    cartoonContainer.style.left = `${leftPosition}px`;
    cartoonContainer.style.bottom = '25%'; // Positioned higher up

    // Make character visible with a nice entrance
    cartoonContainer.style.opacity = '1';

    // Create a ripple effect where the character appears
    if (typeof createRipple === 'function') {
        const rect = cartoon.getBoundingClientRect();
        createRipple(rect.left + rect.width/2, rect.top + rect.height/2);
    }
}

// Position the character after the page has loaded
window.addEventListener('load', () => {
    // Wait a bit for everything to render properly
    setTimeout(() => {
        positionCharacter();

        // Force the speech bubble to be visible initially and then hide it
        // This helps ensure the text is properly rendered
        speechBubble.style.opacity = '1';
        setTimeout(() => {
            if (!cartoonContainer.matches(':hover')) {
                speechBubble.style.opacity = '0';
            }
        }, 100);
    }, 800);
});

// Reposition on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(positionCharacter, 200);
});

// Make the character interactive
cartoon.addEventListener('click', () => {
    // Change the speech bubble text randomly
    const messages = [
        "Hi, I am Deveshu. How are you?",
        "Feel free to explore my projects!",
        "Thanks for visiting my website!",
        "I hope you like what you see!",
        "Let's connect!",
        "Check out my latest work!",
        "I'm passionate about web development!",
        "Got a project in mind? Contact me!"
    ];
    speechBubble.innerHTML = `<span>${messages[Math.floor(Math.random() * messages.length)]}</span>`;

    // Make sure the speech bubble is visible
    speechBubble.style.opacity = '1';

    // Create a ripple effect on click
    if (typeof createRipple === 'function') {
        const rect = cartoon.getBoundingClientRect();
        for (let i = 0; i < 3; i++) { // Create multiple ripples for a more dramatic effect
            setTimeout(() => {
                createRipple(rect.left + rect.width/2, rect.top + rect.height/2);
            }, i * 100);
        }
    }
});

// Add explicit hover handlers to ensure the speech bubble shows/hides properly
cartoonContainer.addEventListener('mouseenter', () => {
    speechBubble.style.opacity = '1';
    speechBubble.style.transform = 'translateY(0)';
});

cartoonContainer.addEventListener('mouseleave', () => {
    speechBubble.style.opacity = '0';
    speechBubble.style.transform = 'translateY(10px)';
});

// Create ripples occasionally to draw attention
setInterval(() => {
    if (Math.random() > 0.7 && typeof createRipple === 'function') { // 30% chance
        const rect = cartoon.getBoundingClientRect();
        createRipple(rect.left + rect.width/2, rect.top + rect.height/2);
    }
}, 5000);

// Log when the script has loaded
console.log('Cartoon character script loaded with image path:', cartoon.src);
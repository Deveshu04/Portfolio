// Create ripple container
const rippleContainer = document.createElement('div');
rippleContainer.className = 'ripple';
document.body.appendChild(rippleContainer);

// Mouse position tracking for smooth movement
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth ripple effect
function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle at center, 
            rgba(88, 166, 255, 0.08) 0%,
            rgba(88, 166, 255, 0.05) 35%,
            rgba(130, 80, 223, 0.03) 50%,
            transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0.1);
        animation: rippleEffect 2s cubic-bezier(0.2, 0.6, 0.3, 1) forwards;
        pointer-events: none;
        left: ${x}px;
        top: ${y}px;
        mix-blend-mode: screen;
        will-change: transform, opacity;
    `;

    rippleContainer.appendChild(ripple);
    setTimeout(() => ripple.remove(), 2000);
}

// Smooth animation loop with easing
function animate() {
    // Smooth interpolation with easing
    const ease = 0.08;
    currentX += (mouseX - currentX) * ease;
    currentY += (mouseY - currentY) * ease;

    // Create ripple with reduced frequency
    if (Math.abs(mouseX - currentX) > 2 || Math.abs(mouseY - currentY) > 2) {
        createRipple(currentX, currentY);
    }

    requestAnimationFrame(animate);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        0% {
            transform: translate(-50%, -50%) scale(0.1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Start animation loop
animate();

// Throttle ripple creation
function throttle(func, limit) {
    let inThrottle;
    return function() {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Smooth scrolling for navigation links
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

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation classes and observe elements
document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate-section');
    observer.observe(section);
});

// Enhanced hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xRotation = ((y - rect.height / 2) / rect.height) * 5;
        const yRotation = ((x - rect.width / 2) / rect.width) * 5;
        
        this.style.transform = `
            perspective(1000px)
            scale(1.02)
            rotateX(${-xRotation}deg)
            rotateY(${yRotation}deg)
        `;
    });
    
    card.addEventListener('mouseout', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Timeline progress update
const timeline = document.querySelector('.timeline-progress');
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    timeline.style.height = `${progress}%`;
}); 
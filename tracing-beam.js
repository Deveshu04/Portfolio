// Create a tracing beam effect that follows scroll position
const createTracingBeam = () => {
  console.log("Initializing tracing beam...");

  // Create the main container
  const tracingBeamContainer = document.createElement('div');
  tracingBeamContainer.className = 'tracing-beam-container';

  // Create the beam element
  const beam = document.createElement('div');
  beam.className = 'tracing-beam';

  // Create the beam cursor
  const beamCursor = document.createElement('div');
  beamCursor.className = 'tracing-beam-cursor';

  // Append elements
  beam.appendChild(beamCursor);
  tracingBeamContainer.appendChild(beam);

  // Find the correct container - try multiple selectors to ensure we find something
  let mainContent = document.querySelector('main');
  if (!mainContent) mainContent = document.querySelector('.about');
  if (!mainContent) mainContent = document.querySelector('.hero');
  if (!mainContent) mainContent = document.querySelector('body');

  console.log("Found container for beam:", mainContent);

  // Make sure the container has position relative or absolute
  const containerPosition = window.getComputedStyle(mainContent).position;
  if (containerPosition === 'static') {
    mainContent.style.position = 'relative';
  }

  // Append to the container
  mainContent.appendChild(tracingBeamContainer);

  // Add styles with !important to override any conflicting styles
  const style = document.createElement('style');
  style.textContent = `
    .tracing-beam-container {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      overflow: visible !important;
      pointer-events: none !important;
      z-index: 100 !important;
    }
    
    .tracing-beam {
      position: fixed !important;
      top: 0 !important;
      left: 5rem !important;
      width: 4px !important;
      height: 100vh !important;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(88, 166, 255, 0.5) 15%,
        rgba(130, 80, 223, 0.8) 50%,
        rgba(88, 166, 255, 0.5) 85%,
        rgba(255, 255, 255, 0) 100%
      ) !important;
      z-index: 101 !important;
    }
    
    .tracing-beam-cursor {
      position: absolute !important;
      top: 0 !important;
      left: -3px !important;
      width: 10px !important;
      height: 10px !important;
      border-radius: 50% !important;
      background: white !important;
      box-shadow: 0 0 15px 5px rgba(130, 80, 223, 0.8) !important;
      z-index: 102 !important;
      opacity: 1 !important;
    }
    
    @media (max-width: 768px) {
      .tracing-beam {
        left: 1.5rem !important;
      }
    }
  `;
  document.head.appendChild(style);

  // Function to update beam position based on scroll
  const updateBeamPosition = () => {
    // Calculate how far down the page we've scrolled
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    const scrollProgress = Math.min(Math.max(scrollPercent, 0), 1);

    // Set the cursor position
    const cursorPosition = scrollProgress * winHeight;
    beamCursor.style.top = `${cursorPosition}px`;

    // Add a glow effect when scrolling
    beamCursor.style.boxShadow = scrollTop > 0
      ? '0 0 20px 8px rgba(130, 80, 223, 0.9) !important'
      : '0 0 15px 5px rgba(130, 80, 223, 0.8) !important';

    // Debug
    console.log(`Scroll position: ${scrollTop}, Cursor position: ${cursorPosition}`);
  };

  // Add scroll event listener
  window.addEventListener('scroll', updateBeamPosition);

  // Initial position update
  updateBeamPosition();

  // Create a test element to verify visibility
  const testElement = document.createElement('div');
  testElement.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: red;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 1000;
    pointer-events: none;
    opacity: 0.7;
  `;
  document.body.appendChild(testElement);

  // Remove test element after 5 seconds
  setTimeout(() => {
    testElement.remove();
  }, 5000);

  console.log("Tracing beam initialized");

  // Return a cleanup function
  return () => {
    window.removeEventListener('scroll', updateBeamPosition);
    tracingBeamContainer.remove();
    style.remove();
    console.log("Tracing beam cleaned up");
  };
};

// Initialize the tracing beam when the page is loaded
window.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded, waiting to initialize tracing beam...");
  // Wait a bit to ensure all other scripts have run
  setTimeout(createTracingBeam, 1000);
});

// Also try on window load in case DOMContentLoaded already fired
window.addEventListener('load', () => {
  console.log("Window loaded, initializing tracing beam if not already done...");
  // Check if beam already exists
  if (!document.querySelector('.tracing-beam-container')) {
    setTimeout(createTracingBeam, 1000);
  }
});

// Log to verify script is loading
console.log("Tracing beam script loaded");

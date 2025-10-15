const circuitContainer = document.getElementById('circuitDots');
if (!circuitContainer) {
  console.warn('Circuit container not found');
}
const gridSize = 20;
const dots = [];
let animationId;

function createTrail(x, y) {
  const trail = document.createElement('div');
  trail.className = 'circuit-trail';
  trail.style.left = x + 'px';
  trail.style.top = y + 'px';
  circuitContainer.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 800);
}

function createCircuitDot() {
  if (!circuitContainer) return;
  
  const dot = document.createElement('div');
  dot.className = 'circuit-dot';

  const isHorizontal = Math.random() > 0.5;
  const speed = 0.5 + Math.random() * 1;

  if (isHorizontal) {
    dot.style.top = Math.floor(Math.random() * (window.innerHeight / gridSize)) * gridSize + 'px';
    dot.style.left = '-3px';
    dot.direction = 'horizontal';
    dot.speed = speed;
  } else {
    dot.style.left = Math.floor(Math.random() * (window.innerWidth / gridSize)) * gridSize + 'px';
    dot.style.top = '-3px';
    dot.direction = 'vertical';
    dot.speed = speed;
  }

  dot.trailCounter = 0;
  circuitContainer.appendChild(dot);
  dots.push(dot);
}

function animateCircuitDots() {
  dots.forEach((dot, index) => {
    if (dot.direction === 'horizontal') {
      const currentLeft = parseFloat(dot.style.left);
      dot.style.left = (currentLeft + dot.speed) + 'px';

      dot.trailCounter++;
      if (dot.trailCounter % 8 === 0) {
        createTrail(currentLeft, parseFloat(dot.style.top));
      }

      if (currentLeft > window.innerWidth) {
        dot.remove();
        dots.splice(index, 1);
      }
    } else {
      const currentTop = parseFloat(dot.style.top);
      dot.style.top = (currentTop + dot.speed) + 'px';

      dot.trailCounter++;
      if (dot.trailCounter % 8 === 0) {
        createTrail(parseFloat(dot.style.left), currentTop);
      }

      if (currentTop > window.innerHeight) {
        dot.remove();
        dots.splice(index, 1);
      }
    }
  });
}

const dotInterval = setInterval(createCircuitDot, 2000);
animationId = setInterval(animateCircuitDots, 16);

window.addEventListener('beforeunload', () => {
  clearInterval(dotInterval);
  clearInterval(animationId);
});
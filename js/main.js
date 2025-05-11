// Space Theme Effects
function createSpaceElements() {
    const container = document.querySelector('.space-container');
    
    // Create space dust
    for(let i = 0; i < 20; i++) {
        const dust = document.createElement('div');
        dust.className = 'space-dust';
        dust.style.left = Math.random() * 100 + 'vw';
        dust.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(dust);
    }
    
    // Create meteors
    for(let i = 0; i < 2; i++) {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        meteor.style.top = Math.random() * 100 + 'vh';
        meteor.style.left = Math.random() * 100 + 'vw';
        meteor.style.animationDelay = Math.random() * 8 + 's';
        container.appendChild(meteor);
    }
}

// Create constellation
function createConstellation() {
    const container = document.querySelector('.constellation');
    const numStars = 20;
    const stars = [];
    
    // Create stars
    for(let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        container.appendChild(star);
        stars.push(star);
    }
    
    // Create lines between stars
    for(let i = 0; i < stars.length; i++) {
        for(let j = i + 1; j < stars.length; j++) {
            // Only connect stars that are close to each other
            const star1 = stars[i];
            const star2 = stars[j];
            const x1 = parseFloat(star1.style.left);
            const y1 = parseFloat(star1.style.top);
            const x2 = parseFloat(star2.style.left);
            const y2 = parseFloat(star2.style.top);
            
            const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            
            if(distance < 30) { // Only connect stars within 30% of screen width
                const line = document.createElement('div');
                line.className = 'constellation-line';
                
                // Calculate line position and rotation
                const length = distance;
                const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                
                line.style.width = length + 'vw';
                line.style.left = x1 + 'vw';
                line.style.top = y1 + 'vh';
                line.style.transform = `rotate(${angle}deg)`;
                
                container.appendChild(line);
            }
        }
    }
}

// === Black Hole Attraction Effect ===
function blackHoleAttract() {
    const blackHole = document.querySelector('.black-hole');
    if (!blackHole) return;
    blackHole.addEventListener('mouseenter', () => {
        // Select elements to attract (e.g. .star, .space-dust, .meteor)
        const attractables = document.querySelectorAll('.star, .space-dust, .meteor');
        attractables.forEach(el => {
            // Calculate distance from black hole
            const rect = blackHole.getBoundingClientRect();
            const elRect = el.getBoundingClientRect();
            const dx = rect.left + rect.width/2 - (elRect.left + elRect.width/2);
            const dy = rect.top + rect.height/2 - (elRect.top + elRect.height/2);
            const dist = Math.sqrt(dx*dx + dy*dy);
            if(dist < 300) { // Only attract elements within 300px
                el.style.transition = 'transform 1s cubic-bezier(.68,-0.55,.27,1.55), opacity 1s';
                el.style.transform = `translate(${dx}px, ${dy}px) scale(0.1) rotate(720deg)`;
                el.style.opacity = '0';
                setTimeout(() => {
                    if(el.parentNode) el.parentNode.removeChild(el);
                }, 1000);
            }
        });
    });
}

// === Space Portal Random Position Effect ===
function randomizePortal() {
    const portal = document.querySelector('.space-portal');
    if (!portal) return;
    function movePortal() {
        const top = Math.random() * 70 + 10; // 10% to 80% vh
        const left = Math.random() * 70 + 10; // 10% to 80% vw
        portal.style.top = top + 'vh';
        portal.style.left = left + 'vw';
    }
    setInterval(movePortal, 4000);
    movePortal();
}

// === Space Station Hover (handled by CSS) ===
// Panels open/close on hover via CSS transition

// Initialize all space elements and effects
document.addEventListener('DOMContentLoaded', () => {
    createSpaceElements();
    createConstellation();
    blackHoleAttract();
    randomizePortal();
}); 
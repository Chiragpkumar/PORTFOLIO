// Glitch effect for text
function initGlitchEffect() {
    const glitchTexts = document.querySelectorAll('.glitch');
    
    glitchTexts.forEach(text => {
        const originalText = text.getAttribute('data-text');
        
        function glitch() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
            let glitchedText = '';
            
            for (let i = 0; i < originalText.length; i++) {
                if (Math.random() < 0.1) { // 10% chance to glitch each character
                    glitchedText += chars[Math.floor(Math.random() * chars.length)];
                } else {
                    glitchedText += originalText[i];
                }
            }
            
            text.textContent = glitchedText;
            
            // Reset to original text after a short delay
            setTimeout(() => {
                text.textContent = originalText;
            }, 100);
        }

        // Random glitch intervals
        setInterval(glitch, Math.random() * 3000 + 2000);
    });
}

// Typewriter effect
function initTypewriter() {
    const elements = document.querySelectorAll('.typewriter');
    
    elements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        
        type();
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initGlitchEffect();
    initTypewriter();
    
    // Add scroll reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections and skill cards
    document.querySelectorAll('section, .skill-card, .project-card').forEach(el => {
        observer.observe(el);
    });
});

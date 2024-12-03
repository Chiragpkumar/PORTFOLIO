// Main JavaScript file that initializes everything

// Update system uptime
function updateUptime() {
    const uptimeElement = document.getElementById('uptime');
    if (!uptimeElement) return; // Skip if element doesn't exist
    
    let seconds = 0;
    
    setInterval(() => {
        seconds++;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        uptimeElement.textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    // Start uptime counter
    updateUptime();
    
    // Add cyber theme class to body
    document.body.classList.add('cyber-theme');
    
    // Add noise effect
    const noise = document.createElement('div');
    noise.className = 'noise';
    document.body.appendChild(noise);
    
    // Initialize custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
});

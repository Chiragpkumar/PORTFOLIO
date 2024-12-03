// Boot sequence messages
const bootMessages = [
    "Initializing system...",
    "Loading core modules...",
    "Checking system integrity...",
    "Establishing secure connection...",
    "Loading user interface...",
    "System ready."
];

class BootSequence {
    constructor() {
        this.bootScreen = document.querySelector('.boot-screen');
        this.bootText = document.querySelector('.boot-text');
        this.pressKeyPrompt = document.querySelector('.press-key-prompt');
        this.mainContent = document.querySelector('.crt.main-content');
        this.completed = false;
    }

    async start() {
        // Make sure main content is hidden initially
        if (this.mainContent) {
            this.mainContent.style.display = 'none';
        }

        // Display boot messages
        for (const message of bootMessages) {
            await this.displayMessage(message);
        }
        
        // Show "Press any key" prompt
        if (this.pressKeyPrompt) {
            this.pressKeyPrompt.style.display = 'block';
        }
        
        // Listen for any key press or click
        document.addEventListener('keypress', () => this.completeBootSequence());
        document.addEventListener('click', () => this.completeBootSequence());

        // Auto-complete boot sequence after 5 seconds if no interaction
        setTimeout(() => this.completeBootSequence(), 5000);
    }

    async displayMessage(message) {
        return new Promise(resolve => {
            const messageElement = document.createElement('p');
            messageElement.className = 'boot-message';
            messageElement.innerHTML = `> ${message}`;
            if (this.bootText) {
                this.bootText.appendChild(messageElement);
            }
            
            // Simulate loading time
            setTimeout(resolve, 500);
        });
    }

    completeBootSequence() {
        // Only run once
        if (this.completed) return;
        this.completed = true;

        console.log('Completing boot sequence...');

        // Hide boot screen
        if (this.bootScreen) {
            this.bootScreen.style.opacity = '0';
            setTimeout(() => {
                this.bootScreen.style.display = 'none';
            }, 500);
        }

        // Show main content
        if (this.mainContent) {
            console.log('Showing main content...');
            this.mainContent.style.display = 'block';
            this.mainContent.style.opacity = '1';
        } else {
            console.error('Main content element not found!');
        }
        
        // Initialize matrix animation if function exists
        if (typeof initMatrix === 'function') {
            initMatrix();
        }

        // Dispatch event to notify other components
        document.dispatchEvent(new CustomEvent('bootComplete'));
    }
}

// Initialize boot sequence when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBoot);
} else {
    initBoot();
}

function initBoot() {
    // Wait for components to load
    setTimeout(() => {
        console.log('Initializing boot sequence...');
        const boot = new BootSequence();
        boot.start();
    }, 1000);
}

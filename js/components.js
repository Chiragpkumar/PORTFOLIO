// Function to load HTML components
async function includeHTML(elementId, filePath) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id '${elementId}' not found!`);
        return;
    }

    try {
        const response = await fetch(`components/${filePath}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        element.innerHTML = content;
        console.log(`Successfully loaded ${filePath}`);
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
        element.innerHTML = `<div class="error-message">Error loading component: ${filePath}</div>`;
    }
}

// Load components sequentially
async function loadComponents() {
    try {
        await includeHTML('boot-screen-include', 'boot-screen.html');
        await includeHTML('nav-include', 'navigation.html');
        await includeHTML('home-include', 'home.html');
        await includeHTML('about-include', 'about.html');
        await includeHTML('skills-include', 'skills.html');
        await includeHTML('projects-include', 'projects.html');
        await includeHTML('contact-include', 'contact.html');
        await includeHTML('footer-include', 'footer.html');

        // Initialize navigation after components are loaded
        if (typeof initializeNavigation === 'function') {
            initializeNavigation();
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Start loading components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);

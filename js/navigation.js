// Navigation functionality
function initializeNavigation() {
    const menuBtn = document.querySelector('.menu-btn');
    const navContent = document.querySelector('.nav-content');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuBtn || !navContent) {
        console.error('Navigation elements not found');
        return;
    }

    // Toggle mobile menu
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navContent.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                menuBtn.classList.remove('active');
                navContent.classList.remove('active');
                
                // Smooth scroll to target
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to navigation based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeNavigation);

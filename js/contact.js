// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            try {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'TRANSMITTING...';
                submitBtn.disabled = true;

                // Simulate sending (replace with actual API call)
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Show success message
                alert('Message transmitted successfully!');
                
                // Reset form
                contactForm.reset();

            } catch (error) {
                console.error('Error sending message:', error);
                alert('Error transmitting message. Please try again.');
            } finally {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});

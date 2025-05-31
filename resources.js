document.addEventListener('DOMContentLoaded', function() {
    // Add base animation classes to elements
    document.querySelector('.coming-soon-container').classList.add('scroll-animation');
    document.querySelector('.content-wrapper').classList.add('scroll-animation');
    
    // Add animation classes to each feature item with delay
    document.querySelectorAll('.feature-item').forEach((item, index) => {
        item.classList.add('scroll-animation');
        item.style.transitionDelay = `${index * 0.15}s`;
    });
    
    // Add animation to decorative shapes
    document.querySelectorAll('.decorative-shape').forEach(shape => {
        shape.classList.add('scroll-animation', 'float-animation');
    });
    
    // Animation on scroll function
    const animateOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        document.querySelectorAll('.scroll-animation').forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    };
    
    // Initial animation call
    setTimeout(animateOnScroll, 100);
    
    // Scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Add floating animation to decorative elements
    const floatingAnimation = () => {
        document.querySelectorAll('.float-animation.active').forEach((element, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            const amplitude = 20;
            const period = 5000 + (index * 1000); 
            
            const animate = () => {
                const now = Date.now();
                const position = amplitude * Math.sin((now % period) / period * Math.PI * 2);
                
                element.style.transform = `translate(${direction * position}px, ${position}px)`;
                requestAnimationFrame(animate);
            };
            
            animate();
        });
    };
    
    setTimeout(floatingAnimation, 1000);
});
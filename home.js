document.addEventListener("DOMContentLoaded", function () {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const countUp = (target, numberElement, speed, increment) => {
        let currentValue = 0;
        const targetValue = parseInt(target.getAttribute('data-number'));
        
        const interval = setInterval(() => {
            if (currentValue < targetValue) {
                currentValue += increment;
                if (currentValue > targetValue) {
                    currentValue = targetValue;
                }
                numberElement.textContent = currentValue;
            } else {
                clearInterval(interval);
            }
        }, speed);
    };
    
    const onScroll = () => {
        statNumbers.forEach(statNumber => {
            const rect = statNumber.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0 && !statNumber.classList.contains('counted')) {
                statNumber.classList.add('counted');
                
                if (statNumber.closest('.stat-item').querySelector('p').textContent === "Site Visits") {
                    countUp(statNumber, statNumber, 20, 100); 
                } else {
                    countUp(statNumber, statNumber, 50, 1); 
                }
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
});
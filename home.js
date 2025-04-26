ocument.addEventListener('DOMContentLoaded', () => {
    const numSparkles = 20;
    const hero = document.querySelector('.hero');
    console.log(hero);
  
    if (hero) {
    for (let i = 0; i < numSparkles; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
  
      const x = Math.random() * 100; 
      const y = Math.random() * 100; 
      sparkle.style.left = `${x}%`;
      sparkle.style.top = `${y}%`;
  
      const animationDelay = Math.random() * 12; 
      sparkle.style.animationDelay = `-${animationDelay}s`;
  
      hero.appendChild(sparkle);
    }
    } else {
        console.log("Hero section not found!");
    }
  });  
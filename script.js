document.addEventListener('DOMContentLoaded', () => {
    const numSparkles = 20;
    const body = document.body;
  
    for (let i = 0; i < numSparkles; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
  
      const x = Math.random() * 100; 
      const y = Math.random() * 100; 
      sparkle.style.left = `${x}%`;
      sparkle.style.top = `${y}%`;
  
      const animationDelay = Math.random() * 12; 
      sparkle.style.animationDelay = `-${animationDelay}s`;
  
      body.appendChild(sparkle);
    }
  });  

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('notify-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput.value;
  
      const scriptURL = 'https://leadelle.netlify.app';
  
      const formData = new FormData();
      formData.append('email', email);

      fetch(scriptURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' 
      })
      .then(response => {
        console.log('Success!', response);
        alert('Thanks for signing up! 💌 We´ll keep you posted.'); 
        emailInput.value = ''; 
      })
      .catch(error => {
        console.error('Error!', error);
        alert('An error occurred. Please try again later.');
      });
    });
  });  
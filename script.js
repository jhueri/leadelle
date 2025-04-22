document.getElementById('notify-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for signing up! 💌 We'll keep you posted.');
    this.reset();
  });  
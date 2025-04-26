// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize filter state
  const filterState = {
    category: 'all',
    type: 'all'
  };

  // Get all filter buttons and initiative cards
  const filterButtons = document.querySelectorAll('.filter-btn');
  const initiativeCards = document.querySelectorAll('.initiative-card');
  
  // Add click event listeners to all filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Get filter type (category or type) and value
      const filterType = this.getAttribute('data-filter');
      const filterValue = this.getAttribute('data-value');
      
      // Update filter state
      filterState[filterType] = filterValue;
      
      // Update active class for buttons in the same filter group
      const filterGroup = this.closest('.filter-group');
      filterGroup.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      
      // Apply filters
      applyFilters();
    });
  });

  // Function to apply filters based on current filter state
  function applyFilters() {
    initiativeCards.forEach(card => {
      const cardCategories = card.getAttribute('data-category')?.split(' ') || [];
      const cardTypes = card.getAttribute('data-type')?.split(' ') || [];
      
      const matchesCategory = filterState.category === 'all' || 
                             cardCategories.includes(filterState.category);
      
      const matchesType = filterState.type === 'all' || 
                         cardTypes.includes(filterState.type);
      
      // Show card only if it matches both filters
      if (matchesCategory && matchesType) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  // Scroll to top button functionality
  const scrollTopButton = document.getElementById('scroll-top');
  
  if (scrollTopButton) {
    // Show/hide the button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTopButton.classList.add('visible');
      } else {
        scrollTopButton.classList.remove('visible');
      }
    });
    
    // Scroll to top when clicked
    scrollTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
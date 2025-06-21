document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  let activeFilters = {
    category: 'all',
    type: 'all',
    opportunity: 'all'
  };

  const filterButtons = document.querySelectorAll('.filter-btn');
  const initiativeCards = document.querySelectorAll('.initiative-card');

  // Initialize filters
  filterCards();

  // Add click event listeners to all filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterType = this.getAttribute('data-filter');
      const filterValue = this.getAttribute('data-value');
      
      // Update active state on buttons in the same filter group
      document.querySelectorAll(`.filter-btn[data-filter="${filterType}"]`).forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      
      // Update active filters
      activeFilters[filterType] = filterValue;
      
      // Filter cards based on updated filters
      filterCards();
    });
  });

  // Function to filter cards based on active filters
  function filterCards() {
    initiativeCards.forEach(card => {
      let showCard = true;
      
      // Check category filter
      if (activeFilters.category !== 'all') {
        const cardCategories = card.getAttribute('data-category');
        if (!cardCategories || !cardCategories.includes(activeFilters.category)) {
          showCard = false;
        }
      }
      
      // Check type filter
      if (activeFilters.type !== 'all') {
        const cardTypes = card.getAttribute('data-type');
        if (!cardTypes || !cardTypes.includes(activeFilters.type)) {
          showCard = false;
        }
      }
      
      // Check opportunity filter
      if (activeFilters.opportunity !== 'all') {
        const cardOpportunities = card.getAttribute('data-opportunity');
        if (!cardOpportunities || !cardOpportunities.includes(activeFilters.opportunity)) {
          showCard = false;
        }
      }
      
      // Show or hide the card
      if (showCard) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Function to handle apply button clicks
  function handleApplyClick(event) {
    event.preventDefault();
    
    // Get the initiative name from the parent card
    const card = event.target.closest('.initiative-card');
    const initiativeName = card.querySelector('h3').textContent;
    
    // Open a modal or form for application
    // For now, we'll use a simple alert
    alert(`Thank you for your interest in applying to ${initiativeName}! This feature will direct you to the application form in the future.`);
    
    // In a real implementation, you would redirect to an application form:
    // window.location.href = "application-form.html?initiative=" + encodeURIComponent(initiativeName);
  }
  
  // Find all cards with opportunity data attributes
  const opportunityCards = document.querySelectorAll('.initiative-card[data-opportunity]');
  
  // Enhance these cards with apply buttons
  opportunityCards.forEach(card => {
    const learnMoreLink = card.querySelector('.learn-more');
    const cardContent = card.querySelector('.card-content');
    
    // Create a container for the buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'card-actions';
    
    // Create and add the learn more button clone if it exists
    if (learnMoreLink) {
      const learnMoreClone = learnMoreLink.cloneNode(true);
      actionsDiv.appendChild(learnMoreClone);
      learnMoreLink.style.display = 'none'; // Hide original but don't remove
    }
    
    // Add the actions div to the card
    cardContent.appendChild(actionsDiv);
  });
  
  // Scroll to top button functionality
  const scrollTopButton = document.getElementById('scroll-top');
  if (scrollTopButton) {
    // Initially hide the button
    scrollTopButton.style.display = 'none';
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'block';
      } else {
        scrollTopButton.style.display = 'none';
      }
    });

    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
      
      // Add floating keyframes
      const style = document.createElement('style');
      style.textContent = `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `;
      document.head.appendChild(style);
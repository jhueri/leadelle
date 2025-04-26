document.addEventListener('DOMContentLoaded', function() {
    const filterState = {
      category: 'all',
      type: 'all'
    };
  
    const filterButtons = document.querySelectorAll('.filter-btn');
    const initiativeCards = document.querySelectorAll('.initiative-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterType = this.getAttribute('data-filter');
        const filterValue = this.getAttribute('data-value');
        
        filterState[filterType] = filterValue;
        
        const filterGroup = this.closest('.filter-group');
        filterGroup.querySelectorAll('.filter-btn').forEach(btn => {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        
        applyFilters();
      });
    });
  
    function applyFilters() {
      initiativeCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category')?.split(' ') || [];
        const cardTypes = card.getAttribute('data-type')?.split(' ') || [];
        
        const matchesCategory = filterState.category === 'all' || 
                               cardCategories.includes(filterState.category);
        
        const matchesType = filterState.type === 'all' || 
                           cardTypes.includes(filterState.type);
        
        if (matchesCategory && matchesType) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
    
    const scrollTopButton = document.getElementById('scroll-top');
    
    if (scrollTopButton) {
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          scrollTopButton.classList.add('visible');
        } else {
          scrollTopButton.classList.remove('visible');
        }
      });
      
      scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  });
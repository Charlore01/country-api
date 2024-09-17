document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const countryCards = document.querySelectorAll('.country-card');
  
    countryCards.forEach(card => {
      const countryName = card.querySelector('h2').textContent.toLowerCase();
      if (countryName.includes(searchTerm)) {
        card.style.display = 'block'; // Show matching country
      } else {
        card.style.display = 'none';  // Hide non-matching country
      }
    });
  });
  
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const elementsToToggle = document.querySelectorAll('.country-card, body, .header, .search-container');
    
    elementsToToggle.forEach(element => {
      element.classList.toggle('dark-mode-bg');
      // element.classList.toggle('country-card.dark-mode-bg');
    });
  });
  
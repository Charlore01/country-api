// const url = "https://restcountries.com/v3.1/all";

// // Fetch the data from the API
// fetch(url)
//   .then(response => response.json())
//   .then(data => populateCountries(data))
//   .catch(error => console.error("Error fetching data:", error));

// function populateCountries(countries) {
//   const countryList = document.getElementById('country-list');
  
//   // Clear existing country cards before adding new ones
//   countryList.innerHTML = '';

//   countries.forEach(country => {
//     const name = country.name.common;
//     const population = country.population.toLocaleString(); // Format number with commas
//     const region = country.region;
//     const capital = country.capital ? country.capital[0] : "No Capital";
//     const flag = country.flags.svg; // Extracting flag URL

//     const countryCard = document.createElement('div');
//     countryCard.classList.add('country-card');
    
//     // Adding flag image and country details to the card
//     countryCard.innerHTML = `
//       <img src="${flag}" alt="Flag of ${name}" class="country-flag">
//       <h2>${name}</h2>
//       <p><strong>Population:</strong> ${population}</p>
//       <p><strong>Region:</strong> ${region}</p>
//       <p><strong>Capital:</strong> ${capital}</p>
//     `;

//     // Append the country card to the country list container
//     countryList.appendChild(countryCard);
//   });

// }

// // Dark Mode Toggle
// document.getElementById('dark-mode-toggle').addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

// // Filter by Region
// document.getElementById('region-filter').addEventListener('change', function() {
//   const selectedRegion = this.value;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const filteredCountries = data.filter(country => {
//         return selectedRegion === 'all' || country.region === selectedRegion;
//       });

//       document.getElementById('country-list').innerHTML = '';
//       populateCountries(filteredCountries);
//     });
// });




const url = "https://restcountries.com/v3.1/all";

// Fetch the data from the API
fetch(url)
  .then(response => response.json())
  .then(data => populateCountries(data))
  .catch(error => console.error("Error fetching data:", error));

function populateCountries(countries) {
  const countryList = document.getElementById('country-list');
  
  // Clear existing country cards before adding new ones
  countryList.innerHTML = '';

  countries.forEach(country => {
    const name = country.name.common;
    const population = country.population.toLocaleString(); // Format number with commas
    const region = country.region;
    const capital = country.capital ? country.capital[0] : "No Capital";
    const flag = country.flags.svg; // Extracting flag URL

    const countryCard = document.createElement('div');
    countryCard.classList.add('country-card');
    
    // Adding flag image and country details to the card
    countryCard.innerHTML = `
      <img src="${flag}" alt="Flag of ${name}" class="country-flag">
      <h2>${name}</h2>
      <p><strong>Population:</strong> ${population}</p>
      <p><strong>Region:</strong> ${region}</p>
      <p><strong>Capital:</strong> ${capital}</p>
    `;

    // Add click event listener to enlarge the country card and center it
    countryCard.addEventListener('click', function(event) {
      // First, reset any previously enlarged cards
      const allCards = document.querySelectorAll('.country-card');
      allCards.forEach(card => {
        card.classList.remove('active');
      });
      
      // Enlarge the clicked card
      this.classList.add('active');

      // Prevent click event from propagating to the body click event
      event.stopPropagation();
    });

    // Append the country card to the country list container
    countryList.appendChild(countryCard);
  });

  // Add event listener to the body to reset the card on body click
  document.body.addEventListener('click', function() {
    const allCards = document.querySelectorAll('.country-card');
    allCards.forEach(card => {
      card.classList.remove('active');
    });
  });
}

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Filter by Region
document.getElementById('region-filter').addEventListener('change', function() {
  const selectedRegion = this.value;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const filteredCountries = data.filter(country => {
        return selectedRegion === 'all' || country.region === selectedRegion;
      });

      document.getElementById('country-list').innerHTML = '';
      populateCountries(filteredCountries);
    });
});

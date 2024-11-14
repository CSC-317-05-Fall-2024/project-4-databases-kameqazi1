// public/scripts/header.js

//iterating through every instance of header and populating it 
const headerElements = document.querySelectorAll('header');
headerElements.forEach(item => {
    item.innerHTML = `
      <div class="container">
        Switzerland
      </div>
    `;
});

//iterating through every instance of nav and populating it 
const navElements = document.querySelectorAll('nav');
navElements.forEach(item => {
    item.innerHTML = `
      <div class="nav_container">
        <a href="index.html">Home</a>
        <a href="attractions.html">Attractions</a>
        <a href="restaurants.html">Restaurants</a>
        <a href="newrestaurant.html">New Restaurant</a>
      </div>
    `;
});

//iterating through every instance of footer and populating it 
const footerElements = document.querySelectorAll('footer');
footerElements.forEach(item => {
    item.innerHTML = `
      <div class="footer">
        Brought to you by Saeed Travel Inc.
      </div>
    `;
});



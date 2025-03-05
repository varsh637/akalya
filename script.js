const starContainer = document.querySelector(".star-container");
const starCount = 15; // Set the number of stars

let starsHTML = ''; // Build the HTML string

for (let i = 0; i < starCount; i++) {
  const left = Math.random() * 200;
  const top = Math.random() * 100;
  starsHTML += `<div class="star" style="left: ${left}px; top: ${top}px;"></div>`;
}

starContainer.innerHTML = starsHTML;
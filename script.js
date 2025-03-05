const starContainer = document.querySelector(".star-container");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * 200 + "px";
  star.style.top = Math.random() * 100 + "px";
  starContainer.appendChild(star);
}

for (let i = 0; i < 15; i++) {
  createStar();
}
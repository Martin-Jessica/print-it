window.addEventListener("DOMContentLoaded", () => {

  const slides = [
    { image: "slide1.jpg", 
	tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" },

    { image: "slide2.jpg", 
	tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>" },

    { image: "slide3.jpg", 
	tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>" },

    { image: "slide4.png", 
	tagLine: "Autocollants <span>avec découpe laser sur mesure</span>" }
  ];

  let currentIndex = 0;

  const slideImg = document.getElementById("slide1");
  const prevBtn = document.getElementById("arrow_left");
  const nextBtn = document.getElementById("arrow_right");
  const tagline = document.getElementById("tagline");
  const dotsContainer = document.querySelector(".dots");

  function showSlide(index) {
    slideImg.src = `./assets/images/slideshow/${slides[index].image}`;
    tagline.innerHTML = slides[index].tagLine;
    updateDots();
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

function createDots() {
  dotsContainer.innerHTML = "";

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentIndex) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
    });

    dotsContainer.appendChild(dot);
  });
}
  function updateDots() {
    const allDots = document.querySelectorAll(".dot");
    allDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  createDots();
  showSlide(currentIndex);

});
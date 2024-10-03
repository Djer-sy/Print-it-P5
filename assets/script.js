// Tableau des diapositives //
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélection des éléments DOM (Documents)//
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.getElementById("tagLine");
const dotsContainer = document.querySelector(".dots");

//  Variable d'état :currentslide //
let currentSlide = 0;

// Mise à jour de l'image et du texte //
function updateIndicatorPosition(slideIndex) {
  const dots = dotsContainer.getElementsByClassName("dot");
  const activeDot = dots[slideIndex];
  dotIndicator.style.left = activeDot.offsetLeft + "px";
}

function updateSlide() {
  // mise à jour image
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;

  // mise à jour tagline
  tagLine.innerHTML = slides[currentSlide].tagLine;

  // mise à jour dots
  const dots = dotsContainer.children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot_selected");
  }
  dots[currentSlide].classList.add("dot_selected");
}

// Changer la diapositive //
function changeSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  updateSlide();
}
//Gestion sur les flèches //
arrowLeft.addEventListener("click", function () {
  changeSlide(-1);
});

arrowRight.addEventListener("click", function () {
  changeSlide(+1);
});

// Création des indicateurs (dots)//
function initDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) {
      dot.classList.add("active");
    }
    dotsContainer.appendChild(dot);
  }
}
//Initialisation complète//
function initSlideshow() {
  initDots();
  updateSlide();
}

initSlideshow();

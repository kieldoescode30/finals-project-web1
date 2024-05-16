const headerEl = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 82) {
    headerEl.classList.add("active-header");
  } else {
    headerEl.classList.remove("active-header");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");

hiddenElement.forEach((el) => {
  observer.observe(el);
});

// Automatic fade-in slideshow
const mainImage = document.querySelectorAll(".main-animal-img");

let imageActive = 0;

function fadeSlide() {
  const imageShown = document.querySelector(".main-animal-img.is-shown");

  imageShown.classList.remove("is-shown");
  if (imageActive >= mainImage.length - 1) {
    imageActive = 0;
  } else {
    imageActive++;
  }

  mainImage[imageActive].classList.add("is-shown");
}

setInterval(() => {
  fadeSlide();
}, 5000);

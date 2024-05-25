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

const itemEls = document.querySelectorAll(".js-item");
const dotEls = document.querySelectorAll(".js-dot");

let countItem = itemEls.length;
let itemActive = 0;
let terrainCount = 0;

function showSlide() {
  let itemPrev = document.querySelector(".js-item.active-slide");
  let dotActive = document.querySelector(".js-dot.active");

  itemPrev.classList.remove("active-slide");
  dotActive.classList.remove("active");

  itemEls[itemActive].classList.add("active-slide");
  dotEls[itemActive].classList.add("active");
}

dotEls.forEach((dots, index) => {
  dots.addEventListener("click", () => {
    itemActive = index;
    showSlide();
  });
});

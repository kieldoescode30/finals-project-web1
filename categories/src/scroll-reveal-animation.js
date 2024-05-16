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

const revealElements = document.querySelectorAll("[data-reveal]");

const reveal = () => {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    }
  }
};

const headerEl = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 82) {
    headerEl.classList.add("active-header");
  } else {
    headerEl.classList.remove("active-header");
  }
});

window.addEventListener("scroll", reveal);

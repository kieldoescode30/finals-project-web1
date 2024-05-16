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

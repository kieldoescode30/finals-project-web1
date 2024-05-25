const playSoundBtn = document.querySelector(".play-sound");

playSoundBtn.addEventListener("click", () => {
  const animal = playSoundBtn.getAttribute("id");
  playSound(animal);
});

function playSound(animal) {
  const audio = new Audio(`../sounds/${animal}.mp3`);
  audio.play();
}

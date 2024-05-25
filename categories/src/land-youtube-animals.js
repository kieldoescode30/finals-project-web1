// Encoding youtube video URLs of land animals
const youtubeLinks = {
  tamaraw: "https://www.youtube.com/embed/1QJqIyxlFbk",
  tarsier: "https://www.youtube.com/embed/pgo14umnNV0",
  mouseDeer: "https://www.youtube.com/embed/A_WQk4IWeFk",
  deer: "https://www.youtube.com/embed/GmqCYZLrkHE",
  wartyPig: "https://www.youtube.com/embed/kqjbzxkUUO0",
  crocodile: "https://www.youtube.com/embed/eZjC3FC1GFw",
  sailfinLizzard: "https://www.youtube.com/embed/MQbO4YxX6cM",
  palmCivet: "https://www.youtube.com/embed/anTLN5vCMus",
  pangolin: "https://www.youtube.com/embed/FmmNdX9dv9U",
  bearcat: "https://www.youtube.com/embed/0EyYYNfw8Hg",
  hornedFrog: "https://www.youtube.com/embed/bu7WspYpeFs",
  forestTurtle: "https://www.youtube.com/embed/1zTse2dOD3Q",
  pheacockPheasant: "https://www.youtube.com/embed/6y1fN3qJhng",
  cloudrunner: "https://www.youtube.com/embed/qsFoOU34b8g",
  macaque: "https://www.youtube.com/embed/Li8wN-YmAlM",
};

const buttonElement = document.querySelectorAll(".circle-hover");
const closeBtn = document.querySelector(".close-btn");
const iframeElement = document.querySelector(".youtube-link");
const iframeContainer = document.querySelector(".iframe-container");

buttonElement.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("tamaraw")) {
      iframeElement.src = youtubeLinks.tamaraw;
      checkHidden();
    } else if (btn.classList.contains("tarsier")) {
      iframeElement.src = youtubeLinks.tarsier;
      checkHidden();
    } else if (btn.classList.contains("mouse-deer")) {
      iframeElement.src = youtubeLinks.mouseDeer;
      checkHidden();
    } else if (btn.classList.contains("deer")) {
      iframeElement.src = youtubeLinks.deer;
      checkHidden();
    } else if (btn.classList.contains("warty-pig")) {
      iframeElement.src = youtubeLinks.wartyPig;
      checkHidden();
    } else if (btn.classList.contains("crocodile")) {
      iframeElement.src = youtubeLinks.crocodile;
      checkHidden();
    } else if (btn.classList.contains("sailfin-lizzard")) {
      iframeElement.src = youtubeLinks.sailfinLizzard;
      checkHidden();
    } else if (btn.classList.contains("palm-civet")) {
      iframeElement.src = youtubeLinks.palmCivet;
      checkHidden();
    } else if (btn.classList.contains("pangolin")) {
      iframeElement.src = youtubeLinks.pangolin;
      checkHidden();
    } else if (btn.classList.contains("bearcat")) {
      iframeElement.src = youtubeLinks.bearcat;
      checkHidden();
    } else if (btn.classList.contains("horned-frog")) {
      iframeElement.src = youtubeLinks.hornedFrog;
      checkHidden();
    } else if (btn.classList.contains("forest-turtle")) {
      iframeElement.src = youtubeLinks.forestTurtle;
      checkHidden();
    } else if (btn.classList.contains("peacock")) {
      iframeElement.src = youtubeLinks.pheacockPheasant;
      checkHidden();
    } else if (btn.classList.contains("cloudrunner")) {
      iframeElement.src = youtubeLinks.cloudrunner;
      checkHidden();
    } else if (btn.classList.contains("macaque")) {
      iframeElement.src = youtubeLinks.macaque;
      checkHidden();
    }
  });
});

function checkHidden() {
  if (iframeContainer.classList.contains("hidden")) {
    iframeContainer.classList.remove("hidden");
  }
}

closeBtn.addEventListener("click", () => {
  iframeContainer.classList.add("hidden");

  iframeElement.src = "";
});

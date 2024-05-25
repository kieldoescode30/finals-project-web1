// Encoding youtube video URLs of sea animals
const youtubeLinks = {
  dugong: "https://www.youtube.com/embed/AWIUBzxgHAI",
  bambooShark: "https://www.youtube.com/embed/iTwg1NOa6ao",
  pawikan: "https://www.youtube.com/embed/pFup8J8DebA",
  butterflyfish: "https://www.youtube.com/embed/-nIm4Pj7QbI",
  whaleShark: "https://www.youtube.com/embed/irzvvhBzi_c",
  pufferfish: "https://www.youtube.com/embed/SIqvZ8N415I",
  rabbitfish: "https://www.youtube.com/embed/WeEZkUTlVPk",
  blueSpottedStingray: "https://www.youtube.com/embed/znrQZf000XI",
  decoratorCrab: "https://www.youtube.com/embed/5Zvf8jMU_sE",
  seaUrchin: "https://www.youtube.com/embed/2QzcxrXssuY",
  blueRingedOctopus: "https://www.youtube.com/embed/ZzqCEBJ5kfs",
  violetGoby: "https://www.youtube.com/embed/k5M13jIoERU",
  moorishIdol: "https://www.youtube.com/embed/5T1sV3TXtEI",
  thresherShark: "https://www.youtube.com/embed/XeNvoDdvefI",
  seahorse: "https://www.youtube.com/embed/d9JNehiPaU4",
};

const buttonElement = document.querySelectorAll(".circle-hover");
const closeBtn = document.querySelector(".close-btn");
const iframeElement = document.querySelector(".youtube-link");
const iframeContainer = document.querySelector(".iframe-container");

buttonElement.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("dugong-btn")) {
      iframeElement.src = youtubeLinks.dugong;
      checkHidden();
    } else if (btn.classList.contains("bamboo-shark-btn")) {
      iframeElement.src = youtubeLinks.bambooShark;
      checkHidden();
    } else if (btn.classList.contains("pawikan-btn")) {
      iframeElement.src = youtubeLinks.pawikan;
      checkHidden();
    } else if (btn.classList.contains("butterflyfish-btn")) {
      iframeElement.src = youtubeLinks.butterflyfish;
      checkHidden();
    } else if (btn.classList.contains("whale-shark-btn")) {
      iframeElement.src = youtubeLinks.whaleShark;
      checkHidden();
    } else if (btn.classList.contains("pufferfish-btn")) {
      iframeElement.src = youtubeLinks.pufferfish;
      checkHidden();
    } else if (btn.classList.contains("rabbitfish-btn")) {
      iframeElement.src = youtubeLinks.rabbitfish;
      checkHidden();
    } else if (btn.classList.contains("blue-spotted-stingray-btn")) {
      iframeElement.src = youtubeLinks.blueSpottedStingray;
      checkHidden();
    } else if (btn.classList.contains("decorator-crab-btn")) {
      iframeElement.src = youtubeLinks.decoratorCrab;
      checkHidden();
    } else if (btn.classList.contains("sea-urchin-btn")) {
      iframeElement.src = youtubeLinks.seaUrchin;
      checkHidden();
    } else if (btn.classList.contains("blue-ringed-octopus-btn")) {
      iframeElement.src = youtubeLinks.blueRingedOctopus;
      checkHidden();
    } else if (btn.classList.contains("violet-goby-btn")) {
      iframeElement.src = youtubeLinks.violetGoby;
      checkHidden();
    } else if (btn.classList.contains(" moorish-idol-btn")) {
      iframeElement.src = youtubeLinks.moorishIdol;
      checkHidden();
    } else if (btn.classList.contains("thresher-shark-btn")) {
      iframeElement.src = youtubeLinks.thresherShark;
      checkHidden();
    } else if (btn.classList.contains("seahorse-btn")) {
      iframeElement.src = youtubeLinks.seahorse;
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

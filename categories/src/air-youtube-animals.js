// Encoding youtube video URLs of sea animals
const youtubeLinks = {
  eagle: "https://www.youtube.com/embed/-JP-zoBLyWE",
  cockatoo: "https://www.youtube.com/embed/awJcI912v84",
  trogon: "https://www.youtube.com/embed/4d1hYS1dC2s",
  frogmouth: "https://www.youtube.com/embed/H-BlY4rvifc",
  woodpecker: "https://www.youtube.com/embed/8jGRGs29X0Q",
  hawkowl: "https://www.youtube.com/embed/-nbE-8SFo6M",
  leafbird: "https://www.youtube.com/embed/eKBPjtOAvnE",
  falconet: "https://www.youtube.com/embed/JEG-t_ogkoM",
  magpierobin: "https://www.youtube.com/embed/FainibD4_rA",
  bulbul: "https://www.youtube.com/embed/OaIWN0c7L74",
  kestrel: "https://www.youtube.com/embed/lBBeomQYTZU",
  nightjar: "https://www.youtube.com/embed/6uQdc8lvhoY",
  flyinglemur: "https://www.youtube.com/embed/wcy3RrLSXDI",
  maya: "https://www.youtube.com/embed/6MnGmDT7_hs",
  bleedingheartdove: "https://www.youtube.com/embed/m-ATxafN710",
};

const buttonElement = document.querySelectorAll(".circle-hover");
const closeBtn = document.querySelector(".close-btn");
const iframeElement = document.querySelector(".youtube-link");
const iframeContainer = document.querySelector(".iframe-container");

buttonElement.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("eagle")) {
      iframeElement.src = youtubeLinks.eagle;
      checkHidden();
    } else if (btn.classList.contains("cockatoo")) {
      iframeElement.src = youtubeLinks.cockatoo;
      checkHidden();
    } else if (btn.classList.contains("trogon")) {
      iframeElement.src = youtubeLinks.trogon;
      checkHidden();
    } else if (btn.classList.contains("frogmouth")) {
      iframeElement.src = youtubeLinks.frogmouth;
      checkHidden();
    } else if (btn.classList.contains("woodpecker")) {
      iframeElement.src = youtubeLinks.woodpecker;
      checkHidden();
    } else if (btn.classList.contains("hawk-owl")) {
      iframeElement.src = youtubeLinks.hawkowl;
      checkHidden();
    } else if (btn.classList.contains("leafbird")) {
      iframeElement.src = youtubeLinks.leafbird;
      checkHidden();
    } else if (btn.classList.contains("falconet")) {
      iframeElement.src = youtubeLinks.falconet;
      checkHidden();
    } else if (btn.classList.contains("magpie-robin")) {
      iframeElement.src = youtubeLinks.magpierobin;
      checkHidden();
    } else if (btn.classList.contains("bulbul")) {
      iframeElement.src = youtubeLinks.bulbul;
      checkHidden();
    } else if (btn.classList.contains("kestrel")) {
      iframeElement.src = youtubeLinks.kestrel;
      checkHidden();
    } else if (btn.classList.contains("nightjar")) {
      iframeElement.src = youtubeLinks.nightjar;
      checkHidden();
    } else if (btn.classList.contains("flying-lemur")) {
      iframeElement.src = youtubeLinks.flyinglemur;
      checkHidden();
    } else if (btn.classList.contains("maya")) {
      iframeElement.src = youtubeLinks.maya;
      checkHidden();
    } else if (btn.classList.contains("bleeding-heart-dove")) {
      iframeElement.src = youtubeLinks.bleedingheartdove;
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

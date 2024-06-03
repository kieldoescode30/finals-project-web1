const productsLink = document.querySelector(".js-products");
const dropDownMenuElement = document.querySelector(".js-dropdown-menu");

const arrowIcon = document.querySelector(".fa-solid");

productsLink.addEventListener("click", () => {
  if (!dropDownMenuElement.classList.contains("active")) {
    dropDownMenuElement.classList.add("active");
    arrowIcon.style.transform = "rotate(180deg)";
  } else {
    dropDownMenuElement.classList.remove("active");
    arrowIcon.style.transform = "rotate(0)";
  }
});

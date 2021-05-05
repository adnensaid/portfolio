/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/assets/javascripts/dropdown.js ***!
  \********************************************/
var dropdownPortfolio = document.querySelector(".menu .dropdown-toggle");
var barTop = document.querySelector(".menu .dropdown-toggle").children[0];
var barMiddle = document.querySelector(".menu .dropdown-toggle").children[1];
var barBottom = document.querySelector(".menu .dropdown-toggle").children[2];
var dropdownMenu = document.querySelector(".page .dropdown-menu");
var asideRightBackground = document.querySelector(".aside-right .background");
var asideLeftBackground = document.querySelector(".aside-left .background");
var articles = document.querySelector(".articles .articles-content");
var labsContent = document.querySelector(".labs-content");
dropdownPortfolio.addEventListener('click', {
  handleEvent: function handleEvent(e) {
    e.preventDefault();
    dropdownPortfolio.classList.toggle("rotate-180");
    barMiddle.classList.toggle("superposer-bar");
    barMiddle.classList.toggle("hidden");
    dropdownMenu.classList.toggle("hidden");
    dropdownMenu.classList.toggle("animate-dropdown-menu");
    asideRightBackground.classList.toggle("animate-dropdown-menu");
    asideLeftBackground.classList.toggle("animate-dropdown-menu");
    barTop.classList.toggle("rotate-back-in");
    barBottom.classList.toggle("rotate-back-out");

    if (articles) {
      articles.classList.toggle("hidden"); // setInterval pour voir l'effet transition a faire apres la formation js  
    }

    if (labsContent) {
      labsContent.classList.toggle("hidden");
    }
  }
});
/******/ })()
;
//# sourceMappingURL=dropdown.bundle.js.map
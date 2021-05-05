
const dropdownPortfolio = document.querySelector(".menu .dropdown-toggle"); 
const barTop = document.querySelector(".menu .dropdown-toggle").children[0]; 
const barMiddle = document.querySelector(".menu .dropdown-toggle").children[1]; 
const barBottom = document.querySelector(".menu .dropdown-toggle").children[2];
const dropdownMenu = document.querySelector(".page .dropdown-menu");
const asideRightBackground = document.querySelector(".aside-right .background");
const asideLeftBackground = document.querySelector(".aside-left .background");
const articles = document.querySelector(".articles .articles-content"); 
const labsContent = document.querySelector(".labs-content");
dropdownPortfolio.addEventListener('click', {
  handleEvent(e){
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
    if(articles){
      articles.classList.toggle("hidden"); // setInterval pour voir l'effet transition a faire apres la formation js  
    }
    if(labsContent){
      labsContent.classList.toggle("hidden");
    }
  }
})
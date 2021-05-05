import "../assets/styles/styles.scss";
import "./labsDropdown.scss";

const dropdownLabs = document.querySelector(".window-content .dropdown-toggle");
const barMiddleLabs = document.querySelector(".window-content .dropdown-toggle").children[1];
const barTopLabs = document.querySelector(".window-content .dropdown-toggle").children[0];
const barBottomLabs = document.querySelector(".window-content .dropdown-toggle").children[2];
const demo = document.querySelector(".window-content .demo");

const dropdownMenuLabs = document.querySelector(".window-content .dropdown-menu-labs");
dropdownLabs.addEventListener('click', {
  handleEvent(e){
    e.preventDefault;
    dropdownLabs.classList.toggle("rotate-180");
    barMiddleLabs.classList.toggle("superposer-bar"); // + opacity : 0
    demo.classList.toggle("fadeout-demo");
    dropdownMenuLabs.classList.toggle("animate-dropdown-menu-labs");
    barTopLabs.classList.toggle("rotate-back-in");
    barBottomLabs.classList.toggle("rotate-back-out");

  }
})
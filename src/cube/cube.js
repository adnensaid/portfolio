import "../assets/styles/styles.scss"
import "./cube.scss";

let lastPositionScroll = 0;
let ticking = false;

const cube = document.querySelector('.cube');
function setHeure(positionScroll){

}
cube.addEventListener('click', function(e){
  lastPositionScroll = window.scrollY;
  console.log(lastPositionScroll);
})
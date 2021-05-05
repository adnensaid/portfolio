import "../assets/styles/styles.scss";
import "./calculatrice.scss";

function additionner(...numbers){
  numbers = numbers || 'undefined';
  let total = 0
  for(let i=0; i< numbers.length; i++){
    total += numbers[i];
  }
  return total;
}
const sept = document.querySelector(".sept");
const display = document.querySelector(".display");
const operations = document.querySelector('.calculatrice-operations');
let total = 0;
operations.addEventListener('click', {
  handleEvent(e){
    e.preventDefault();

    const nb = document.querySelector("."+e.target.attributes.class.value).textContent;
    display.append(nb);
    console.log(nb);
  }

})


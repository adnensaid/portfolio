import "./assets/styles/styles.scss";
import "./index.scss";
import "./app/app.js";

/* 
const person = {
  name: "adnen",
  age:38,
  famille:{
    pere:{
      nom:"mohamed",
      age:54
    },
    mere:{
      nom:"aroussia",
      age:44
    }
  }
}

const { 
  famille: {mere, pere}
} = person;

console.log(pere, mere);

const {a, ...monReste} = {a:1, b:2, c:3};

console.log(monReste);
console.log(a); */


/* const monObjet2 = {
  a:"cc",
  b:"adnen"
};

const search = "b" in monObjet2;

if(search)
console.log("'b' se trouve dans l'objet")
else
console.log("'b' ne se trouve pas dans l'objet") */
/* 
const monObjet = {a:null, b:4};
delete monObjet.b;
console.log(monObjet.a); */

/* const monObjet = {a:1, b:2, c:3, d:4, e:5};

const {a:toDelete, b:toDelete2, ...copie} = monObjet;
console.log(copie); */

/* const monObjet = {a:1, b:2, c:3, d:4, e:5};
const objet2 = {name:"Aroussia"};

const result = Object.assign({}, monObjet, objet2);
console.log(result);
Object.assign(monObjet, objet2);
console.log(monObjet); */

/* const monObjet = {a:1, b:2, c:3, d:4, e:5};
const copy = {...monObjet};
console.log(copy);
const objet2 = {
  name:"aroussia",
  prenom:"ben salem"
}
const copy2 = {...monObjet, ...objet2};

console.log(copy2); */

/* const obj = {b:{}};
const obj2 = obj.b;
obj2.a = 2;
console.log(obj); // {b:{a:2}}
console.log(obj2); // {a:2}

const obj3 = {a:3};
const obj4 = obj3;
console.log(obj3 === obj4);

obj5 = {a:3};
console.log(obj3 === obj5); */

/* const obj = {a:1, b:2, c:3};

for(const i in obj){
  console.log(obj[i]);
} */


/* for(const i in person){
  console.log(i,":",person[i]);
}
console.log(person);

const json = JSON.stringify(person, null, 1);
console.log(json);
const objet = JSON.parse(json);
console.log(objet); */

/* const person2 = JSON.parse(JSON.stringify(person));
person2.a.test = "test";
console.log(person);  // copie profonde

const person3 = {...person};
person3.a.test = "test";
console.log(person); // copie superficiel */
const person = {
  name:"adnen",
  age:38,
  civile:"divorcer",
  adresse:"2 avenue rosa parks Lyon 69009",
  a:{}
}

function addition(nb1, nb2){
  const result = nb1 + nb2;
  console.log(result);
}

addition(2, 24);

function multiplier(nb1, nb2, nb3){
  const result = (nb1*nb2*nb3);
  console.log("multiplier("+nb1+"*"+nb2+"*"+nb3+")="+result);
}

multiplier(3, 10, 1);

/* const factorielle = function f(n) { return n < 2 ? console.log(n) : n * f(n - 1) ? console.log(n):console.log(n)};
factorielle(10); */

const division = function (a, b){
  const result = a / b;
  console.log("divison("+a+"/"+b+")="+result);
}
division(10, 2);

const majuscule = function(param){
  param = param || 'default'; // si la fonction n'as pas de parametre ca affiche DEFAULT
  console.log(param.toUpperCase());
/*   if(param)
  console.log(param.toUpperCase()); */
}
majuscule('ciao'); // CIAO
majuscule(); // DEFAULT

// fonction additionne n'importe quel nombre d'argument
function add(){
  let result = 0;
  console.log(arguments);
  for(let i = 0 ; i < arguments.length; i++){
    result += arguments[i];
  }
  //console.log(result);
}
add(1, 2, 3, 4, 5);

// une autre methode

function add2(...numbers){
  console.log(numbers);
  let total = 0;
  for(let i = 0 ; i < numbers.length ; i++){
    total += numbers[i];
  }
  //console.log("total:"+total);
}
add2(3, 2);

const operation = function(operator, ...numbers){
  let total = 0;
  if(operator === "+"){
    for(let i = 0 ; i < numbers.length; i++){
      total += numbers[i];
    }
    console.log("addition"+total);
  }
  if(operator === "*"){
    total = 1;
    for(let i = 0 ; i < numbers.length; i++){
      total *= numbers[i];
    }
    return total;
  }  
}
const total = operation("*", 2, 5);
console.log("total"+total);

// chaine de portée


function b(){
  let foo = 1;
  a();  
  function a(){
    console.log(foo);
  }  

}
let foo = 2;
b();

import "../assets/styles/styles.scss";
import "./todolist.scss";

const form = document.querySelector('form');
const input = document.querySelector('.todolist-input');
const addBtn = document.querySelector('.add');
const ul = document.querySelector('.todolist ul');
const todos = [
  {
    text: "je suis une todo",
    done: true
  },{
    text: "faire du Javascript",
    done:false
  }
];
const displayTodo = (todo, index)=>{
  const todoNodes = todos.map((todo, index)=>{
    return createTodoElement(todo, index);
  });
  ul.innerHTML = "";
  ul.append(...todoNodes);
}

const createTodoElement = (todo, index)=>{
  const li = document.createElement('li');
  const btnDelete = document.createElement('button');
  const i = document.createElement('i');
  i.setAttribute('class', 'arrow-close');
  btnDelete.append(i);
  btnDelete.addEventListener('click', (e)=>{
    deleteTodo(index);
  })

  li.innerHTML = `<span class=" todo ${todo.done ? 'done' : ""}"></span>
                  <p>${todo.text}</p>`;
  li.appendChild(btnDelete);                
  return li;            
}

const addTodo = (todo)=>{
  todos.push({
    text:todo,
    done:false
  });
  displayTodo();
}
const deleteTodo = (index)=>{
  todos.splice(index, 1);
  displayTodo();
}
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const value = input.value;
  addTodo(value);
  input.value ='';
});
displayTodo();



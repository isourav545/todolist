//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click", deleteCheck );

//Functions
function addTodo(event)
{
    event.preventDefault();
//TODO Div
const todoDiv =  document.createElement('div');
todoDiv.classList.add("todo")
//Create li
const newTodo =  document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//CheckMark Button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//Check trash Button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//Append To List
todoList.appendChild(todoDiv);
//Clear Todo Input Value
todoInput.value = " ";
}

function deleteCheck(e)
{
    e.preventDefault();
const item = e.target;
//Delete
if(item.classList[0]=== 'trash-btn')
{
   const todo = item.parentElement;
   todo.classList.add("fall");
   todo.addEventListener("transitionend",function(){
       todo.remove();
   })
}
//Check Mark
if(item.classList[0]==='complete-btn')
{
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
}



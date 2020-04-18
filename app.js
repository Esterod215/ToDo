//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener("click", addTodo);
console.log("filter", filterOption);
filterOption.addEventListener("change", filterTodo);

//functions
function addTodo(event) {
  event.preventDefault();
  //todo container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //todo li
  const newTodo = document.createElement("li");
  console.log("inputt", todoInput);
  newTodo.innerText = todoInput.value;
  todoInput.value = "";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //todo buttons

  const checkMarkButton = document.createElement("button");
  checkMarkButton.addEventListener("click", e => {
    e.preventDefault();
    todoDiv.classList.toggle("completed");
  });
  checkMarkButton.innerHTML = '<i class="fas fa-check"></i>';
  checkMarkButton.classList.add("complete-btn");
  todoDiv.appendChild(checkMarkButton);

  const trashButton = document.createElement("button");
  trashButton.addEventListener("click", e => {
    // e.preventDefault();
    todoDiv.classList.toggle("fall");
    newTodo.innerText = "Finished :)";
    todoDiv.addEventListener("transitionend", () => {
      todoDiv.remove();
    });
  });
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append to list
  todoList.appendChild(todoDiv);
}
function deleteTodo(e, element) {
  e.preventDefault();
  console.log("element: ", element);
  element.remove();
}
function filterTodo(e) {
  console.log("click", e.target.value);
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
  console.log(todos);
}

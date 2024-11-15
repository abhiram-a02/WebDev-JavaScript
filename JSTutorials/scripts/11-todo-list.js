const todoList = ["Make Bed", "Do Laundry"];
renderToDoList();

function renderToDoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`
    todoListHTML += html;
  }
  
  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
  const eventInput = document.querySelector('.js-name-input');
  const name = eventInput.value;
  
  todoList.push(name);
  console.log(todoList);

  eventInput.value = '';

  renderToDoList();
}
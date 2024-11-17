const todoList = [
  {task: 'Make Bed', dueDate: '2024-11-16'}, 
  {task: 'Do Laundry', dueDate: '2024-11-16'},
  {task: 'Wash Car', dueDate: '2024-11-16'}
];
renderToDoList();

function renderToDoList(){
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index){
    const {task, dueDate} = todoObject;
    const html = `
    <div>${task}</div>
    <div>${dueDate}</div>
    <button onclick = "
        todoList.splice(${index}, 1);
        renderToDoList();
    "
    class = "delete-todo-button">Delete</button>`;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
  const eventInput = document.querySelector('.js-name-input');
  const task = eventInput.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({task, dueDate});

  eventInput.value = '';

  renderToDoList();
}
const todoList = [
  {task: 'Make Bed', dueDate: '2024-11-16'}, 
  {task: 'Do Laundry', dueDate: '2024-11-16'},
  {task: 'Wash Car', dueDate: '2024-11-16'}
];
renderToDoList();

function renderToDoList(){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {task, dueDate} = todoObject;
    const html = `
    <div>${task}</div>
    <div>${dueDate}</div>
    <button
    class = "delete-todo-button js-delete-todo-button">Delete</button>`;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderToDoList();
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo(){
  const eventInput = document.querySelector('.js-name-input');
  const task = eventInput.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({task, dueDate});

  eventInput.value = '';

  renderToDoList();
}
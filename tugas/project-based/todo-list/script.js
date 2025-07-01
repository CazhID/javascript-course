const todoLists = [];

const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
  let inputValue = todoInput.value;
  if (inputValue === '') {
    return alert('Masukkan item to-do');
  }

  const todoItem = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Hapus';
  removeButton.addEventListener('click', () => {
    todoList.removeChild(todoItem);
  });
  todoItem.textContent = inputValue;
  todoList.appendChild(todoItem);
  todoItem.appendChild(removeButton);
  todoInput.value = '';
});

function simpanKeLocalStorage(todo) {
  todoLists.push(todo);
  localStorage.setItem('todoList', JSON.stringify(todoLists));
}

export const todoLists = [];
const todoList = document.getElementById('todoList');

export function simpanKeLocalStorage(todo) {
  todoLists.unshift(todo);
  localStorage.setItem('todoList', JSON.stringify(todoLists));
}

function hapusItemLocalStorage(todo) {
  const index = todoLists.indexOf(todo);
  todoLists.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoLists));
}

export function setTodo(inputValue) {
  if (inputValue === '') {
    return alert('Masukkan item to-do');
  }
  const todoItem = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Hapus';
  removeButton.onclick = () => hapusItemLocalStorage(inputValue);
  removeButton.addEventListener('click', () => {
    todoList.removeChild(todoItem);
  });
  todoItem.textContent = inputValue;
  todoList.appendChild(todoItem);
  todoItem.appendChild(removeButton);
  todoInput.value = '';
}

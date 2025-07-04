import { simpanKeLocalStorage, todoLists, setTodo } from './todo.js';

const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
  let inputValue = todoInput.value;
  if (inputValue === '') {
    return alert('Masukkan item to-do');
  }
  setTodo(inputValue);
  simpanKeLocalStorage(inputValue);
});

window.onload = () => {
  if (localStorage.getItem('todoList')) {
    todoLists.unshift(...JSON.parse(localStorage.getItem('todoList')));
    todoLists.forEach((todo) => {
      setTodo(todo);
    });
  }
};

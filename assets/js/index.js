window.todos = []
const todoText = document.getElementById("todoText")
const todoSubmit = document.getElementById("todoSubmit")
const todoList = document.getElementById("todoList")

function addTodo() {
  window.todos.push(todoText.value)
  todoText.value = ''
  renderTodo()
}

function renderTodo() {
  todoList.innerHTML = ''
  window.todos.forEach(function (todo) {
    todoList.innerHTML += `<p>${todo}</p>`
  })
}

todoSubmit.addEventListener('click', addTodo)
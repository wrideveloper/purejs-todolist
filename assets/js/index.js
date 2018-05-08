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
  window.todos.forEach(function (todo, index) {
    todoList.innerHTML += `
        <div class="card">
            <div class="container">
                <div class="card-title">
                    ${todo}
                    <button class="button card-button" onclick="deleteTodo(${index})">Finish</button>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    `
  })
}

function deleteTodo(index) {
  window.todos.splice(index, 1)
  renderTodo()
}

todoSubmit.addEventListener('click', addTodo)
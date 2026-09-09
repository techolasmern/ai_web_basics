const form = document.getElementById("todo_form");
const error = document.getElementById("error");
const todoList = document.getElementById("list");

form.addEventListener("input", (event) => {
    error.innerText = "";
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const todoElement = document.getElementById("todo_input");
    const todo = todoElement.value;
    if (!todo) {
        error.innerHTML = "Please enter a task.";
        return;
    }

    if (todo.length < 10) {
        error.innerHTML = "Task should be at least 10 characters long.";
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = todo;
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.classList.add("btn");
    button.addEventListener("click", () => {
        li.remove();
    })
    li.appendChild(button);
    todoList.appendChild(li);

    document.getElementById("todo_input").value = "";
})
const form = document.getElementById("todo_form");
const error = document.getElementById("error");
const todoList = document.getElementById("list");
const counter = document.getElementById("counter");

form.addEventListener("input", (event) => {
    counter.innerText = document.getElementById("todo_input").value.length;
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
    li.innerHTML = "<div><b>Task:</b> " + todo + "</div><div><b>Time:</b> " + new Date().toLocaleString() + "</div>";
    li.classList.add("todo_item");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("del-btn");
    deleteButton.addEventListener("click", () => {
        li.remove();
    })

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("ed-btn");
    editButton.addEventListener("click", () => {
        alert("Edit not available");
    })

    const btnContainer = document.createElement("div");
    btnContainer.appendChild(deleteButton);
    btnContainer.appendChild(editButton);
    btnContainer.classList.add("btn-container");

    li.appendChild(btnContainer);
    todoList.appendChild(li);

    counter.innerText = 0;
    todoElement.value = "";
})
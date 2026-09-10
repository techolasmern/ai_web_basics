const todoArray = [];

const uuid = () => {
    const str = "abcdef0123456789";
    const arr = [];
    while (arr.length < 16) {
        const ridx = Math.floor(Math.random() * str.length);
        const rltr = str[ridx];
        arr.push(rltr);
    }
    return arr.join("");
}

const getTodos = () => {
    return todoArray;
}

const createTodo = (todo) => {
    const dateTime = new Date().toLocaleString();
    const todoObj = {
        id: uuid(),
        title: todo,
        createdAt: dateTime,
        updatedAt: dateTime,
        status: "Pending"
    }
    todoArray.unshift(todoObj);
    return todoObj;
}

const form = document.getElementById("todo_form");
const error = document.getElementById("error");
const todoList = document.getElementById("list");
const counter = document.getElementById("counter");

form.addEventListener("input", (event) => {
    counter.innerText = document.getElementById("todo_input").value.length;
    error.innerText = "";
})

const updateList = (todo) => {
    const li = document.createElement("li");
    li.innerHTML = "<div><b>Task:</b> " + todo.title + "</div><div><b>Status:</b> " + todo.status + "</div><div><b>Time:</b> " + todo.createdAt + "</div>";
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

    const statusButton = document.createElement("button");
    statusButton.innerHTML = "Mark Completed";
    statusButton.classList.add("st-btn");
    statusButton.addEventListener("click", () => {
        alert("Edit not available");
    })

    const btnContainer = document.createElement("div");
    btnContainer.appendChild(editButton);
    btnContainer.appendChild(statusButton);
    btnContainer.appendChild(deleteButton);
    btnContainer.classList.add("btn-container");

    li.appendChild(btnContainer);
    todoList.appendChild(li);
}

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

    updateList(createTodo(todo));

    counter.innerText = 0;
    todoElement.value = "";
})
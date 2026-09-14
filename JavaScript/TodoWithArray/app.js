const form = document.getElementById("todo_form");
const error = document.getElementById("error");
const todoList = document.getElementById("list");
const counter = document.getElementById("counter");
let todoArray = [];

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
    todoArray.push(todoObj);
    return todoObj;
}

const handleRemoveTask = (id) => {
    todoArray = todoArray.filter((todo) => todo.id != id);
    console.log(todoArray)
}

const toggleStatus = (id) => {
    const updated = todoArray.map((todo) => {
        if (todo.id == id) {
            todo.status = todo.status == "Pending" ? "Completed" : "Pending";
        }
        return todo;
    })
    reloadData();
}

const reloadData = () => {
    todoList.innerHTML = "";
    todoArray.forEach((todo) => {
        updateList(todo);
    });
    if (todoList.innerHTML == "") {
        todoList.innerHTML = "There are no items to show.";
        todoList.style.textAlign = "center";
        todoList.style.marginTop = "20px";
    }
}


form.addEventListener("input", (event) => {
    counter.innerText = document.getElementById("todo_input").value.length;
    error.innerText = "";
})

const handleUpdateTask = todo => {
    const edit_input = document.getElementById("edit_input");
    todo.title = edit_input.value;
    todo.updatedAt = new Date().toLocaleString();
    const updated = todoArray.map(todoItem => {
        if(todoItem.id == todo.id){
            return todo;
        }
        return todoItem;
    })
    todoArray = updated;
    reloadData();
}

const updateList = (todo) => {
    const li = document.createElement("li");
    li.innerHTML = "<div><b>Task:</b> " + todo.title + "</div><div><b>Status:</b> " + todo.status + "</div><div><b>Time:</b> " + todo.createdAt + "</div>";
    li.classList.add("todo_item");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("del-btn");
    deleteButton.addEventListener("click", () => {
        li.remove();
        handleRemoveTask(todo.id);
    })

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("ed-btn");
    editButton.addEventListener("click", () => {
        li.innerHTML = "<div><b>Task:</b> <input type='text' id='edit_input' value=" + todo.title + " /></div><div><b>Status:</b> " + todo.status + "</div><div><b>Time:</b> " + todo.createdAt + "</div><br><button  class='update-btn' id='update_btn'>Update</button>";
        const updateButton = document.getElementById("update_btn");
        updateButton.addEventListener("click", () => {
            handleUpdateTask(todo);
        })
    })

    const statusButton = document.createElement("button");
    statusButton.innerHTML = "Completed";
    statusButton.classList.add("st-btn");
    statusButton.addEventListener("click", () => {
        toggleStatus(todo.id);
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

    const newTask = createTodo(todo);
    updateList(newTask);

    counter.innerText = 0;
    todoElement.value = "";
});

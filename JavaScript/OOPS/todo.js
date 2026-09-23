class Todo{
    constructor() {
        this.todos = [];
    }

    uid() {
        // const str = "abcdef0987654321";
        // const arr = [];
        // while (arr.length < 10) {
        //     const index = Math.floor(Math.random() * str.length);
        //     const rChar = str[index];
        //     arr.push(rChar);
        // }
        // return arr.join("");
        return this.todos.length + 1;
    }

    addTodo(title) {
        const todoObj = {
            id: this.uid(),
            title, // { title: "sample"}
            completed: false
        }
        this.todos.push(todoObj);
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    list() {
        return this.todos;
    }
}

const todo = new Todo();

todo.addTodo("Hello");
todo.addTodo("sample");
todo.addTodo("Hey");

todo.deleteTodo(2);
const list = todo.list();
console.log(list);
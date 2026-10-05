const todoList = "https://jsonplaceholder.typicode.com/todos";
const singleTodoWithId_2 = "https://jsonplaceholder.typicode.com/todos/2";

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const getTodoList = async (): Promise<Todo[] | undefined | null> => {
    try {
        const res = await fetch(todoList);
        const response = await res.json();
        return response;
    } catch (err) {
        console.log(err);
    }
}

(() => {

})();

// IIFE -> Immediately Invoked Function Expression

(async () => {
    const response = await getTodoList();
    response?.forEach((item) => {
        console.log(item.title);
    })
})();


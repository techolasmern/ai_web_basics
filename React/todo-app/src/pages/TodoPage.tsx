import { useState } from "react";
import { TodoList } from "../components/TodoList";
import type { Todo } from "../types/todo";

export const TodoPage = () => {

    const [todo, setTodo] = useState<string>("")
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [editItem, setEditItem] = useState<Todo | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    const handleAddTodo = () => {
        if (todo.trim() == "") return setErrorMessage("Task cannot be empty.");
        if (todo.trim().length < 10) return setErrorMessage("Task must be at least 10 characters long.");
        const currentTime = new Date().toLocaleString("en-IN");
        const taskObj: Todo = {
            id: crypto.randomUUID(),
            title: todo,
            is_completed: false,
            created_at: currentTime,
            updated_at: currentTime
        }
        setTodoList([taskObj, ...todoList]);
        setTodo("");
        setErrorMessage("");
    }

    const handleRemove = (id: string) => {
        const data = todoList.filter((item) => item.id !== id);
        setTodoList(data);
    }

    const handleMarkAsCompleted = (id: string) => {
        const updatedList = todoList.map(item => {
            if (item.id == id) {
                const currentTime = new Date().toLocaleString("en-IN");
                return { ...item, is_completed: true, updated_at: currentTime };
            }
            return item;
        });
        setTodoList(updatedList);
    }

    const handleEdit = (item: Todo) => {
        setEditItem(item);
    }

    const handleEditSubmit = (id: string, new_title: string | undefined) => {
        const updatedList = todoList.map(item => {
            if (item.id == id) {
                const currentTime = new Date().toLocaleString("en-IN");
                return { ...item, title: new_title, updated_at: currentTime };
            }
            return item;
        });
        setTodoList(updatedList);
        setEditItem(null);
    }

    return <div className="font-serif flex flex-col items-center">
        <h1 className="text-3xl mt-3 font-bold underline">Todo List</h1>
        <div className="mt-5 flex flex-col gap-3 w-full max-w-lg shadow shadow-black/30 rounded-md p-5">
            <input type="text" className="p-2 border-2 border-emerald-800 rounded-md " placeholder="Eg: Buy something..." name="todo_input" onChange={handleChange} value={todo}/>
            {errorMessage && <span className="text-red-600 italic text-sm">{errorMessage}</span>}
            <button className="w-full bg-emerald-800 cursor-pointer text-white p-2 rounded-md" onClick={handleAddTodo}>Add Todo</button>
        </div>
        <h2 className="text-start w-full max-w-lg mt-4">Pending Todos: ({todoList.filter(item => !item.is_completed).length})</h2>
        { (todoList.filter(item => !item.is_completed)).length == 0 && <span>There is no pending tasks.</span> }
        <div className="w-full max-w-lg mt-3 flex flex-col gap-2">
            {
                todoList.filter(item => !item.is_completed).map((item) => {
                    return <TodoList handleEditSubmit={handleEditSubmit} editItem={editItem} handleEdit={handleEdit} item={item} handleRemove={handleRemove} key={item.id} handleMarkAsCompleted={handleMarkAsCompleted} />
                })
            }
        </div>
        <h2 className="text-start w-full max-w-lg mt-4">Completed Todos: ({todoList.filter(item => item.is_completed).length})</h2>
        {(todoList.filter(item => item.is_completed)).length == 0 && <span>There is no completed tasks.</span>}
        <div className="w-full max-w-lg mt-3 flex flex-col gap-2">
            {
                todoList.filter(item => item.is_completed).map((item) => {
                    return <TodoList handleEditSubmit={handleEditSubmit} editItem={editItem} handleEdit={handleEdit} item={item} handleRemove={handleRemove} key={item.id} handleMarkAsCompleted={handleMarkAsCompleted} />
                })
            }
        </div>
    </div>
}
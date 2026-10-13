import { useState } from "react";

export const TodoPage = () => {

    const [todo, setTodo] = useState<string>("")
    const [todoList, setTodoList] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value.replaceAll(" ", "_"));
    }

    const handleAddTodo = () => {
        setTodoList([todo, ...todoList]);
        setTodo("");
    }

    const handleRemove = (index: number) => {
        const data = todoList.filter((_, idx) => {
            return index !== idx
        });
        setTodoList(data);
    }

    return <div>
        <h1>Todo List</h1>
        <div>
            <input type="text" placeholder="Eg: Buy something..." name="todo_input" onChange={handleChange} value={todo}/>
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <div>
            {
                todoList.map((item, index) => {
                    return <div key={index}>{index + 1}) {item} - <button onClick={() => handleRemove(index)} className="bg-red-600 p-2 px-4 rounded-sm text-white cursor-pointer">Del</button></div>
                })
            }
        </div>
    </div>
}
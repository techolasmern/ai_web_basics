import { useState } from "react";

export const TodoPage = () => {

    const [todo, setTodo] = useState<string>("")
    const [todoList, setTodoList] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    const handleAddTodo = () => {
        setTodoList([todo, ...todoList]);
        setTodo("");
    }

    const handleRemove = (index: number) => {
        const data = todoList.filter((_, idx) => index !== idx);
        setTodoList(data);
    }

    return <div className="font-serif flex flex-col items-center">
        <h1 className="text-3xl mt-3 font-bold underline">Todo List</h1>
        <div className="mt-5 flex flex-col gap-3 w-full max-w-lg shadow shadow-black/30 rounded-md p-5">
            <input type="text" className="p-2 border-2 border-emerald-800 rounded-md " placeholder="Eg: Buy something..." name="todo_input" onChange={handleChange} value={todo}/>
            <button className="w-full bg-emerald-800 cursor-pointer text-white p-2 rounded-md" onClick={handleAddTodo}>Add Todo</button>
        </div>
        <div className="w-full max-w-lg mt-3 flex flex-col gap-2">
            {
                todoList.map((item, index) => {
                    return <div className="p-3 rounded-md flex flex-col shadow gap-2 shadow-black/30" key={index}>
                        <span>{item}</span>
                        <div className="flex gap-1">
                            <button onClick={() => handleRemove(index)} className="bg-red-600 w-full p-2 px-4 rounded-sm text-white cursor-pointer">Delete Todo</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}
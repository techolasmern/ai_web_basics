// // state -> object -> hooks -> like functions -> state & lifecycle

import { useReducer } from "react"

// // map, conditonal rendering
// import { useState } from "react";

// export const App = () => {
    
//     const [theme, setTheme] = useState<"light" | "dark">("light");
//     const [counter, setCounter] = useState<number>(0);
//     const [className, setClassName] = useState<string>("font-mono uppercase bg-white text-black flex flex-col items-center justify-center h-screen");
//     // const [data, setData] = useState<number>(0);
//     // const [numbers] = useState<Array<number>>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//     // const handleClick = () => {
//     //     setData(data + 1);
//     // }

//     // if (theme === "light") {
//     //     return <div>
//     //         Light theme
//     //     </div>
//     // }

//     return <div className={className}>
//         {/* <div>{data}</div>
//         <button onClick={handleClick}>Update</button>
//         {
//             numbers.map((number) => {
//                 return <div key={number}>{number}</div>
//             })
//         } */}

//         {theme === "dark" && "Dark theme"}
//         {theme === "light" && "Light theme"}

//         {/* ternary */}

//         { theme === "dark" ? <div>This is dark mode</div> : <div>This is light mode</div>}

//         <button className="p-2 bg-red-500 mt-8 text-white cursor-pointer rounded-full px-7 active:scale-99 shadow shadow-black active:shadow-none duration-200 font-mono" onClick={() => {
//             if (theme === "dark") {
//                 setTheme("light")
//                 setClassName(className.replace("bg-black text-white", "bg-white text-black"));
//             } else {
//                 setTheme("dark");
//                 setClassName(className.replace("bg-white text-black", "bg-black text-white"));
//             }
//             setCounter(counter + 1);
//         }}>Toggle</button>
//         <p className="font-serif capitalize mt-4 text-green-700">You have clicked button <span className="text-2xl">{counter}</span> times</p>

//     </div>
// }

type Action = {
    type: "INCREMENT" | "DECREMENT" | "RESET";
}

const reducer = (state: number | undefined, action: Action) => {
    if (state === undefined || action.type === "RESET") return 0;
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        return state - 1;
    }
}

export const App = () => {

    const [state, dispatch] = useReducer<number | undefined, [action: Action]>(reducer, 0);

    return <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-center mb-10 font-bold font-serif underline text-3xl">useReducer() with Typescript</h1>
        <p className="font-serif">State Value: <span className="font-mono">{state}</span></p>
        <div className="flex gap-1 mt-3">
            <button className="bg-emerald-600 w-full cursor-pointer min-w-30 text-white p-2 px-4 rounded-md" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button className="bg-gray-600 w-full cursor-pointer min-w-30 text-white p-2 px-4 rounded-md" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            <button className="bg-red-600 w-full cursor-pointer min-w-30 text-white p-2 px-4 rounded-md" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </div>
    </div>
}
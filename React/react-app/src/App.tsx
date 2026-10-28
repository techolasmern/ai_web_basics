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
    type: "INCREMENT-1" | "DECREMENT-1" | "RESET-1" | "INCREMENT-2" | "DECREMENT-2" | "RESET-2";
}

type Counters = {
    c1: number;
    c2: number;
}

const reducer = (state: Counters, action: Action): Counters => {
    if (action.type === "RESET-1") {
        return { ...state, c1: 0 };
    }
    if (action.type === "RESET-2") {
        return { ...state, c2: 0 };
    }
    if (action.type === "INCREMENT-1") {
        return { ...state, c1: state.c1 + 1 };
    }
    if (action.type === "INCREMENT-2") {
        return { ...state, c2: state.c2 + 1 };
    }
    if (action.type === "DECREMENT-1") {
        return { ...state, c1: state.c1 - 1 };
    }
    if (action.type === "DECREMENT-2") {
        return { ...state, c2: state.c2 - 1 };
    }
    return state;
    
    // OR Using Ternary

    // return {
    //     ...state,
    //     c1: state.c1 + (action.type === "RESET-1" ? -state.c1 : action.type === "INCREMENT-1" ? 1 : action.type === "DECREMENT-1" ? -1 : 0),
    //     c2: state.c2 + (action.type === "RESET-2" ? -state.c2 : action.type === "INCREMENT-2" ? 1 : action.type === "DECREMENT-2" ? -1 : 0),
    // }
}

const handleDarkMode = (_state: string, action: string): string => {
    return action == "light" ? "dark" : "light";
}

export const App = () => {

    const [state, dispatch] = useReducer<Counters, [action: Action]>(reducer, { c1: 0, c2: 0 });
    const [darkMode, dispatchDarkMode] = useReducer(handleDarkMode, "light");

    
    return <div className={`flex justify-center items-center h-screen flex-col bg-white dark:bg-black bg-${darkMode == "light" ? "white" : "black"} text-${darkMode == "light" ? "black" : "white"}`}>
        <button className="bg-black w-full cursor-pointer min-w-30 text-white p-2 px-4 rounded-md" onClick={() => dispatchDarkMode(darkMode)}>{darkMode}</button>
        <h1 className="text-center mb-10 font-bold font-serif underline text-3xl">useReducer() with Typescript</h1>
        <p className="font-serif">State Value C1: <span className="font-mono">{state.c1}</span></p>
        <p className="font-serif">State Value C2: <span className="font-mono">{state.c2}</span></p>
        <div className="flex gap-1 mt-3">
            <button className="bg-emerald-600 w-full cursor-pointer min-w-30 text-white p-2 px-4 rounded-md" onClick={() => dispatch({ type: "INCREMENT-1" })}>Increment 1</button>
            <button className="bg-gray-600 w-full cursor-pointer min-w-30 text-white p-2 px-4 rounded-md" onClick={() => dispatch({ type: "RESET-1" })}>Reset 1</button>
            <button className="bg-red-600 w-full cursor-pointer min-w-30 text-white p-2 px-4 rounded-md" onClick={() => dispatch({ type: "DECREMENT-1" })}>Decrement 1</button>
        </div>
        <div className="flex gap-1 mt-3">
            <button className="bg-emerald-600 w-full cursor-pointer min-w-30 text-white p-2 px-4 rounded-md" onClick={() => dispatch({ type: "INCREMENT-2" })}>Increment 2</button>
            <button className="bg-gray-600 w-full cursor-pointer min-w-30 text-white p-2 px-4 rounded-md" onClick={() => dispatch({ type: "RESET-2" })}>Reset 2</button>
            <button className="bg-red-600 w-full cursor-pointer min-w-30 text-white p-2 px-4 rounded-md" onClick={() => dispatch({ type: "DECREMENT-2" })}>Decrement 2</button>
        </div>
    </div>
}
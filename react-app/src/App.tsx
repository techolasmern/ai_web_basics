// state -> object -> hooks -> like functions -> state & lifecycle

// map, conditonal rendering
import { useState } from "react";

export const App = () => {
    
    const [theme, setTheme] = useState<"light" | "dark">("light");
    // const [data, setData] = useState<number>(0);
    // const [numbers] = useState<Array<number>>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // const handleClick = () => {
    //     setData(data + 1);
    // }

    // if (theme === "light") {
    //     return <div>
    //         Light theme
    //     </div>
    // }

    return <div>
        {/* <div>{data}</div>
        <button onClick={handleClick}>Update</button>
        {
            numbers.map((number) => {
                return <div key={number}>{number}</div>
            })
        } */}

        {theme === "dark" && "Dark theme"}
        {theme === "light" && "Light theme"}

        {/* ternary */}

        { theme === "dark" ? <div>This is dark mode</div> : <div>This is light mode</div>}

        <button className="p-2 bg-red-500 text-white" onClick={() => {
            if (theme === "dark") {
                setTheme("light")
            } else {
                setTheme("dark");
            }
        }}>Toggle</button>

        
    </div>
}
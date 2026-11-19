// useMemo, memo, useCallback

import { useCallback, useMemo, useState } from "react";
import { Child } from "./components/Child";

 // lazy loading

export const App = () => {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button Clicked")
    }, []);

    const increment = () => {
        setCount(count + 1)
    }

    const totalSum = () => {
        console.log("sum calculating...")
        let s = 0;
        for (let i = 0; i < 1000000; i++){
            s += i;
        }
        return s;
    }

    const memoizedTotalSum = useMemo(() => totalSum(), []);

    return <div>
        Counter: {count}
        <button onClick={increment}>Increment</button>
        <div>{memoizedTotalSum}</div>
        <Child onClick={handleClick}/>
    </div>
};
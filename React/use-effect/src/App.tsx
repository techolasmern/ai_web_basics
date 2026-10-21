// useEffect; -> LifeCycle, side Effect -> API Calling, Events, Timers

import { useEffect, useState } from "react"

// 

export const App = () => {

    const [counter1, setCounter1] = useState<number>(0);
    const [counter2, setCounter2] = useState<number>(0);
    const [timer, setTimer] = useState<number>(0);

    // useEffect(() => {
    //     console.log("Mounted"); // Mounting, update, unmounting
    //     return () => {
    //         console.log("Unmounted");
    //     }
    // }, [counter2]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [counter1]);

    return <div className="flex justify-center h-screen items-center flex-col gap-3">
        <div>Counter 1: {counter1}</div>
        <div>Counter 2: {counter2}</div>
        <div>Timer: {timer}</div>
        <div className="flex gap-2">
            <button onClick={() => setCounter1(counter1 + 1)} className="bg-emerald-700 p-2 px-4 rounded-md text-white min-w-30">Click 1</button>
            <button onClick={() => setCounter2(counter2 + 1)} className="bg-red-700 p-2 px-4 rounded-md text-white min-w-30">Click 2</button>
        </div>
    </div>
}
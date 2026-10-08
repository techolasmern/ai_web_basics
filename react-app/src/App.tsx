import { useState } from "react";

type Counter = {
    counter_one: number;
    counter_two: number;
}

type CounterType = 1 | 2;

export const App = () => {

    // const [state, setState] = useState<number>(0);
    const [counter, setCounter] = useState <Counter>({ counter_one: 1, counter_two: 2 });

    // const handleUpdateA = () => {
    //     setState(state + 1);

    // }

    const handleUpdate = (num: CounterType) => {
        if (num == 1) {
            setCounter({ ...counter, counter_one: counter.counter_one + 1 });
        }
        if (num == 2) {
            setCounter({ ...counter, counter_two: counter.counter_two + 1 });
        }
    }

    return <div>
        {/* <p>Data - {state}</p>
        <button onClick={handleUpdateA}>Update A</button> */}

        <p>Counter 1: {counter.counter_one}</p>
        <p>Counter 2: {counter.counter_two}</p>

        <div>
            <button onClick={function () {
                handleUpdate(1)
            }} > Update Counter 1</button>
            <button onClick={() => handleUpdate(2)}>Update Counter 2</button>
        </div>
    </div>
}
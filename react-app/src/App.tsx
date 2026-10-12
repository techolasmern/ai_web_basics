// state -> object -> hooks -> like functions -> state & lifecycle

// map, conditonal rendering

import { useState } from "react";

// useState

export const App = () => {
    
    const [data, setData] = useState<number>(0);
    const [numbers] = useState<Array<number>>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


    const handleClick = () => {
        setData(data + 1);
    }

    return <div>
        <div>{data}</div>
        <button onClick={handleClick}>Update</button>
        {
            numbers.map((number) => {
                return <div key={number}>{number}</div>
            })
        }
    </div>

}
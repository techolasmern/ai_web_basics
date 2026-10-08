// state management -> object -> Hooks -> useState();
import { useState } from "react";

export const App = () => {

    const [state, setState] = useState<number>(0);

    const handleUpdateA = () => {
        setState(state + 1);
    }

    return <div>
        <p>Data - {state}</p>
        <button onClick={handleUpdateA}>Update A</button>
    </div>
}
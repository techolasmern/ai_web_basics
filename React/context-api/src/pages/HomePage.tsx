import { useContext } from "react";
import { CounterContext } from "../App";

export const HomePage = () => {

    const value = useContext(CounterContext);

    console.log(value);

    return <div>HomePage</div>
};
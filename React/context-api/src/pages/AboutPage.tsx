import { useContext } from "react";
import { CounterContext } from "../App";

export const AboutPage = () => {

    const value = useContext(CounterContext);
    
    console.log(value);
    
    return <div>AboutPage</div>
};
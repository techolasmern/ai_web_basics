import { Nav } from "../components/Nav";
import { useCounter } from "../hooks/useCounter";

export const AboutPage = () => {

    const { counter, setCounter } = useCounter();
    
    return <div>
        <Nav />
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Click</button>
        AboutPage
    </div>
};
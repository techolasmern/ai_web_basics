import { Nav } from "../components/Nav";
import { useCounter } from "../hooks/useCounter";

export const HomePage = () => {

    const { counter } = useCounter();

    return <div>
        <Nav />
        HomePage - {counter}
    </div>
};
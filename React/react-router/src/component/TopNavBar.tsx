import { TypedLink } from "./Link";

export const TopNavBar = () => {
    return <header>
        <ul className="h-20 bg-white shadow flex justify-center items-center gap-3">
            <li><TypedLink to="/">Home</TypedLink></li>
            <li><TypedLink to="/about">About</TypedLink></li>
            <li><TypedLink to="/contact">Contact</TypedLink></li>
        </ul>
    </header>
};
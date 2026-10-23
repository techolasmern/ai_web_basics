import { Link } from "react-router";

export const TopNavBar = () => {
    return <header>
        <ul className="h-20 bg-white shadow flex justify-center items-center gap-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </header>
};
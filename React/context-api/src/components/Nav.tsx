import { Link } from "react-router";

export const Nav = () => {
    return <div className="h-20 w-screen flex justify-center items-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
};
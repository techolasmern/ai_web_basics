import { Link } from "react-router";

export const Nav = () => {
    return <div className="h-16 w-screen sticky top-0 flex justify-center items-center gap-10 shadow">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
};
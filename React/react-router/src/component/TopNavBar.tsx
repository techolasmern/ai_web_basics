import { TypedLink } from "./Link";

export const TopNavBar = () => {

    const getRandomPathName = (): `/profile/${string}` => {
        const rn = Math.floor(Math.random() * 1000);
        return `/profile/${rn}`
    }

    return <header>
        <ul className="h-20 bg-white shadow flex justify-center items-center gap-3">
            <li><TypedLink to="/">Home</TypedLink></li>
            <li><TypedLink to="/about">About</TypedLink></li>
            <li><TypedLink to="/contact">Contact</TypedLink></li>
            <li><TypedLink to={getRandomPathName()}>profile</TypedLink></li>
        </ul>
    </header>
};
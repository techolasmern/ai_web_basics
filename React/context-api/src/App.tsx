// context api -> state -> props -> props drilling -> useContext

import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { createContext } from "react"

// contextApi - for global state management

const routeData: RouteObject[] = [
    {
        path: "/",
        Component: HomePage
    }, {
        path: "/about",
        Component: AboutPage
    }
];

const routes = createBrowserRouter(routeData)

type ContextValueType = { global: string; }

export const CounterContext = createContext<ContextValueType | null>(null);

export const App = () => {

    const data = "This is global data";

    return <CounterContext.Provider value={{global: data}}>
        <RouterProvider router={routes} />
    </CounterContext.Provider>

}
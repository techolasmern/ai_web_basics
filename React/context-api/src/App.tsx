// context api -> state -> props -> props drilling -> useContext

import { createBrowserRouter, RouterProvider } from "react-router"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { createContext } from "react"

// contextApi - for global state management

const routes = createBrowserRouter([
    {
        path: "/",
        Component: HomePage
    }, {
        path: "/about",
        Component: AboutPage
    }
])

export const CounterContext = createContext<{ global: string} | null>(null);

export const App = () => {

    const data = "This is global data";

    return <CounterContext.Provider value={{global: data}}>
        <RouterProvider router={routes} />
    </CounterContext.Provider>

}
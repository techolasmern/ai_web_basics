// context api -> state -> props -> props drilling -> useContext

import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { CounterProvider } from "./providers/CounterProvider";

// contextApi - for global state management

const routeData: RouteObject[] = [
    { path: "/", Component: HomePage },
    { path: "/about", Component: AboutPage },
];

const routes = createBrowserRouter(routeData)

export const App = () => {

    return <CounterProvider>
        <RouterProvider router={routes} />
    </CounterProvider>

}
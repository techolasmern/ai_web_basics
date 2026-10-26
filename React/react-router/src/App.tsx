import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { TopNavBar } from "./component/TopNavBar"
import { ContactPage } from "./pages/ContactPage"
import { ProfilePage } from "./pages/ProfilePage"

// Method: 1

export const routeMap = {
    home: "/",
    about: "/about",
    contact: "/contact",
    profile: "/profile/:id"
} as const;


export const App = () => {
    return <BrowserRouter>
        
        <TopNavBar />

        <Routes>
            <Route path={routeMap.home} Component={HomePage} />
            <Route path={routeMap.about} Component={AboutPage} />
            <Route path={routeMap.contact} Component={ContactPage} />
            <Route path={routeMap.profile} Component={ProfilePage} />
        </Routes>
    </BrowserRouter>
}
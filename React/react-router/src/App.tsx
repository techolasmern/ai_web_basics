import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { TopNavBar } from "./component/TopNavBar"

// Method: 1
export const App = () => {
    return <BrowserRouter>
        
        <TopNavBar />

        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
        </Routes>
    </BrowserRouter>
}
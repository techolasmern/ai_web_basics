import { BrowserRouter, Route, Routes } from "react-router"
import { RefPage } from "./pages/RefPage"

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/ref" Component={RefPage} />
        </Routes>
    </BrowserRouter>
}
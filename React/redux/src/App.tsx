import { BrowserRouter, Route, Routes } from "react-router";
import { ReduxPage } from "./pages/ReduxPage";

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={ReduxPage} />
        </Routes>
    </BrowserRouter>
};
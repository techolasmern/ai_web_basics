import { BrowserRouter, Route, Routes } from "react-router";
import { ReduxPage } from "./pages/ReduxPage";
import { TodoPage } from "./pages/TodoPage";

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={ReduxPage} />
            <Route path="/todo" Component={TodoPage} />
        </Routes>
    </BrowserRouter>
};
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/products/:id" Component={ProductPage} />
        </Routes>
    </BrowserRouter>
};
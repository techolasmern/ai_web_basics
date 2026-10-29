import "./index.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { CartProvider } from "./providers/CartProvider";

const container = document.getElementById('root');
const appRoot = createRoot(container!);

appRoot.render(<CartProvider>
    <App />
</CartProvider>);
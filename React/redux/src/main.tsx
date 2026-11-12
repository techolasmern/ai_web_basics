import "./index.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Render the App component with the store wrapped in the Provider component (Make the store available to all components in the tree)
createRoot(document.getElementById("root")!).render(<Provider store={store}>
    <App />
</Provider>);
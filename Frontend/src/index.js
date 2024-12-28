import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
import AppContextProvider from "./Context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

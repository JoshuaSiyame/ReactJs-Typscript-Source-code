// import modules/packages
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import App from "./App";
import "./index.css";

// set app entrance
const root = createRoot(
    document.getElementById("root") as HTMLElement
);

// render the app
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={'/RA_React-Router_task-1-menu'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </React.StrictMode>
);

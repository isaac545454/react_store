import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Login } from "../pages/login/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
  <Login />
  </React.StrictMode>
);

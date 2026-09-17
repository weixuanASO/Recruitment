import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./theme.css";
import "./styles.css";

import App from "./App.jsx";
import Qualify from "./pages/Qualify.jsx";

// Two "pages":
//   /         -> the landing page (App.jsx)
//   /qualify  -> the multi-step application form (pages/Qualify.jsx)
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/qualify", element: <Qualify /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Menu } from "./Menu/Menu";
import { Cards } from "./Card/Cards";
import { Hooks } from "./Hooks/Hooks";
import { Multiply } from "./Hooks/Multiply";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      { path: "/", element: <App /> },
      { path: "/hooks", element: <Hooks /> },
      { path: "/multiply", element: <Multiply /> },
      { path: "/card", element: <Cards /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

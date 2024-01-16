import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Menu } from "./Menu/Menu";
import { Cards } from "./Card/Cards";
import { Hooks } from "./Hooks/Hooks";
import { Multiply } from "./Hooks/Multiply";
import { Urlaub } from "./urlaub/Urlaub";
import { Currency } from "./Currency/Currency";
import { Months } from "./Months/Months";
import { Mui } from "./Mui/Mui";

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
      { path: "/urlaub", element: <Urlaub /> },
      { path: "/currency", element: <Currency /> },
      { path: "/months", element: <Months /> },
      { path: "/mui", element: <Mui /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.css";
import Errorpage from "./pages/Errorpage.jsx";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import TestPage from "./pages/TestPage";
import Student from "./pages/Student";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Errorpage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Errorpage />,
  },
  {
    path: "/student",
    element: <Student />,
    errorElement: <Errorpage />,
  },
  {
    path: "/test",
    element: <TestPage />,
    errorElement: <Errorpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

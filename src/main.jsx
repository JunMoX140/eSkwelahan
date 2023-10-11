import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.css";
import Errorpage from "./pages/Errorpage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./pages/Register.jsx";
import Student from "./pages/Student";
import TeacherClass from "./pages/TeacherClass.jsx";
import HomeTeacher  from "./pages/HomeTeacher.jsx";
import FooterComp from "./components/FooterComp";
import TeacherQuiz from "./pages/TeacherQuiz.jsx";
import DashboardTeacher from "./pages/DashboardTeacher";
import LoginPage from "./pages/LoginPage";
import HomeStudent from "./pages/HomeStudent";
import StudentClass from "./pages/StudentClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/footer",
        element: <FooterComp />,
      },
    ],
  },
  {
    path: "/logintest",
    element: <LoginPage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/sign-up",
    element: <Register />,
    errorElement: <Errorpage />,
  },
  
  {
    path: "/student",
    element: <HomeStudent />,
    errorElement: <Errorpage />,
  },
  {
    path: "/student/class/:classid",
    element:  <StudentClass />,
    errorElement: <Errorpage/>,
  },
  {
    path: "/teacher",
    element: <HomeTeacher />,
    errorElement: <Errorpage />,
  
  },
  {
    path: "/teacher/class/:classid",
    element:  <TeacherClass />,
    errorElement: <Errorpage/>,
    children: [
      
      {
        path: "/teacher/class/:classid/dashboard",
        element:  <DashboardTeacher />,
      },
      {
        path: "/teacher/class/:classid/quiz/:quizid",
        element:  <TeacherQuiz />,
      },
      
    ]
  },
  
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

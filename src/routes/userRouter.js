import {Outlet, createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import HomePage from "../pages/Home/HomePage";
import Navbar from "../components/Navbar.js/Navbar";
import UserLayout from "../layouts/UserLayout";
import ProtectedRoute from "../utils/ProtectedRoute";



const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute component={UserLayout} />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export {userRouter};

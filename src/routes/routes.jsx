import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Register from "../pages/register/register";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <span>Error Happen</span>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {},
    ],
  },
]);

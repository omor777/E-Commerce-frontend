import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Register from "../pages/register/register";
import Login from "../pages/login/login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <span>Error Happen</span>,
    children: [
      {
        path: "/",
        element: "",
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

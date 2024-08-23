import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Register from "../pages/register/register";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import CartPage from "../pages/cart/cart";
import AddProduct from "../pages/admin/addProduct/addProduct";
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
      {
        path: "/cart",
        element: <CartPage />,
      },
      // admin related routes
      {
        path: "/add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

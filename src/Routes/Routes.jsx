import { createBrowserRouter } from "react-router-dom";
import "sweetalert2/src/sweetalert2.scss";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OrderFood from "../pages/OrderFood/OrderFood";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AdminRoute from "./AdminRoute/AdminRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/order-food/:category",
        element: (
          <PrivetRoute>
            <OrderFood />
          </PrivetRoute>
        ),
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
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard />
      </PrivetRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/cart",
        element: (
          <PrivetRoute>
            <Cart />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/add-item",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;

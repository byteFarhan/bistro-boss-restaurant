import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "our-menu",
        element: <OurMenu />,
      },
    ],
  },
]);

export default router;

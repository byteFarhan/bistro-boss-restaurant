import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const hideHedderFooter =
    location.pathname.includes("register") ||
    location.pathname.includes("login");
  return (
    <>
      {hideHedderFooter || <Navbar></Navbar>}
      <Outlet />
      {hideHedderFooter || <Footer></Footer>}
    </>
  );
};

export default MainLayout;

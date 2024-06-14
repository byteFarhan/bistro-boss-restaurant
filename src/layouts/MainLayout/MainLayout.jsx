import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname.includes("register") ||
    location.pathname.includes("login");
  return (
    <>
      {hideHeaderFooter || <Navbar></Navbar>}
      <Outlet />
      {hideHeaderFooter || <Footer></Footer>}
    </>
  );
};

export default MainLayout;

import { BiSolidFoodMenu } from "react-icons/bi";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <section className="flex">
      <section>
        <div className="w-64 min-h-full px-4 bg-orange-400">
          <ul className="pt-16 space-y-3 menu">
            <li>
              <NavLink
                to={"/dashboard/admin-home"}
                className="flex items-center justify-center gap-2 py-2 text-lg font-semibold text-center font-cinzel"
              >
                <FaHome /> Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/cart"}
                className="flex items-center justify-center gap-2 px-4 py-2 text-lg font-semibold text-center font-cinzel"
              >
                <FaShoppingCart /> My Cart ({cart?.length})
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/cart"}
                className="flex items-center justify-center gap-2 px-4 py-2 text-lg font-semibold text-center font-cinzel"
              >
                <ImSpoonKnife /> Add Item
              </NavLink>
            </li>
          </ul>
          <hr className="h-[2px] mx-auto my-10 bg-white" />
          <ul className="space-y-3">
            <li>
              <NavLink
                to={"/"}
                className="flex items-center justify-center gap-2 py-2 text-lg font-semibold text-center font-cinzel"
              >
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/our-menu"}
                className="flex items-center justify-center gap-2 py-2 text-lg font-semibold text-center font-cinzel"
              >
                <BiSolidFoodMenu />
                Our Menu
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex-1">
        <Outlet />
      </section>
    </section>
  );
};

export default Dashboard;

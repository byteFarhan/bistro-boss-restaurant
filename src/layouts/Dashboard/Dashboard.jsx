import { BiSolidFoodMenu } from "react-icons/bi";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { MdEmail, MdOutlineRateReview } from "react-icons/md";
import { FaCalendar, FaList, FaUsers } from "react-icons/fa6";
import { useState } from "react";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  // const [admin, setAdmin] = useState(true);
  const [isAdmin] = useAdmin();
  // console.log(isAdmin);
  const [cart] = useCart();
  return (
    <section className="flex">
      <section>
        <div className="w-64 h-full min-h-screen px-4 bg-orange-400">
          {isAdmin ? (
            <>
              <ul className="pt-16 space-y-3 menu">
                <li>
                  <NavLink
                    to={"/dashboard/admin-home"}
                    className="flex items-center gap-2 py-2 text-lg font-semibold font-cinzel"
                  >
                    <FaHome /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/add-item"}
                    className="flex items-center gap-2 px-4 py-2 text-lg font-semibold font-cinzel"
                  >
                    <ImSpoonKnife /> Add Item
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/manage-item"}
                    className="flex items-center gap-2 px-4 py-2 text-lg font-semibold font-cinzel"
                  >
                    <FaList /> Manage Item
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/all-users"}
                    className="flex items-center gap-2 px-4 py-2 text-lg font-semibold font-cinzel"
                  >
                    <FaUsers /> All Users
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="pt-16 space-y-3 menu">
                <li>
                  <NavLink
                    to={"/dashboard/user-home"}
                    className="flex items-center gap-2 py-2 text-lg font-semibold font-cinzel"
                  >
                    <FaHome /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/cart"}
                    className="flex items-center gap-2 px-4 py-2 text-lg font-semibold font-cinzel"
                  >
                    <FaShoppingCart /> My Cart ({cart?.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/reservation"}
                    className="flex items-center gap-2 px-4 py-2 text-lg font-semibold font-cinzel"
                  >
                    <FaCalendar /> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/add-review"}
                    className="flex items-center gap-2 px-4 py-2 text-lg font-semibold font-cinzel"
                  >
                    <MdOutlineRateReview /> Add Review
                  </NavLink>
                </li>
              </ul>
            </>
          )}
          <hr className="h-[2px] mx-auto my-10 bg-white" />
          {/* Sheared Navlinks */}
          <ul className="space-y-3">
            <li>
              <NavLink
                to={"/"}
                className="flex items-center gap-2 py-2 text-lg font-semibold font-cinzel"
              >
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/our-menu"}
                className="flex items-center gap-2 py-2 text-lg font-semibold font-cinzel"
              >
                <BiSolidFoodMenu />
                Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="flex items-center gap-2 py-2 text-lg font-semibold font-cinzel"
              >
                <MdEmail />
                Contact
              </NavLink>
            </li>
            <li>
              <button
                // onClick={() => setAdmin(!admin)}
                className="bg-title text-white font-semibold w-full py-2.5 rounded-md"
              >
                {isAdmin ? "Make User" : "Make Admin"}
              </button>
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

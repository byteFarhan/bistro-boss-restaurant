import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { IoCartOutline } from "react-icons/io5";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userSignOut } = useAuth();
  const [cart] = useCart();
  const handleLogout = () => {
    userSignOut()
      .then(() => {
        toast.success("Logout successfull.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <nav className="fixed z-10 w-full shadow bg-[#15151580] dark:bg-gray-800">
        <div className="px-4 py-4 mx-auto md:px-6 lg:px-10">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link to={`/`}>
                <div className="">
                  <h3 className="text-lg font-bold leading-normal text-white md:text-xl lg:text-2xl font-cinzel">
                    BISTRO BOSS
                  </h3>
                  <h5 className="text-base font-semibold text-white md:text-lg lg:text-xl font-cinzel">
                    Restaurant
                  </h5>
                </div>
              </Link>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-2xl font-semibold text-white dark:text-gray-200 dark:hover:text-gray-400 focus:outline-none dark:focus:text-gray-400 md:text-3xl"
                  aria-label="toggle menu"
                >
                  {!isOpen ? <RxHamburgerMenu /> : <RxCross2 />}
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div
              className={`${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#15151580] dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <NavItem routeName={"Home"} routePath={`/`} />
                <NavItem routeName={"CONTACT US"} routePath={`/contact-us`} />
                <NavItem routeName={"DASHBOARD"} routePath={`/dashboard`} />
                <NavItem routeName={"Our Menu"} routePath={`/our-menu`} />
                <NavItem
                  routeName={"Order Food"}
                  routePath={`/order-food/salads`}
                />
                {!user && (
                  <>
                    {/* <NavItem routeName={"Register"} routePath={`/register`} /> */}
                    <NavItem routeName={"Login"} routePath={`/login`} />
                  </>
                )}
              </div>
              {user && (
                <>
                  <div className="flex items-center mt-4 lg:mt-0">
                    <button
                      className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                      aria-label="show notifications"
                    >
                      <div className="relative">
                        <IoCartOutline className="text-2xl font-semibold lg:text-3xl" />
                        <p className="absolute top-[-10px] right-[-12px] text-lg bg-white rounded-full font-medium size-6 text-title">
                          {cart?.length}
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      className="flex items-center focus:outline-none"
                      aria-label="toggle profile dropdown"
                    >
                      <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                        <img
                          src={user?.photoURL}
                          className="object-cover w-full h-full"
                          alt={user?.displayName}
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                        {user?.displayName}
                      </h3>
                    </button>
                  </div>
                  <span className="ml-5">
                    <button
                      onClick={handleLogout}
                      className="text-white font-bold text-sm bg-[#D1A054B2] px-3 py-2 rounded-md"
                    >
                      Logout
                    </button>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

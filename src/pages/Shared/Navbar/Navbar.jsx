import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userSignOut } = useAuth();
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
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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

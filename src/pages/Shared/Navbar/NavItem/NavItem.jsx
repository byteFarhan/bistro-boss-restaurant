import { NavLink } from "react-router-dom";

const NavItem = ({ routePath, routeName, lgHidden }) => {
  return (
    <>
      <NavLink
        to={routePath}
        className={({ isActive, isPending }) =>
          `nav-item ${isPending ? "" : isActive ? "text-yellow-500" : ""} ${
            lgHidden ? "lg:hidden" : ""
          }`
        }
      >
        {routeName}
      </NavLink>
    </>
  );
};

export default NavItem;

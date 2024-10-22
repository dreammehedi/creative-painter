import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import menuContent from "./MenuContent";
function MenuItem({ handleMobileMenu }) {
  return (
    <>
      {menuContent.map((item, ind) => {
        const { name, path } = item;
        return (
          <li
            onClick={() => {
              handleMobileMenu();
            }}
            key={ind}
            className="font-semibold capitalize"
          >
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive ? "text-orange-500" : "";
              }}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
MenuItem.propTypes = {
  handleMobileMenu: PropTypes.func,
};
export default MenuItem;

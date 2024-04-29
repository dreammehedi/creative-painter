import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const menuContent = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Art & Craft",
    path: "/all-art-craft",
  },
  {
    name: "Add Craft",
    path: "/add-craft",
  },
  {
    name: "My Art & Craft",
    path: "/my-art-craft",
  },
];
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

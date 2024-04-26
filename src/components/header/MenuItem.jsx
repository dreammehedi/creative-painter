import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

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
function MenuItem() {
  // user data
  const { userData } = useContext(AuthContext);
  return (
    <>
      {menuContent.map((item, ind) => {
        const { name, path } = item;
        return (
          <li key={ind} className="font-semibold capitalize">
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive ? "text-orange-900" : "";
              }}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
      {userData ? (
        <li className="font-semibold capitalize">
          <NavLink
            to={"/login"}
            className={({ isActive }) => {
              return isActive ? "text-orange-900" : "";
            }}
          >
            Login
          </NavLink>
        </li>
      ) : (
        <li className="font-semibold capitalize">
          <NavLink
            to={"/register"}
            className={({ isActive }) => {
              return isActive ? "text-orange-900" : "";
            }}
          >
            Register
          </NavLink>
        </li>
      )}
    </>
  );
}

export default MenuItem;

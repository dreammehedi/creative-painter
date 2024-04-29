import { NavLink } from "react-router-dom";

import menuContent from "./MenuContent";
function DesktopMenuItem() {
  return (
    <>
      {menuContent.map((item, ind) => {
        const { name, path } = item;
        return (
          <li key={ind} className="font-semibold capitalize">
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

export default DesktopMenuItem;

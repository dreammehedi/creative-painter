import { NavLink } from "react-router-dom";

const menuContent = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 3,
    name: "FAQ",
    path: "/faq",
  },
  {
    id: 4,
    name: "About",
    path: "/about",
  },
  {
    id: 5,
    name: "Register",
    path: "/register",
  },
];
function MenuItem() {
  return (
    <>
      {menuContent.map((item) => {
        const { id, name, path } = item;
        return (
          <li key={id} className="font-semibold capitalize">
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
    </>
  );
}

export default MenuItem;

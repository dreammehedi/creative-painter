import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
function RegLogMenu() {
  // user data
  const { userData } = useContext(AuthContext);
  return (
    <>
      {!userData && (
        <>
          <ul className="flex justify-center items-center gap-4 md:gap-6  font-poppins">
            <li className="font-semibold capitalize">
              <NavLink
                to={"/register"}
                className={({ isActive }) => {
                  return isActive ? "text-orange-500" : "";
                }}
              >
                Register
              </NavLink>
            </li>
            <li className="font-semibold capitalize">
              <NavLink
                to={"/login"}
                className={({ isActive }) => {
                  return isActive ? "text-orange-500" : "";
                }}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default RegLogMenu;

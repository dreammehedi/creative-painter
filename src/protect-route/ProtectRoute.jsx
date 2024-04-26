import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
function ProtectRoute({ children }) {
  // find user is existing
  const { userData } = useContext(AuthContext);

  if (userData) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
}
ProtectRoute.propTypes = {
  children: PropTypes.element,
};
export default ProtectRoute;

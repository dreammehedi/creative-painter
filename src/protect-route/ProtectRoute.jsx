import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import Loader from "../components/loader/Loader";
function ProtectRoute({ children }) {
  // find user is existing
  const { userData, userLoader } = useContext(AuthContext);
  console.log(userLoader);
  // page refresh redirect handler
  if (userLoader) {
    return <Loader></Loader>;
  }

  // user data is available user page will be available
  if (userData) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
}
ProtectRoute.propTypes = {
  children: PropTypes.element,
};
export default ProtectRoute;

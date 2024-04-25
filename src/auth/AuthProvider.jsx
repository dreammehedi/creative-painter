import PropTypes from "prop-types";
import { createContext } from "react";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  return (
    <>
      <AuthContext.Provider value={{ name: "mehedi" }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;

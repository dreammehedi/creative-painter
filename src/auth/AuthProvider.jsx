import PropTypes from "prop-types";
import { createContext } from "react";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  // google login

  // auth context all value
  const authContextInfo = {};
  return (
    <>
      <AuthContext.Provider value={authContextInfo}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;

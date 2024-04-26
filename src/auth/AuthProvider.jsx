import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  // register new user
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in google account
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  // sign in github account
  const signInWithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };
  // auth context all value
  const authContextInfo = { registerUser, signInWithGoogle, signInWithGithub };
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

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  // userInformation
  const [userData, setUserData] = useState(null);
  // user loading state
  const [userLoader, setUserLoader] = useState(true);

  // register new user
  const registerUser = (email, password) => {
    setUserLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login new user
  const loginUser = (email, password) => {
    setUserLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logoutUser = () => {
    return signOut(auth);
  };

  // sign in google account
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    setUserLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  // sign in github account
  const signInWithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    setUserLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  // user state managment
  useEffect(() => {
    const unSubscribedUsers = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setUserLoader(false);
        setUserData(userInfo);
      } else {
        setUserLoader(false);
        setUserData(null);
      }
    });

    return () => {
      unSubscribedUsers();
    };
  }, []);

  // auth context all value
  const authContextInfo = {
    userData,
    userLoader,
    registerUser,
    loginUser,
    logoutUser,
    signInWithGoogle,
    signInWithGithub,
  };
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

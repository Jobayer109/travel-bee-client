import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign in user
  const logIn = (email, password) => {
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google sign in
  const googleSignIn = (googleProvider) => {
    setLoading(false)
    return signInWithPopup(auth, googleProvider);
  };

  //Sign out user.
  const logOut = () => {
    setLoading(false)
    return signOut(auth);
  };

  //Update profile
  const profile = (name, photoURL) => {
    setLoading(false)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //email verification
  const verify = () => {
    setLoading(false)
    return sendEmailVerification(auth.currentUser);
  };

  //On auth state change
  useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setLoading(false)
          setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, loading, createUser, profile, verify, logIn, logOut, googleSignIn };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

import React, { createContext, useContext } from "react";

import { auth } from "../firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  const value = {
    resetPassword,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

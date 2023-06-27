import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase-config";
import { db } from "../firebase-config";

///////////////////////////
const UserContext = createContext();

export function UserProvider({ children }) {
  const [theUser, setTheUser] = useState({});
  const [signedUp, setSignedUp] = useState(false);

  let value = {
    theUser,
    signedUp,
    setTheUser,
    setSignedUp,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(db, "Users", user.uid)).then((snapshot) => {
          setTheUser({ ...snapshot.data(), id: user.uid });
        });

        setSignedUp(true);
      }
    });
    return unsubscribe();
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Custom Hook
export function useUser() {
  return useContext(UserContext);
}

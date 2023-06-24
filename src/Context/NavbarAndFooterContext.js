import React, { createContext, useContext, useState } from "react";

const NavbarAndFooterContext = createContext();

export function ShowNavbarAndFooterProvider({ children }) {
  const [showNavbarAndFooter, setShowNavbarAndFooter] = useState(true);

  const value = {
    showNavbarAndFooter,
    setShowNavbarAndFooter,
  };
  return (
    <NavbarAndFooterContext.Provider value={value}>
      {children}
    </NavbarAndFooterContext.Provider>
  );
}

export function useNavbarAndFooterState() {
  return useContext(NavbarAndFooterContext);
}

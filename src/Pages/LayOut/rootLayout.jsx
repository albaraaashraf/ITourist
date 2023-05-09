// Tools
import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../../components/navbar";
import { StorageProvider } from "../../Context/StorageContext";
import { UserProvider } from "../../Context/UserContext";
import { AuthProvider } from "../../Context/AuthContext";

function RootLayout() {
  return (
    <>
      <UserProvider>
        <AuthProvider>
          <header>
            <nav>
              <Navbar />
            </nav>
          </header>
          {/* The main content */}
          <main>
            <StorageProvider>
              <Outlet />
            </StorageProvider>
          </main>
        </AuthProvider>
      </UserProvider>
    </>
  );
}
export default RootLayout;

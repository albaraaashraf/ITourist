// Tools
import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../../components/navbar";
import { StorageProvider } from "../../Context/StorageContext";
import { UserProvider } from "../../Context/UserContext";
import { AuthProvider } from "../../Context/AuthContext";
import Footer from "../Home-Page/Home-Components/Footer/Footer";
import TopScreenButton from "../../components/ToolOnPage/TopScreenButton";
import { useNavbarAndFooterState } from "../../Context/NavbarAndFooterContext";

function RootLayout() {
  const { showNavbarAndFooter } = useNavbarAndFooterState();

  return (
    <>
      <UserProvider>
        <AuthProvider>
          <header>
            <Navbar />
          </header>

          {/* The main content */}
          <main>
            <StorageProvider>
              <Outlet />
            </StorageProvider>
          </main>
        </AuthProvider>
      </UserProvider>

      {showNavbarAndFooter && <TopScreenButton />}

      {showNavbarAndFooter && (
        <div className="footer__container">
          <Footer />
        </div>
      )}
    </>
  );
}
export default RootLayout;

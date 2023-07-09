import { NavLink } from "react-router-dom";

import logo from "../assets/images/sublogo_itourists.png";
import { useUser } from "../Context/UserContext";

function Navbar() {
  let navStyle = {
    backgroundColor: "#072c3d",
    marginBottom: "0",
    marginLeft: "0",
  };

  const { signedUp } = useUser();
  const { theUser } = useUser();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={navStyle}>
        <div className="container-fluid ">
          <NavLink
            className="navbar-brand me-auto"
            to="/"
            style={{ color: "white" }}
          >
            <img
              src={logo}
              alt="logo"
              height="40rem"
              className="mx-1"
              style={{ width: "2.5rem" }}
            ></img>
            <span>iTourist</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-auto "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              {theUser && (
                <>
                  {theUser.tourGuide && (
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Requests">
                        Requests
                      </NavLink>
                    </li>
                  )}
                </>
              )}

              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Us">
                  Contact Us
                </NavLink>
              </li>

              {signedUp ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Profile/Info">
                    <div
                      style={{
                        width: "2.8rem",
                        height: "2.8rem",
                      }}
                    >
                      <img
                        src={theUser.profileImg}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/SingUp">
                      Sign UP
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/SignIn">
                      Sign In
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";

import { NavLink } from "react-router-dom";

import { useUser } from "../../../../../Context/UserContext";

import { signOut } from "firebase/auth";
import { auth } from "../../../../../firebase-config";
// components
import InfoData from "./components/InfoData";
import { useNavigate } from "react-router-dom";

function Info() {
  const { theUser } = useUser();

  const navigate = useNavigate();

  async function logout() {
    await signOut(auth).then(() => {
      navigate("/");
      window.location.reload();
    });
  }

  return (
    <>
      <div className="container-md p-3">
        <div className="row">
          <div className="col">
            {theUser && (
              <div>
                <InfoData label="Full Name" data={theUser.fullName} />
                <InfoData label="Email" data={theUser.email} />
                <InfoData label="Phone" data={theUser.phoneNumber} />
                <InfoData label="Born" data={theUser.dataOfBirth} />
                <InfoData label="Gender" data={theUser.gender} />
              </div>
            )}
          </div>
          <div className="row flex-row">
            <div className="col d-flex justify-content-start option">
              <NavLink to={"/Profile/Edit"}>
                <button className="btn">Edit</button>
              </NavLink>
            </div>
            <div className="col d-flex justify-content-end">
              <button onClick={logout} className="btn singOut-btn">
                Sing Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;

import React from "react";

import { useUser } from "../../../Context/UserContext";

import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";
// components
import InfoData from "./InfoData";
import { useNavigate } from "react-router-dom";

function Info() {
  const { theUser } = useUser();
  const { setSignedUp } = useUser();

  const navigate = useNavigate();

  async function logout() {
    await signOut(auth).then(() => {
      navigate("/");
      setSignedUp(false);
      // window.location.reload();
    });
  }

  return (
    <>
      <div className="container-md p-3">
        <div className="row">
          <div className="col">
            {theUser && (
              <div>
                <InfoData label="User Name" data={theUser.UserName} />
                <InfoData label="Full Name" data={theUser.FullName} />
                <InfoData label="Born" data={theUser.Born} />
                <InfoData label="Gender" data={theUser.Gender} />
                <InfoData label="Email" data={theUser.Email} />
                <InfoData label="Phone" data={theUser.Phone} />
              </div>
            )}
          </div>
          <div className="row">
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

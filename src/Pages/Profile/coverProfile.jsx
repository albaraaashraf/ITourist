import React from "react";

import { useUser } from "../../Context/UserContext";

// Css

function CoverProflie(probs) {
  const { theUser } = useUser();

  return (
    <>
      <div className="container-fluid px-2">
        <div className="container-fluid text-light overflow-hidden coverStyle">
          <div className="row h-100 h-md-75 align-items-center ">
            <div className="col col-md-6 d-flex flex-row justify-content-center align-items-center">
              <div className="img-cover">
                <img src={theUser && theUser.ProfileImg} alt="profile-img" />
              </div>
              <div className="mx-1 mx-md-3 text-center cover-info">
                <span id="cover-name">{theUser && theUser.UserName}</span>
                <br />
                <span
                  className="mx-2"
                  style={{ opacity: "0.7" }}
                  id="cover-place"
                >
                  {theUser && theUser.Country} ,{theUser && theUser.City}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoverProflie;

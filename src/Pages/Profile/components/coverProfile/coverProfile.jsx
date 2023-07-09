import React from "react";

import { useUser } from "../../../../Context/UserContext";

function CoverProflie() {
  const { theUser } = useUser();

  return (
    <>
      <div className="container-fluid px-2">
        <div className="container-fluid text-light overflow-hidden coverStyle">
          <div className="row h-100">
            <div className="col col-lg-6 d-flex flex-row justify-content-center align-items-center">
              <div className="img-cover">
                <img src={theUser && theUser.profileImg} alt="profile-img" />
              </div>
              <div className="mx-1 mx-md-3 text-center cover-info">
                <span id="cover-name">{theUser && theUser.fullName}</span>
                <br />
                <span
                  className="mx-2"
                  style={{ opacity: "0.7" }}
                  id="cover-place"
                >
                  {theUser && theUser.country} ,{theUser && theUser.city}
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

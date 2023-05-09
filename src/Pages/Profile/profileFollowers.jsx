import React from "react";

function ProfileFollowers(props) {
  const data = props;

  return (
    <>
      <div className="container-fluid text-light py-3">
        <div className="row justify-content-center ">
          <div className="row justify-content-center ">
            <div className="col-2 my-2">Trips</div>
          </div>
          <div className="row justify-content-center">
            <div className="col-2 ps-4">{data && data.trips}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileFollowers;

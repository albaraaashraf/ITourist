import React from "react";
import { useOutletContext } from "react-router-dom";
import Skills from "./Skills";

function Bio() {
  const {
    user: [person],
  } = useOutletContext(); // it is a hook to use shared probs in you outlets

  return (
    <>
      <div className="container-md p-3 ">
        <div className="row  ">
          <div className="col d-flex justify-content-center align-items-center  ">
            <div
              className="text-center rounded-3 d-flex justify-content-center align-items-center bio-style"
              style={{ maxHeight: "22rem" }}
            >
              {person.map((user) => {
                return (
                  <p className="lead" key={user.id}>
                    {user.Bio}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;

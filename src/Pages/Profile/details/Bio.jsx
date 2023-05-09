import React from "react";
import { useOutletContext } from "react-router-dom";
import Skills from "./Skills";

function Bio() {
  const {
    user: [person],
  } = useOutletContext(); // it is a hook to use shared probs in you outlets

  return (
    <>
      <div className="container-md p-3">
        <div className="row">
          <div className="col">
            <div
              className="text-center rounded-3 d-flex justify-content-center align-items-center bio-style"
              style={{ minHeight: "15rem" }}
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

        <div className="row">
          <div className="col my-3 px-5 rounded-3 bio-style">
            <span className="px-0">Skills : </span>
            <Skills person={person} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;

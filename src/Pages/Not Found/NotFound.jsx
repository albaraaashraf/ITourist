import React from "react";
import { TbPlugConnectedX } from "react-icons/tb";
import { NavLink } from "react-router-dom";
function NotFound() {
  const paraphraph1 = "the page you are searching dosn't exist";
  const paraphraph2 = "Press here to go back to home page";
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="text-center text-light bg-danger h-100 p-3">
          <h1 className="mb-5">Not Found</h1>

          <span style={{ fontSize: "3rem" }}>
            <TbPlugConnectedX />
          </span>

          <p>{paraphraph1.toUpperCase()}</p>

          <p className="lead mt-5 mb-4">{paraphraph2.toUpperCase()}</p>
          <NavLink to={"/"}>
            <button className="btn btn-outline-light"> Home </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NotFound;

import React from "react";
import { NavLink } from "react-router-dom";

// import "./test.css";

function OptionBtn() {
  return (
    <>
      <div className="container-lg text-center my-3 ">
        <div className="btn-group d-flex justify-content-center align-items-center w-100">
          <div className="btn-border option">
            <NavLink to={"/Profile/Info"}>
              <button className="btn btn-lg">Person</button>
            </NavLink>
          </div>
          <div className="btn-border option ">
            <NavLink to={"/Profile/bio"}>
              <button className="btn btn-lg">Bio</button>
            </NavLink>
          </div>
          <div className="btn-border option">
            <NavLink to={"/Profile/gallery"}>
              <button className="btn btn-lg">Gallery</button>
            </NavLink>
          </div>
          <div className="btn-border option">
            <NavLink to={"/Profile/favorite-places"}>
              <button className="btn btn-lg">Favourite Places</button>
            </NavLink>
          </div>
          <div className="text-end option option-edit">
            <NavLink to={"/Profile/Edit"}>
              <button className="btn">Edit</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default OptionBtn;

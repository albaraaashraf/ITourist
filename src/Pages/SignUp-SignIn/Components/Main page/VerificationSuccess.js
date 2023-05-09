import "./Verification.css";
import Navbar from "./Navbar";
import { Fragment } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
function VerificationSuccess() {
  return (
    <Fragment>
      <Navbar />
      <div className="verification-section">
        <div className="verification__container">
          <BsFillCheckSquareFill className="square-check" />
          <p className="success-text">
            Your account has been successfully verified
          </p>
          <Link className="success-link" to={"/"}>
            Take me home
            <BiChevronRight className="chevron__success" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
export default VerificationSuccess;

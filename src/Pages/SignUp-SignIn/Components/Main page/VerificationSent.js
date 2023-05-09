import { Fragment } from "react";
import "./Verification.css";
import "./HomePage.css";
import { BsFillEnvelopeFill } from "react-icons/bs";
import Navbar from "./Navbar";

function VerificationSent() {
  return (
    <Fragment>
      <Navbar />
      <div className="verification-section">
        <div className="verification__container">
          <BsFillEnvelopeFill className="open-envelope" />
          <p>Verify your e-mail address</p>
          <p>Please check your e-mail's inbox to get your code</p>
          <button className="btn btn-verify-sent">CLICK TO VERIFY</button>
        </div>
      </div>
    </Fragment>
  );
}
export default VerificationSent;

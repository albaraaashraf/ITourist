import { Fragment } from "react";
import "./Verification.css";
import Navbar from "./Navbar";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function VerifyPassword() {
  return (
    <Fragment>
      <Navbar />
      <div className="verification-section">
        <div className="verification__container">
          <div className="vp__container">
            <BsFillEnvelopeOpenFill className="vp__envelope" />
            <div className="vp--text">Please enter your 6-digit code</div>
            <div className="otp__container">
              <input type="text" maxLength="1" className="otp__field" />
              <input type="text" maxLength="1" className="otp__field" />
              <input type="text" maxLength="1" className="otp__field" />
              <input type="text" maxLength="1" className="otp__field" />
              <input type="text" maxLength="1" className="otp__field" />
              <input type="text" maxLength="1" className="otp__field" />
            </div>
            <Link to={"/verification-success"} className="recover--button">
              Verify Email
            </Link>
            <div className="vp--text">Didn't recieve a code ?</div>
            <button className="resend-code">Resend Code</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default VerifyPassword;

import "./Verification.css";

import { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";
import { Alert } from "react-bootstrap";
function RecoverPassword() {
  const { resetPassword } = useAuth();

  const [success, setsuccess] = useState(false);
  const [error, setError] = useState(false);

  const emailRef = useRef("");

  function resetHandler(e) {
    e.preventDefault();

    let email = emailRef.current.value;

    resetPassword(email)
      .then(() => {
        setsuccess(true);
      })
      .catch(() => {
        setError(true);
      });
  }

  return (
    <Fragment>
      <div className="verification-section">
        <div className="verification__container">
          {/* showing the success or error of sending the Email */}
          {success && (
            <Alert variant="success">Email sent to your Account</Alert>
          )}
          {error && <Alert variant="danger">Somthing Wrong Happened</Alert>}

          <div className="recover--title">Identify Your Account</div>
          <div className="recover--description">
            Which account do you have trouble accessing?
          </div>
          <input
            type="text"
            className="recover--input"
            placeholder="Please enter your email"
            ref={emailRef}
          />
          <button className="recover--button" onClick={resetHandler}>
            Reset Password
          </button>

          {success && (
            <Link
              to={"/SignIn"}
              style={{ textDecoration: "none", margin: "0.5rem" }}
            >
              <button className="recover--button">
                Go Back to Sign In Page
              </button>
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
}
export default RecoverPassword;

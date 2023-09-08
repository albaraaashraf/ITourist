import { Fragment, useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useNavbarAndFooterState } from "../../../../Context/NavbarAndFooterContext";

// bootstrap
import { Alert } from "react-bootstrap";

// css
import "./SignInForm.css";

// icons and Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiUser } from "react-icons/bi";
import { BsLinkedin, BsGoogle, BsFacebook } from "react-icons/bs";
import Input from "../UI/Input";
import { LoadState } from "../../Pages/SignIn";

// firebase
import { auth } from "../../../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
//// the USER
import { useUser } from "../../../../Context/UserContext";

function SignInForm() {
  const { setShowNavbarAndFooter } = useNavbarAndFooterState();

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setSignedUp } = useUser();

  const navigate = useNavigate();

  function signinEmailHandler(e) {
    setSignInEmail(e.target.value);
  }
  function signinPasswordHandler(e) {
    setSignInPassword(e.target.value);
  }

  const { setLoadScreen } = useContext(LoadState);

  async function login() {
    try {
      setLoadScreen(true);
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword).then(
        () => {
          navigate("/");
        }
      );
    } catch (error) {
      setError(error.code);
    }
    setLoadScreen(false);
    setLoading(false);
  }

  useEffect(() => {
    setShowNavbarAndFooter(false);

    return () => {
      setShowNavbarAndFooter(true);
    };
  });

  return (
    <Fragment>
      <div className="sign-in-container">
        <h2>
          <BiUser />
          Sign In
        </h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <div className="input-box">
          <div className="font-awesome">
            <BiUser />
          </div>
          <Input
            input={{
              type: "text",
              placeholder: "Username",
            }}
            onChange={signinEmailHandler}
          />
        </div>

        <div className="input-box">
          <div className="font-awesome">
            <FontAwesomeIcon icon="fa-solid fa-lock" />
          </div>
          <Input
            input={{
              type: "password",
              placeholder: "Password",
            }}
            onChange={signinPasswordHandler}
          />
        </div>

        <button className=" profile-img-btn" onClick={login} disabled={loading}>
          Sign In
        </button>

        <div id="forgot-info" style={{ margin: "0.5rem" }}>
          <span>
            <Link to={"/SignIn/RecoverPassword"} style={{ color: "black" }}>
              Forgot Password ?
            </Link>
          </span>
        </div>

        <div id="signUp-info">
          <span>
            Don't have account
            <Link to="/SingUp" style={{ color: "black" }}>
              SignUp
            </Link>
          </span>
        </div>

        <div className="brands-box">
          <BsLinkedin className="brand-icon" />
          <BsGoogle className="brand-icon" />
          <BsFacebook className="brand-icon" />
        </div>
      </div>
    </Fragment>
  );
}
export default SignInForm;

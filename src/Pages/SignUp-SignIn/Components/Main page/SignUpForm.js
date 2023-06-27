import { Fragment, useContext, useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

import { useNavbarAndFooterState } from "../../../../Context/NavbarAndFooterContext";

// Styling and icons

//// css
import "./SignInForm.css";
import "./Verification.css";

//
import Input from "../UI/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form } from "react-bootstrap";
import {
  BsEnvelopeFill,
  BsFillCalendarFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

import { BiWorld } from "react-icons/bi";
import { GiModernCity } from "react-icons/gi";
import { FaRegDotCircle } from "react-icons/fa";

// FireBase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { auth, db, storage } from "../../../../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { StateContext } from "../../Pages/SignUp";

function SignInForm() {
  const { setShowNavbarAndFooter } = useNavbarAndFooterState();

  const [registerEmail, setRegisterEmail] = useState("");

  const [registerPassword, setRegisterPassword] = useState("");
  const [passwordConfermation, setPasswordConfermation] = useState("");
  const [error, setError] = useState("");

  const [registerUserName, setRegisterUserName] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");

  const [registerCountry, setRegisterCountry] = useState("");
  const [registerCity, setRegisterCity] = useState("");

  const capitalLetterRegex = /[A-Z]/;
  const smallLetterRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const eightCharactersRegex = /^.{8,}$/;

  const [containsCapitalLetter, setContainsCapitalLetter] = useState(false);
  const [containsSmallLetter, setContainsSmallLetter] = useState(false);
  const [containsDigit, setContainsDigit] = useState(false);
  const [containsEightLetters, setContainsEightLetters] = useState(false);

  const navigate = useNavigate();

  // screen loading Component state variables
  const { setLoadingScreen } = useContext(StateContext);
  const { setText } = useContext(StateContext);

  const fileSelectStyle = {
    display: "none",
  };

  function emailChangeHandler(e) {
    setRegisterEmail(e.target.value);
  }

  function passwordChangeHandler(e) {
    setRegisterPassword(e.target.value);
    setContainsCapitalLetter(capitalLetterRegex.test(e.target.value));
    setContainsSmallLetter(smallLetterRegex.test(e.target.value));
    setContainsDigit(digitRegex.test(e.target.value));
    setContainsEightLetters(eightCharactersRegex.test(e.target.value));
  }

  function uploadFile(filePath, file) {
    const storageRef = ref(storage, filePath);

    return uploadBytesResumable(storageRef, file);
  }

  function downloadImg(filePath) {
    const storageRef = ref(storage, filePath);
    return getDownloadURL(storageRef);
  }

  async function signup(e) {
    setError("");

    e.preventDefault();

    setText("Initializing");
    setLoadingScreen(true);
    try {
      if (registerPassword !== passwordConfermation) {
        setLoadingScreen(false);
        return setError("password not matched");
      }

      let data = document.querySelector("#singUp").elements;
      const file = data.profileImg.files[0];

      let person = {
        UserName: registerUserName,
        FullName: registerName,
        Email: registerEmail,
        Phone: registerPhone,
        Country: registerCountry,
        City: registerCity,
        Gender: data.gender.value,
        Born: data.date.value,
        Imgs: [],
      };

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      const user = userCredential.user;
      const docRef = doc(db, "Users", user.uid);

      try {
        if (file) {
          let imagePath = `Images/${user.uid}/ProfileImgs/${file.name}`;

          await uploadFile(imagePath, file).then(async () => {
            await downloadImg(imagePath).then((downloadURL) => {
              person = { ...person, ProfileImg: downloadURL };
            });
          });
        } else {
          const imgpath =
            "https://firebasestorage.googleapis.com/v0/b/itourist-c5583.appspot.com/o/default%20imgs%2Fprofile-icon.png?alt=media&token=57ae903e-847c-49ae-bac6-6bd45635782a";
          person = { ...person, ProfileImg: imgpath };
        }

        setText("Finalizing");
        await setDoc(docRef, { ...person });

        navigate("/");
        window.location.reload();
      } catch (e) {
        setError("Error adding data: ");
      }
    } catch (error) {
      setError(error.code.replace("-", " ").slice(5));
    }

    setLoadingScreen(false);
  }

  useEffect(() => {
    setShowNavbarAndFooter(false);

    return () => {
      setShowNavbarAndFooter(true);
    };
  });

  return (
    <Fragment>
      <Form className="sign-in-container" id="singUp">
        <h2>
          <FontAwesomeIcon icon="fa-solid fa-user" />
          Sign Up
        </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="input-box">
          <div className="font-awesome">
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </div>
          <Input
            input={{
              type: "text",
              name: "UserName",
              placeholder: "User Name",
              required: true,
            }}
            onChange={function (e) {
              setRegisterUserName(e.target.value);
            }}
          />
        </div>

        <div className="input-box">
          <div className="font-awesome">
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </div>
          <Input
            input={{
              type: "text",
              name: "FullName",
              placeholder: "Full Name",
              required: true,
            }}
            onChange={function (e) {
              setRegisterName(e.target.value);
            }}
          />
        </div>

        <div className="input-box">
          <div className="font-awesome">
            <BsEnvelopeFill />
          </div>
          <Input
            input={{
              type: "email",
              name: "Email",
              placeholder: "Email",
              required: true,
            }}
            onChange={emailChangeHandler}
          />
        </div>

        <div className="input-box">
          <div className="font-awesome">
            <FontAwesomeIcon icon="fa-solid fa-lock" />
          </div>
          <Input
            input={{
              type: "password",
              name: "password",
              placeholder: "Password",
              required: true,
            }}
            onChange={passwordChangeHandler}
          />
        </div>

        <div className="confirm__password--container">
          <div
            className={`confirm__password--item confirm__password--capital ${
              containsEightLetters && `condition-approved`
            }`}
          >
            <FaRegDotCircle className="dot-circle" />
            <p>8 Characters or more</p>
          </div>

          <div
            className={`confirm__password--item confirm__password--capital ${
              containsCapitalLetter && `condition-approved`
            }`}
          >
            <FaRegDotCircle className="dot-circle" />
            <p>Atleast one capital letter</p>
          </div>
          <div
            className={`confirm__password--item confirm__password--capital ${
              containsSmallLetter && `condition-approved`
            }`}
          >
            <FaRegDotCircle className="dot-circle" />
            <p>Atleast one small letter</p>
          </div>
          <div
            className={`confirm__password--item confirm__password--capital ${
              containsDigit && `condition-approved`
            }`}
          >
            <FaRegDotCircle className="dot-circle " />
            <p>Atleast one digit</p>
          </div>
        </div>

        <div className="input-box">
          <div className="font-awesome">
            <FontAwesomeIcon icon="fa-solid fa-lock" />
          </div>
          <Input
            input={{
              type: "password",
              placeholder: "Confirm Password",
              required: true,
            }}
            onChange={(e) => {
              setPasswordConfermation(e.target.value);
            }}
          />
        </div>

        <div className="my-3">
          <Input
            label="Profile Image"
            labelStyle="profile-img-btn"
            input={{
              id: "profileImg",
              type: "file",
            }}
            style={fileSelectStyle}
          />
        </div>

        <div className="input-box">
          <div className="font-awesome">
            <BiWorld />
          </div>
          <Input
            input={{
              type: "text",
              name: "Country",
              placeholder: "Country",
              required: true,
            }}
            onChange={function (e) {
              setRegisterCountry(e.target.value);
            }}
          />
        </div>
        <div className="input-box">
          <div className="font-awesome">
            <GiModernCity />
          </div>
          <Input
            input={{
              type: "text",
              name: "City",
              placeholder: "City",
              required: true,
            }}
            onChange={function (e) {
              setRegisterCity(e.target.value);
            }}
          />
        </div>

        <div className="input-box">
          <div className="font-awesome">
            <BsFillTelephoneFill />
          </div>
          <Input
            input={{
              type: "text",
              name: "phoneNumber",
              placeholder: "Phone Number",
              required: true,
            }}
            onChange={function (e) {
              setRegisterPhone(e.target.value);
            }}
          />
        </div>

        <div className="input-box">
          <div className="font-awesome">
            <BsFillCalendarFill />
          </div>
          <label htmlFor="formDate">Born</label>
          <Input
            input={{
              id: "formDate",
              type: "date",
              name: "date",
              placeholder: "Date of Birth",
              required: true,
            }}
          />
        </div>
        <div className="input-box my-3">
          <Form.Group>
            <Form.Label htmlFor="gender" className="mx-4">
              Gender
            </Form.Label>
            <Form.Check
              inline
              type="radio"
              id="genderMale"
              name="gender"
              label="male"
              value="male"
            />
            <Form.Check
              inline
              type="radio"
              id="genderFemale"
              name="gender"
              label="female"
              value="female"
            />
          </Form.Group>
        </div>

        <div id="signIn-Info">
          <span>
            Already have account ?
            <Link to="/SignIn" style={{ marginLeft: "5px", color: "black" }}>
              SignIn
            </Link>
          </span>
        </div>

        <button onClick={signup} className="btn btn-sign-in">
          Sign up
        </button>
      </Form>
    </Fragment>
  );
}
export default SignInForm;

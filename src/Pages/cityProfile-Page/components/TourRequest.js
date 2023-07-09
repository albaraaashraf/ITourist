import classes from "./TourRequest.module.css";
import { useState } from "react";
import { AiTwotoneCalendar, AiFillCar } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { BsPersonFill, BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { MdOutlineLanguage, MdGroups2 } from "react-icons/md";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { Slider } from "@mui/material";

import { useContext } from "react";
import CityContext from "../../../Context/CityContext";
// firebase
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useRef } from "react";

const TourRequest = ({ hide }) => {
  const [value, setValue] = useState(500);
  const [currency, setCurrecny] = useState("");
  const [gender, setGender] = useState("");
  const [car, setCar] = useState("");
  const descRef = useRef();
  const [showError, setShowError] = useState("");
  const [formData, setFormData] = useState({
    numberOfOffers: 0,
    status: "pending",
  });
  const [maleIsClicked, setMaleIsClicked] = useState(false);
  const [femaleIsClicked, setFemaleIsClicked] = useState(false);
  const [carClicked, setCarClicked] = useState(false);
  const [noCarClicked, setNoCarClicked] = useState(false);

  const textAreaStyle = {
    resize: "none",
    border: "1px solid #425281",
    borderRadius: "0.4rem",
    padding: "0.5rem 0.8rem",
  };

  // city details

  const { cityName } = useContext(CityContext);
  const storedUser = JSON.parse(localStorage.getItem("storedUser"));
  const storedCity = localStorage.getItem("searchedCityName");

  const handleCurrencyChange = (event) => {
    const selectedValue = event.target.value;
    setCurrecny(selectedValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      rangeOfBudget: `1-${value}`, // Add the Slider value to the form data
    }));
    console.log(formData.Price);
    setValue(500);
    // console.log("Selected option:", selectedValue);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      rangeOfBudget: `1-${newValue}`, // Add the Slider value to the form data
    }));
  };

  const handleGender = (value) => {
    if (value === 1) {
      if (gender === "Male") {
        setMaleIsClicked(false);
        setGender("");

        setFormData((prevFormData) => ({
          ...prevFormData,
          tourGuideGender: "",
        }));
      } else {
        setMaleIsClicked(true);
        setFemaleIsClicked(false);
        setGender("Male");
        setFormData((prevFormData) => ({
          ...prevFormData,
          tourGuideGender: "Male",
        }));
      }
    } else if (value === 2) {
      if (gender === "Female") {
        setFemaleIsClicked(false);
        setGender("");
        setFormData((prevFormData) => ({
          ...prevFormData,
          tourGuideGender: "",
        }));
      } else {
        setGender("Female");
        setFemaleIsClicked(true);
        setMaleIsClicked(false);
        setFormData((prevFormData) => ({
          ...prevFormData,
          tourGuideGender: "Female",
        }));
      }
    }
  };
  // console.log(femaleIsClicked);

  const handleCar = (value) => {
    if (value === 1) {
      if (car === "Yes") {
        setCarClicked(false);
        setCar("");
        setFormData((prevFormData) => ({
          ...prevFormData,
          ownsVehicle: "",
        }));
      } else {
        setCarClicked(true);
        setNoCarClicked(false);
        setCar("Yes");
        setFormData((prevFormData) => ({
          ...prevFormData,
          ownsVehicle: "Yes",
        }));
      }
    } else if (value === 2) {
      if (car === "No") {
        setNoCarClicked(false);
        setCar("");
        setFormData((prevFormData) => ({ ...prevFormData, Car: "" }));
      } else {
        setNoCarClicked(true);
        setCarClicked(false);
        setCar("No");
        setFormData((prevFormData) => ({
          ...prevFormData,
          ownsVehicle: "No",
        }));
      }
    }
  };
  const handleInputChange = (event) => {
    let { name, value } = event.target;
    if (name === "numberOfPeople") value = parseInt(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (!formData.numberOfPeople || !formData.arrivalDate) {
      setShowError(true);

      return;
    }

    // add form data to firebase
    const colRef = doc(
      db,
      `/City/${storedCity}/Upcoming Tours/${storedUser.uid}`
    );

    const form = document.querySelector("#req-form");
    setDoc(colRef, {
      ...formData,
      description: descRef.current.value ? descRef.current.value : "none",
      userRef: `Users/${storedUser.uid}`,
      createdAt: serverTimestamp(),
    }).then(() => {
      console.log("Done Done");
      form.reset();
      hide(false);
    });

    setDoc(doc(db, `/Users/${storedUser.uid}/Tours Requests/${storedCity}`), {
      Reference: `City/${storedCity}/Upcoming Tours/${storedUser.uid}`,
    });

    setShowError(false);
  };

  return (
    <>
      <div className={classes.formImgContainer}>
        <form onSubmit={handleOnSubmit} id="req-form">
          <div className={classes.container}>
            <div className={classes.numContainer}>
              <i className={classes.iconContainer}>
                <MdGroups2 />
              </i>

              <input
                className={classes.inputContainer}
                min="1"
                type="number"
                placeholder="Indviduals Count"
                name="numberOfPeople"
                value={formData.Number}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className={classes.numContainer}>
              <i className={classes.iconContainer}>
                <AiTwotoneCalendar />
              </i>

              <input
                className={classes.inputContainer}
                type="date"
                placeholder="Date of arrival"
                name="arrivalDate"
                value={formData.Date}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className={classes.numContainer}>
              <i className={classes.iconContainer}>
                <FaWallet />
              </i>

              {/* <select
                className={classes.inputContainer}
                onChange={(event) => {
                  handleCurrencyChange(event);
                  handleInputChange(event);
                }}
                name="Currency"
                value={currency}
              >
                <option value="" disabled hidden>
                  Select your currency
                </option>
                <option value="EGP">Egyptian Pound</option>
                <option value="USD">United States Dollar</option>
                <option value="EUR">Euro</option>
                <option value="GBP">British Pound</option>
              </select> */}
            </div>
            <div className={classes.numContainer}>
              <p>1 {currency}</p>

              <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={1000} // Set the maximum value to 1000
                style={{ width: "15rem", color: "#607d8b" }}
              />

              <p>1000 {currency}</p>
            </div>
            <h3>Preferences (Optional)</h3>

            <div className={classes.numContainer}>
              <div className={classes.responsiveContainer}>
                <i className={classes.iconContainer}>
                  <BsPersonFill />
                </i>

                <input
                  type="text"
                  placeholder={gender ? gender : "tourGuideGender"}
                  disabled
                  className={classes.inputContainer}
                />
              </div>
              <div className={classes.formButton}>
                <button
                  style={{
                    backgroundColor: maleIsClicked ? "aliceblue" : "#00bcd4",
                    color: maleIsClicked ? "#00bcd4" : "aliceblue",
                  }}
                  className={classes.checkButton}
                  type="button"
                  onClick={() => {
                    handleGender(1);
                  }}
                >
                  <BsGenderMale />
                </button>
                <button
                  style={{
                    backgroundColor: femaleIsClicked ? "aliceblue" : "hotpink",
                    color: femaleIsClicked ? "hotpink" : "aliceblue",
                  }}
                  className={classes.checkButton}
                  type="button"
                  onClick={() => {
                    handleGender(2);
                  }}
                >
                  <BsGenderFemale />
                </button>
              </div>
            </div>

            <div className={classes.numContainer}>
              <i className={classes.iconContainer}>
                <MdOutlineLanguage />
              </i>

              <select
                className={classes.inputContainer}
                name="spokenLanguages"
                value={formData.Language}
                onChange={handleInputChange}
              >
                <option value="" disabled hidden>
                  Spoken Languages
                </option>
                <option value="Arabic">Arabic</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Italian">Italian</option>
              </select>
            </div>
            <div className={classes.numContainer}>
              <div className={classes.responsiveContainer}>
                <i className={classes.iconContainer}>
                  <AiFillCar />
                </i>
                <input
                  type="text"
                  value=""
                  placeholder={car ? car : "Car is prefered"}
                  disabled
                  className={classes.inputContainer}
                />
              </div>
              <div className={classes.formButton}>
                <button
                  style={{
                    backgroundColor: carClicked ? "aliceblue" : "#100D4C",
                    color: carClicked ? "#100D4C" : "aliceblue",
                  }}
                  className={classes.checkButton}
                  type="button"
                  onClick={() => {
                    handleCar(1);
                  }}
                >
                  <IoMdCheckmark />
                </button>
                <button
                  style={{
                    backgroundColor: noCarClicked ? "aliceblue" : "#100D4C",
                    color: noCarClicked ? "#100D4C" : "aliceblue",
                  }}
                  className={classes.checkButton}
                  type="button"
                  onClick={() => {
                    handleCar(2);
                  }}
                >
                  <IoMdClose />
                </button>
              </div>
            </div>
            <div className={classes.formButton}></div>
            <br></br>
            <label style={{ fontWeight: "bolder", fontSize: "1.3rem" }}>
              Description :
            </label>
            <br></br>
            <textarea
              rows={7}
              cols={60}
              placeholder="Write any Thing you Want Here ..."
              ref={descRef}
              style={textAreaStyle}
            ></textarea>
            <br></br>
            <button className={classes.submitButton} type="submit">
              Submit
            </button>
          </div>
        </form>
        <img
          className={classes.tourImg}
          alt="Tour Guide"
          src="/assets/images/Tour guide-bro.png"
        />
      </div>
      {showError && <p>Error Please Submit the required fields</p>}
    </>
  );
};
export default TourRequest;

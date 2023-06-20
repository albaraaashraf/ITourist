import classes from "./TourRequest.module.css";
import { useState } from "react";
import { AiTwotoneCalendar, AiFillCar } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { BsPersonFill, BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { MdOutlineLanguage, MdGroups2 } from "react-icons/md";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { Slider } from "@mui/material";
const TourRequest = () => {
  const [value, setValue] = useState(500);
  const [currency, setCurrecny] = useState("");
  const [gender, setGender] = useState("");
  const [car, setCar] = useState("");
  const [showError, setShowError] = useState("");
  const [formData, setFormData] = useState({
    Number: "",
    Date: "",
    Currency: "",
    Gender: "",
    Language: "",
    Car: "",
    Price:""
  });
  const [maleIsClicked, setMaleIsClicked] = useState(false);
  const [femaleIsClicked, setFemaleIsClicked] = useState(false);
  const [carClicked, setCarClicked] = useState(false);
  const [noCarClicked, setNoCarClicked] = useState(false);
  const handleCurrencyChange = (event) => {
    const selectedValue = event.target.value;
    setCurrecny(selectedValue);
    setValue(500);
    console.log("Selected option:", selectedValue);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      Price: newValue, // Add the Slider value to the form data
    }));
  };

  const handleGender = (value) => {
    if (value === 1) {
      if (gender === "Male") {
        setMaleIsClicked(false);
        setGender("");

        setFormData((prevFormData) => ({
          ...prevFormData,
          Gender: "",
        }));
      } else {
        setMaleIsClicked(true);
        setFemaleIsClicked(false);
        setGender("Male");
        setFormData((prevFormData) => ({
          ...prevFormData,
          Gender: "Male",
        }));
      }
    } else if (value === 2) {
      if (gender === "Female") {
        setFemaleIsClicked(false);
        setGender("");
        setFormData((prevFormData) => ({
          ...prevFormData,
          Gender: "",
        }));
      } else {
        setGender("Female");
        setFemaleIsClicked(true);
        setMaleIsClicked(false);
        setFormData((prevFormData) => ({
          ...prevFormData,
          Gender: "Female",
        }));
      }
    }
  };
  console.log(femaleIsClicked);

  const handleCar = (value) => {
    if (value === 1) {
      if (car === "Yes") {
        setCarClicked(false);
        setCar("");
        setFormData((prevFormData) => ({
          ...prevFormData,
          Car: "",
        }));
      } else {
        setCarClicked(true);
        setNoCarClicked(false);
        setCar("Yes");
        setFormData((prevFormData) => ({
          ...prevFormData,
          Car: "Yes",
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
          Car: "No",
        }));
      }
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!formData.Number || !formData.Date || !formData.Currency) {
      setShowError(true);
      return;
    }

    setFormData({
      Number: "",
      Date: "",
      Currency: "",
      Gender: "",
      Language: "",
      Car: "",
      Price:""
    });
    setShowError(false);
    console.log(formData);
  };
 
  return (
    <>
      <div className={classes.formImgContainer}>
      <form onSubmit={handleOnSubmit}>
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
              name="Number"
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
              name="Date"
              value={formData.Date}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className={classes.numContainer}>
            <i className={classes.iconContainer}>
              <FaWallet />
            </i>

            <select
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
            </select>
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
                placeholder={gender ? gender : "Accompined by"}
                disabled
                className={classes.inputContainer}
              />
            </div>
            <div className={classes.formButton}>
              <button
                style={{
                  backgroundColor: maleIsClicked ? "aliceblue" : "#072c3d",
                  color: maleIsClicked ? "#072c3d" : "aliceblue",
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
                  backgroundColor: femaleIsClicked ? "aliceblue" : "#072c3d",
                  color: femaleIsClicked ? "#072c3d" : "aliceblue",
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
              name="Language"
              value={formData.Language}
              onChange={handleInputChange}
            >
              <option value="" disabled hidden>
                Spoken Languages
              </option>
              <option value="Ar">Arabic</option>
              <option value="En">English</option>
              <option value="Fr">French</option>
              <option value="SP">Spanish</option>
              <option value="It">Italian</option>
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
                  backgroundColor: carClicked ? "aliceblue" : "#072c3d",
                  color: carClicked ? "#072c3d" : "aliceblue",
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
                  backgroundColor: noCarClicked ? "aliceblue" : "#072c3d",
                  color: noCarClicked ? "#072c3d" : "aliceblue",
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
          <button className={classes.submitButton} type="submit">
            Submit
          </button>
        </div>
      </form>
      <img className={classes.tourImg} src="https://img.freepik.com/free-vector/group-tourists-travelling-with-guide-holding-flag-flat-illustration_74855-18752.jpg?w=1380&t=st=1687267995~exp=1687268595~hmac=ec0d86394ea4c26659587cb41f7d75c2e84cbcdbf8e9acecd9661a3a6b8c6f6c"/>
      </div>
      {showError && <p>Error Please Submit the required fields</p>}
    </>
  );
};
export default TourRequest;

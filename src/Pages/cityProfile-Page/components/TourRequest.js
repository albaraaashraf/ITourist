import classes from "./TourRequest.module.css";
import { useState } from "react";
import {AiTwotoneCalendar,AiFillCar,AiOutlineCheck} from "react-icons/ai"
import {FaWallet,FaTimes} from "react-icons/fa"
import {BsPersonFill,BsGenderFemale,BsGenderMale} from "react-icons/bs"
import {MdOutlineLanguage,MdGroups2} from "react-icons/md"
import { Slider } from "@mui/material";
const TourRequest = () => {
  const [value, setValue] = useState(50);
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
  });
  const handleCurrencyChange = (event) => {
    const selectedValue = event.target.value;
    setCurrecny(selectedValue);
    setValue(50);
    console.log("Selected option:", selectedValue);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const handleGender = (value) => {
    if (value === 1) {
      if (gender === "Male") {
        setGender("");
        setFormData((prevFormData) => ({
          ...prevFormData,
          Gender: "",
        }));
      } else {
        setGender("Male");
        setFormData((prevFormData) => ({
          ...prevFormData,
          Gender: "Male",
        }));
      }
    } else if (value === 2) {
      if (gender === "Female") {
        setGender("");
        setFormData((prevFormData) => ({
          ...prevFormData,
          Gender: "",
        }));
      } else {
        setGender("Female");
        setFormData((prevFormData) => ({
          ...prevFormData,
          Gender: "Female",
        }));
      }
    }
  };

  const handleCar = (value) => {
    if (value === 1) {
      if (car === "Yes") {
        setCar("");
        setFormData((prevFormData) => ({
          ...prevFormData,
          Car: "",
        }));
      } else {
        setCar("Yes");
        setFormData((prevFormData) => ({
          ...prevFormData,
          Car: "Yes",
        }));
      }
    } else if (value === 2) {
      if (car === "No") {
        setCar("");
        setFormData((prevFormData) => ({ ...prevFormData, Car: "" }));
      }
      else{
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
    });
    setShowError(false);
    console.log(formData);
  };
  return (
    <>
       <form onSubmit={handleOnSubmit}>
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
            style={{ width: "15rem", color: "#607d8b" }}
          />

          <p>1000 {currency}</p>
        </div>
        <h3>Preferences (Optional)</h3>
        <div className={classes.numContainer}>
          <i className={classes.iconContainer}>
            <BsPersonFill />
          </i>

          <input
            type="text"
            placeholder={gender ? gender : "Accompined by"}
            disabled
            className={classes.inputContainer}
          />
          <button
            type="button"
            onClick={() => {
              handleGender(1);
            }}
          >
            <BsGenderMale />
          </button>
          <button
            type="button"
            onClick={() => {
              handleGender(2);
            }}
          >
            <BsGenderFemale />
          </button>
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
          <button
            type="button"
            onClick={() => {
              handleCar(1);
            }}
          >
            <AiOutlineCheck />
          </button>
          <button
            type="button"
            onClick={() => {
              handleCar(2);
            }}
          >
            <FaTimes />
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
      {showError && <p>Error Please Submit the required fields</p>}
    </>
  );
};
export default TourRequest;
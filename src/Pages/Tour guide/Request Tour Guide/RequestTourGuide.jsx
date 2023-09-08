import React, { useRef, useState } from "react";

import "./request.css";

import { AiFillCloseCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

export default function RequestTourGuide() {
  const imgAdd =
    "https://cdn.britannica.com/10/126710-050-8E814ED9/building-Suez-Canal-Authority-Port-Said-Egypt.jpg?w=300";

  const titleRef = useRef();
  const genderRef = useRef();
  const carRef = useRef();
  const langRef = useRef();

  const [male, setMale] = useState();

  const [car, setCar] = useState();

  function maleHandler(e) {
    e.preventDefault();
    setMale(true);
    genderRef.current.value = "Male";
    console.log(male);
  }

  function femaleHandler(e) {
    e.preventDefault();
    setMale(false);
    genderRef.current.value = "Female";
    console.log(male);
  }

  function carHandler(e) {
    e.preventDefault();
    setCar(true);
    carRef.current.value = "Yes, i want car";
    console.log(car);
  }

  function notCarHandler(e) {
    e.preventDefault();
    setCar(false);
    carRef.current.value = "No, i don't  want car";
  }

  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <form action="" className="req-proposal">
            <div className="row d-flex flex-column justify-content-end row-gap-3">
              <div className="col d-flex justify-content-end pe-0">
                <AiFillCloseCircle className="close-btn" />
              </div>
              <div className="col d-flex justify-content-start align-items-end ps-0">
                <h2>Primary Options</h2>
              </div>
            </div>

            <div className="row d-flex flex-row justify-content-between align-items-center mt-4">
              <div className="col-6">
                <div className="row d-flex flex-column">
                  <div className="col-md-8">
                    <div className="location  d-flex justify-content-start">
                      <span className="loaction-icon d-flex align-items-center me-1 ">
                        <GoLocation />
                      </span>
                      <span>Port Said,Egypt</span>
                    </div>
                  </div>

                  <div className="col-md-8">
                    <input
                      type="number"
                      name="title"
                      className="input-style"
                      placeholder="indevidual countes"
                      ref={titleRef}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col-5 d-flex justify-content-end justify-content-md-center ">
                <div className="city-image">
                  <img src={imgAdd} alt="the City" />
                </div>
              </div>
            </div>

            <div className="row d-flex flex-column mt-4 row-gap-2">
              <div className="col-lg-7 ">
                <input
                  id="dataOfArrivel"
                  type="date"
                  name="title"
                  className="input-style"
                  required
                />
              </div>

              <div className="col-lg-7 ms-1">
                <div className="input-info-container">
                  <input
                    id="price"
                    type="tel"
                    maxLength={10}
                    className="input-style w-75"
                    placeholder="Budget"
                    pattern="^\d+\d+$"
                    required
                  />
                  <select id="select-currency" className="select-style ms-lg-3">
                    <option value="EGP">EGP</option>
                    <option value="Dollar">Dollar</option>
                    <option value="Euro">Euro</option>
                  </select>
                </div>
              </div>
            </div>

            <div id="Preferences" className="row d-flex flex-column mt-4 p-3">
              <div className="col">
                <h2>Preferences(Optional)</h2>
              </div>

              <div className="col d-flex flex-row justify-content-between p-0 ">
                <div className="col-8">
                  <input
                    type="text"
                    name="guide_gender"
                    placeholder="gender"
                    className="input-style"
                    ref={genderRef}
                    disabled
                    required
                  />
                </div>

                <div className="col-4 d-flex flex-row justify-content-around justify-content-lg-start align-items-center ps-5 ">
                  <div className="col-2 me-4 me-md-3">
                    <button className="gender-btn male" onClick={maleHandler}>
                      <BsGenderMale />
                    </button>
                  </div>
                  <div className="col-2 ms-2">
                    {" "}
                    <button
                      className="gender-btn female"
                      onClick={femaleHandler}
                    >
                      <BsGenderFemale />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-2 p-0 pe-2 ">
                <input
                  type="text"
                  name="spoken_lang"
                  placeholder="spoken language"
                  className="input-style"
                  ref={langRef}
                  required
                />
              </div>

              <div className="col d-flex flex-row justify-content-between mt-2 p-0 pe-2 ">
                <div className="col-8">
                  <input
                    type="text"
                    name="car"
                    placeholder="Car ?"
                    className="input-style"
                    ref={carRef}
                    disabled
                    required
                  />
                </div>
                <div className="col-4 d-flex flex-row justify-content-around justify-content-lg-start align-items-center ps-5 ">
                  <div className="col-2 me-4 me-lg-3 ">
                    <button className="gender-btn" onClick={carHandler}>
                      <TiTick />
                    </button>
                  </div>
                  <div className="col-2 ms-2">
                    {" "}
                    <button className="gender-btn" onClick={notCarHandler}>
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex flex-row justify-content-center mt-2">
              <div className="col-6 d-flex justify-content-center ">
                <button className="submit-btn">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

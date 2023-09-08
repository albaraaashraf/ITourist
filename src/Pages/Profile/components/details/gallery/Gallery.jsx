import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Gallery.css";

import { useUser } from "../../../../../Context/UserContext";

function Gallery() {
  // while rendring

  const { theUser } = useUser();

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handelOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const nextSlide = () => {
    slideNumber === theUser.Imgs.length - 1
      ? setSlideNumber(0)
      : setSlideNumber((prev) => prev + 1);
  };
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(theUser.Imgs.length - 1)
      : setSlideNumber((prev) => prev - 1);
  };

  return (
    <>
      {openModal && (
        <div className="sliderWrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />
          <div className="FullScreenImage">
            <img src={theUser.Imgs[slideNumber]} alt="" />
          </div>
        </div>
      )}

      <div className="container-fluid text-center">
        <div className="container-lg p-3 rounded-3 d-flex flex-row img-container">
          <div className="row g-3" style={{ minHeight: "10rem" }}>
            {theUser.Imgs &&
              theUser.Imgs.map((img, index) => {
                return (
                  <div
                    key={img}
                    className="col-md-1 single"
                    style={{ width: "10rem" }}
                  >
                    <img
                      key={index}
                      src={img}
                      alt=""
                      className="img-fluid h-100"
                      onClick={() => handelOpenModal(index)}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <Link to="/Profile/Gallery/AddImages">
          <button className="btn my-2 addImgbtn">Add Images</button>
        </Link>
      </div>
    </>
  );
}

export default Gallery;

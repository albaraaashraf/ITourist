import "./PlaceCard.css";
import CityDataContext from "../../../../Context/CityDataContext";
import Rating from "@mui/material/Rating";

import { useContext, useEffect, useState } from "react";
const PlaceCard = () => {
  const [value, setValue] = useState(2);
  const storageData=JSON.parse(localStorage.getItem("storedCardData"));

  const { cardData } = useContext(CityDataContext);
  console.log(cardData)
  const aproxDistance = Math.round(storageData.distance * 100) / 100;
  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
  };

  //asynchronous effect to the change of value raiting
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <div id="info__container">
        <div id="info__header">
          <p id="place__header">{storageData.header}</p>
          <p id="place__distance">{aproxDistance}m</p>
        </div>
        <div id="rating__container">
          <Rating
            name="simple-controlled"
            defaultValue={3}
            precision={1}
            style={{ color: "#072c3d" }}
            onChange={handleRatingChange}
          />
        </div>

        <div id="info__par">
          <p>{storageData.info}</p>
          <button className="review__button">Review this place</button>
        </div>
      </div>
    </>
  );
};
export default PlaceCard;

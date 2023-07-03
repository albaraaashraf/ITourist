import "./PlaceImage.css";
import PlaceTags from "./PlaceTags";
import { useContext } from "react";
import CityDataContext from "../../../../Context/CityDataContext";
import { FaDirections } from "react-icons/fa";
const PlaceImage = () => {
  const storageData = JSON.parse(localStorage.getItem("storedCardData"));
  const x = storageData.img;
  console.log(storageData);
  const handleMap = () => {
    window.open(
      `https://www.google.com/maps/@${storageData.lat},${storageData.lon},14z?entry=ttu`,
      "_blank"
    );
  };

  return (
    <>
      <div id="image__container">
        <img id="place__image" src={x} alt="bla bla"></img>
        <div className="tagButton__container">
          <div id="tag__container">
            <PlaceTags></PlaceTags>
          </div>
          <button onClick={handleMap}>
            {" "}
            Directions <FaDirections />
          </button>
        </div>
      </div>
    </>
  );
};
export default PlaceImage;

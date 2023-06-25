import "./PlaceImage.css";
import PlaceTags from "./PlaceTags";
import { useContext } from "react";
import CityDataContext from "../../../../Context/CityDataContext";
const PlaceImage = () => {
  const { cardData } = useContext(CityDataContext);
  const x = cardData.img;
  console.log(x);

  return (
    <>
      <div id="image__container">
        <img id="place__image" src={x} alt="bla bla"></img>
        <div id="tag__container">
          <PlaceTags></PlaceTags>
        </div>
      </div>
    </>
  );
};
export default PlaceImage;

import "./PlaceImage.css";
import PlaceTags from "./PlaceTags";
import { useContext } from "react";
import CityDataContext from "../../../../Context/CityDataContext";
const PlaceImage = () => {
  const { cardData } = useContext(CityDataContext);
  const x = cardData.img;
  console.log(cardData);
const handleMap=()=>{
  window.open(`https://www.google.com/maps/@${cardData.lat},${cardData.lon},14z?entry=ttu`, '_blank');

}

  return (
    <>
      <div id="image__container">
        <img id="place__image" src={x} alt="bla bla"></img>
        <div id="tag__container">
          <PlaceTags></PlaceTags>
          <button onClick={handleMap}>Google maps</button>
        </div>
      </div>
    </>
  );
};
export default PlaceImage;

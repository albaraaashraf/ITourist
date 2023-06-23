import "./PlaceImage.css";
import PlaceTags from "./PlaceTags";
import { useContext } from "react";
import CityDataContext from "../../../../Context/CityDataContext";
import PlaceImageContext from "../../../../Context/PlaceImageContext";
const PlaceImage = () => {
  const { cardData } = useContext(CityDataContext);
  console.log(cardData);
  const{placeImage}=useContext(PlaceImageContext)
  console.log(placeImage);

  return (
    <>
      <div id="image__container">
        <img
          id="place__image"
          src= {`/assets/images/Nearby__images/${placeImage}.jpg`}
          alt="bla bla"
        ></img>
        <div id="tag__container">
          <PlaceTags name={"Monument"}></PlaceTags>
          <PlaceTags name="Sea"></PlaceTags>
          <PlaceTags name="Touring"></PlaceTags>
        </div>
      </div>
    </>
  );
};
export default PlaceImage;

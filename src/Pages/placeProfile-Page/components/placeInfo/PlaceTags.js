import "./PlaceTags.css";
import CityDataContext from "../../../../Context/CityDataContext";
import { useContext } from "react";
const PlaceTags = (props) => {
  const { cardData } = useContext(CityDataContext);
  const storageData=JSON.parse(localStorage.getItem("storedCardData"));

  // console.log(cardData.categories)
  const imageTags = storageData.categories;
  imageTags.map((item) => {
    console.log(item);
  });
  const name = props.name;
  return (
    <>
      {imageTags.map((item) => {
        return <div id="image__tag">{item}</div>;
      })}
      {/* <div id='image__tag'>
    {name}
    </div> */}
    </>
  );
};
export default PlaceTags;

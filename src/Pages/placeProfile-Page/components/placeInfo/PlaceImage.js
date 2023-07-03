import "./PlaceImage.css";
import PlaceTags from "./PlaceTags";

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
        <div id="tag__container">
          <PlaceTags></PlaceTags>
          <button onClick={handleMap}>Google maps</button>
        </div>
      </div>
    </>
  );
};
export default PlaceImage;

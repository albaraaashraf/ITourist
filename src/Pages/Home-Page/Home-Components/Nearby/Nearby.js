import "./Nearby.css";
import NearbySlider from "./NearbyPlaces/NearbySlider";

const Nearby = () => {
  return (
    <>
      <div className="slick1__container">
        <p className="popular__header">Nearby Places</p>

        <div className="slider__container">
          <NearbySlider />
        </div>
      </div>
    </>
  );
};
export default Nearby;

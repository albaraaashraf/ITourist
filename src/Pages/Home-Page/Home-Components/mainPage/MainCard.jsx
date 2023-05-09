// Icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

// Css
import "./Css/MainCard.css";

const MainCard = (props) => {
  return (
    <>
      <div className="card__container">
        <div className="cardData">
          <div className="first__column">
            <div className="fa__container">
              <HiOutlineLocationMarker />
              <p>Your Current Location</p>
            </div>

            <p id="location__header">Cairo</p>
          </div>
          <div className="sec__column">
            <div className="fa__container">
              <HiMagnifyingGlassPlus />
              <p>Explore another places</p>
            </div>
            <input placeholder="Type Here"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;

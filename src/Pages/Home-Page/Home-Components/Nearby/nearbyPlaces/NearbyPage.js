import Nearby from "../Nearby";
import nearby__places from "./nearbyPlaces";

import "./NearbyPage.css";

const NearbyPage = () => {
  return (
    <>
      <p id="nearbyHeader"> Nearby Places</p>

      <div className="nearby__display">
        <div id="nearby__items">
          <Nearby
            image={nearby__places[3].image}
            name={nearby__places[3].name}
            id={nearby__places[3].id}
          ></Nearby>
          <Nearby
            image={nearby__places[1].image}
            name={nearby__places[1].name}
            id={nearby__places[1].id}
          ></Nearby>
          <Nearby
            image={nearby__places[2].image}
            name={nearby__places[2].name}
            id={nearby__places[2].id}
          ></Nearby>
          <Nearby
            image={nearby__places[3].image}
            name={nearby__places[3].name}
            id={nearby__places[3].id}
          ></Nearby>
          <Nearby
            image={nearby__places[4].image}
            name={nearby__places[4].name}
            id={nearby__places[4].id}
          ></Nearby>
          <Nearby
            image={nearby__places[4].image}
            name={nearby__places[4].name}
            id={nearby__places[4].id}
          ></Nearby>
          <Nearby
            image={nearby__places[2].image}
            name={nearby__places[2].name}
            id={nearby__places[2].id}
          ></Nearby>
          <Nearby
            image={nearby__places[1].image}
            name={nearby__places[1].name}
            id={nearby__places[1].id}
          ></Nearby>
        </div>
      </div>
      <div className="nearbyButton">See More</div>
    </>
  );
};
export default NearbyPage;

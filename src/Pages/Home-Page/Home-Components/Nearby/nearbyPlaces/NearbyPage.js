import Nearby from "../Nearby";
import "./NearbyPage.css";
import { useState } from "react";
import { useEffect } from "react";

const NearbyPage = () => {
  const [takeAway, setTakeAway] = useState([]);
  // `https://api.tomtom.com/search/2/poiSearch/hotel%20food.json?limit=100&lat=${lat}&lon=${lon}&radius=5000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  // const lat=31.263665;
  // const lon=32.310398;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);
  console.log(lon, lat)
  async function fetchNearbyHandler() {
    const response =
    await fetch(`https://api.tomtom.com/search/2/nearbySearch/.json?lat=${lat}&lon=${lon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H
  `);

    const data = await response.json();

    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.streetName,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
      };
    });
    setTakeAway(transformedData);
    console.log(data.results);
  }
  useEffect(() => {
    fetchNearbyHandler();
  }, [lon ,lat]);
  const slicedArray = takeAway.slice(0, 8);
  let x = 0;
  return (
    <>
      <p id="nearbyHeader">Nearby Places</p>

      { <div className="nearby__display">
        { slicedArray.map((takeAwayData) => {
          x = x + 1;
          console.log("hello");

          return (
            <Nearby name={takeAwayData.header} id={takeAwayData.id}></Nearby>
          );
        })}
      </div>}
      <div className="nearbyButton">See More</div>
    </>
  );
};
export default NearbyPage;

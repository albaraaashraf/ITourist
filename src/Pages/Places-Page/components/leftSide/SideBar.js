import "./SideBar.css";
import { AiFillFilter } from "react-icons/ai";
import { useContext, useState } from "react";
import CityContext from "../../../../Context/CityContext";
const SideBar = (props) => {
  const{lon}=useContext(CityContext);
  const{lat}=useContext(CityContext)

  const [beachPlaces, setBeachPlaces] = useState([]);
  const [museumPlaces, setMuseumPlaces] = useState([]);
  const [resturantPlaces, setResturantPlaces] = useState([]);
  const [historicPlaces, setHistoricPlaces] = useState([]);
  const [marketPlaces, setMarketPlaces] = useState([]);
  const [gardenPlaces,setGardenPlaces]=useState([]);
    // const lat = 31.2001;
    // const lon = 29.9187;
    console.log(lon,lat)
  async function fetchResturantPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/Resturant.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&language=ar&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
      );
    const data = await response.json();
    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.streetName,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        info:
          takeAwayData.address.municipalitySubdivision +
          "  ,   " +
          takeAwayData.address.municipality,
      };
    });
    setResturantPlaces(transformedData);
    props.onShowResturant(transformedData);
  }

  async function fetchMuseumPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/Museum.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&language=ar&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
    );
    const data = await response.json();
    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.streetName,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        info:
          takeAwayData.address.municipalitySubdivision +
          "  ,   " +
          takeAwayData.address.municipality,
      };
    });
    setMuseumPlaces(transformedData);
    props.onShowMuseum(transformedData);
  }

  async function fetchBeachPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/beach.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&language=ar&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
    );

    const data = await response.json();

    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.streetName,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        info:
          takeAwayData.address.municipalitySubdivision +
          "  ,   " +
          takeAwayData.address.municipality,
      };
    });

    setBeachPlaces(transformedData);
    props.onShowBeach(transformedData);
  }

  async function fetchHistoricPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/historic.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&language=ar&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
    );

    const data = await response.json();

    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.streetName,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        info:
          takeAwayData.address.municipalitySubdivision +
          "  ,   " +
          takeAwayData.address.municipality,
      };
    });

    setHistoricPlaces(transformedData);
    props.onShowHistoric(transformedData);
  }
  async function fetchMarketPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/market.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&language=ar&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
    );

    const data = await response.json();

    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.streetName,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        info:
          takeAwayData.address.municipalitySubdivision +
          "  ,   " +
          takeAwayData.address.municipality,
      };
    });

    setMarketPlaces(transformedData);
    props.onShowMarket(transformedData);
  }
  async function fetchGardenPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/Park%26Recreation%20Area.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&language=ar&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
      );
    const data = await response.json();
    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.streetName,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        info:
          takeAwayData.address.municipalitySubdivision +
          "  ,   " +
          takeAwayData.address.municipality,
      };
    });
    setGardenPlaces(transformedData);
    props.onShowGarden(transformedData);
  }


  return (
    <>
      <div id="sidebar__container">
        <div id="firstRow">
          <p>Filter</p>
          <AiFillFilter></AiFillFilter>
        </div>
        <div className="hrContainer">
          <hr></hr>
        </div>
        <div id="secRow">
          <p className="filterHeader">Raiting</p>
          <div className="filterItems">
            <p>One Star</p>
            <p>Two Stars</p>
            <p>Three Stars</p>
            <p>Four Stars</p>
            <p>Five Stars</p>
          </div>
        </div>
        <div className="hrContainer">
          <hr></hr>
        </div>
        <div id="thirdRow">
          <p className="filterHeader">Distance</p>
          <div className="filterItems">
            <p>Less than 1km</p>
            <p>Less than 3km</p>
            <p>Less than 5km</p>
            <p>Less than 7km</p>
            <p>More than 7km</p>
          </div>
        </div>
        <div className="hrContainer">
          <hr></hr>
        </div>
        <div id="fourthRow">
          <p onClick={fetchGardenPlaces}>Gardens</p>
          <p onClick={fetchResturantPlaces}>Resturants</p>
          <p onClick={fetchMuseumPlaces}>Museums</p>
          <p onClick={fetchHistoricPlaces}>Historic Buildings</p>
          <p onClick={fetchBeachPlaces}>Beaches</p>
          <p onClick={fetchMarketPlaces}>Markets</p>
        </div>
      </div>

      <div id="button__container">
        <div className="searchButton">Search</div>
      </div>
    </>
  );
};
export default SideBar;

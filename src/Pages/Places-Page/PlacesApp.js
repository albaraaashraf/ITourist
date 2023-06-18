import React, { useContext, useEffect } from "react";
// import Navbar from "./components/Navbar";
import SideBar from "./components/leftSide/SideBar";
import PlaceCard from "./components/rightSide/PlaceCard";
import { useState } from "react";
import "./PlacesApp.css";
// import Footer from "./components/footer/Footer";
import CityContext from "../../Context/CityContext";
import CityDataContext from "../../Context/CityDataContext";

function PlacesApp() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState([]);
  const [allData, setAllData] = useState([]);
  const { lon } = useContext(CityContext);
  const { lat } = useContext(CityContext);

  const { categoryName } = useContext(CityDataContext);

  console.log(displayData.length);
  console.log(categoryName);
  async function fetchAllPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/resturant%2Fmuseum%2Fbeach%2Fmarket%2Fhistoric.json?limit=1000&lat=${lat}&lon=${lon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
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
    setAllData(transformedData);
    // setResturantPlaces(transformedData);
    // props.onShowResturant(transformedData);
  }
  async function fetchCategoryPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/${categoryName}.json?limit=1000&lat=${lat}&lon=${lon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
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
    setAllData(transformedData);
    // setResturantPlaces(transformedData);
    // props.onShowResturant(transformedData);
  }
  useEffect(() => {
    console.log(categoryName);
    if (categoryName) {
      fetchCategoryPlaces();
    } else {
      fetchAllPlaces();
    }
  }, []);
  console.log(allData);
  const showGardenHandler = (garden) => {
    setDisplayData(garden);
    setCurrentPage(1);
    console.log(garden);
  };
  const showBeachHandler = (beach) => {
    setDisplayData(beach);
    setCurrentPage(1);
    console.log(beach);
  };
  const showMuseumHandler = (museum) => {
    setDisplayData(museum);
    setCurrentPage(1);
    console.log(museum);
  };
  const showResturantHandler = (resturant) => {
    setDisplayData(resturant);
    setCurrentPage(1);
    console.log(resturant);
  };
  const showHistoricHandler = (historic) => {
    setDisplayData(historic);
    setCurrentPage(1);
    console.log(historic);
  };
  const showMarketHandler = (market) => {
    setDisplayData(market);
    setCurrentPage(1);
    console.log(market);
  };

  return (
    <>
      <div id="overAll__container">
        <div id="leftSide__container">
          <SideBar
            onShowGarden={showGardenHandler}
            onShowBeach={showBeachHandler}
            onShowMuseum={showMuseumHandler}
            onShowResturant={showResturantHandler}
            onShowHistoric={showHistoricHandler}
            onShowMarket={showMarketHandler}
          ></SideBar>
        </div>
        {
          <div id="rightSide__container">
            {displayData.length > 0 ? (
              <PlaceCard data={displayData} page={currentPage}></PlaceCard>
            ) : (
              <PlaceCard data={allData} page={currentPage}></PlaceCard>
            )}
          </div>
        }
      </div>
    </>
  );
}

export default PlacesApp;

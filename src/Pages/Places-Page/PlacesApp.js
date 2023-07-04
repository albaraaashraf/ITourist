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
  const [noPlaces, setNoPlaces] = useState(false);
  const [allData, setAllData] = useState([]);
  const { lon } = useContext(CityContext);
  const { lat } = useContext(CityContext);
  // const{categoryClicked}=useContext(CityContext);
  const { categoryName } = useContext(CityDataContext);
  // console.log(categoryClicked);
  console.log(displayData.length);
  console.log(categoryName);

  //items from the local storage
  const storedLat = localStorage.getItem("lat");
  const storedLon = localStorage.getItem("lon");
  const storedCityLat = localStorage.getItem("searchedCityLat");
  const storedCityLon = localStorage.getItem("searchedCityLon");
  const storedCategory = localStorage.getItem("category");
  const popularPlaceName = localStorage.getItem("popularPlaceClicked");
  const popularPlaceLat = localStorage.getItem("popularLat");
  const popularPlaceLon = localStorage.getItem("popularLon");

  console.log(storedCategory);
  console.log(storedCityLat, storedCityLon);
  console.log(storedLat, storedLon);
  useEffect(() => {
    async function fetchAllPlaces() {
      const response = await fetch(
        !popularPlaceName
          ? `https://api.tomtom.com/search/2/poiSearch/Restaurant%2Fmuseum%2Fbeach%2Fmarket%2Fhistoric.json?limit=1000&lat=${storedCityLat}&lon=${storedCityLon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
          : `https://api.tomtom.com/search/2/poiSearch/Restaurant%2Fmuseum%2Fbeach%2Fmarket%2Fhistoric.json?limit=1000&lat=${popularPlaceLat}&lon=${popularPlaceLon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
      );
      const data = await response.json();
      const transformedData = data.results.map((takeAwayData) => {
        let img = "";
        switch (takeAwayData.poi.classifications[0].code) {
          case "RESTAURANT":
            img = "/assets/images/Category__images/Restaurant.png";
            break;
          case "BEACH":
            img = "/assets/images/Category__images/Beach.png";
            break;
          case "PARK_RECREATION_AREA":
            img = "/assets/images/Category__images/Garden.png";
            break;
          case "MARKET":
          case "SHOPPING_CENTER":
          case "SHOP":
            img = "/assets/images/Category__images/Market.png";
            break;
          case "IMPORTANT_TOURIST_ATTRACTION":
            img = "/assets/images/Category__images/Historic.png";
            break;
          case "MUSEUM":
            img = "/assets/images/Category__images/Museum.png";
            break;
          default:
            break;
        }
        return {
          id: takeAwayData.id,
          header: takeAwayData.poi.name,
          street: takeAwayData.address.freeformAddress,
          city: takeAwayData.address.localName,
          type: takeAwayData.poi.categories[0],
          distance: takeAwayData.dist,
          class: takeAwayData.poi.classifications[0].code,
          categories: takeAwayData.poi.categories,
          img: img,
          lon: takeAwayData.position.lon,
          lat: takeAwayData.position.lat,
          info:
            takeAwayData.address.municipalitySubdivision +
            "  ,   " +
            takeAwayData.address.municipality,
        };
      });
      setAllData(transformedData);
      console.log(transformedData);
      // setRestaurantPlaces(transformedData);
      // props.onShowRestaurant(transformedData);
    }
    async function fetchCategoryPlaces() {
      const response = await fetch(
        `https://api.tomtom.com/search/2/poiSearch/${storedCategory}.json?limit=1000&lat=${storedLat}&lon=${storedLon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
      );
      const data = await response.json();
      const transformedData = data.results.map((takeAwayData) => {
        let img = "";
        switch (storedCategory) {
          case "Resturants":
            img = "/assets/images/Category__images/Restaurant.png";
            break;
          case "Coffe":
            img = "/assets/images/Category__images/Coffeshop.png";
            break;
          case "Cinema":
            img = "/assets/images/Category__images/Cinema.png";
            break;
          case "Parks&Recreation":
            img = "/assets/images/Category__images/Garden.png";
            break;
          case "Hospital":
            img = "/assets/images/Category__images/Hospital.png";
            break;
          case "Museum":
            img = "/assets/images/Category__images/Museum.png";
            break;
          case "Points of interest":
            img = "/assets/images/Category__images/Historic.png";
            break;
          case "Mall":
            img = "/assets/images/Category__images/Mall.png";
            break;

          default:
            break;
        }
        return {
          id: takeAwayData.id,
          header: takeAwayData.poi.name,
          street: takeAwayData.address.freeformAddress,
          city: takeAwayData.address.localName,
          type: takeAwayData.poi.categories[0],
          distance: takeAwayData.dist,
          class: takeAwayData.poi.classifications[0].code,
          categories: takeAwayData.poi.categories,
          img: img,
          lon: takeAwayData.position.lon,
          lat: takeAwayData.position.lat,
          info:
            takeAwayData.address.municipalitySubdivision +
            "  ,   " +
            takeAwayData.address.municipality,
        };
      });
      setAllData(transformedData);
      console.log(transformedData);
      // setRestaurantPlaces(transformedData);
      // props.onShowRestaurant(transformedData);
    }
    if (storedCategory) {
      fetchCategoryPlaces();
    } else {
      fetchAllPlaces();
    }
  }, [
    storedCategory,
    storedLat,
    storedLon,
    storedCityLat,
    storedCityLon,
    popularPlaceLat,
    popularPlaceLon,
    popularPlaceName,
  ]);
  const showGardenHandler = (garden) => {
    if (garden.length > 0) {
      setNoPlaces(false);
      setDisplayData(garden);
      setCurrentPage(1);
      console.log(garden);
    } else {
      setNoPlaces(true);
    }
  };
  const showBeachHandler = (beach) => {
    if (beach.length > 0) {
      setDisplayData(beach);
      setNoPlaces(false);
      setCurrentPage(1);
      console.log(beach);
    } else {
      setNoPlaces(true);
    }
  };
  const showMuseumHandler = (museum) => {
    if (museum.length > 0) {
      setNoPlaces(false);
      setDisplayData(museum);
      setCurrentPage(1);
      console.log(museum);
    } else {
      setNoPlaces(true);
    }
  };
  const showRestaurantHandler = (Restaurant) => {
    if (Restaurant.length > 0) {
      setNoPlaces(false);
      setDisplayData(Restaurant);
      setCurrentPage(1);
      console.log(Restaurant);
    } else {
      setNoPlaces(true);
    }
  };
  const showHistoricHandler = (historic) => {
    if (historic.length > 0) {
      setNoPlaces(false);
      setDisplayData(historic);
      setCurrentPage(1);
      console.log(historic);
    } else {
      setNoPlaces(true);
    }
  };
  const showMarketHandler = (market) => {
    if (market.length > 0) {
      setNoPlaces(false);
      setDisplayData(market);
      setCurrentPage(1);
      console.log(market);
    } else {
      setNoPlaces(true);
    }
  };

  return (
    <>
      <div id="overAll__container">
        <div id="leftSide__container">
          <SideBar
            onShowGarden={showGardenHandler}
            onShowBeach={showBeachHandler}
            onShowMuseum={showMuseumHandler}
            onShowRestaurant={showRestaurantHandler}
            onShowHistoric={showHistoricHandler}
            onShowMarket={showMarketHandler}
          ></SideBar>
        </div>
        {
          <div id="rightSide__container">
            {noPlaces ? (
              <div className="noPlaceError">
                <p>No Places Here ...</p>
                <img src="/assets/images/404 error.png" alt="No Places" />
              </div>
            ) : displayData.length > 0 ? (
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

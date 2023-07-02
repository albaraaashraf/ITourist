// Components
// import MainCard from "./Home-Components/mainPage/MainCard";
// import MainImage from "./Home-Components/mainPage/MainImage";
import Nearby from "./Home-Components/Popular/Nearby";
import PopularPage from "./Home-Components/Nearby/nearbyPlaces/PopularPage";
import CategoryPage from "./Home-Components/Category/CategoryPage";

//CSS
import "./Home.css";
import HomeContainer from "./Home-Components/mainPage/HomeContainer";
import TourStepsPage from "./Home-Components/Tour Steps/TourStepsPage";

//Contexts

import CityNameContext from "../../Context/CityNameContext";

//states
import { useState } from "react";

const Home = () => {
  const [cityName, setCityName] = useState();
  const [categoryLon, setCategoryLon] = useState();
  const [categoryLat, setCategoryLat] = useState();
  const keysToRemove = [
    // "storedCardData",
    // "searchedCountryId",
    // "searchedCityName",
    // "searchedCityLat",
    // "searchedCityLon",
    // "searchedCityLat",
    // "searchedCityId",
    // "category",
    // "popularPlaceClicked",
    // "popularLat",
    // "popularLon"
  ]; // Array of keys to remove
  keysToRemove.forEach((key) => {
    localStorage.removeItem(key);
  });

  return (
    <>
      <CityNameContext.Provider
        value={{
          cityName,
          setCityName,
          categoryLat,
          setCategoryLat,
          categoryLon,
          setCategoryLon,
        }}
      >
        <div className="home__container">
          <HomeContainer />
        </div>

        <div className="secondPage__container">
          <Nearby />
        </div>

        <div className="thirdPage__container">
          <PopularPage />
        </div>

        <div className="thirdPage__container">
          <TourStepsPage />
        </div>
        <div className="fourthPage__container">
          <CategoryPage />
        </div>
      </CityNameContext.Provider>
    </>
  );
};
export default Home;

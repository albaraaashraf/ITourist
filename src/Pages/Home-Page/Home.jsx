// Components
// import MainCard from "./Home-Components/mainPage/MainCard";
// import MainImage from "./Home-Components/mainPage/MainImage";
import Popular from "./Home-Components/Popular/Popular";
import NearbyPage from "./Home-Components/Nearby/nearbyPlaces/NearbyPage";
import CategoryPage from "./Home-Components/Category/CategoryPage";
// import Footer from "./Home-Components/Footer/Footer";

// tool Component
import TopScreenButton from "../../components/ToolOnPage/TopScreenButton";

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

  return (
//     <>
// <<<<<<< new-branch
//       <CityNameContext.Provider
//         value={{
//           cityName,
//           setCityName,
//           categoryLat,
//           setCategoryLat,
//           categoryLon,
//           setCategoryLon,
//         }}
//       >
//         <div className="home__container">
//           <HomeContainer></HomeContainer>
//         </div>
// =======
//       <div className="home__container">
//         <HomeContainer></HomeContainer>
//       </div>
// >>>>>>> main

        <div className="secondPage__container">
          <Popular />
        </div>

        <div className="thirdPage__container">
          <NearbyPage />
        </div>
        <div className="thirdPage__container">
          <TourStepsPage />
        </div>
        <div className="fourthPage__container">
          <CategoryPage />
        </div>

// <<<<<<< new-branch
//         <div className="footer__container">
//           <Footer />
//         </div>
//         <TopScreenButton />
//       </CityNameContext.Provider>
// =======
//       <TopScreenButton />
// >>>>>>> main
    </>
  );
};
export default Home;

// Components
import MainCard from "./Home-Components/mainPage/MainCard";
import MainImage from "./Home-Components/mainPage/MainImage";

import Popular from "./Home-Components/Popular/Popular";
import NearbyPage from "./Home-Components/Nearby/nearbyPlaces/NearbyPage";
import CategoryPage from "./Home-Components/Category/CategoryPage";
import Footer from "./Home-Components/Footer/Footer";

// tool Component
import TopScreenButton from "../../components/ToolOnPage/TopScreenButton";

//CSS
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home__container">
        <div className="overAll__container">
          <MainImage />
          <MainCard />
        </div>
      </div>

      <div className="secondPage__container">
        <Popular />
      </div>

      <div className="thirdPage__container">
        <NearbyPage />
      </div>

      <div className="fourthPage__container">
        <CategoryPage />
      </div>

      <div className="footer__container">
        <Footer />
      </div>
      <TopScreenButton />
    </>
  );
};
export default Home;

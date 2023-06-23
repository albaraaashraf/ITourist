import "./SideBar.css";
import { AiFillFilter } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import CityContext from "../../../../Context/CityContext";
import { useNavigate } from "react-router-dom";
const SideBar = (props) => {
  const { cityId } = useContext(CityContext);
  const { lon } = useContext(CityContext);
  const { lat } = useContext(CityContext);
  const { cityName } = useContext(CityContext);
  const navigate = useNavigate();
  const [filterRes, setFilterRes] = useState(false);
  const [beachPlaces, setBeachPlaces] = useState([]);
  const [museumPlaces, setMuseumPlaces] = useState([]);
  const [RestaurantPlaces, setRestaurantPlaces] = useState([]);
  const [historicPlaces, setHistoricPlaces] = useState([]);
  const [marketPlaces, setMarketPlaces] = useState([]);
  const [gardenPlaces, setGardenPlaces] = useState([]);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );
  const [mobileFilterClicked, setMobileFilterClicked] = useState(false);

  // Function to handle the category click event
  const handleCategoryClick = async (category) => {
    switch (category) {
      case "Gardens":
        await fetchGardenPlaces();
        if (isMobile) {
          setFilterRes((prevFilterRes) => !prevFilterRes);
          setMobileFilterClicked((prevFilterRes) => !prevFilterRes);
        }
        break;
      case "Restaurants":
        await fetchRestaurantPlaces();
        if (isMobile) {
          setFilterRes((prevFilterRes) => !prevFilterRes);
          setMobileFilterClicked((prevFilterRes) => !prevFilterRes);
        }
        break;
      case "Museums":
        await fetchMuseumPlaces();
        if (isMobile) {
          setFilterRes((prevFilterRes) => !prevFilterRes);
          setMobileFilterClicked((prevFilterRes) => !prevFilterRes);
        }
        break;
      case "Historic Buildings":
        await fetchHistoricPlaces();
        if (isMobile) {
          setFilterRes((prevFilterRes) => !prevFilterRes);
          setMobileFilterClicked((prevFilterRes) => !prevFilterRes);
        }
        break;
      case "Beaches":
        await fetchBeachPlaces();
        if (isMobile) {
          setFilterRes((prevFilterRes) => !prevFilterRes);
          setMobileFilterClicked((prevFilterRes) => !prevFilterRes);
        }
        break;
      case "Markets":
        await fetchMarketPlaces();
        if (isMobile) {
          setFilterRes((prevFilterRes) => !prevFilterRes);
          setMobileFilterClicked((prevFilterRes) => !prevFilterRes);
        }
        break;
      default:
        break;
    }

    // Updating the URL path with the selected category
    navigate(`/CityProfile/${cityId}/Places/${category.toLowerCase()}`);
  };
  async function fetchRestaurantPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/Restaurant.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
    );
    const data = await response.json();
    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.freeformAddress,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        class: takeAwayData.poi.classifications[0].code,
        categories: takeAwayData.poi.categories, 
        info:
          takeAwayData.address.municipalitySubdivision +
          "  ,   " +
          takeAwayData.address.municipality,
      };
    });
    const filteredData = transformedData.filter((obj) => obj.class === "RESTAURANT");
    setRestaurantPlaces(filteredData);
    props.onShowRestaurant(filteredData);
  }

  async function fetchMuseumPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/Museum.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
    );
    const data = await response.json();
    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.freeformAddress,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        class: takeAwayData.poi.classifications[0].code,
        categories: takeAwayData.poi.categories, 


        info:
          takeAwayData.address.municipalitySubdivision +
          "  ,   " +
          takeAwayData.address.municipality,
      };
    });
    const filteredData = transformedData.filter((obj) => obj.class === "MUSEUM");

    setMuseumPlaces(filteredData);
    props.onShowMuseum(filteredData);
  }

  async function fetchBeachPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/beach.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
    );

    const data = await response.json();

    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.freeformAddress,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        class: takeAwayData.poi.classifications[0].code,
        categories: takeAwayData.poi.categories, 


        info:
          takeAwayData.address.municipalitySubdivision +
          "  ,   " +
          takeAwayData.address.municipality,
      };
    });
    const filteredData = transformedData.filter((obj) => obj.class === "BEACH");


    setBeachPlaces(filteredData);
    props.onShowBeach(filteredData);
  }

  async function fetchHistoricPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/tourist attraction.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
    );

    const data = await response.json();

    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.freeformAddress,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        class: takeAwayData.poi.classifications[0].code,
        categories: takeAwayData.poi.categories, 


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
      `https://api.tomtom.com/search/2/poiSearch/market.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
    );

    const data = await response.json();

    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.freeformAddress,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        class: takeAwayData.poi.classifications[0].code,
        categories: takeAwayData.poi.categories, 


        info:
          takeAwayData.address.municipalitySubdivision +
          "  ,   " +
          takeAwayData.address.municipality,
      };
    });
    const filteredData = transformedData.filter((obj) => obj.type === "market");

    setMarketPlaces(filteredData);
    props.onShowMarket(filteredData);
  }
  async function fetchGardenPlaces() {
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiSearch/Park%26Recreation%20Area.json?limit=100&lat=${lat}&lon=${lon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
    );
    const data = await response.json();
    const transformedData = data.results.map((takeAwayData) => {
      return {
        id: takeAwayData.id,
        header: takeAwayData.poi.name,
        street: takeAwayData.address.freeformAddress,
        city: takeAwayData.address.localName,
        type: takeAwayData.poi.categories[0],
        distance: takeAwayData.dist,
        class: takeAwayData.poi.classifications[0].code,
        categories: takeAwayData.poi.categories, 


        info:
          takeAwayData.address.municipalitySubdivision +
          "  ,   " +
          takeAwayData.address.municipality,
      };
    });
    console.log(transformedData);
    setGardenPlaces(transformedData);
    props.onShowGarden(transformedData);
  }
  const ShowMobileFilterMenu = () => {
    setMobileFilterClicked((prevFilterClick) => !prevFilterClick);
    console.log("mobile filter menu");
  };
  const showFilterHandler = () => {
    setFilterRes((prevFilterRes) => !prevFilterRes);
    console.log(filterRes);
    console.log("filter is clicked");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
      if (window.innerWidth >= 700) {
        setMobileFilterClicked((prevFilterRes) => !prevFilterRes);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isMobile) console.log(isMobile);
  }, [isMobile]);

  return (
    <>
      <div id="sidebar__container">
        <div className={filterRes ? "responsiveFilter" : null} id="firstRow">
          <p
            className="mobileFilterText"
            onClick={
              isMobile
                ? () => {
                    showFilterHandler();
                    ShowMobileFilterMenu();
                  }
                : null
            }
          >
            Filter
          </p>
          <AiFillFilter
            className="mobileFilterText"
            oonClick={
              isMobile
                ? () => {
                    showFilterHandler();
                    ShowMobileFilterMenu();
                  }
                : null
            }
          ></AiFillFilter>
          {mobileFilterClicked && (
            <div id="mobileFilterMenu">
              <p onClick={() => handleCategoryClick("Gardens")}>Gardens</p>
              <p onClick={() => handleCategoryClick("Restaurants")}>
                Restaurants
              </p>
              <p onClick={() => handleCategoryClick("Museums")}>Museums</p>
              <p onClick={() => handleCategoryClick("Historic Buildings")}>
                Historic Buildings
              </p>
              <p onClick={() => handleCategoryClick("Beaches")}>Beaches</p>
              <p onClick={() => handleCategoryClick("Markets")}>Markets</p>
            </div>
          )}
        </div>
        <div className="hrContainer">
          <hr></hr>
        </div>

        {
          <div id="fourthRow">
            <p onClick={() => handleCategoryClick("Gardens")}>Gardens</p>
            <p onClick={() => handleCategoryClick("Restaurants")}>
              Restaurants
            </p>
            <p onClick={() => handleCategoryClick("Museums")}>Museums</p>
            <p onClick={() => handleCategoryClick("Historic Buildings")}>
              Historic Buildings
            </p>
            <p onClick={() => handleCategoryClick("Beaches")}>Beaches</p>
            <p onClick={() => handleCategoryClick("Markets")}>Markets</p>
          </div>
        }
      </div>
    </>
  );
};
export default SideBar;

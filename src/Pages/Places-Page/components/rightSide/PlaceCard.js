import { useState, useEffect, useContext } from "react";
import { ImLocation2 } from "react-icons/im";
import "./PlaceCard.css";
import { useNavigate } from "react-router-dom";
import CityDataContext from "../../../../Context/CityDataContext";
import PlaceImageContext from "../../../../Context/PlaceImageContext";
const PlaceCard = (props) => {
  const { setCardData } = useContext(CityDataContext);
  const { setPlaceImage } = useContext(PlaceImageContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [pageRange, setPageRange] = useState([]); // starting page range as empty array
  const [placeImg, setPlaceImg] = useState("Resturant");
  const myArray = [{ type: "market" }, { type: "shop" }, { type: "res" }];

  if (myArray.every((obj) => obj.type === "market" || obj.type === "shop")) {
    console.log("hello world");
  } else {
    console.log("not hello");
  }
  const fetchedData = props.data;
  const displayPlaceName = fetchedData.map((item) => item.header);

  useEffect(() => {
    // complete the remaining cases with the remaining images , museums historic markets and hospitals and more

    if ((
      fetchedData.every((item) => item.class.includes("BEACH"))
    )) {
      setPlaceImg("Beach");
      //using the context to pass the image value to another page
      setPlaceImage("Beach");
    } else if (
      fetchedData.every((item) =>
        item.class.toLowerCase().includes("restaurant")
      ) 
    ) {
      setPlaceImg("Restaurant");
      //using the context to pass the image value to another page
      setPlaceImage("Restaurant");
    } else if (
      fetchedData.some((item) => item.type.toLowerCase().includes("café/pub"))
    ) {
      setPlaceImg("Coffeshop");
      //using the context to pass the image value to another page
      setPlaceImage("Coffeshop");
    } else if (
      fetchedData.every((item) => item.class.includes("PARK_RECREATION_AREA"))
    ) {
      setPlaceImage("Garden");
      //using the context to pass the image value to another page

      setPlaceImg("Garden");
    } else if (
      fetchedData.every(
        (obj) =>
          obj.class.toLowerCase() === "market" ||
          obj.class.toLowerCase() === "shop" 
      )
    ) {
      console.log("market");
      setPlaceImage("Market");
      //using the context to pass the image value to another page

      setPlaceImg("Market");
    } else if (
      fetchedData.every(
        (obj) =>
          obj.class === "IMPORTANT_TOURIST_ATTRACTION" 
      )
    ) {
      console.log("historic");
      setPlaceImage("Historic");
      //using the context to pass the image value to another page

      setPlaceImg("Historic");
      //"IMPORTANT_TOURIST_ATTRACTION"
    }

    else if (
      fetchedData.every(
        (obj) =>
          obj.class === "MUSEUM" 
      )
    ) {
      console.log("Museum");
      setPlaceImage("Museum");
      //using the context to pass the image value to another page

      setPlaceImg("Museum");
      //"IMPORTANT_TOURIST_ATTRACTION"
    }
    else {
      console.log("not parks nor resturants");
      setPlaceImg("1");
      //using the context to pass the image value to another page
      setPlaceImage("1");
    }
  }, [displayPlaceName, fetchedData, setPlaceImage]);

  // Define the scrollToTop function inside the component
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add a useEffect hook that scrolls to the top of the page whenever the currentPage changes
  useEffect(() => {
    scrollToTop();
  }, [currentPage]);
  // Update the page range based on the number of pages received from the API
  useEffect(() => {
    const totalPages = Math.ceil(fetchedData.length / itemsPerPage);
    const maxPages = 5;
    const startPage = 1;
    let endPage = Math.min(totalPages, maxPages);

    setPageRange([startPage, endPage]);
  }, [fetchedData.length, itemsPerPage]);
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    updatePageRange(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    updatePageRange(currentPage - 1);
  };
  const updatePageRange = (page) => {
    const totalPages = Math.ceil(fetchedData.length / itemsPerPage);
    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(startPage + 4, totalPages);
    startPage = Math.max(1, endPage - 4);

    setPageRange([startPage, endPage]);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const finalItems = fetchedData.slice(indexOfFirstItem, indexOfLastItem);

  const isLastPage = indexOfLastItem >= fetchedData.length;
  const isFirstPage = indexOfLastItem === itemsPerPage;
  const discoverClickHandler = (item) => {
    setCardData(item);
    navigate("profile");
  };
  return (
    <>
      {finalItems.map((item) => (
        <div key={item.id} id="card__container">
          <div id="card__leftCol">
            {(() => {
              switch (placeImg) {
                case "Beach":
                  return (
                    <img
                      src="/assets/images/Nearby__images/Beach.jpg"
                      alt="beach"
                    />
                  );
                case "Restaurant":
                  return (
                    <img
                      src="/assets/images/Nearby__images/Restaurant.jpg"
                      alt="restaurant"
                    />
                  );
                case "Coffeshop":
                  return (
                    <img
                      src="/assets/images/Nearby__images/Coffeshop.jpg"
                      alt="Coffeshop"
                    ></img>
                  );
                case "Garden":
                  return (
                    <img
                      src="/assets/images/Nearby__images/Garden.jpg"
                      alt="Garden"
                    ></img>
                  );
                case "Market":
                  return (
                    <img
                      src="/assets/images/Nearby__images/Market.jpg"
                      alt="Market"
                    ></img>
                  );
                  case "Historic":
                  return (
                    <img
                      src="/assets/images/Nearby__images/Historic.jpg"
                      alt="Historic"
                    ></img>
                  );
                  case "Museum":
                    return (
                      <img
                        src="/assets/images/Nearby__images/Museum.jpg"
                        alt="Museum"
                      ></img>
                    );
                default:
                  return (
                    <img
                      src="/assets/images/Nearby__images/1.jpg"
                      alt="default"
                    />
                  );
              }
            })()}
          </div>
          <div className="rightCol">
            <div className="rightCol__adress">
              <p id="cardHeader">{item.header}</p>
              <div id="card__par">
                <ImLocation2 />
                <p>{item.info}</p>
                <p style={{ marginLeft: "1rem" }}>{item.street}</p>
              </div>
            </div>

            <button
              style={{
                padding: "10px",
                backgroundColor: "#072c3d",
                color: "white",
                borderRadius: "10px",
                width: "5rem",
                cursor: "pointer",
              }}
              onClick={() => {
                discoverClickHandler(item);
              }}
            >
              Discover
            </button>
          </div>
        </div>
      ))}

      {fetchedData.length > 0 && (
        <div id="nextPrev__container">
          <button
            className="placePageButton"
            onClick={handlePrev}
            disabled={isFirstPage}
          >
            Previous
          </button>
          <div className="labelPages">
            {Array.from(
              { length: pageRange[1] - pageRange[0] + 1 },
              (x, i) => pageRange[0] + i
            ).map((page) => (
              <p
                key={page}
                className={`placePageButton ${
                  page === currentPage ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentPage(page);
                  scrollToTop();
                }}
              >
                {page}
              </p>
            ))}
          </div>

          <button
            className="placePageButton"
            onClick={handleNext}
            disabled={isLastPage}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default PlaceCard;

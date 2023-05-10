import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { ImLocation2, ImNext2, ImPrevious2 } from "react-icons/im";
import "./PlaceCard.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CityDataContext from '../../../../Context/CityDataContext'
const PlaceCard = (props) => {
  const {setCardData}=useContext(CityDataContext);
  
  const fetchedData = props.data; 
  
  console.log(fetchedData)
  const navigate=useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [pageRange, setPageRange] = useState([]); // starting page range as empty array

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
  const discoverClickHandler=(item)=>{
    setCardData(item)
    navigate('profile')
  }
  return (
    <>
      {finalItems.map((item) => (
        <div key={item.id} id="card__container">
          <div id="card__leftCol">
            <img src="/assets/images/Nearby__images/1.jpg" alt="img"></img>
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
            {/* <div className="star__container">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div> */}
            <button
              style={{
                padding: "10px",
                backgroundColor: "#072c3d",
                color: "white",
                borderRadius:'10px',
                width:'5rem',
                cursor:'pointer'
              }}
              onClick={()=>{discoverClickHandler(item)}}
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
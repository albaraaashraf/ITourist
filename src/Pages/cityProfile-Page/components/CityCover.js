import classes from "./CityCover.module.css";
import { useState, useEffect, useContext } from "react";
import CityContext from "../../../Context/CityContext";
import { HiOutlineHeart } from "react-icons/hi";
import { TbMap } from "react-icons/tb";
const CityCover = (props) => {
  const [cityImg, setCityImg] = useState([]);
  const { cityName } = useContext(CityContext);
  const { countryId } = useContext(CityContext);
  const storedCityName=localStorage.getItem('searchedCityName');
  const storedCountryId=localStorage.getItem('searchedCountryId');
 
  const words = cityName.split(" ");
  let processedName = cityName;
  if (words.length === 2) {
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    processedName = capitalizedWords.join("_");
  }

  // console.log(countryId);

  useEffect(() => {
    async function fetchCityImg() {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=thumbnail&pithumbsize=600&origin=*&titles=${processedName}`
        );

        const data = await response.json();
        console.log(data.query.pages[0].thumbnail.source);
        var y = data.query.pages[0].thumbnail.source;
      } catch (error) {
        console.error("An error occurred:", error);
      }
      setCityImg(y);
    }
    fetchCityImg();
  }, [processedName]);
  const imageId = `https://flagsapi.com/${countryId}/shiny/64.png`;

  return (
    <>
      <div className={classes.coverContainer}>
        <img className={classes.coverImage} src={cityImg} alt=""></img>
        <div className={classes.imageText}>
          <div className={classes.cityName}>
          <h1>{cityName}</h1>
          <img src={imageId} alt="country ID"></img>
          </div>
          <div className={classes.favAndTour}>
            <HiOutlineHeart className={classes.favourite}/>
            <div className={classes.tour}>
              <TbMap/>
              <p>254 Tours Taken</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CityCover;

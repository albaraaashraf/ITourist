import classes from './CityCover.module.css'
import { useState,useEffect,useContext } from 'react'
import CityContext from '../../../Context/CityContext';
const CityCover=(props)=>{
    const [cityImg, setCityImg] = useState([]);
  const { cityName } = useContext(CityContext);
  const words = cityName.split(" ");
  let processedName = cityName;
  if (words.length === 2) {
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    processedName = capitalizedWords.join("_");
  }
  console.log(cityName);
  console.log(processedName);

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
    fetchCityImg()
  }, []);
    return <>
          <img className={classes.coverImage} src={cityImg} alt=""></img>

    </>
}
export default CityCover
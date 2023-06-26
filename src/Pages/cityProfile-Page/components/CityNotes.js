import classes from './CityIntro.module.css'
import CityContext from '../../../Context/CityContext';
import { useContext, useEffect, useState } from "react";

const CityNotes=(props)=>{
    const [cityData, setCityData] = useState([]);
    const { cityName } = useContext(CityContext);
    const storedCityName=localStorage.getItem('searchedCityName');
    const storedCountryId=localStorage.getItem('searchedCountryId');
  
    const words = storedCityName.split(" ");
    let processedName = storedCityName;
    if (words.length === 2) {
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );
      processedName = capitalizedWords.join("_");
    }
    useEffect(()=>{
        async function fetchCityIntro() {
            try {
              const response = await fetch(
                `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${processedName}&formatversion=2&exsentences=9&exlimit=1&origin=*&explaintext=1`
              );
      
              const data = await response.json();
              console.log(data.query.pages[0].extract);
              var x = data.query.pages[0].extract;
            } catch (error) {
              console.error("An error occurred:", error);
            }
            setCityData(x);
          }
          fetchCityIntro();
    },[processedName])
    return <>
    <p className={classes.cityPar}>{cityData}</p>
    </>
}
export default CityNotes
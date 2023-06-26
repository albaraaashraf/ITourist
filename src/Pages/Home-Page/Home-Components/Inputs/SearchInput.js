import { useContext, useState } from "react";
import axios from "axios";
import ReactSearchAutocomplete from "react-search-autocomplete/dist/components/ReactSearchAutocomplete";
import classes from "./SearchInput.module.css";
import { useNavigate } from "react-router-dom";
import CityContext from "../../../../Context/CityContext";
const Search = () => {
  const { setLon } = useContext(CityContext);
  const { setLat } = useContext(CityContext);
  const { setCityName } = useContext(CityContext);
  const { setCountryId } = useContext(CityContext);
  const {setCityId} =useContext(CityContext);

  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState();
  const [searchResults, setSearchResults] = useState([]);
  // const [lon,setLon]=useState();
  // const [lat,setLat]=useState();
  // note: the id field is mandatory

  const handleOnSearch = async (string, results) => {
    setSearchItem(string);
    if (string.trim() === "") {
      setSearchResults([]);
      return;
    }
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${string}&minPopulation=100000`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1790448e97mshde785f99444bdacp1e764ajsn33ba3b4dd3c7",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await axios(url, options);
      const cities = response.data.data.map((takeAwayData) => ({
        name: takeAwayData.city,
        countryId: takeAwayData.countryCode,
        id: takeAwayData.id,
        lat: takeAwayData.latitude,
        lon: takeAwayData.longitude,
      }));

      setSearchResults(cities);
    } catch (error) {
      console.error(error);
    }
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    setLat(item.lat);
    setLon(item.lon);
    setCityName(item.name);
    setCountryId(item.countryId);
    setCityId(item.id);
    localStorage.setItem("searchedCityLat",item.lat);
    localStorage.setItem("searchedCityLon",item.lon);
    localStorage.setItem("searchedCityName",item.name);
    localStorage.setItem("searchedCountryId",item.countryId);
    localStorage.setItem("searchedCityId",item.id);

    console.log(item.id);
    navigate(`CityProfile/${item.id}`);
  };
  // console.log(lat,lon)

  const handleOnFocus = () => {
    console.log("Focused");
  };
  const formatResult = (item) => {
    const imageId = `https://flagsapi.com/${item.countryId}/shiny/64.png`;

    return (
      <>
        <span
          key={item.id}
          className={classes.autoCompleteItem}
          style={{ textAlign: "left", cursor: "pointer" }}
        >
          <img className={classes.countryImg} alt="" src={imageId} />
          &nbsp;
          {item.name}
        </span>
      </>
    );
  };

  return (
    <>
      <div id="autoCompleteContainer">
        <div className={classes.autoComplete__container}>
          <ReactSearchAutocomplete
            items={searchResults}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder="Search for a city..."
          />
        </div>
      </div>
    </>
  );
};

export default Search;

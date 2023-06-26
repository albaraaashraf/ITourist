import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NearbySliderImages";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./NearbySlider.css";
import { useContext } from "react";
import CityDataContext from "../../../../Context/CityDataContext";
import Rating from "@mui/material/Rating";

import { useEffect, useState } from "react";
const NearbySlider = () => {
  const { cardData } = useContext(CityDataContext);
  const [data, setData] = useState([]);
  // console.log(cardData.lon);
  // console.log(cardData.lat);
  const storageData=JSON.parse(localStorage.getItem("storedCardData"));



  useEffect(() => {
    async function fetchNearbyHandler() {
      const response =
        await fetch(`https://api.tomtom.com/search/2/nearbySearch/.json?lat=${storageData.lat}&lon=${storageData.lon}&radius=10000&view=Unified&relatedPois=all&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H
        `);

      const data = await response.json();
      const transformedData = data.results.map((takeAwayData) => {
        return {
          id: takeAwayData.id,
          score: takeAwayData.score,
          header: takeAwayData.poi.name,
          street: takeAwayData.address.streetName,
          city: takeAwayData.address.localName,
          type: takeAwayData.poi.categories[0],
          distance: takeAwayData.dist,
          class: takeAwayData.poi.classifications[0].code,
          categories: takeAwayData.poi.categories,
          lon: takeAwayData.position.lon,
          lat: takeAwayData.position.lat,
          info:
            takeAwayData.address.municipalitySubdivision +
            "  ,   " +
            takeAwayData.address.municipality,
        };
      });
      setData(transformedData);
    }
    fetchNearbyHandler();
  }, [storageData.lat, storageData.lon]);
  data.map((item) => {
    console.log(Math.ceil(item.score / 50));
  });
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="SliderContainer">
        {data.map((item) => (
          <div className="card">
            <div className="card__top">
              {/* <img src={item.src} alt={item.title}></img> */}
              <div className="image__content">
                <p className="city__style">{item.header}</p>
                <p id="distance">{item.distance.toFixed(2)}m</p>
                </div>
                <p className="type">{item.type}</p>
                <div className="star__class">
                  <Rating
                    name="read-only"
                    value={Math.ceil(item.score / 50)}
                    readOnly
                    style={{ color: "#072c3d" }}
                    />
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default NearbySlider;

import Slider from "react-slick";
import classes from "./CityImageSlider.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import CityContext from "../../../Context/CityContext";
const CityImageSlider = () => {
  const [unSplash, setUnSplash] = useState([]);
  const { cityName } = useContext(CityContext);
  useEffect(() => {
    async function fetchUnsplash() {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${cityName}&orientation=landscape&client_id=4BZf0SyW_btl141ZgSFJridUrU9F1M5OZYQJlT5iWK8`
        );

        const data = await response.json();
        var urlsRawArray = data.results.map((result) => result.urls.raw);
        console.log(urlsRawArray);
        // var y = data.query.pages[0].thumbnail.source;
      } catch (error) {
        console.error("An error occurred:", error);
      }
      setUnSplash(urlsRawArray);
    }

    fetchUnsplash();
  }, [cityName]);
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <FaArrowLeft className={classes.customPrevArrow} onClick={onClick} />
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <FaArrowRight className={classes.customNextArrow} onClick={onClick} />
    );
  };

  const settings = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
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
      <div className={classes.sliderContainer}>
        <Slider {...settings}>
          {unSplash.map((image, index) => (
            <div key={index}>
              <img
              className={classes.sliderImg}
              src={image}
              alt={`Slide ${index + 1}`}
              loading="lazy" // Add the loading attribute for lazy loading
            />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default CityImageSlider;

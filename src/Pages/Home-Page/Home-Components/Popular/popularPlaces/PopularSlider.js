import "./PopularSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./popularImages";
import cards__Popular from "./popularImages";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./PopularSlider.css";

const PopularSlider = () => {
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
        {cards__Popular.map((item) => (
          <div className="card">
            <div className="card__top">
              <img src={item.src} alt={item.title}></img>
              <div className="image__content">
                <p className="city__style">{item.city}</p>
                <p id="distance">{item.distance}</p>
              </div>
              <div className="star__class">
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default PopularSlider;

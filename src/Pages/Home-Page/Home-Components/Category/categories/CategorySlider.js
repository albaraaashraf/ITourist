import "./CategorySlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cards__category from "./categoryImage";
import CityContext from "../../../../../Context/CityContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CityNameContext from "../../../../../Context/CityNameContext";
import CityDataContext from "../../../../../Context/CityDataContext";
const CategorySlider = () => {
  const{categoryLon}=useContext(CityNameContext);
  const{categoryLat}=useContext(CityNameContext);
  const{setCategoryClicked}=useContext(CityContext);
  const{setCategoryName}=useContext(CityDataContext)
  const{setLon}=useContext(CityContext);
  const{setLat}=useContext(CityContext)
  console.log(categoryLon,categoryLat)
  const navigate=useNavigate()
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

  const handleCardClick = (item) => {
    console.log(item.title);
    setLat(categoryLat);
    setLon(categoryLon);
    setCategoryName(item.title);
    localStorage.setItem('categoryClick',1);
    localStorage.setItem("category",item.title);
    navigate('places');
    
  };

  return (
    <>
      <Slider {...settings} className="SliderContainer__category">
        {cards__category.map((item) => (
          <div className="cardCateg" key={item.id}>
            <div className="cardCateg__top">
              <img
                src={item.src}
                alt={item.title}
                onClick={handleCardClick.bind(null, item)}
              ></img>

              <div className="imageCateg__content">
                <p className="cityCateg__style">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default CategorySlider;

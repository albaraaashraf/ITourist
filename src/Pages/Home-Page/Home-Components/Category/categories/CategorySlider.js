import './CategorySlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cards__category from './categoryImage';

const CategorySlider=()=>{
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
              variableWidth: false
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              variableWidth: false

            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: false,
              infinite:true,
              arrows:false

          

            },
          },
        ],
      };

    return <>
            <Slider {...settings} className="SliderContainer__category">
        {cards__category.map((item) => (
          <div className="cardCateg">
            <div className="cardCateg__top">
              <img src={item.src} alt={item.title}></img>
              <div className="imageCateg__content">
              <p className="cityCateg__style">{item.title}</p>
              </div>
              
            </div>

          </div>
        ))}
      </Slider>


    </>
}

export default CategorySlider
import Nearby from "../Nearby";
import classes from "./NearbyPage.module.css";
import Slider from "react-slick";
import { useContext } from "react";
import CityContext from "../../../../../Context/CityContext";
import { Navigate, useNavigate } from "react-router-dom";
const NearbyPage = () => {
  const { setLon } = useContext(CityContext);
  const { setLat } = useContext(CityContext);
  const navigate = useNavigate(); // initialize history
  const handleClickRome = () => 
  {
    let lat=41.893055555;
    let lon = 12.482777777
    setLat(41.893055555);
    setLon(12.482777777);
    //storage
    localStorage.setItem("popularPlaceClicked","Rome");
    localStorage.setItem("popularLat",lat);
    localStorage.setItem("popularLon",lon);
    localStorage.removeItem("category");

    navigate("places");
  };
  const handleClickDubai = () => {
    let lat = 25.269722222;
    let lon = 55.309444444;
    //storage
    localStorage.setItem("popularPlaceClicked","Dubai");
    localStorage.setItem("popularLat",lat);
    localStorage.setItem("popularLon",lon);
    localStorage.removeItem("category");

    setLat(25.269722222);
    setLon(55.309444444);
    navigate("places");
  };
  const handleClickIstanbul = () => {
    //storage
    let lat= 41.01;
    let lon = 28.960277777;
    localStorage.setItem("popularPlaceClicked","Istanbul");
    localStorage.setItem("popularLat",lat);
    localStorage.setItem("popularLon",lon);
    localStorage.removeItem("category");
    setLat(41.01);
    setLon(28.960277777);
    navigate("places");
  };
  const handleClickLuxor = () => {
    //storage
    let lat =25.696944444;
    let lon =32.642222222;
    localStorage.setItem("popularPlaceClicked","Luxor");
    localStorage.setItem("popularLat",lat);
    localStorage.setItem("popularLon",lon);
    localStorage.removeItem("category");

    setLat(25.696944444);
    setLon(32.642222222);
    navigate("places");
  };
  const handleClickTokyo = () => {
    //storage
    let lat=35.689444444;
    let lon=139.691666666;
    localStorage.setItem("popularPlaceClicked","Tokyo");
    localStorage.setItem("popularLat",lat);
    localStorage.setItem("popularLon",lon);
    localStorage.removeItem("category");

    setLat(35.689444444);
    setLon(139.691666666);
    navigate("places");
  };
  const handleClickParis = () => {
        //storage
        let lat=48.8574;
        let lon=2.3795;
        localStorage.setItem("popularPlaceClicked","Paris");
        localStorage.setItem("popularLat",lat);
        localStorage.setItem("popularLon",lon);
        localStorage.removeItem("category");

    setLat(48.8574);
    setLon(2.3795);
    navigate("places");
  };
  const handleSlideClick = (e) => {
    // Check if user is dragging the slide
    if (!e.target.classList.contains("slick-active")) {
      return;
    }
    handleClickRome();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    onClick: handleSlideClick, // handle slide click
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
      <div>
        <Slider {...settings}>
          <div
            className={`${classes.firstDiv} ${classes.backgroundImg}`}
            onClick={handleClickRome}
          >
            <p className={classes.picHeader}>Visit Rome</p>
            <p className={classes.picContent}>
              {" "}
              Rome, the Eternal City, is a place like no other. With its rich
              history, breathtaking architecture, and vibrant culture, it is a
              must-see destination for anyone interested in the ancient world.
              The Colosseum, one of the most iconic landmarks in Rome, is a
              testament to the city's incredible past and is a marvel to behold.
              Visiting Rome and the Colosseum is an experience that will leave
              you with memories to cherish for a lifetime. Don't miss out on the
              chance to explore this incredible city and all that it has to
              offer.
            </p>
          </div>
          <div
            className={`${classes.secDiv} ${classes.backgroundImg}`}
            onClick={handleClickDubai}
          >
            <p className={classes.picHeader}>Visit Dubai</p>
            <p className={classes.picContent}>
              {" "}
              Dubai, the jewel of the Middle East, is a city like no other. With
              its towering skyscrapers, stunning beaches, and luxurious shopping
              malls, it is a must-visit destination for anyone seeking a taste
              of the high life. From the world-famous Burj Khalifa to the
              man-made wonders of the Palm Jumeirah, Dubai is a city that never
              fails to impress. Whether you are looking to shop, relax, or
              simply indulge in the finest dining experiences, Dubai has
              something for everyone. Come and experience the glitz and glamour
              of this amazing city for yourself!
            </p>
          </div>
          <div
            className={`${classes.thirdDiv} ${classes.backgroundImg}`}
            onClick={handleClickIstanbul}
          >
            <p className={classes.picHeader}>Visit Istanbul</p>
            <p className={classes.picContent}>
              {" "}
              Experience the magic of Istanbul, the crossroads of Europe and
              Asia. Explore the city's rich history and culture, from the
              majestic Hagia Sophia to the bustling Grand Bazaar. Take a stroll
              through the vibrant neighborhoods and taste the delicious local
              cuisine. With its stunning architecture, breathtaking views, and
              warm hospitality, Istanbul is the perfect destination for your
              next adventure
            </p>
          </div>
          <div
            className={`${classes.fourthDiv} ${classes.backgroundImg}`}
            onClick={handleClickLuxor}
          >
            <p className={classes.picHeader}>Visit Luxor</p>
            <p className={classes.picContent}>
              {" "}
              Experience the wonders of Luxor, a city steeped in history and
              mystique. Explore the awe-inspiring temples and tombs that
              showcase the ancient Egyptian civilization. Marvel at the grandeur
              of the Valley of the Kings, where pharaohs were laid to rest.
              Immerse yourself in the captivating tales of the past as you
              stroll along the magnificent Nile River. Discover the magic of
              Luxor, where the past comes alive and unforgettable memories are
              waiting to be made.
            </p>
          </div>
          <div
            className={`${classes.fifthDiv} ${classes.backgroundImg}`}
            onClick={handleClickTokyo}
          >
            <p className={classes.picHeader}>Visit Tokyo</p>
            <p className={classes.picContent}>
              {" "}
              Embark on a journey to Tokyo, a city where tradition meets
              modernity. Explore the enchanting temples that offer a serene
              escape from the bustling metropolis. Admire the intricate
              architecture and immerse yourself in the spiritual atmosphere.
              Experience the tranquility of gardens and shrines that transport
              you to a different world. Discover Tokyo's rich cultural heritage
              through its temples, a testament to its deep-rooted traditions.
              Uncover the captivating blend of old and new in this vibrant city
              and create unforgettable memories amidst the ancient wonders.
            </p>
          </div>

          <div
            className={`${classes.sixthDiv} ${classes.backgroundImg}`}
            onClick={handleClickParis}
          >
            <p className={classes.picHeader}>Visit Paris</p>
            <p className={classes.picContent}>
              {" "}
              Discover the City of Light and marvel at the beauty of the Arc de
              Triomphe in Paris. The stunning monument, located at the western
              end of the Champs-Élysées, is a symbol of French patriotism and an
              architectural masterpiece. Stroll through the surrounding streets,
              soak up the Parisian atmosphere, and take in the view of the city
              from the top of the Arc. A visit to Paris is incomplete without
              experiencing the grandeur of the Arc de Triomphe. Book your trip
              today and prepare to be enchanted by the magic of Paris!
            </p>
          </div>
        </Slider>
      </div>
    
    </>
  );
};
export default NearbyPage;

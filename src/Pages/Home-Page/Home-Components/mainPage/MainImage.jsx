// Css
import "./Css/MainImage.css";

const MainImage = () => {
  const mainImage = require("../../../../assets/images/mainHome-images/mountain_with_camp.jpg");

  return (
    <>
      <div className="image__container">
        <img src={mainImage} alt=""></img>
        <div className="header__container">
          <p>Explore Beautiful Places</p>
        </div>
      </div>
    </>
  );
};
export default MainImage;

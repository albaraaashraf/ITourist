import StepsCard from "./Steps Card/StepsCard";
import classes from "./TourStepsPage.module.css";
const TourStepsPage = (props) => {


  return (
    <>
      <div className={`${classes.allCards__container}`}>
        <StepsCard
          title="Explore Cities"
          text="Discover new cities and embark on unforgettable journeys. Whether you're a seasoned traveler or just starting to explore, our website has everything you need to plan your next adventure."
          showButton={true}
          icon="search"
        />
        <StepsCard
          title="Communicate"
          text="Read reviews from fellow travelers and discover hidden gems all over the world. Our community of users provides honest, firsthand accounts of their travel experiences, giving you the inside scoop on the best places to go and things to see."
            icon="share"
        />
        <StepsCard
          title="Book Your Tour"
          text="Book a tour with one of our expert guides and experience the local culture like never before. From food tours to historical walks, our guides are passionate about sharing their knowledge and love for their city with you. Let us help you create memories that will last a lifetime."
        icon="tour"
       />
      </div>
    </>
  );
};

export default TourStepsPage;

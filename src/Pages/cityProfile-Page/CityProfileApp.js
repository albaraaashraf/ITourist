import CityNotes from "./components/CityNotes";
import CityCover from "./components/CityCover";
import CityImageSlider from "./components/CityImageSlider";
import DiscoverButton from "./assets/DiscoverButton"
import TourRequest from "./components/TourRequest";
import TourButton from "./assets/TourButton";
import { useState } from "react";
import classes from "./CityProfileApp.module.css"
const CityProfileApp = (props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>

      <CityCover />
      <CityNotes />
      <CityImageSlider />
          <div className={classes.buttonFormContainer}>
      <DiscoverButton />
      <TourButton onClick={() => {
          setShowForm(!showForm);
        }} />
      <div className={`${classes.tourRequest} ${showForm ? classes.show : ''}`}>
        {showForm && <TourRequest />}
      </div>
          </div>

    </>
  );
};
export default CityProfileApp;

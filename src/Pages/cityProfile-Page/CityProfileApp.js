import CityNotes from "./components/CityNotes";
import CityCover from "./components/CityCover";
import CityImageSlider from "./components/CityImageSlider";
import DiscoverButton from "./assets/DiscoverButton";
import TourRequest from "./components/TourRequest";
import TourButton from "./assets/TourButton";
import { useState } from "react";
import classes from "./CityProfileApp.module.css";

import { useUser } from "../../Context/UserContext";

const CityProfileApp = (props) => {
  const [showForm, setShowForm] = useState(false);

  // sign in State
  const { signedUp } = useUser();
  return (
    <>
      <CityCover />
      <CityNotes />
      <CityImageSlider />
      <div className={classes.buttonFormContainer}>
        <div className={classes.buttonContainer}>
          <DiscoverButton />
          {signedUp && (
            <TourButton
              onClick={() => {
                setShowForm(!showForm);
                console.log("askldmnalskdnalksndaklsndlaksda");
              }}
            />
          )}
        </div>
        <div
          className={`${classes.tourRequest} ${showForm ? classes.show : ""}`}
        >
          {showForm && <TourRequest hide={setShowForm} />}
        </div>
      </div>
    </>
  );
};
export default CityProfileApp;

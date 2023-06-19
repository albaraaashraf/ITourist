import CityNotes from "./components/CityNotes";
import CityCover from "./components/CityCover";
import CityImageSlider from "./components/CityImageSlider";
import DiscoverButton from "./assets/DiscoverButton";
import TourRequest from "./components/TourRequest";
import TourButton from "./assets/TourButton";
import { useState } from "react";
const CityProfileApp = (props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <CityCover />
      <CityNotes />
      <CityImageSlider />
      <DiscoverButton />
      <TourButton onClick={() => {
          setShowForm(!showForm);
        }} />
      {showForm&&<TourRequest />}
    </>
  );
};
export default CityProfileApp;

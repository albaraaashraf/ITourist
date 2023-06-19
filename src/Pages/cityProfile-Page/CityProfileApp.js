
import CityNotes from "./components/CityNotes";
import CityCover from "./components/CityCover";
import CityImageSlider from "./components/CityImageSlider";
import Button from "./assets/Button";
import TourRequest from "./components/TourRequest";

const CityProfileApp = (props) => {

  return (
    <>
      <CityCover />
      <CityNotes />
      <CityImageSlider/>
      <Button/>
      <TourRequest/>
    </>
  );
};
export default CityProfileApp;

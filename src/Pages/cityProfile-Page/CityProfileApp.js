
import CityNotes from "./components/CityNotes";
import CityCover from "./components/CityCover";
import CityImageSlider from "./components/CityImageSlider";
import Button from "./assets/Button";

const CityProfileApp = (props) => {

  return (
    <>
      <CityCover />
      <CityNotes />
      <CityImageSlider/>
      <Button/>
    </>
  );
};
export default CityProfileApp;

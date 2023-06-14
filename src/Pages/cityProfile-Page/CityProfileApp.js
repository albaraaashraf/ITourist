import classes from "./CityProfileApp.module.css";
import CityContext from "../../Context/CityContext";
import { useContext, useEffect, useState } from "react";
import CityNotes from "./components/CityNotes";
import CityCover from "./components/CityCover";
const CityProfileApp = (props) => {
  return (
    <>
      <CityCover />
      <CityNotes />
    </>
  );
};
export default CityProfileApp;

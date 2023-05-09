import "./SignIn.css";
import "../Components/Main page/HomePage.css";

import { Fragment, createContext, useState } from "react";

import TopScreenButton from "../../../components/ToolOnPage/TopScreenButton";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";

import { Outlet } from "react-router-dom";

export const LoadState = createContext();

function SingIn(props) {
  const [loadScreen, setLoadScreen] = useState(false);

  let value = {
    setLoadScreen,
  };
  return (
    <Fragment>
      <LoadingScreen show={loadScreen} title="Initializing" textColor="#FFF" />

      <div className="home-page singIn-home">
        <div className="home-page__container">
          <LoadState.Provider value={value}>
            <Outlet />
          </LoadState.Provider>
        </div>
        <TopScreenButton />
      </div>
    </Fragment>
  );
}
export default SingIn;

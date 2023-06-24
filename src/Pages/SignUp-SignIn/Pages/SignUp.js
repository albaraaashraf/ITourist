import { Fragment, createContext, useState } from "react";

import "./SignIn.css";
import "../Components/Main page/HomePage.css";

// Components
import SignUpForm from "../Components/Main page/SignUpForm";
import Description from "../Components/Main page/Description";

import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";

export const StateContext = createContext();

function SignUp(props) {
  const [loading, setLoadingScreen] = useState(false);
  const [text, setText] = useState("Initializing");

  let value = {
    setLoadingScreen,
    setText,
  };

  return (
    <StateContext.Provider value={value}>
      <Fragment>
        <LoadingScreen show={loading} title={text} textColor="#FFF" />

        <div className="home-page">
          <div className="home-page__container">
            <Description />
            <SignUpForm />
          </div>
        </div>
      </Fragment>
    </StateContext.Provider>
  );
}
export default SignUp;

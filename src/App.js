// tools
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
// Layouts
import RootLayout from "./Pages/LayOut/rootLayout";
import NotFound from "./Pages/Not Found/NotFound";
import Edit from "./Pages/Profile/Edit";

//Components
import Home from "./Pages/Home-Page/Home";
import PlaceProfileApp from "./Pages/placeProfile-Page/PorfilePlaceApp"
import PlacesApp from "./Pages/Places-Page/PlacesApp";


// profile
import Profile from "./Pages/Profile/Profile.jsx";
////  profile Components
import Info from "./Pages/Profile/details/Info";
import Bio from "./Pages/Profile/details/Bio";
import GalleryContainer from "./Pages/Profile/details/GalleryContainer";
import Gallery from "./Pages/Profile/details/Gallery";
import AddImages from "./Pages/Profile/details/AddImages";

import ContactUs from "./Pages/Contact Us/contactUs";
import About from "./Pages/About/About";

import SignUp from "./Pages/SignUp-SignIn/Pages/SignUp";
import SignIn from "./Pages/SignUp-SignIn/Pages/SignIn";
import SignInContent from "./Pages/SignUp-SignIn/Components/Main page/Containers/SignInContent";
import RecoverPassword from "./Pages/SignUp-SignIn/Components/Main page/RecoverPassword";

import {
  faCalendar,
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import RequestTourGuide from "./Pages/Places/Request Tour Guide/RequestTourGuide";



//context 

import CityContext from "./Context/CityContext";
import CityDataContext from "./Context/CityDataContext";

library.add(faEnvelope, faLock, faUser, faCalendar);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Places" element={<PlacesApp />} />
      <Route path="/Places/Profile" element={<PlaceProfileApp/>} />
      {/* profile root components */}
      <Route path="Profile" element={<Profile />}>
        <Route path="Info" element={<Info />} />
        <Route path="Bio" element={<Bio />} />
        <Route path="Gallery" element={<GalleryContainer />}>
          <Route index element={<Gallery />} />
          <Route path="AddImages" element={<AddImages />} />
        </Route>
        <Route path="Edit" element={<Edit />} />
      </Route>

      <Route path="Us" element={<ContactUs />} />

      <Route path="About" element={<About />} />

      <Route path="SingUp" element={<SignUp />} />

      <Route path="SignIn" element={<SignIn />}>
        <Route index element={<SignInContent />} />
        <Route path="RecoverPassword" element={<RecoverPassword />} />
      </Route>

      <Route path="test" element={<RequestTourGuide />} />

      {/* for not found Page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();
  const [cardData, setCardData] = useState();
  return (
    <>
      <CityDataContext.Provider value={{ cardData, setCardData }}>
        <CityContext.Provider value={{ lon, setLon, lat, setLat }}>
          <RouterProvider router={router} />
        </CityContext.Provider>
      </CityDataContext.Provider>
    </>
  );
}

export default App;

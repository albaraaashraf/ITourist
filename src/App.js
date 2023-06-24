// tools
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CityContext from "./Context/CityContext";
import CityDataContext from "./Context/CityDataContext";
import PlaceImageContext from "./Context/PlaceImageContext";
// Layouts
import RootLayout from "./Pages/LayOut/rootLayout";
import NotFound from "./Pages/Not Found/NotFound";
import Edit from "./Pages/Profile/Edit";

import { ShowNavbarAndFooterProvider } from "./Context/NavbarAndFooterContext";

//Components
import Home from "./Pages/Home-Page/Home";
import PlaceProfileApp from "./Pages/placeProfile-Page/PorfilePlaceApp";
import PlacesApp from "./Pages/Places-Page/PlacesApp";

// profile page
import Profile from "./Pages/Profile/Profile.jsx";
////  profile Components
import Info from "./Pages/Profile/details/Info";
import Bio from "./Pages/Profile/details/Bio";
import GalleryContainer from "./Pages/Profile/details/GalleryContainer";
import Gallery from "./Pages/Profile/details/Gallery";
import AddImages from "./Pages/Profile/details/AddImages";

// ContactUs page
import ContactUs from "./Pages/Contact Us/contactUs";
// About page
import About from "./Pages/About/About";

// SignUp page
import SignUp from "./Pages/SignUp-SignIn/Pages/SignUp";
// SignIn page
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
import CityProfileApp from "./Pages/cityProfile-Page/CityProfileApp";

library.add(faEnvelope, faLock, faUser, faCalendar);

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="CityProfile/:cityId" element={<CityProfileApp />}></Route>
      <Route path="/Places" element={<PlacesApp />} />
      <Route path="CityProfile/:cityId/Places" element={<PlacesApp />} />
      <Route path="CityProfile/Places" element={<PlacesApp />} />
      <Route
        path="CityProfile/:cityId/Places/museums"
        element={<PlacesApp />}
      />
      <Route
        path="CityProfile/:cityId/Places/restaurants"
        element={<PlacesApp />}
      />
      <Route
        path="CityProfile/:cityId/Places/beaches"
        element={<PlacesApp />}
      />
      <Route
        path="CityProfile/:cityId/Places/historic buildings"
        element={<PlacesApp />}
      />
      <Route
        path="CityProfile/:cityId/Places/markets"
        element={<PlacesApp />}
      />
      <Route
        path="CityProfile/:cityId/Places/gardens"
        element={<PlacesApp />}
      />
      {/* Place Profile Page Routes */}
      <Route
        path="/cityProfile/:cityId/Places/restaurants/Profile"
        element={<PlaceProfileApp />}
      />
      <Route
        path="/cityProfile/:cityId/Places/restaurants/Profile"
        element={<PlaceProfileApp />}
      />
      <Route
        path="/cityProfile/:cityId/Places/markets/Profile"
        element={<PlaceProfileApp />}
      />
      <Route
        path="/cityProfile/:cityId/Places/beaches/Profile"
        element={<PlaceProfileApp />}
      />
      <Route
        path="/cityProfile/:cityId/Places/gardens/Profile"
        element={<PlaceProfileApp />}
      />
      <Route
        path="/cityProfile/:cityId/Places/historic buildings/Profile"
        element={<PlaceProfileApp />}
      />
      <Route
        path="/cityProfile/:cityId/Places/museums/Profile"
        element={<PlaceProfileApp />}
      />
      <Route
        path="/cityProfile/:cityId/Places/Profile"
        element={<PlaceProfileApp />}
      />
      <Route path="/places/Profile" element={<PlaceProfileApp />} />
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
  const [cityName, setCityName] = useState();
  const [countryId, setCountryId] = useState();
  const [cardData, setCardData] = useState();
  const [categoryName, setCategoryName] = useState();
  const [cityId, setCityId] = useState();
  const [placeImage, setPlaceImage] = useState();

  return (
    <>
      <PlaceImageContext.Provider value={{ placeImage, setPlaceImage }}>
        <CityDataContext.Provider
          value={{ cardData, setCardData, categoryName, setCategoryName }}
        >
          <CityContext.Provider
            value={{
              lon,
              setLon,
              lat,
              setLat,
              cityName,
              setCityName,
              countryId,
              setCountryId,
              cityId,
              setCityId,
            }}
          >
            {/* for navbar and footer  */}
            <ShowNavbarAndFooterProvider>
              <RouterProvider router={router}>
                <ScrollToTop />
              </RouterProvider>
            </ShowNavbarAndFooterProvider>
          </CityContext.Provider>
        </CityDataContext.Provider>
      </PlaceImageContext.Provider>
    </>
  );
}

export default App;

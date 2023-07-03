import { useContext, useState, useEffect } from "react";
import "./PlaceProfileApp.css";

import { useUser } from "../../Context/UserContext";
import { db } from "../../firebase-config";

import PlaceCard from "./components/placeInfo/PlaceCard";
import PlaceImage from "./components/placeInfo/PlaceImage";
import ReviewCard from "./components/reviews/ReviewCard";
import ReviewHeader from "./components/reviews/ReviewHeader";
import SliderContainer from "./components/Slider/SliderContainer";
import ReviewInput from "./components/reviews/ReviewInput";
import CityDataContext from "../../Context/CityDataContext";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function ProfilePlaceApp() {
  const { signedUp } = useUser();

  const [reviews, setReviews] = useState();
  const storageData = JSON.parse(localStorage.getItem("storedCardData"));

  const storedCountryId = localStorage.getItem("searchedCountryId");

  // let reviewData = {
  //   // used local storage instead of context
  //   country: storedCountryId,
  //   city: storageData.city,
  //   placeName: storageData.header,
  // };

  function showReviews() {
    let revData = reviews.map((review) => {
      return <ReviewCard reviews={review} />;
    });

    return revData;
  }

  useEffect(() => {
    const revRef = collection(db, `/Places/${storageData.id}/Reviews`);

    const unsubscribe = onSnapshot(revRef, (snapshot) => {
      let rev = [];
      snapshot.docs.forEach((doc) => {
        rev.push(doc.data());
      });

      setReviews(rev);
    });

    return () => {
      unsubscribe();
      console.log("destroyed");
    };
  }, []);

  return (
    <>
      <div id="page__container">
        <div id="first__part">
          <PlaceCard />
          <PlaceImage />
        </div>
        <div id="second__part">
          <SliderContainer />
        </div>
        <div id="third__part">
          <ReviewHeader length={reviews && reviews.length} />

          <div>{reviews && showReviews()}</div>

          {signedUp && <ReviewInput />}
        </div>
      </div>
    </>
  );
}

export default ProfilePlaceApp;

import { useContext, useState } from "react";
import "./PlaceProfileApp.css";

import { useUser } from "../../Context/UserContext";
import CityContext from "../../Context/CityContext";

import PlaceCard from "./components/placeInfo/PlaceCard";
import PlaceImage from "./components/placeInfo/PlaceImage";
import ReviewCard from "./components/reviews/ReviewCard";
import ReviewHeader from "./components/reviews/ReviewHeader";
import SliderContainer from "./components/Slider/SliderContainer";
import ReviewInput from "./components/reviews/ReviewInput";
import CityDataContext from "../../Context/CityDataContext";
import { useEffect } from "react";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase-config";

function ProfilePlaceApp() {
  const { signedUp } = useUser();

  const { countryId } = useContext(CityContext);
  const { cardData } = useContext(CityDataContext);

  const [reviews, setReviews] = useState();
  const storageData=JSON.parse(localStorage.getItem("storedCardData"));
  const storedCountryId=localStorage.getItem('searchedCountryId');
  console.log(storageData);
  
  const reviewData = {
    // used local storage instead of context
    country: storedCountryId,
    city: storageData.city,
    placeName: storageData.header,
  };
  
  useEffect(() => {
    const colRef = collection(
      db,
      `places/${storedCountryId}/${storageData.city}/${storageData.header}/reviews`
    );

    const q = query(colRef, orderBy("time", "desc"));

    const subscribe = onSnapshot(q, (snapshot) => {
      let reviews = [];

      snapshot.docs.forEach((doc) => {
        reviews.push(doc.data());
      });

      setReviews(reviews);
      console.log("once updated");
    });

    return () => {
      subscribe();
      console.log("left the page");
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

          <div s>
            {reviews &&
              reviews.map((review) => {
                return (
                  <ReviewCard
                    user={review.userName}
                    time={review.time}
                    review={review.review}
                  />
                );
              })}
          </div>

          {/* <ReviewCardButton /> */}

          {signedUp && <ReviewInput reviewData={reviewData} />}
        </div>
      </div>
    </>
  );
}

export default ProfilePlaceApp;

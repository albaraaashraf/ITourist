import { useContext, useState } from "react";
import "./PlaceProfileApp.css";

import { useUser } from "../../Context/UserContext";
import CityContext from "../../Context/CityContext";

import PlaceCard from "./components/placeInfo/PlaceCard";
import PlaceImage from "./components/placeInfo/PlaceImage";
import ReviewCard from "./components/reviews/ReviewCard";
// import ReviewCardButton from "./components/reviews/ReviewCardButton";
import ReviewHeader from "./components/reviews/ReviewHeader";
import SliderContainer from "./components/Slider/SliderContainer";
import ReviewInput from "./components/reviews/ReviewInput";
import CityDataContext from "../../Context/CityDataContext";
import { useEffect } from "react";

import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

function ProfilePlaceApp() {
  const { signedUp } = useUser();

  const { countryId } = useContext(CityContext);
  const { cardData } = useContext(CityDataContext);

  const [reviews, setReviews] = useState();
  const [added, setAdded] = useState(true);

  const reviewData = {
    country: countryId,
    city: cardData.city,
    placeName: cardData.header,
  };

  // useEffect(() => {
  //   const colRef = collection(
  //     db,
  //     `places/${countryId}/${cardData.city}/${cardData.header}/reviews`
  //   );
  //   getDocs(colRef)
  //     .then((docs) => {
  //       let reviews = [];
  //       docs.forEach((doc) => {
  //         reviews.push(doc.data());
  //       });
  //       return reviews;
  //     })
  //     .then((reviews) => {
  //       setReviews(reviews);
  //     })
  //     .then(() => {
  //       console.log("done");
  //     });
  // }, []);

  useEffect(() => {
    const colRef = collection(
      db,
      `places/${countryId}/${cardData.city}/${cardData.header}/reviews`
    );

    onSnapshot(colRef, (snapshot) => {
      let reviews = [];
      snapshot.docs.forEach((doc) => {
        reviews.push(doc.data());
      });
      setReviews(reviews);
      console.log(reviews);

      // setReviews(reviews);
      console.log("once updated");
    });
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
          <ReviewHeader />

          {reviews &&
            reviews.map((review) => {
              return (
                <ReviewCard user={review.userName} value={review.review} />
              );
            })}

          {/* <ReviewCard /> */}
          {signedUp && (
            <ReviewInput
              reviewData={reviewData}
              update={setAdded}
              val={added}
            />
          )}

          {/* <ReviewCardButton/> */}
        </div>
      </div>
    </>
  );
}

export default ProfilePlaceApp;

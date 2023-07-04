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

import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";

function ProfilePlaceApp() {
  const { signedUp } = useUser();

  const [reviews, setReviews] = useState();

  const storageData = JSON.parse(localStorage.getItem("storedCardData"));

  useEffect(() => {
    const revRef = collection(db, `/Places/${storageData.id}/Reviews`);
    const palceRef = doc(db, `/Places/${storageData.id}`);

    const q = query(revRef, orderBy("updated", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let rev = [];
      snapshot.docs.forEach((doc) => {
        rev.push(doc.data());
      });

      setDoc(palceRef, { numberOfReviews: rev.length }, { merge: true });

      setReviews(rev);
    });

    return () => {
      unsubscribe();
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

          <div>
            {reviews &&
              reviews.map((review) => {
                return <ReviewCard reviews={review} />;
              })}
          </div>

          {signedUp && <ReviewInput />}
        </div>
      </div>
    </>
  );
}

export default ProfilePlaceApp;

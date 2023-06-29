import { doc, onSnapshot, setDoc } from "firebase/firestore";
import React, { useContext, useRef, useState, useEffect } from "react";

import { db } from "../../../../firebase-config";
import { useUser } from "../../../../Context/UserContext";

import CityDataContext from "../../../../Context/CityDataContext";

export default function ReviewInput() {
  //stored place data from local storage
  const storageData=JSON.parse(localStorage.getItem("storedCardData"));
console.log(storageData.id)
  const style = {
    width: "100%",
    border: "1px solid var(--main_color)",
    borderRadius: "5px",
    resize: "none",
    padding: "10px",
  };

  const [reviewsData, setReviewsData] = useState([]);
  const reviewRef = useRef();

  const { theUser } = useUser();
  const { cardData } = useContext(CityDataContext);
  const citydata = useContext(CityDataContext);

  async function submitComment(e) {
    e.preventDefault();
    const usersPath = `Users/${theUser.id}/Places Reviews/${storageData.id}`;
    const userRef = doc(db, usersPath);

    const placePPath = `Places/${storageData.id}/Reviews/${theUser.id}`;
    const PlaceRef = doc(db, placePPath);

    if (reviewRef.current.value === "") return;

    try {
      let rev = reviewsData
        ? [
            ...reviewsData.review,
            { review: reviewRef.current.value, createdAt: new Date() },
          ]
        : [{ review: reviewRef.current.value, createdAt: new Date() }];

      await setDoc(PlaceRef, {
        reference: `Users/${theUser.id}`,
        review: rev,
        Rate: 0,
      })
        .then(() => {
          console.log("added to place ref");
        })
        .catch((e) => {
          console.log(e);
        });

      await setDoc(userRef, {
        reference: `Places/${storageData.id}`,
        describtion: rev,
        Rate: 0,
      })
        .then(() => {
          console.log("added to user ref");
        })
        .catch((e) => {
          console.log(e);
        });

      reviewRef.current.value = "";
    } catch {}
  }

  useEffect(() => {
    const placePPath = `Places/${storageData.id}/Reviews/${theUser.id}`;
    const PlaceRef = doc(db, placePPath);

    onSnapshot(PlaceRef, (snapshot) => {
      setReviewsData(snapshot.data());
    });
  }, []);

  return (
    <>
      <div className="reviewCard__container">
        <label style={{ color: "var(--main_color)" }}>
          Write your comment here :
        </label>
        <textarea style={style} rows={3} ref={reviewRef}></textarea>
        <div className="d-flex justify-content-end">
          <button className="btn singOut-btn" onClick={submitComment}>
            Add Comment
          </button>
        </div>
      </div>
    </>
  );
}

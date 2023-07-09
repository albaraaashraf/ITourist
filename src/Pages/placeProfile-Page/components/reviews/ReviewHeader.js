import "./ReviewHeader.css";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useState } from "react";
import { Rating } from "@mui/material";
const ReviewHeader = (porbs) => {
  const [rate, setRate] = useState();

  useEffect(() => {
    const placeRateRef = doc(db, `/Places/${porbs.id}`);

    const unsuscribe = onSnapshot(placeRateRef, (snapshot) => {
      if (snapshot.data() && snapshot.data().Rate) {
        setRate(snapshot.data().Rate);
      }
    });

    return () => {
      unsuscribe();
    };
  }, [porbs.id]);

  return (
    <>
      <div className="firstRowHeader">
        <p id="peopleReviews">People Reviews</p>
        <div className="secPart">
          <p id="reviewNum">{porbs.length ? porbs.length : "0"} review</p>
          {rate && (
            <Rating
              name="read-only"
              value={rate}
              precision={0.1}
              style={{ color: "#100D4C" }}
              readOnly
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewHeader;

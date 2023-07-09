import { useEffect, useState } from "react";
import "./PlaceCard.css";

import Rating from "@mui/material/Rating";
import { HiOutlineHeart } from "react-icons/hi";

import classes from "../../../cityProfile-Page/components/CityCover.module.css";

import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useUser } from "../../../../Context/UserContext";

const PlaceCard = () => {
  const [value, setValue] = useState(0);
  const { signedUp, theUser } = useUser();

  const storageUser = JSON.parse(localStorage.getItem("storedUser"));
  const storageData = JSON.parse(localStorage.getItem("storedCardData"));
  const aproxDistance = Math.round(storageData.distance * 100) / 100;

  const handleRatingChange = async (event, newValue) => {
    setValue(newValue);

    const usersPath = `Users/${storageUser.uid}/Places Reviews/${storageData.id}`;
    const userRef = doc(db, usersPath);

    const userRate = `Places/${storageData.id}/Reviews/${storageUser.uid}`;
    const userRateRef = doc(db, userRate);

    await setDoc(
      userRateRef,
      {
        Rate: newValue,
      },
      { merge: true }
    ).catch((e) => {
      console.log(e);
    });

    await setDoc(
      userRef,
      {
        Rate: newValue,
      },
      { merge: true }
    ).catch((e) => {
      console.log(e);
    });
  };

  function wishList() {
    const userRef = doc(
      db,
      `Users/${theUser.uid}/Places to visit/${storageData.id}`
    );

    setDoc(userRef, {
      reference: `Places/${storageData.id}`,
    })
      .then(() => {
        console.log("added to fave");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    const placeRate = `Places/${storageData.id}`;
    const placeRateRef = doc(db, placeRate);

    const unsubscribe = onSnapshot(placeRateRef, (snapshot) => {
      if (snapshot.exists) {
        if (snapshot.data().Rate) {
          setValue(snapshot.data().Rate);
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [storageData.id]);

  // this check is detrmine to show the user rate or the place rate
  //// dependening on the singedup state
  useEffect(() => {
    let unsubscribe;

    if (signedUp) {
      const userRate = `Places/${storageData.id}/Reviews/${storageUser.uid}`;
      const userRateRef = doc(db, userRate);

      unsubscribe = onSnapshot(userRateRef, (snapshot) => {
        if (snapshot.exists) {
          if (snapshot.data()) {
            if (snapshot.data().Rate) {
              setValue(snapshot.data().Rate);
            } else {
              setValue(0);
            }
          } else {
            setValue(0);
          }
        }
      });
    } else {
      const placeRate = `Places/${storageData.id}`;
      const placeRateRef = doc(db, placeRate);

      unsubscribe = onSnapshot(placeRateRef, (snapshot) => {
        if (snapshot.exists) {
          if (snapshot.data().Rate) {
            setValue(snapshot.data().Rate);
          } else {
            setValue(0);
          }
        }
      });
    }

    return () => {
      signedUp && unsubscribe();
    };
  }, [signedUp]);

  //asynchronous effect to the change of value raiting
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <div id="info__container">
        <div id="info__header">
          <p id="place__header">{storageData.header}</p>
          <p id="place__distance">{aproxDistance}m</p>
        </div>
        <div id="rating__container">
          {signedUp ? (
            <Rating
              name="simple-controlled"
              value={value}
              precision={1}
              style={{ color: "#100D4C" }}
              onChange={handleRatingChange}
            />
          ) : (
            <Rating
              name="read-only"
              value={value}
              precision={0.1}
              style={{ color: "#100D4C" }}
              readOnly
            />
          )}
          {signedUp && (
            <HiOutlineHeart className={classes.favourite} onClick={wishList} />
          )}
        </div>

        <div id="info__par">
          <p>{storageData.info}</p>
          {signedUp && (
            <a href="#revInput">
              <button className="review__button">Review this place</button>
            </a>
          )}
        </div>
      </div>
    </>
  );
};
export default PlaceCard;

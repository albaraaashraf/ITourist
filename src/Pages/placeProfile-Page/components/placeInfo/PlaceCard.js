import { useEffect, useState } from "react";
import "./PlaceCard.css";

import Rating from "@mui/material/Rating";
import { HiOutlineHeart } from "react-icons/hi";

import classes from "../../../cityProfile-Page/components/CityCover.module.css";

import {
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
  const { theUser } = useUser();

  const storageUser = JSON.parse(localStorage.getItem("storedUser"));
  const storageData = JSON.parse(localStorage.getItem("storedCardData"));
  const aproxDistance = Math.round(storageData.distance * 100) / 100;

  const handleRatingChange = async (event, newValue) => {
    setValue(newValue);

    const usersPath = `Users/${storageUser.id}/Places Reviews/${storageData.id}`;
    const userRef = doc(db, usersPath);

    const placePPath = `Places/${storageData.id}/Reviews/${storageUser.id}`;
    const PlaceRef = doc(db, placePPath);

    await setDoc(
      PlaceRef,
      {
        Rate: newValue,
        updated: serverTimestamp(),
      },
      { merge: true }
    )
      .then(() => {
        console.log("added rate to place ref");
      })
      .catch((e) => {
        console.log(e);
      });

    await setDoc(
      userRef,
      {
        Rate: newValue,
      },
      { merge: true }
    )
      .then(() => {
        console.log("added rate to user ref");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function wishList() {
    const userRef = doc(
      db,
      `Users/${storageData.id}/Places to visit/${storageData.id}`
    );

    setDoc(userRef, {
      reference: `Places/${storageData.id}`,
    }).catch((e) => {
      console.log(e);
    });
  }

  useEffect(() => {
    const placePPath = `Places/${storageData.id}/Reviews/${storageUser.id}`;
    const PlaceRef = doc(db, placePPath);

    console.log("placePPath in place card");
    console.log(placePPath);

    const x = onSnapshot(PlaceRef, (snapshot) => {
      if (snapshot.exists) {
        setValue(snapshot.data().Rate);

        console.log(snapshot.data());
      }
    });

    return () => {
      x();
    };
  }, []);

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
          <Rating
            name="simple-controlled"
            value={value}
            precision={1}
            style={{ color: "#072c3d" }}
            onChange={handleRatingChange}
          />
          <HiOutlineHeart className={classes.favourite} onClick={wishList} />
        </div>

        <div id="info__par">
          <p>{storageData.info}</p>
          <button className="review__button">Review this place</button>
        </div>
      </div>
    </>
  );
};
export default PlaceCard;

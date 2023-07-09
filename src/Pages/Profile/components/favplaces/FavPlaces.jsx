import React, { useEffect, useState } from "react";

import "./favPlaces.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useUser } from "../../../../Context/UserContext";

import FavPlaceCard from "./components/FavPlaceCard";

export default function FavPlaces() {
  const [fav, setFav] = useState();

  const { theUser } = useUser();

  function handleDelete(id) {
    let updatedlist = fav.filter((data) => {
      return data.reference !== id;
    });

    setFav(updatedlist);
  }

  function showFav() {
    let places = fav.map((data) => {
      return (
        <div className="col-md-6 col-xl-4 d-flex justify-content-center">
          <FavPlaceCard
            placeID={data.reference}
            id={data.reference}
            remove={() => {
              handleDelete(data.reference);
            }}
          />
        </div>
      );
    });
    return places;
  }

  useEffect(() => {
    const favRef = collection(db, `/Users/${theUser.uid}/Places to visit`);
    const unSubscribe = onSnapshot(favRef, (snapshots) => {
      let list = [];
      snapshots.docs.forEach((snapshot) => {
        list.push(snapshot.data());
      });

      setFav(list);
    });

    return () => {
      console.log("left left ");
      unSubscribe();
    };
  }, [theUser.uid]);

  return (
    <div className="container-xl ">
      <div className="row gy-3 mb-5">{fav && showFav()}</div>
    </div>
  );
}

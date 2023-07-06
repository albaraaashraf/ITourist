import React, { useEffect, useState } from "react";

import "./favPlaces.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useUser } from "../../../../Context/UserContext";

import FavPlaceCard from "./components/FavPlaceCard";

export default function FavPlaces() {
  const [fav, setFav] = useState();
  const [listner, setListner] = useState(true);
  const { theUser } = useUser();

  function showFav() {
    let places = fav.map((data) => {
      return (
        <div className="col-md-6 col-xl-4 d-flex justify-content-center ">
          <FavPlaceCard
            placeID={data.reference}
            id={data.reference}
            listen={listner}
            setListen={setListner}
          />
        </div>
      );
    });
    return places;
  }

  useEffect(() => {
    console.log("removed");
    console.log(listner);

    const favRef = collection(db, `/Users/${theUser.id}/Places to visit`);
    let list = [];
    const unSubscribe = onSnapshot(favRef, (snapshots) => {
      snapshots.docs.forEach((snapshot) => {
        list.push(snapshot.data());
      });

      setFav(list);
    });

    return () => {
      console.log("left left ");
      unSubscribe();
    };
  }, [theUser.id, listner]);

  return (
    <div className="container-xl ">
      <div className="row gy-3 mb-5">{fav && showFav()}</div>
    </div>
  );
}

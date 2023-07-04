import React, { useState } from "react";
import { useEffect } from "react";

import { ImLocation2 } from "react-icons/im";

export default function FavPlaceCard({ placeID }) {
  const [placeInfo, setPlaceInfo] = useState();

  useEffect(() => {
    async function getData() {
      if (placeID) {
        let id = placeID.split("/");
        const fetchPlaceInfo = await fetch(
          `https://api.tomtom.com/search/2/place.json?entityId=${id[1]}&key=6xSTnZiuQ9q3oaOLOIyVbzH8fjqKOA1H`
        );
        const placeInfo = await fetchPlaceInfo.json();

        console.log("placeInfo");
        console.log(placeInfo);

        let img = "hi";

        switch (placeInfo.results[0].poi.classifications[0].code) {
          case "RESTAURANT":
            img = "/assets/images/Category__images/Restaurant.png";
            break;
          case "BEACH":
            img = "/assets/images/Category__images/Beach.png";
            break;
          case "PARK_RECREATION_AREA":
            img = "/assets/images/Category__images/Garden.png";
            break;
          case "MARKET":
          case "SHOPPING_CENTER":
          case "SHOP":
            img = "/assets/images/Category__images/Market.png";
            break;
          case "IMPORTANT_TOURIST_ATTRACTION":
            img = "/assets/images/Category__images/Historic.png";
            break;
          case "MUSEUM":
            img = "/assets/images/Category__images/Museum.png";
            break;
          default:
            break;
        }

        let finalData = {
          header: placeInfo.results[0].poi.name,
          street: placeInfo.results[0].address.freeformAddress,
          city: placeInfo.results[0].address.localName,
          class: placeInfo.results[0].poi.classifications[0].code,
          categories: placeInfo.results[0].poi.categories,
          img: img,
          lon: placeInfo.results[0].position.lon,
          lat: placeInfo.results[0].position.lat,
          info:
            placeInfo.results[0].address.municipalitySubdivision +
            "  ,   " +
            placeInfo.results[0].address.municipality,
        };

        console.log("finalData");
        console.log(finalData);
        setPlaceInfo(finalData);
      }
    }
    getData();
  }, []);

  return (
    <>
      {placeInfo && (
        <div id="fav__container">
          <div id="card__leftCol">
            <img src={placeInfo.img} alt="Header"></img>
          </div>
          <div className="rightCol">
            <div className="rightCol__adress">
              <p id="cardHeader">{placeInfo.header}</p>
              <div id="card__par">
                <ImLocation2 />

                <p>{placeInfo.street}</p>
              </div>
            </div>

            <button
              style={{
                padding: "10px",
                backgroundColor: "#100D4C",
                color: "white",
                borderRadius: "10px",
                width: "5rem",
                cursor: "pointer",
                marginTop: "2rem",
              }}
              // onClick={() => {
              //   discoverClickHandler();
              // }}
            >
              Discover
            </button>
          </div>
        </div>
      )}
    </>
  );
}

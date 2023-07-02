import classes from "./CityCover.module.css";
import { useState, useEffect, useContext } from "react";
import CityContext from "../../../Context/CityContext";
import { HiOutlineHeart } from "react-icons/hi";
import { TbMap } from "react-icons/tb";
import { useUser } from "../../../Context/UserContext";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

const CityCover = (props) => {
  const [cityImg, setCityImg] = useState([]);

  const { cityName } = useContext(CityContext);
  const { countryId } = useContext(CityContext);
  const { theUser, signedUp } = useUser();

  const storedCityName = localStorage.getItem("searchedCityName");
  const storedCountryId = localStorage.getItem("searchedCountryId");

  const words = storedCityName && storedCityName.split(" ");
  let processedName = storedCityName;
  if (words && words.length > 1) {
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    processedName = capitalizedWords.join("_");
  }

  async function manegeFavourite() {
    const userRef = doc(
      db,
      `Users/${theUser.id}/Liked Cities/${cityName.toUpperCase()}`
    );

    const cityRef = doc(db, `City/${cityName.toUpperCase()}`);

    let city,
      likedNum,
      toursNum = null;

    const check = await getDoc(userRef);

    if (check.exists()) {
      await getDoc(cityRef).then(async (snapshot) => {
        city = snapshot.data();
        likedNum = city.liked - 1;
        toursNum = city.tours;
      });

      deleteDoc(userRef);
    } else {
      await setDoc(userRef, { reference: `City/${cityName.toUpperCase()}` });

      await getDoc(cityRef).then(async (snapshot) => {
        if (snapshot.exists()) {
          city = snapshot.data();
          likedNum = city.liked + 1;
          toursNum = city.tours;
        } else {
          likedNum = 1;
          toursNum = 0;
        }
      });
    }

    await setDoc(cityRef, {
      liked: likedNum,
      tours: toursNum,
    });
  }

  useEffect(() => {
    async function fetchCityImg() {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=thumbnail&pithumbsize=600&origin=*&titles=${processedName}`
        );

        const data = await response.json();
        console.log(data.query.pages[0].thumbnail.source);
        var y = data.query.pages[0].thumbnail.source;
      } catch (error) {
        console.error("An error occurred:", error);
      }
      setCityImg(y);
    }
    fetchCityImg();
  }, [processedName]);
  const imageId = `https://flagsapi.com/${storedCountryId}/shiny/64.png`;

  return (
    <>
      <div className={classes.coverContainer}>
        <img className={classes.coverImage} src={cityImg} alt=""></img>
        <div className={classes.imageText}>
          <div className={classes.cityName}>
            <h1>{storedCityName}</h1>
            <img src={imageId} alt="country ID"></img>
          </div>

          <div className={classes.favAndTour}>
            {signedUp && (
              <HiOutlineHeart
                className={classes.favourite}
                onClick={manegeFavourite}
              />
            )}
            <div className={classes.tour}>
              <TbMap />
              <p>254 Tours Taken</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CityCover;

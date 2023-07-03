import { AiFillDislike, AiFillLike, AiFillStar } from "react-icons/ai";
import "./ReviewCard.css";

import { getDoc, doc, onSnapshot } from "firebase/firestore";
import Accordion from "react-bootstrap/Accordion";
import { useEffect } from "react";
import { db } from "../../../../firebase-config";
import { useState } from "react";
const ReviewCard = ({ reviews }) => {
  const [user, setUser] = useState();

  // const days = {
  //   0: "Sun",
  //   1: "Mon",
  //   2: "Teus",
  //   3: "Wed",
  //   4: "Thurs",
  //   5: "Fri",
  //   6: "Sat",
  // };

  function showRate() {
    let rate = [];
    for (let i = 0; i < reviews.Rate; i++) {
      rate.push(<AiFillStar />);
    }

    return rate;
  }

  useEffect(() => {
    getDoc(doc(db, reviews.reference)).then((snapshot) => {
      setUser(snapshot.data());
    });
  }, []);

  return (
    <>
      {reviews.review && (
        <Accordion className="mx-5 my-3 accor">
          <Accordion.Item eventKey="0">
            <Accordion.Header data-bs-theme="dark" className="accor-header">
              {user && (
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="img-container">
                      <img src={user.ProfileImg} alt="profile-img" />
                    </div>
                    <div>{user.UserName}</div>
                  </div>

                  <div className="mx-2 p-2"> {showRate()}</div>
                </div>
              )}
            </Accordion.Header>
            <Accordion.Body>
              {reviews.review.map((theReview) => {
                return (
                  <div className="review-container">
                    <div className="date">
                      {theReview.createdAt.toDate().toString().split("GMT")[0]}{" "}
                    </div>
                    <div className="theReview">{theReview.review}</div>
                  </div>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </>
  );
};
export default ReviewCard;

/* <div className="reviewCard__container">
  <div className="reviewCard__firstrow ">
    <p id="reviewCard__username">{probs.user}</p>

    <div className="date">
      {probs.time && (
        <>
          <span>
            {days[probs.time.toDate().getDay().toString()] + " "}
          </span>
          <span>
            {probs.time.toDate().getFullYear().toString() + "-"}
          </span>
          <span>
            {(probs.time.toDate().getMonth() + 1).toString() + "-"}
          </span>
          <span>{probs.time.toDate().getDate().toString() + "  "}</span>
          <span>{probs.time.toDate().getHours().toString() + ":"}</span>
          <span>{probs.time.toDate().getMinutes().toString()}</span>
        </>
      )}
    </div>

    <div className="likeDislike__Container">
      <AiFillLike className="likeLogo"></AiFillLike>
      <AiFillDislike className="likeLogo"></AiFillDislike>
    </div>
  </div>

  <div className="reviewCard__userscore">
    <AiFillStar />
    <AiFillStar />
    <AiFillStar />
    <AiFillStar />
    <AiFillStar />
  </div>
  <div id="reviewCard__review">{probs.review}</div>
</div> */

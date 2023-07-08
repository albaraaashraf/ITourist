import { AiFillStar } from "react-icons/ai";
import "./ReviewCard.css";

import { getDoc, doc } from "firebase/firestore";
import Accordion from "react-bootstrap/Accordion";
import { useEffect } from "react";
import { db } from "../../../../firebase-config";
import { useState } from "react";
const ReviewCard = ({ data }) => {
  const [user, setUser] = useState();

  function showRate() {
    let rate = [];
    for (let i = 0; i < data.Rate; i++) {
      rate.push(<AiFillStar />);
    }

    return rate;
  }

  useEffect(() => {
    if (data.reference) {
      getDoc(doc(db, data.reference)).then((snapshot) => {
        setUser(snapshot.data());
      });
    }
  }, [data.reference]);

  return (
    <>
      {data.review && (
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
              {
                <div className="review-container">
                  <div className="date">
                    {data.review.createdAt.toDate().toString().split("GMT")[0]}{" "}
                  </div>
                  <div className="theReview">{data.review.review}</div>
                </div>
              }
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </>
  );
};
export default ReviewCard;

// {data.review && (
//   <div className="reviewCard__container">
//     <div className="reviewCard__firstrow ">
//       <div className="d-flex justify-content-center align-items-center">
//         <div className="img-container">
//           <img src={user && user.ProfileImg} alt="profile-img" />
//         </div>
//         <div>{user && user.UserName}</div>
//       </div>

//       <div className="date">
//         {" "}
//         {data.review.createdAt.toDate().toString().split("GMT")[0]}
//       </div>

//       <div className="likeDislike__Container"></div>
//       <div className="reviewCard__userscore">{showRate()}</div>
//     </div>

//     <div id="reviewCard__review">{data.review.review}</div>
//   </div>
// )}

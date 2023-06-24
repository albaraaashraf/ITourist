import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { db } from "../../../../firebase-config";
import { useRef } from "react";
import { useUser } from "../../../../Context/UserContext";

export default function ReviewInput(probs) {
  const style = {
    width: "100%",
    border: "1px solid var(--main_color)",
    borderRadius: "5px",
    resize: "none",
    padding: "10px",
  };

  const reviewRef = useRef();

  const { theUser } = useUser();

  async function submitComment() {
    const colRef = collection(
      db,
      `places/${probs.reviewData.country}/${probs.reviewData.city}/${probs.reviewData.placeName}/reviews`
    );

    if (reviewRef.current.value === "") return;

    try {
      await addDoc(colRef, {
        userName: theUser.UserName,
        review: reviewRef.current.value,
        time: serverTimestamp(),
      })
        .then(() => {
          console.log("done");
          reviewRef.current.value = "";
          probs.update();
        })
        .catch((e) => {
          console.log(e);
        });
    } catch {}
  }

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

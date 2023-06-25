import { AiFillDislike, AiFillLike, AiFillStar } from "react-icons/ai";
import "./ReviewCard.css";
const ReviewCard = (probs) => {
  const days = {
    0: "Sun",
    1: "Mon",
    2: "Teus",
    3: "Wed",
    4: "Thurs",
    5: "Fri",
    6: "Sat",
  };

  return (
    <>
      <div className="reviewCard__container">
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
      </div>
    </>
  );
};
export default ReviewCard;

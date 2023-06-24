import { AiFillDislike, AiFillLike, AiFillStar } from "react-icons/ai";
import "./ReviewCard.css";
const ReviewCard = (probs) => {
  return (
    <>
      <div className="reviewCard__container">
        <div className="reviewCard__firstrow">
          <p id="reviewCard__username">{probs.user}</p>
          <div className="likeDislike__Container">
            <AiFillLike className="likeLogo"></AiFillLike>
            <AiFillDislike className="likeLogo"></AiFillDislike>
          </div>
        </div>

        <div className="reviewCard__userscore">
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
        </div>
        <div id="reviewCard__review">{probs.value}</div>
      </div>
    </>
  );
};
export default ReviewCard;

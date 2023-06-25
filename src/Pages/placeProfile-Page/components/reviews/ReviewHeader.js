import { AiFillStar } from "react-icons/ai";
import "./ReviewHeader.css";
const ReviewHeader = (porbs) => {
  return (
    <>
      <div className="firstRowHeader">
        <p id="peopleReviews">People Reviews</p>
        <div className="secPart">
          <p id="reviewNum">{porbs.length ? porbs.length : "0"} review</p>
          <AiFillStar className="reviewSec__star"></AiFillStar>
          <AiFillStar className="reviewSec__star"></AiFillStar>
          <AiFillStar className="reviewSec__star"></AiFillStar>
          <AiFillStar className="reviewSec__star"></AiFillStar>
          <AiFillStar className="reviewSec__star"></AiFillStar>
        </div>
      </div>
    </>
  );
};

export default ReviewHeader;

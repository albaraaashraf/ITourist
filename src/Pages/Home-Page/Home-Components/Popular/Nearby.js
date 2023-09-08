import "./Nearby.css";
import { AiFillStar } from "react-icons/ai";

const Nearby = (props) => {
  return (
    <>
      <div className="nearby__card">
        <div className="nearbyCard__top">
          <img className="nearbyImage" src={props.image} alt={props.name}></img>
          <div className="nearbyData">
            <p> {props.name}</p>
            <p>3KM</p>
            
          </div>
          <div className="nearbyFA">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>

          </div>

        </div>
        
      </div>
    </>
  );
};
export default Nearby;
